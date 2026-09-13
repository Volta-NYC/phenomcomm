# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> Public routes pass WCAG accessibility scan
- Location: tests/site.spec.ts:31:5

# Error details

```
Error: /

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 42

- Array []
+ Array [
+   Object {
+     "id": "color-contrast",
+     "nodes": Array [
+       Object {
+         "summary": "Fix any of the following:
+   Element has insufficient color contrast of 3.11 (foreground color: #85877c, background color: #f0ede5, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "target": Array [
+           "a[href$=\"how-we-help#leadership\"] > .service-card-top > span",
+         ],
+       },
+       Object {
+         "summary": "Fix any of the following:
+   Element has insufficient color contrast of 3.04 (foreground color: #85877c, background color: #e8ece3, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "target": Array [
+           "a[href$=\"how-we-help#teams\"] > .service-card-top > span",
+         ],
+       },
+       Object {
+         "summary": "Fix any of the following:
+   Element has insufficient color contrast of 2.91 (foreground color: #85877c, background color: #efe4da, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "target": Array [
+           "a[href$=\"how-we-help#organizations\"] > .service-card-top > span",
+         ],
+       },
+       Object {
+         "summary": "Fix any of the following:
+   Element has insufficient color contrast of 4.4 (foreground color: #73756d, background color: #faf8f4, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "target": Array [
+           "div:nth-child(2) > .footer-label",
+         ],
+       },
+       Object {
+         "summary": "Fix any of the following:
+   Element has insufficient color contrast of 4.4 (foreground color: #73756d, background color: #faf8f4, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "target": Array [
+           "div:nth-child(3) > .footer-label",
+         ],
+       },
+     ],
+   },
+ ]
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
        - paragraph [ref=e18]: People first. Performance follows.
        - heading [level=1] [ref=e20]:
          - text: Better people.Stronger teams.
          - emphasis [ref=e21]: Lasting change.
        - paragraph [ref=e22]: Close the gap between what your people know and how they show up. Talent development built for the real world.
        - generic [ref=e23]:
          - link "Let’s start a conversation" [ref=e24] [cursor=pointer]:
            - /url: https://calendly.com/phenomcomm-llc/discovery-meeting
          - link "How we help" [ref=e27] [cursor=pointer]:
            - /url: /how-we-help
        - generic [ref=e30]:
          - generic [aria-hidden] [ref=e31]: ✳
          - paragraph [ref=e32]:
            - strong [ref=e33]: 20 years of developing people.
            - text: A lifetime of believing in their potential.
      - generic [ref=e34]:
        - generic [aria-hidden] [ref=e35]: ✳
        - img "Paulette Cunningham, M.Ed., founder of PhenomComm" [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - strong [ref=e40]: Paulette Cunningham, M.Ed.
            - generic [ref=e41]: Founder. Facilitator. Your partner in growth.
          - link "Meet Paulette Cunningham" [ref=e42] [cursor=pointer]:
            - /url: /about-us
        - generic [ref=e45]:
          - generic [aria-hidden] [ref=e46]: ↗
          - text: A little intention.An extraordinary difference.
    - generic [ref=e49]:
      - paragraph [ref=e50]:
        - text: Experience where
        - strong [ref=e51]: performance matters.
      - generic [ref=e52]:
        - generic [ref=e53]:
          - text: LaGuardia
          - generic [ref=e54]: TERMINAL B
        - generic [ref=e55]:
          - text: JFK Airport
          - generic [ref=e56]: TERMINALS 4 & 8
        - generic [ref=e57]: University ofSouth Carolina
        - generic [ref=e58]: DominionEnergy
        - generic [ref=e59]:
          - text: PRISMA
          - generic [ref=e60]: HEALTH
    - generic [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e63]:
          - paragraph [ref=e64]: The gap we help you close
          - heading [level=2] [ref=e66]:
            - text: Knowing isn’t the challenge.
            - emphasis [ref=e67]: Doing it consistently is.
        - paragraph [ref=e69]: Most teams don’t have a skill problem. They have a performance problem. We help turn good intentions into the everyday behaviors that move your organization forward.
      - generic [ref=e70]:
        - link "1 / Executive leadership development Develop leaders who take ownership, make better decisions, and drive consistent execution. Develop your leaders" [ref=e71] [cursor=pointer]:
          - /url: /how-we-help#leadership
          - generic [ref=e72]: 1 /
          - heading "Executive leadership development" [level=3] [ref=e77]
          - paragraph [ref=e78]: Develop leaders who take ownership, make better decisions, and drive consistent execution.
          - generic [ref=e79]: Develop your leaders
        - link "2 / Team performance & alignment Strengthen communication, accountability, and follow-through so teams execute with greater consistency. Align your team" [ref=e82] [cursor=pointer]:
          - /url: /how-we-help#teams
          - generic [ref=e83]: 2 /
          - heading "Team performance & alignment" [level=3] [ref=e90]
          - paragraph [ref=e91]: Strengthen communication, accountability, and follow-through so teams execute with greater consistency.
          - generic [ref=e92]: Align your team
        - link "3 / Organizational development Create lasting behavior change in how people think, communicate, and execute across your organization. Build lasting change" [ref=e95] [cursor=pointer]:
          - /url: /how-we-help#organizations
          - generic [ref=e96]: 3 /
          - heading "Organizational development" [level=3] [ref=e102]
          - paragraph [ref=e103]: Create lasting behavior change in how people think, communicate, and execute across your organization.
          - generic [ref=e104]: Build lasting change
      - paragraph [ref=e107]:
        - text: Custom keynotes, workshops, consulting, and coaching.
        - link "Built around your people." [ref=e108] [cursor=pointer]:
          - /url: /get-started
    - generic [ref=e112]:
      - generic [ref=e113]:
        - paragraph [ref=e114]: The Upgrade Framework™
        - heading [level=2] [ref=e116]:
          - text: Real growth.
          - emphasis [ref=e117]: By design.
        - paragraph [ref=e118]: Three connected drivers.One meaningful shift in performance.
        - generic [ref=e122]:
          - text: Individual growth.
          - strong [ref=e123]: Collective performance.
      - generic [ref=e124]:
        - paragraph [ref=e125]:
          - text: Your people already know better.Let’s help them
          - strong [ref=e126]: do better.
        - generic [ref=e127]:
          - generic [ref=e128]: "1"
          - generic [ref=e129]:
            - heading [level=3] [ref=e130]:
              - text: Upgrade Thinking
              - superscript [ref=e131]: ™
            - paragraph [ref=e132]: Mindset · Ownership · Adaptability
            - paragraph [ref=e133]: Move from reactive to intentional. Build the mindset to take ownership, adapt to change, and lead with purpose.
        - generic [ref=e134]:
          - generic [ref=e135]: "2"
          - generic [ref=e136]:
            - heading [level=3] [ref=e137]:
              - text: Upgrade Skills
              - superscript [ref=e138]: ™
            - paragraph [ref=e139]: Communication · Leadership · Execution
            - paragraph [ref=e140]: Turn knowledge into consistent action. Practice the communication, leadership, and execution that hold up under real pressure.
        - generic [ref=e141]:
          - generic [ref=e142]: "3"
          - generic [ref=e143]:
            - heading [level=3] [ref=e144]:
              - text: Upgrade Environment
              - superscript [ref=e145]: ™
            - paragraph [ref=e146]: Culture · Systems · Support
            - paragraph [ref=e147]: Make progress last. Shape what is modeled, supported, and reinforced around your people, every day.
        - generic [ref=e148]:
          - generic [ref=e149]: Thinking + Skills + Environment
          - strong [ref=e150]: = Upgrade Performance™
        - link "Explore our approach" [ref=e151] [cursor=pointer]:
          - /url: /how-we-help#framework
    - generic [ref=e154]:
      - generic [ref=e155]:
        - img "Paulette facilitating a workshop, speaking beside a presentation screen" [ref=e157]
        - generic [ref=e158]:
          - generic [ref=e159]: In the room. In the work.
          - generic [ref=e160]: That’s where change begins.
      - generic [ref=e161]:
        - paragraph [ref=e162]: A human approach to high performance
        - heading [level=2] [ref=e164]:
          - text: Big on people.
          - emphasis [ref=e165]: Serious about progress.
        - paragraph [ref=e166]: From classrooms to airport terminals to boardrooms, Paulette Cunningham has spent two decades helping people rise to what’s possible.
        - paragraph [ref=e167]: "Her approach is personal, practical, and rooted in a simple belief: when people are seen, challenged, and given real structure, meaningful growth follows."
        - link "Meet the person behind the progress" [ref=e168] [cursor=pointer]:
          - /url: /about-us
        - generic [ref=e171]:
          - generic [ref=e172]: ✓20 years of experience
          - generic [ref=e173]: ✓NYC & PANYNJ MWBE certified
    - generic [ref=e175]:
      - paragraph [ref=e176]: The difference people feel
      - generic [aria-hidden] [ref=e178]: “
      - blockquote [ref=e179]: This isn’t the kind of training you forget about the next day. My team actually uses what they learned. Paulette goes beyond teaching. She changes how teams work, for good.
      - generic [ref=e182]:
        - strong [ref=e183]: Antenell Britt
        - paragraph [ref=e184]: Director of Performance ManagementCouncil for Airport Opportunity NY & NJ
    - generic [ref=e185]:
      - generic [ref=e186]:
        - img "Don’t Let Your Phone Upgrade Before You Do, by Paulette Cunningham, M.Ed." [ref=e189]
        - generic [ref=e191]:
          - text: Your next upgrade
          - emphasis [ref=e193]: is personal.
      - generic [ref=e194]:
        - paragraph [ref=e195]: The idea that started a movement
        - heading [level=2] [ref=e197]:
          - text: Your phone keepsupgrading.
          - emphasis [ref=e198]: What about you?
        - paragraph [ref=e199]:
          - text: In
          - strong [ref=e200]: Don’t Let Your Phone Upgrade Before You Do
          - text: ", Paulette shares a practical, three-step roadmap for intentional growth in your career, relationships, and life."
        - paragraph [ref=e201]: The book behind The Upgrade Framework™. A place to begin your own next chapter.
        - link "Discover the book" [ref=e202] [cursor=pointer]:
          - /url: /book
    - generic [ref=e206]:
      - generic [ref=e207]:
        - paragraph [ref=e208]: Let’s build what’s next
        - heading [level=2] [ref=e210]:
          - text: Your next chapterstarts with
          - emphasis [ref=e211]: your people.
      - generic [ref=e212]:
        - paragraph [ref=e213]: Let’s talk about where you are, where you want to be, and how we can help close the gap.
        - link "Let’s start a conversation" [ref=e214] [cursor=pointer]:
          - /url: https://calendly.com/phenomcomm-llc/discovery-meeting
  - contentinfo [ref=e218]:
    - generic [ref=e219]:
      - generic [ref=e220]:
        - generic [ref=e221]:
          - link "PhenomComm home" [ref=e222] [cursor=pointer]:
            - /url: /
            - img "PhenomComm. Talent development that works." [ref=e223]
          - paragraph [ref=e224]: Intentional growth.Meaningful, lasting change.
          - generic [ref=e225]: Based in New York. Working nationwide.
        - generic [ref=e226]:
          - paragraph [ref=e227]: Explore
          - link "How we help" [ref=e228] [cursor=pointer]:
            - /url: /how-we-help
          - link "Our story" [ref=e229] [cursor=pointer]:
            - /url: /about-us
          - link "Speaking" [ref=e230] [cursor=pointer]:
            - /url: /speaking
          - link "The book" [ref=e231] [cursor=pointer]:
            - /url: /book
          - link "Get started" [ref=e232] [cursor=pointer]:
            - /url: /get-started
        - generic [ref=e233]:
          - paragraph [ref=e234]: Let’s connect
          - link "consult@phenomcomm.com" [ref=e235] [cursor=pointer]:
            - /url: mailto:consult@phenomcomm.com
          - link "(803) 875-0525" [ref=e236] [cursor=pointer]:
            - /url: tel:+18038750525
          - generic [ref=e237]:
            - link "LinkedIn" [ref=e238] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/paulette-cunningham
            - link "Instagram" [ref=e241] [cursor=pointer]:
              - /url: https://www.instagram.com/phenomcomm
            - link "Facebook" [ref=e244] [cursor=pointer]:
              - /url: https://www.facebook.com/phenomcomm
        - generic [ref=e247]:
          - paragraph [ref=e248]: MWBE certifiedNYC & Port Authority of NY & NJ
          - link "Capability statement" [ref=e249] [cursor=pointer]:
            - /url: /downloads/phenomcomm-capability-statement.pdf
      - generic [ref=e252]:
        - paragraph [ref=e253]: © 2026 Phenomenal Communications, LLC
        - link "Made by Novus" [ref=e254] [cursor=pointer]:
          - /url: https://novusnyc.org
  - alert [ref=e255]
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
> 36  |     expect(audit.violations.map(item=>({id:item.id,nodes:item.nodes.map(node=>({target:node.target,summary:node.failureSummary}))})),route).toEqual([]);
      |                                                                                                                                             ^ Error: /
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