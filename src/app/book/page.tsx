import { BookObject, Button, ContactCta, Eyebrow, Photo, SectionHeading } from "@/lib/components/ui";
import HeroAtmosphere from "@/lib/components/hero-atmosphere";
import { pageMetadata, site } from "@/lib/site";
export const metadata = pageMetadata(
  "Don’t Let Your Phone Upgrade Before You Do",
  "A 3-Step Upgrade Framework for Intentional Growth, by Paulette Cunningham, M.Ed. Discover a practical roadmap for growth in your career, relationships, and life.",
  "/book",
);
export default function BookPage() {
  return (
    <>
      <section className="book-hero container interior-hero">
        <HeroAtmosphere />
        <div className="book-stage">
          <span className="book-circle" aria-hidden="true" />
          <BookObject />
          <span className="book-stage-note">
            A small book.
            <br />
            <em>A meaningful shift.</em>
          </span>
        </div>
        <div className="book-copy">
          <Eyebrow>Your next chapter starts with you</Eyebrow>
          <h1>
            Don’t Let Your Phone
            <br />
            <em>Upgrade Before You Do.</em>
          </h1>
          <p className="book-subtitle">A 3-Step Upgrade Framework™ for Intentional Growth</p>
          <p className="book-byline">By Paulette Cunningham, M.Ed.</p>
          <p>
            Your phone becomes faster, smarter, and more capable. Your personal growth takes intention. This practical
            guide helps you invest in yourself as deliberately as the technology in your pocket.
          </p>
          <div className="book-actions">
            <Button href={site.book} external>
              Get the paperback
            </Button>
            <Button href={site.ebook} external variant="text">
              Read on Kindle
            </Button>
          </div>
          <div className="book-facts">
            <span>122 pages</span>
            <span>Published July 2, 2026</span>
            <span>PhenomComm</span>
          </div>
        </div>
      </section>
      <section className="sage-section">
        <div className="section container">
          <SectionHeading
            eyebrow="The roadmap inside"
            title={
              <>
                Three steps.
                <br />
                <em>Your next version.</em>
              </>
            }
          >
            <p>
              A simple, repeatable process for your career, relationships, and any part of life that’s ready for its
              next upgrade.
            </p>
          </SectionHeading>
          <div className="steps-grid">
            <article className="step" data-reveal>
              <div className="step-number">1</div>
              <h3>Acknowledge</h3>
              <p className="step-subtitle">Map your milestones</p>
              <p>
                Recognize your Version Milestones and Growth Outcomes. The proof that you’ve grown before becomes the
                foundation for what comes next.
              </p>
            </article>
            <article className="step" data-reveal>
              <div className="step-number">2</div>
              <h3>Decide</h3>
              <p className="step-subtitle">Choose or lose</p>
              <p>
                Choose the habits and qualities that serve you, your Feature Selections. Name and let go of the Legacy
                Bugs that hold you back.
              </p>
            </article>
            <article className="step" data-reveal>
              <div className="step-number">3</div>
              <h3>Match</h3>
              <p className="step-subtitle">Design your ecosystem</p>
              <p>
                Surround yourself with the people, places, and habits that support your growth. More Oak Tree Growers.
                Fewer Acorn Crushers.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section container story-body">
        <div data-reveal>
          <Eyebrow>More than something to read</Eyebrow>
          <h2>
            Room to reflect.
            <br />
            <em>Tools to move forward.</em>
          </h2>
        </div>
        <div className="story-text" data-reveal>
          <p>
            The book brings together real-world case studies, guided journaling prompts, a troubleshooting guide for
            common roadblocks, and a quick-reference glossary.
          </p>
          <p>
            A free companion workbook gives you space to put the framework into practice. Readers can use the companion
            resource address provided with the book to access the worksheets.
          </p>
          <p>
            Work through the ideas chapter by chapter, then return to the framework whenever you’re ready for another
            intentional step forward.
          </p>
          <Button href={site.book} external variant="outline">
            Begin your next upgrade
          </Button>
          <p className="small-note">
            Available in paperback and Kindle editions. Current pricing and availability are shown on Amazon.
          </p>
        </div>
      </section>
      <section className="cream-section">
        <div className="section container split-section">
          <Photo
            src="/images/paulette-cunningham.webp"
            alt="Paulette Cunningham, author of Don’t Let Your Phone Upgrade Before You Do"
          />
          <div className="split-copy" data-reveal>
            <Eyebrow>About the author</Eyebrow>
            <h2>
              Twenty years of helping
              <br />
              <em>people grow.</em>
            </h2>
            <p>
              Paulette Cunningham, M.Ed. is a keynote speaker, talent development specialist, and creator of The Upgrade
              Framework™.
            </p>
            <p>
              Her work spans classrooms, corporate teams, nonprofits, government agencies, and high-pressure operational
              environments. This book brings the core principles of that work into your everyday life.
            </p>
            <Button href="/about-us" variant="outline">
              Meet Paulette
            </Button>
          </div>
        </div>
      </section>
      <ContactCta
        title={
          <>
            Bring the framework
            <br />
            <em>to your people.</em>
          </>
        }
        description="Turn the ideas in the book into a shared experience with a customized keynote, workshop, or development program."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Don’t Let Your Phone Upgrade Before You Do: A 3-Step Upgrade Framework for Intentional Growth",
            author: { "@type": "Person", name: "Paulette Cunningham" },
            isbn: "9798996290611",
            numberOfPages: 122,
            datePublished: "2026-07-02",
            inLanguage: "en",
            publisher: { "@type": "Organization", name: "PhenomComm" },
            image: `${site.url}/images/book-cover.webp`,
            url: `${site.url}/book`,
          }),
        }}
      />
    </>
  );
}
