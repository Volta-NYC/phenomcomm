import { Button, ContactCta, Eyebrow, Photo, SectionHeading } from "@/lib/components/ui";
import HeroAtmosphere from "@/lib/components/hero-atmosphere";
import { packages, pageMetadata, site } from "@/lib/site";
export const metadata = pageMetadata(
  "Speaking & workshops",
  "Book Paulette Cunningham for keynotes and workshops that turn inspiration into lasting growth. Explore speaking packages and The Upgrade Framework™.",
  "/speaking",
);
export default function SpeakingPage() {
  return (
    <>
      <section className="interior-hero-shell">
        <HeroAtmosphere variant="speaking" />
        <div className="container speaking-hero">
        <div className="speaking-intro">
          <div>
            <Eyebrow>Keynotes & workshops with Paulette Cunningham</Eyebrow>
            <h1>
              A spark in the room.
              <br />
              <em>A shift that stays.</em>
            </h1>
          </div>
          <div>
            <p className="page-intro">
              Give your audience more than a moment of inspiration. Give them a practical way to think differently, take
              ownership, and put their growth into action.
            </p>
            <Button href={site.booking} external>
              Book Paulette to speak
            </Button>
          </div>
        </div>
        <Photo
          src="/images/workshop.webp"
          alt="Paulette Cunningham engaging an audience during a live professional development workshop"
          className="speaking-banner"
          priority
          sizes="90vw"
        />
        <div className="photo-ribbon">
          <span>Real conversations. Practical tools. Intentional growth.</span>
          <span>Keynotes · Workshops · Training series</span>
        </div>
        </div>
      </section>
      <section className="section container story-body">
        <div data-reveal>
          <Eyebrow>The signature keynote</Eyebrow>
          <h2>
            Don’t Let Your Phone
            <br />
            <em>Upgrade Before You Do.</em>
          </h2>
        </div>
        <div className="story-text" data-reveal>
          <p>
            People upgrade their phones without a second thought. But how often do we apply that same intention to our
            own growth?
          </p>
          <p>
            Paulette uses that familiar idea as a mirror. Through The Upgrade Framework™, audiences discover a
            practical, three-part approach to closing the gap between what they know and how they perform.
          </p>
          <p>
            Built on two decades of talent development experience across classrooms, airports, and boardrooms, this
            keynote brings operational credibility and immediately useful tools to the stage.
          </p>
          <p>
            <strong>Ideal for conferences, all-hands meetings, and leadership offsites.</strong>
          </p>
          <Button href="/book" variant="text">
            Explore the book behind the keynote
          </Button>
        </div>
      </section>
      <section className="cream-section">
        <div className="section container">
          <SectionHeading
            eyebrow="Ways to bring Paulette in"
            title={
              <>
                The right experience.
                <br />
                <em>For your audience.</em>
              </>
            }
          >
            <p>Every engagement is designed around your audience, program length, and organizational goals.</p>
          </SectionHeading>
          <div className="package-grid">
            {packages.map((item) => (
              <article className={`package-card ${item.featured ? "featured" : ""}`} key={item.title} data-reveal>
                {item.featured && <span className="package-badge">Most requested</span>}
                <h3>{item.title}</h3>
                <div className="package-price">
                  <span>{item.qualifier}</span>
                  <strong>{item.price}</strong>
                </div>
                <p>{item.description}</p>
                <ul className="check-list">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="ideal-for">For {item.ideal.toLowerCase()}</p>
                <Button href={site.booking} external variant={item.featured ? "light" : "outline"}>
                  Check availability
                </Button>
              </article>
            ))}
          </div>
          <p className="small-note">
            Fees may vary based on travel, group size, and customization. A discovery call helps us check dates, fit,
            and the right format for your event.
          </p>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container testimonial-inner" data-reveal>
          <Eyebrow>A little of what audiences take away</Eyebrow>
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            We brought Paulette to present ‘Charge Ahead!’ Institute-goers found her AMAZING, empowering, phenomenal,
            positive, uplifting, motivating, and more.
          </blockquote>
          <div className="quote-credit">
            <span className="quote-line" />
            <div>
              <strong>Beck Sullivan</strong>
              <p>University of South Carolina Women’s Leadership Institute</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="A few things to know"
          title={
            <>
              Plan with
              <br />
              <em>confidence.</em>
            </>
          }
        />
        <div className="faq-list">
          <details>
            <summary>Can the keynote be tailored to our organization?</summary>
            <p>
              Yes. The keynote includes a pre-event consultation and an opening tied to your organization. Workshop and
              training series engagements include additional customization based on your goals and audience.
            </p>
          </details>
          <details>
            <summary>What’s included in the keynote and workshop package?</summary>
            <p>
              The package pairs the keynote with a half-day interactive workshop applying The Upgrade Framework™. It
              includes a discovery call, customized exercises, and a participant workbook.
            </p>
          </details>
          <details>
            <summary>Can we build a longer development program?</summary>
            <p>
              Yes. A full training series applies all three pillars of The Upgrade Framework™ over multiple sessions,
              with an organizational assessment, customized curriculum, and coaching options. Pricing is customized to
              the engagement.
            </p>
          </details>
          <details>
            <summary>How do we get started?</summary>
            <p>
              Schedule a discovery call to discuss your audience, goals, dates, and format. You can also email{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              or call{" "}
              <a className="underline" href={site.phoneHref}>
                {site.phone}
              </a>
              .
            </p>
          </details>
        </div>
      </section>
      <ContactCta
        title={
          <>
            Give your next event
            <br />
            <em>a lasting impact.</em>
          </>
        }
        description="Let’s find the right experience for your audience, and make their next upgrade intentional."
      />
    </>
  );
}
