import type { Metadata } from "next";
import { Button, Eyebrow, SectionHeading, UpgradeMark } from "@/lib/components/ui";
import HeroAtmosphere from "@/lib/components/hero-atmosphere";
import WorkbookForm from "@/lib/components/workbook-form";
import { pageMetadata, site } from "@/lib/site";
export const metadata: Metadata = {
  ...pageMetadata(
    "Your companion workbook",
    "The Upgrade Framework™ Companion Workbook. Put Acknowledge, Decide, and Match into practice alongside Don’t Let Your Phone Upgrade Before You Do.",
    "/upgrade/",
  ),
  robots: { index: false, follow: false },
};
export default function UpgradePage() {
  return (
    <div className="upgrade-page">
      <section className="upgrade-hero container interior-hero">
        <HeroAtmosphere />
        <div>
          <Eyebrow>A little extra for your next chapter</Eyebrow>
          <h1>
            Your phone upgrades
            <br />
            automatically.
            <br />
            <em>You don’t.</em>
          </h1>
          <p className="page-intro">
            Welcome, reader. This is your space to put The Upgrade Framework™ into practice. The companion workbook
            helps you make the next step intentional.
          </p>
          <Button href="#unlock">Get your free workbook</Button>
          <p className="mini-label">Pairs with the paperback & Kindle editions</p>
        </div>
        <div className="workbook-preview">
          <UpgradeMark className="workbook-mark" live />
          <Eyebrow light>The Upgrade Framework™</Eyebrow>
          <h2>
            Your space
            <br />
            to reflect.
            <br />
            <em>Your plan to grow.</em>
          </h2>
          <p>
            Companion workbook
            <br />
            By Paulette Cunningham, M.Ed.
          </p>
          <div className="workbook-steps">
            <span>1. Acknowledge</span>
            <span>2. Decide</span>
            <span>3. Match</span>
          </div>
        </div>
      </section>
      <section className="sage-section">
        <div className="container section">
          <SectionHeading
            eyebrow="Inside your workbook"
            title={
              <>
                The ideas are the beginning.
                <br />
                <em>This is where you begin.</em>
              </>
            }
          />
          <div className="steps-grid">
            <article className="step" data-reveal>
              <span className="step-number">1</span>
              <h3>Acknowledge</h3>
              <p className="step-subtitle">Map your milestones</p>
              <p>
                Chart your Version Milestones and Growth Outcomes. Find the proof that you’ve upgraded before, and can
                do it again.
              </p>
            </article>
            <article className="step" data-reveal>
              <span className="step-number">2</span>
              <h3>Decide</h3>
              <p className="step-subtitle">Choose or lose</p>
              <p>
                Name your Feature Selections, what serves you, and your Legacy Bugs, what doesn’t. Then choose
                deliberately.
              </p>
            </article>
            <article className="step" data-reveal>
              <span className="step-number">3</span>
              <h3>Match</h3>
              <p className="step-subtitle">Design your ecosystem</p>
              <p>
                Identify your Oak Tree Growers and Acorn Crushers. Make room for the people, places, and habits that
                support your growth.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="unlock-section container" id="unlock">
        <div className="unlock-copy" data-reveal>
          <Eyebrow>From reflection to action</Eyebrow>
          <h2>
            Make the space.
            <br />
            <em>Take the next step.</em>
          </h2>
          <p>Enter your name and email to request the companion workbook and unlock your download.</p>
          <p>
            Use it alongside <strong>Don’t Let Your Phone Upgrade Before You Do</strong>, chapter by chapter, or work
            through it on its own if you already know the framework.
          </p>
          <p className="small-note">Free PDF · Companion workbook · Version 1.0</p>
        </div>
        <WorkbookForm />
      </section>
      <section className="contact-cta">
        <div className="container cta-inner">
          <div>
            <Eyebrow>Good ideas grow when they’re shared</Eyebrow>
            <h2>
              Bring the upgrade
              <br />
              <em>to your team.</em>
            </h2>
          </div>
          <div>
            <p>Explore keynotes and workshops that make intentional growth a shared experience.</p>
            <Button href="/speaking">Explore speaking & workshops</Button>
            <Button href={site.book} variant="text" external>
              Looking for the book?
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
