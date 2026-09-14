import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
process.chdir(root);
await fs.mkdir('public/images',{recursive:true});
await fs.mkdir('public/downloads',{recursive:true});
const sources={
  'paulette-cunningham':'assets/supplied/paulette-cunningham-preferred.png',
  workshop:'assets/source-media/IMG_5415-scaled.jpg',
  speaking:'assets/source-media/CAO-me-1.jpg',
  'team-workshop':'assets/source-media/DSC08838-scaled.jpg',
  'airport-team':'assets/source-media/1779035701085.jpg',
  'paulette-on-stage':'assets/source-media/DSC08848-scaled.jpg',
  'book-cover':'assets/source-media/Dont-Let-Your-Phone.-book-cover.jpg',
  mwbe:'assets/source-media/MWBE-CERTIFIED.png',
  'nyc-mwbe':'assets/source-media/nyc-mwbe.webp',
};
const manifest={};
for(const [name,source] of Object.entries(sources)){
  const output=`public/images/${name}.webp`;
  await sharp(source).rotate().resize({width:1600,height:1600,fit:'inside',withoutEnlargement:true}).webp({quality:85}).toFile(output);
  const meta=await sharp(output).metadata();
  manifest[name]={src:`/images/${name}.webp`,width:meta.width,height:meta.height,source,bytes:(await fs.stat(output)).size};
}
// The supplied logo is a JPEG on white: derive alpha from lightness so it sits on any background.
{
  const {data,info}=await sharp('assets/supplied/phenomcomm-logo.jpeg').trim({threshold:30}).removeAlpha().raw().toBuffer({resolveWithObject:true});
  const rgba=Buffer.alloc(info.width*info.height*4);
  for(let i=0,j=0;i<data.length;i+=3,j+=4){
    const light=Math.min(data[i],data[i+1],data[i+2]);
    const alpha=Math.max(0,Math.min(255,Math.round((250-light)*255/190)));
    const keep=alpha?255/alpha:0;
    for(let c=0;c<3;c++) rgba[j+c]=alpha?Math.max(0,Math.min(255,Math.round(255-(255-data[i+c])*keep))):0;
    rgba[j+3]=alpha;
  }
  await sharp(rgba,{raw:{width:info.width,height:info.height,channels:4}}).webp({quality:95,alphaQuality:100}).toFile('public/images/phenomcomm-logo.webp');
}
for(const [size,output] of [[32,'src/app/icon.png'],[180,'src/app/apple-icon.png'],[192,'public/icon-192.png'],[512,'public/icon-512.png']]){
  const mark=await sharp('assets/source-media/cropped-2025-logo-white-on-clear-1-192x192.png').resize(Math.round(size*.78)).toBuffer();
  await sharp({create:{width:size,height:size,channels:4,background:'#1d2942'}}).composite([{input:mark,gravity:'centre'}]).png().toFile(output);
}
await fs.copyFile('assets/source-media/PhenomComm-Capability-Statement.pdf','public/downloads/phenomcomm-capability-statement.pdf');
await fs.copyFile('assets/source-media/Upgrade-Framework-Companion-Workbook-2026_7-6.pdf','public/downloads/upgrade-framework-workbook.pdf');
await fs.writeFile('content/generated/optimized-media.json',JSON.stringify(manifest,null,2)+'\n');
console.log(`Optimized ${Object.keys(manifest).length} photos, logo, icons, and both PDFs.`);
