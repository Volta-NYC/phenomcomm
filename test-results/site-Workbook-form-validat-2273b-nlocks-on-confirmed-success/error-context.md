# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> Workbook form validates, handles failures, and unlocks on confirmed success
- Location: tests/site.spec.ts:69:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('alert')
Expected substring: "temporarily unavailable"
Error: strict mode violation: getByRole('alert') resolved to 2 elements:
    1) <p role="alert" class="form-message">…</p> aka getByText('The email service is')
    2) <div role="alert" aria-live="assertive" id="__next-route-announcer__"></div> aka locator('[id="__next-route-announcer__"]')

Call log:
  - Expect "toContainText" getByRole('alert') with timeout 5000ms
  - waiting for getByRole('alert')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "PhenomComm home" [ref=e5] [cursor=pointer]:
        - /url: /
        - img "PhenomComm. Talent development that works." [ref=e6]
      - navigation "Main navigation" [ref=e7]:
        - link "How we help" [ref=e8] [cursor=pointer]:
          - /url: /how-we-help
        - link "Our story" [ref=e9] [cursor=pointer]:
          - /url: /about-us
        - link "Speaking" [ref=e10] [cursor=pointer]:
          - /url: /speaking
        - link "The book" [ref=e11] [cursor=pointer]:
          - /url: /book
      - link "Let’s talk" [ref=e12] [cursor=pointer]:
        - /url: https://calendly.com/phenomcomm-llc/discovery-meeting
  - main [ref=e15]:
    - generic [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - paragraph [ref=e19]: A little extra for your next chapter
          - heading [level=1] [ref=e21]:
            - text: Your phone upgradesautomatically.
            - emphasis [ref=e22]: You don’t.
          - paragraph [ref=e23]: Welcome, reader. This is your space to put The Upgrade Framework™ into practice. The companion workbook helps you make the next step intentional.
          - link "Get your free workbook" [ref=e24] [cursor=pointer]:
            - /url: "#unlock"
          - paragraph [ref=e27]: Pairs with the paperback & Kindle editions
        - generic [ref=e28]:
          - paragraph [ref=e29]: The Upgrade Framework™
          - heading [level=2] [ref=e31]:
            - text: Your spaceto reflect.
            - emphasis [ref=e32]: Your plan to grow.
          - paragraph [ref=e33]: Companion workbookBy Paulette Cunningham, M.Ed.
          - generic [ref=e34]:
            - generic [ref=e35]: 1. Acknowledge
            - generic [ref=e36]: 2. Decide
            - generic [ref=e37]: 3. Match
      - generic [ref=e39]:
        - generic [ref=e41]:
          - paragraph [ref=e42]: Inside your workbook
          - heading [level=2] [ref=e44]:
            - text: The ideas are the beginning.
            - emphasis [ref=e45]: This is where you begin.
        - generic [ref=e46]:
          - article [ref=e47]:
            - generic [ref=e48]: "1"
            - heading "Acknowledge" [level=3] [ref=e49]
            - paragraph [ref=e50]: Map your milestones
            - paragraph [ref=e51]: Chart your Version Milestones and Growth Outcomes. Find the proof that you’ve upgraded before, and can do it again.
          - article [ref=e52]:
            - generic [ref=e53]: "2"
            - heading "Decide" [level=3] [ref=e54]
            - paragraph [ref=e55]: Choose or lose
            - paragraph [ref=e56]: Name your Feature Selections, what serves you, and your Legacy Bugs, what doesn’t. Then choose deliberately.
          - article [ref=e57]:
            - generic [ref=e58]: "3"
            - heading "Match" [level=3] [ref=e59]
            - paragraph [ref=e60]: Design your ecosystem
            - paragraph [ref=e61]: Identify your Oak Tree Growers and Acorn Crushers. Make room for the people, places, and habits that support your growth.
      - generic [ref=e62]:
        - generic [ref=e63]:
          - paragraph [ref=e64]: From reflection to action
          - heading [level=2] [ref=e66]:
            - text: Make the space.
            - emphasis [ref=e67]: Take the next step.
          - paragraph [ref=e68]: Enter your name and email to request the companion workbook and unlock your download.
          - paragraph [ref=e69]:
            - text: Use it alongside
            - strong [ref=e70]: Don’t Let Your Phone Upgrade Before You Do
            - text: ", chapter by chapter, or work through it on its own if you already know the framework."
          - paragraph [ref=e71]: Free PDF · Companion workbook · Version 1.0
        - form "Get the companion workbook" [ref=e73]:
          - generic [ref=e74]:
            - generic [ref=e75]: Your name *
            - textbox "Your name" [ref=e76]: Local test
          - generic [ref=e77]:
            - generic [ref=e78]: Email address *
            - textbox "Email address" [ref=e79]:
              - /placeholder: you@example.com
              - text: test@example.com
          - paragraph [ref=e80]: By requesting the workbook, you’ll receive the PDF and occasional updates from The Upgrade Framework. No spam. Unsubscribe anytime. Required fields are marked *.
          - alert [ref=e81]:
            - text: The email service is temporarily unavailable. You can also contact
            - link "consult@phenomcomm.com" [ref=e82] [cursor=pointer]:
              - /url: mailto:consult@phenomcomm.com
            - text: for help.
          - button "Get the free workbook" [ref=e83] [cursor=pointer]
          - paragraph [ref=e86]: Your details go directly to PhenomComm’s email list through MailerLite. They are not stored on this website.
      - generic [ref=e88]:
        - generic [ref=e89]:
          - paragraph [ref=e90]: Good ideas grow when they’re shared
          - heading [level=2] [ref=e92]:
            - text: Bring the upgrade
            - emphasis [ref=e93]: to your team.
        - generic [ref=e94]:
          - paragraph [ref=e95]: Explore keynotes and workshops that make intentional growth a shared experience.
          - link "Explore speaking & workshops" [ref=e96] [cursor=pointer]:
            - /url: /speaking
          - link "Looking for the book?" [ref=e99] [cursor=pointer]:
            - /url: https://www.amazon.com/dp/B0H7M51529?spcref=PRINT_LISTING
  - contentinfo [ref=e102]:
    - generic [ref=e103]:
      - generic [ref=e104]:
        - generic [ref=e105]:
          - link "PhenomComm home" [ref=e106] [cursor=pointer]:
            - /url: /
            - img "PhenomComm. Talent development that works." [ref=e107]
          - paragraph [ref=e108]: Intentional growth.Meaningful, lasting change.
          - generic [ref=e109]: Based in New York. Working nationwide.
        - generic [ref=e110]:
          - paragraph [ref=e111]: Explore
          - link "How we help" [ref=e112] [cursor=pointer]:
            - /url: /how-we-help
          - link "Our story" [ref=e113] [cursor=pointer]:
            - /url: /about-us
          - link "Speaking" [ref=e114] [cursor=pointer]:
            - /url: /speaking
          - link "The book" [ref=e115] [cursor=pointer]:
            - /url: /book
          - link "Get started" [ref=e116] [cursor=pointer]:
            - /url: /get-started
        - generic [ref=e117]:
          - paragraph [ref=e118]: Let’s connect
          - link "consult@phenomcomm.com" [ref=e119] [cursor=pointer]:
            - /url: mailto:consult@phenomcomm.com
          - link "(803) 875-0525" [ref=e120] [cursor=pointer]:
            - /url: tel:+18038750525
          - generic [ref=e121]:
            - link "LinkedIn" [ref=e122] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/paulette-cunningham
            - link "Instagram" [ref=e125] [cursor=pointer]:
              - /url: https://www.instagram.com/phenomcomm
            - link "Facebook" [ref=e128] [cursor=pointer]:
              - /url: https://www.facebook.com/phenomcomm
        - generic [ref=e131]:
          - paragraph [ref=e132]: MWBE certifiedNYC & Port Authority of NY & NJ
          - link "Capability statement" [ref=e133] [cursor=pointer]:
            - /url: /downloads/phenomcomm-capability-statement.pdf
      - generic [ref=e136]:
        - paragraph [ref=e137]: © 2026 Phenomenal Communications, LLC
        - link "Made by Novus" [ref=e138] [cursor=pointer]:
          - /url: https://novusnyc.org
  - alert [ref=e139]
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
  17  |       expect(measurements.scroll,route).toBeLessThanOrEqual(measurements.width+1);
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
> 81  |   await expect(page.getByRole('alert')).toContainText('temporarily unavailable');
      |                                         ^ Error: expect(locator).toContainText(expected) failed
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