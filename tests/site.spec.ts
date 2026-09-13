import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes=['/','/how-we-help','/about-us','/speaking','/book','/get-started','/upgrade/'];
for(const width of [1440,768,390,320]){
  test(`All pages render without overflow or missing assets at ${width}px`,async({page})=>{
    await page.setViewportSize({width,height:900});
    const errors:string[]=[];
    page.on('pageerror',error=>errors.push(error.message));
    for(const route of routes){
      const response=await page.goto(route,{waitUntil:'networkidle'});
      expect(response?.status()).toBe(200);
      await expect(page.locator('main')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(await page.title()).not.toContain('Business Name');
      const measurements=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,width:innerWidth}));
      expect(measurements.scroll,route).toBeLessThanOrEqual(measurements.width+1);
      const badImages=await page.locator('img').evaluateAll(images=>images.filter(image=>image.complete&&image.naturalWidth===0).map(image=>image.src));
      expect(badImages,route).toEqual([]);
      await expect(page.getByRole('link',{name:'Made by Novus'})).toHaveAttribute('href','https://novusnyc.org');
      expect(await page.locator('main').innerText(),route).not.toMatch(/—/);
      // Materialize scroll reveals before full-page visual review.
      await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=650){window.scrollTo(0,y);await new Promise(resolve=>setTimeout(resolve,45));}window.scrollTo(0,0);});
      await page.waitForTimeout(700);
      if(width!==320) await page.screenshot({path:`artifacts/qa/${route.replaceAll('/','')||'home'}-${width}.png`,fullPage:true});
    }
    expect(errors).toEqual([]);
  });
}

test('Public routes pass WCAG accessibility scan',async({page})=>{
  for(const route of routes){
    await page.goto(route);
    await page.emulateMedia({reducedMotion:'reduce'});
    const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(audit.violations.map(item=>({id:item.id,nodes:item.nodes.map(node=>({target:node.target,summary:node.failureSummary}))})),route).toEqual([]);
  }
});

test('Mobile navigation opens, traps focus, closes on Escape, and navigates',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto('/');
  await page.getByRole('button',{name:'Open menu'}).click();
  await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeVisible();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button',{name:'Close menu'})).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Schedule a consult'})).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button',{name:'Open menu'})).toBeFocused();
  await page.getByRole('button',{name:'Open menu'}).click();
  await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Speaking',exact:true}).click();
  await expect(page).toHaveURL(/\/speaking$/);
  await expect(page.getByRole('button',{name:'Open menu'})).toBeVisible();
});

test('Book companion stays unlisted and noindex; local PDFs and icons resolve',async({page,request})=>{
  await page.goto('/upgrade/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content','noindex, nofollow');
  await expect(page.locator('header a[href*="upgrade"],footer a[href*="upgrade"]')).toHaveCount(0);
  const sitemap=await request.get('/sitemap.xml');
  expect(await sitemap.text()).not.toContain('/upgrade');
  for(const path of ['/downloads/phenomcomm-capability-statement.pdf','/downloads/upgrade-framework-workbook.pdf']){
    const result=await request.get(path);expect(result.status()).toBe(200);expect((await result.body()).subarray(0,5).toString()).toBe('%PDF-');
  }
  for(const path of ['/icon.png','/apple-icon.png','/icon-192.png','/icon-512.png','/opengraph-image.png'])expect((await request.get(path)).status(),path).toBe(200);
});

test('Workbook form validates, handles failures, and unlocks on confirmed success',async({page})=>{
  await page.goto('/upgrade/');
  await page.getByRole('button',{name:'Get the free workbook'}).click();
  await expect(page.getByText('Please enter your name (at least 2 characters).')).toBeVisible();
  await expect(page.getByLabel('Your name')).toBeFocused();
  await page.getByLabel('Your name').fill('Local test');
  await page.getByLabel('Email address').fill('not-an-email');
  await page.getByRole('button',{name:'Get the free workbook'}).click();
  await expect(page.getByLabel('Email address')).toBeFocused();
  await page.getByLabel('Email address').fill('test@example.com');
  await page.route('**/api/workbook',route=>route.fulfill({status:502,contentType:'application/json',body:JSON.stringify({error:'The email service is temporarily unavailable.'})}));
  await page.getByRole('button',{name:'Get the free workbook'}).click();
  await expect(page.locator('form').getByRole('alert')).toContainText('temporarily unavailable');
  await expect(page.getByRole('link',{name:'Download your workbook'})).toHaveCount(0);
  await page.unroute('**/api/workbook');
  await page.route('**/api/workbook',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({success:true})}));
  await page.getByRole('button',{name:'Get the free workbook'}).click();
  await expect(page.getByRole('link',{name:'Download your workbook'})).toHaveAttribute('href','/downloads/upgrade-framework-workbook.pdf');
});

test('Workbook API rejects malformed and cross-origin requests before provider contact',async({request})=>{
  expect((await request.post('/api/workbook',{data:{name:'Test',email:'invalid'},headers:{Origin:'http://localhost:3000'}})).status()).toBe(400);
  expect((await request.post('/api/workbook',{data:{name:'Test',email:'test@example.com'},headers:{Origin:'https://unrelated.example'}})).status()).toBe(403);
  expect((await request.post('/api/workbook',{data:{name:'Test',email:'test@example.com',website:'spam'},headers:{Origin:'http://localhost:3000'}})).status()).toBe(400);
});

test('WebGL renders, pauses, and respects reduced motion',async({page})=>{
  await page.goto('/');
  await page.locator('.sculpture').scrollIntoViewIfNeeded();
  await expect(page.locator('.sculpture canvas')).toHaveClass('is-ready');
  const pause=page.getByRole('button',{name:'Pause sculpture animation'});
  await pause.click();
  await expect(page.getByRole('button',{name:'Play sculpture animation'})).toHaveAttribute('aria-pressed','true');
  const first=await page.locator('.sculpture canvas').screenshot();
  await page.waitForTimeout(200);
  const second=await page.locator('.sculpture canvas').screenshot();
  expect(first.equals(second)).toBe(true);
  await page.emulateMedia({reducedMotion:'reduce'});
  await expect(page.locator('.motion-control')).toBeHidden();
  expect(await page.locator('.reveal-pending').count()).toBe(0);
});
