import { Button, ContactCta, Eyebrow, Photo, SectionHeading } from "@/lib/components/ui";
import { pageMetadata, site, testimonials } from "@/lib/site";
export const metadata = pageMetadata(
  "Our story",
  "Meet Paulette Cunningham, M.Ed., founder of PhenomComm. Two decades of talent development experience, from classrooms and airport terminals to boardrooms.",
  "/about-us",
);
export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-split container">
        <div>
          <Eyebrow>Our story</Eyebrow>
          <h1>
            Growth is personal.
            <br />
            <em>So is our work.</em>
          </h1>
          <p className="page-intro">
            We believe people rise when they’re seen, challenged, and given the structure to succeed. It’s the belief
            behind everything we do.
          </p>
          <Button href={site.booking} external>
            Let’s get acquainted
          </Button>
          <p className="mini-label">Talent development that works.</p>
        </div>
        <div>
          <Photo
            src="/images/paulette-cunningham.webp"
            alt="Paulette Cunningham, founder and principal of PhenomComm"
            className="portrait"
            priority
          />
          <div className="image-caption">
            <span>Paulette Cunningham, M.Ed.</span>
            <span>Founder & principal</span>
          </div>
        </div>
      </section>
      <div className="container stats-row" data-reveal>
        <div className="stat">
          <strong>20</strong>
          <p>Years of talent development experience</p>
          <small>Teaching, learning, coaching, and facilitation</small>
        </div>
        <div className="stat">
          <strong>2,000+</strong>
          <p>People trained at LaGuardia Terminal B</p>
          <small>Reported in April 2024</small>
        </div>
        <div className="stat">
          <strong>MWBE</strong>
          <p>Certified by NYC & PANYNJ</p>
          <small>New York City & Port Authority of NY & NJ</small>
        </div>
      </div>
      <section className="section container story-body">
        <div data-reveal>
          <Eyebrow>Meet Paulette</Eyebrow>
          <h2>
            A teacher at heart.
            <br />
            <em>A catalyst for change.</em>
          </h2>
        </div>
        <div className="story-text" data-reveal>
          <p>
            Paulette Cunningham began as an award-winning public school educator. In the classroom, she learned that
            encouragement matters, but structure, challenge, and genuine understanding are what help people grow.
          </p>
          <p>
            She brought that belief into adult learning and professional development. Over two decades, her work has
            spanned teaching and learning, instructional design, executive coaching, and high-volume operational
            environments.
          </p>
          <p>
            At LaGuardia Terminal B and JFK Terminals 4 and 8, she has trained and coached people in customer service,
            retail, food and beverage, wheelchair services, maintenance, security, and airline operations. Across roles
            and shifts, the goal stays the same: consistent performance when it matters.
          </p>
          <p>
            Today, PhenomComm helps leaders and teams close the gap between knowing better and doing better through The
            Upgrade Framework™, the methodology behind Paulette’s keynotes, workshops, coaching, and book.
          </p>
          <Button href="/speaking" variant="text">
            Bring Paulette to your next event
          </Button>
        </div>
      </section>
      <section className="sage-section">
        <div className="section container">
          <SectionHeading
            eyebrow="Experience that translates"
            title={
              <>
                Real environments.
                <br />
                <em>Real responsibility.</em>
              </>
            }
          >
            <p>
              Our work has supported teams in some of New York’s busiest airport terminals, alongside corporate and
              public-sector organizations.
            </p>
          </SectionHeading>
          <div className="results-list">
            <article className="result-item" data-reveal>
              <h3>
                LaGuardia
                <br />
                Terminal B
              </h3>
              <p className="result-context">Premium service excellence · September 2021 to April 2024</p>
              <p>
                Terminal-wide training across retail, food and beverage, contractors, airlines, and TSA officers.
                Performance audits paired observation with in-the-moment coaching.
              </p>
              <p>
                <strong>2,000+ trained by April 2024.</strong>
              </p>
            </article>
            <article className="result-item" data-reveal>
              <h3>
                JFK
                <br />
                Terminal 8
              </h3>
              <p className="result-context">URW Guest Experience Management</p>
              <p>
                Employee engagement initiatives and customer service training across terminal concessions, supporting
                the guest experience during active construction.
              </p>
            </article>
            <article className="result-item" data-reveal>
              <h3>
                JFK
                <br />
                Terminal 4
              </h3>
              <p className="result-context">JFKIAT / SSP America partnership</p>
              <p>
                Customer service consulting for full-service dining, including individual coaching, performance
                analysis, and a sustainable training model.
              </p>
            </article>
          </div>
          <p className="small-note">
            Additional experience includes University of South Carolina, PRISMA Health, Dominion Energy, Midlands
            Technical College, Carolinas Credit Union League, SC Department of Public Health, and SC Vocational
            Rehabilitation. Details are documented in our capability statement.
          </p>
          <Button href={site.capability} variant="text" external>
            View our capability statement
          </Button>
        </div>
      </section>
      <section className="section container split-section">
        <Photo
          src="/images/airport-team.webp"
          alt="Paulette with airport colleagues at a Currency Exchange International opening"
        />
        <div className="split-copy" data-reveal>
          <Eyebrow>A thoughtful approach, at every scale</Eyebrow>
          <h2>
            Close to your people.
            <br />
            <em>Ready for your challenge.</em>
          </h2>
          <p>
            From a keynote for executives to development across hundreds of frontline employees, we scale to your
            organization’s needs while keeping the work highly customized.
          </p>
          <p>
            For larger engagements, we collaborate with trusted partners to support seamless delivery. Our capacity
            spans 50-person departments to operations with more than 2,000 employees.
          </p>
          <p>Based in New York, PhenomComm serves the NYC metro area and clients nationwide.</p>
          <Button href="/how-we-help" variant="outline">
            Find the right support
          </Button>
        </div>
      </section>
      <section className="section container" style={{ paddingTop: 0 }}>
        <SectionHeading
          eyebrow="In our clients’ words"
          title={
            <>
              The work leaves
              <br />
              <em>an impression.</em>
            </>
          }
        />
        <div className="quotes-grid">
          {testimonials.slice(1).map((item) => (
            <figure className="quote-small" key={item.name} data-reveal>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                {item.role}
                <br />
                {item.organization}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
