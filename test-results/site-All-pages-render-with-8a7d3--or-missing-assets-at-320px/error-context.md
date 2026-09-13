# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> All pages render without overflow or missing assets at 320px
- Location: tests/site.spec.ts:6:7

# Error details

```
Error: /upgrade/

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 321
Received:    343
```

# Page snapshot

```yaml
- generic [active] [ref=f6e1]:
  - link "Skip to content" [ref=f6e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=f6e3]:
    - generic [ref=f6e4]:
      - link "PhenomComm home" [ref=f6e5] [cursor=pointer]:
        - /url: /
        - img "PhenomComm. Talent development that works." [ref=f6e6]
      - link "Let’s talk" [ref=f6e7] [cursor=pointer]:
        - /url: https://calendly.com/phenomcomm-llc/discovery-meeting
      - button "Open menu" [ref=f6e10] [cursor=pointer]:
        - generic [ref=f6e13]: Menu
  - main [ref=f6e14]:
    - generic [ref=f6e15]:
      - generic [ref=f6e16]:
        - generic [ref=f6e17]:
          - paragraph [ref=f6e18]: A little extra for your next chapter
          - heading [level=1] [ref=f6e20]:
            - text: Your phone upgradesautomatically.
            - emphasis [ref=f6e21]: You don’t.
          - paragraph [ref=f6e22]: Welcome, reader. This is your space to put The Upgrade Framework™ into practice. The companion workbook helps you make the next step intentional.
          - link "Get your free workbook" [ref=f6e23] [cursor=pointer]:
            - /url: "#unlock"
          - paragraph [ref=f6e26]: Pairs with the paperback & Kindle editions
        - generic [ref=f6e27]:
          - paragraph [ref=f6e28]: The Upgrade Framework™
          - heading [level=2] [ref=f6e30]:
            - text: Your spaceto reflect.
            - emphasis [ref=f6e31]: Your plan to grow.
          - paragraph [ref=f6e32]: Companion workbookBy Paulette Cunningham, M.Ed.
          - generic [ref=f6e33]:
            - generic [ref=f6e34]: 1. Acknowledge
            - generic [ref=f6e35]: 2. Decide
            - generic [ref=f6e36]: 3. Match
      - generic [ref=f6e38]:
        - generic [ref=f6e40]:
          - paragraph [ref=f6e41]: Inside your workbook
          - heading [level=2] [ref=f6e43]:
            - text: The ideas are the beginning.
            - emphasis [ref=f6e44]: This is where you begin.
        - generic [ref=f6e45]:
          - article [ref=f6e46]:
            - generic [ref=f6e47]: "1"
            - heading "Acknowledge" [level=3] [ref=f6e48]
            - paragraph [ref=f6e49]: Map your milestones
            - paragraph [ref=f6e50]: Chart your Version Milestones and Growth Outcomes. Find the proof that you’ve upgraded before, and can do it again.
          - article [ref=f6e51]:
            - generic [ref=f6e52]: "2"
            - heading "Decide" [level=3] [ref=f6e53]
            - paragraph [ref=f6e54]: Choose or lose
            - paragraph [ref=f6e55]: Name your Feature Selections, what serves you, and your Legacy Bugs, what doesn’t. Then choose deliberately.
          - article [ref=f6e56]:
            - generic [ref=f6e57]: "3"
            - heading "Match" [level=3] [ref=f6e58]
            - paragraph [ref=f6e59]: Design your ecosystem
            - paragraph [ref=f6e60]: Identify your Oak Tree Growers and Acorn Crushers. Make room for the people, places, and habits that support your growth.
      - generic [ref=f6e61]:
        - generic [ref=f6e62]:
          - paragraph [ref=f6e63]: From reflection to action
          - heading [level=2] [ref=f6e65]:
            - text: Make the space.
            - emphasis [ref=f6e66]: Take the next step.
          - paragraph [ref=f6e67]: Enter your name and email to request the companion workbook and unlock your download.
          - paragraph [ref=f6e68]:
            - text: Use it alongside
            - strong [ref=f6e69]: Don’t Let Your Phone Upgrade Before You Do
            - text: ", chapter by chapter, or work through it on its own if you already know the framework."
          - paragraph [ref=f6e70]: Free PDF · Companion workbook · Version 1.0
        - form "Get the companion workbook" [ref=f6e72]:
          - generic [ref=f6e73]:
            - generic [ref=f6e74]: Your name *
            - textbox "Your name" [ref=f6e75]
          - generic [ref=f6e76]:
            - generic [ref=f6e77]: Email address *
            - textbox "Email address" [ref=f6e78]:
              - /placeholder: you@example.com
          - paragraph [ref=f6e79]: By requesting the workbook, you’ll receive the PDF and occasional updates from The Upgrade Framework. No spam. Unsubscribe anytime. Required fields are marked *.
          - button "Get the free workbook" [ref=f6e80] [cursor=pointer]
          - paragraph [ref=f6e83]: Your details go directly to PhenomComm’s email list through MailerLite. They are not stored on this website.
      - generic [ref=f6e85]:
        - generic [ref=f6e86]:
          - paragraph [ref=f6e87]: Good ideas grow when they’re shared
          - heading [level=2] [ref=f6e89]:
            - text: Bring the upgrade
            - emphasis [ref=f6e90]: to your team.
        - generic [ref=f6e91]:
          - paragraph [ref=f6e92]: Explore keynotes and workshops that make intentional growth a shared experience.
          - link "Explore speaking & workshops" [ref=f6e93] [cursor=pointer]:
            - /url: /speaking
          - link "Looking for the book?" [ref=f6e96] [cursor=pointer]:
            - /url: https://www.amazon.com/dp/B0H7M51529?spcref=PRINT_LISTING
  - contentinfo [ref=f6e99]:
    - generic [ref=f6e100]:
      - generic [ref=f6e101]:
        - generic [ref=f6e102]:
          - link "PhenomComm home" [ref=f6e103] [cursor=pointer]:
            - /url: /
            - img "PhenomComm. Talent development that works." [ref=f6e104]
          - paragraph [ref=f6e105]: Intentional growth.Meaningful, lasting change.
          - generic [ref=f6e106]: Based in New York. Working nationwide.
        - generic [ref=f6e107]:
          - paragraph [ref=f6e108]: Explore
          - link "How we help" [ref=f6e109] [cursor=pointer]:
            - /url: /how-we-help
          - link "Our story" [ref=f6e110] [cursor=pointer]:
            - /url: /about-us
          - link "Speaking" [ref=f6e111] [cursor=pointer]:
            - /url: /speaking
          - link "The book" [ref=f6e112] [cursor=pointer]:
            - /url: /book
          - link "Get started" [ref=f6e113] [cursor=pointer]:
            - /url: /get-started
        - generic [ref=f6e114]:
          - paragraph [ref=f6e115]: Let’s connect
          - link "consult@phenomcomm.com" [ref=f6e116] [cursor=pointer]:
            - /url: mailto:consult@phenomcomm.com
          - link "(803) 875-0525" [ref=f6e117] [cursor=pointer]:
            - /url: tel:+18038750525
          - generic [ref=f6e118]:
            - link "LinkedIn" [ref=f6e119] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/paulette-cunningham
            - link "Instagram" [ref=f6e122] [cursor=pointer]:
              - /url: https://www.instagram.com/phenomcomm
            - link "Facebook" [ref=f6e125] [cursor=pointer]:
              - /url: https://www.facebook.com/phenomcomm
        - generic [ref=f6e128]:
          - paragraph [ref=f6e129]: MWBE certifiedNYC & Port Authority of NY & NJ
          - link "Capability statement" [ref=f6e130] [cursor=pointer]:
            - /url: /downloads/phenomcomm-capability-statement.pdf
      - generic [ref=f6e133]:
        - paragraph [ref=f6e134]: © 2026 Phenomenal Communications, LLC
        - link "Made by Novus" [ref=f6e135] [cursor=pointer]:
          - /url: https://novusnyc.org
  - alert [ref=f6e136]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import AxeBuilder from '@axe-core/playwright';
  3   | 
  4   | const routes=['/','/how-we-help','/about-us','/speaking','/book','/get-started','/upgrade/'];
  5   | for(const width of [1440,768,390,320]){
  6   |   test(`All pages render without overflow or missing assets at ${width}px`,async({page})=>{
  7   |     await page.setViewportSize({width,height:900});
  8   |     const errors:string[]=[];
  9   |     page.on('pageerror',error=>errors.push(error.message));
  10  |     for(const route of routes){
  11  |       const response=await page.goto(route,{waitUntil:'networkidle'});
  12  |       expect(response?.status()).toBe(200);
  13  |       await expect(page.locator('main')).toHaveCount(1);
  14  |       await expect(page.locator('h1')).toHaveCount(1);
  15  |       expect(await page.title()).not.toContain('Business Name');
  16  |       const measurements=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,width:innerWidth}));
> 17  |       expect(measurements.scroll,route).toBeLessThanOrEqual(measurements.width+1);
      |                                         ^ Error: /upgrade/
  18  |       const badImages=await page.locator('img').evaluateAll(images=>images.filter(image=>image.complete&&image.naturalWidth===0).map(image=>image.src));
  19  |       expect(badImages,route).toEqual([]);
  20  |       await expect(page.getByRole('link',{name:'Made by Novus'})).toHaveAttribute('href','https://novusnyc.org');
  21  |       expect(await page.locator('main').innerText(),route).not.toMatch(/—/);
  22  |       // Materialize scroll reveals before full-page visual review.
  23  |       await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=650){window.scrollTo(0,y);await new Promise(resolve=>setTimeout(resolve,45));}window.scrollTo(0,0);});
  24  |       await page.waitForTimeout(700);
  25  |       if(width!==320) await page.screenshot({path:`artifacts/qa/${route.replaceAll('/','')||'home'}-${width}.png`,fullPage:true});
  26  |     }
  27  |     expect(errors).toEqual([]);
  28  |   });
  29  | }
  30  | 
  31  | test('Public routes pass WCAG accessibility scan',async({page})=>{
  32  |   for(const route of routes){
  33  |     await page.goto(route);
  34  |     await page.emulateMedia({reducedMotion:'reduce'});
  35  |     const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  36  |     expect(audit.violations.map(item=>({id:item.id,nodes:item.nodes.map(node=>({target:node.target,summary:node.failureSummary}))})),route).toEqual([]);
  37  |   }
  38  | });
  39  | 
  40  | test('Mobile navigation opens, traps focus, closes on Escape, and navigates',async({page})=>{
  41  |   await page.setViewportSize({width:390,height:844});
  42  |   await page.goto('/');
  43  |   await page.getByRole('button',{name:'Open menu'}).click();
  44  |   await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeVisible();
  45  |   await page.keyboard.press('Shift+Tab');
  46  |   await expect(page.getByRole('button',{name:'Close menu'})).toBeFocused();
  47  |   await page.keyboard.press('Shift+Tab');
  48  |   await expect(page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Schedule a consult'})).toBeFocused();
  49  |   await page.keyboard.press('Escape');
  50  |   await expect(page.getByRole('button',{name:'Open menu'})).toBeFocused();
  51  |   await page.getByRole('button',{name:'Open menu'}).click();
  52  |   await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Speaking',exact:true}).click();
  53  |   await expect(page).toHaveURL(/\/speaking$/);
  54  |   await expect(page.getByRole('button',{name:'Open menu'})).toBeVisible();
  55  | });
  56  | 
  57  | test('Book companion stays unlisted and noindex; local PDFs and icons resolve',async({page,request})=>{
  58  |   await page.goto('/upgrade/');
  59  |   await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content','noindex, nofollow');
  60  |   await expect(page.locator('header a[href*="upgrade"],footer a[href*="upgrade"]')).toHaveCount(0);
  61  |   const sitemap=await request.get('/sitemap.xml');
  62  |   expect(await sitemap.text()).not.toContain('/upgrade');
  63  |   for(const path of ['/downloads/phenomcomm-capability-statement.pdf','/downloads/upgrade-framework-workbook.pdf']){
  64  |     const result=await request.get(path);expect(result.status()).toBe(200);expect((await result.body()).subarray(0,5).toString()).toBe('%PDF-');
  65  |   }
  66  |   for(const path of ['/icon.png','/apple-icon.png','/icon-192.png','/icon-512.png','/opengraph-image.png'])expect((await request.get(path)).status(),path).toBe(200);
  67  | });
  68  | 
  69  | test('Workbook form validates, handles failures, and unlocks on confirmed success',async({page})=>{
  70  |   await page.goto('/upgrade/');
  71  |   await page.getByRole('button',{name:'Get the free workbook'}).click();
  72  |   await expect(page.getByText('Please enter your name (at least 2 characters).')).toBeVisible();
  73  |   await expect(page.getByLabel('Your name')).toBeFocused();
  74  |   await page.getByLabel('Your name').fill('Local test');
  75  |   await page.getByLabel('Email address').fill('not-an-email');
  76  |   await page.getByRole('button',{name:'Get the free workbook'}).click();
  77  |   await expect(page.getByLabel('Email address')).toBeFocused();
  78  |   await page.getByLabel('Email address').fill('test@example.com');
  79  |   await page.route('**/api/workbook',route=>route.fulfill({status:502,contentType:'application/json',body:JSON.stringify({error:'The email service is temporarily unavailable.'})}));
  80  |   await page.getByRole('button',{name:'Get the free workbook'}).click();
  81  |   await expect(page.getByRole('alert')).toContainText('temporarily unavailable');
  82  |   await expect(page.getByRole('link',{name:'Download your workbook'})).toHaveCount(0);
  83  |   await page.unroute('**/api/workbook');
  84  |   await page.route('**/api/workbook',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({success:true})}));
  85  |   await page.getByRole('button',{name:'Get the free workbook'}).click();
  86  |   await expect(page.getByRole('link',{name:'Download your workbook'})).toHaveAttribute('href','/downloads/upgrade-framework-workbook.pdf');
  87  | });
  88  | 
  89  | test('Workbook API rejects malformed and cross-origin requests before provider contact',async({request})=>{
  90  |   expect((await request.post('/api/workbook',{data:{name:'Test',email:'invalid'},headers:{Origin:'http://localhost:3000'}})).status()).toBe(400);
  91  |   expect((await request.post('/api/workbook',{data:{name:'Test',email:'test@example.com'},headers:{Origin:'https://unrelated.example'}})).status()).toBe(403);
  92  |   expect((await request.post('/api/workbook',{data:{name:'Test',email:'test@example.com',website:'spam'},headers:{Origin:'http://localhost:3000'}})).status()).toBe(400);
  93  | });
  94  | 
  95  | test('WebGL renders, pauses, and respects reduced motion',async({page})=>{
  96  |   await page.goto('/');
  97  |   await page.locator('.sculpture').scrollIntoViewIfNeeded();
  98  |   await expect(page.locator('.sculpture canvas')).toHaveClass('is-ready');
  99  |   const pause=page.getByRole('button',{name:'Pause sculpture animation'});
  100 |   await pause.click();
  101 |   await expect(page.getByRole('button',{name:'Play sculpture animation'})).toHaveAttribute('aria-pressed','true');
  102 |   const first=await page.locator('.sculpture canvas').screenshot();
  103 |   await page.waitForTimeout(200);
  104 |   const second=await page.locator('.sculpture canvas').screenshot();
  105 |   expect(first.equals(second)).toBe(true);
  106 |   await page.emulateMedia({reducedMotion:'reduce'});
  107 |   await expect(page.locator('.motion-control')).toBeHidden();
  108 |   expect(await page.locator('.reveal-pending').count()).toBe(0);
  109 | });
  110 | 
```