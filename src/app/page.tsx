import Link from "next/link";
import {
  Arrow,
  BookObject,
  Button,
  ContactCta,
  Eyebrow,
  Photo,
  SectionHeading,
  ServiceIcon,
  UpgradeMark,
} from "@/lib/components/ui";
import Framework from "@/lib/components/framework";
import HeroAtmosphere from "@/lib/components/hero-atmosphere";
import { pageMetadata, site, solutions, testimonials } from "@/lib/site";
export const metadata = pageMetadata(
  "Talent development that works",
  "Better people. Stronger teams. Lasting change. PhenomComm helps leaders and organizations close the gap between knowing and doing.",
  "/",
);
export default function HomePage() {
  return (
    <>
      <section className="home-hero-shell">
        <HeroAtmosphere variant="home" />
        <div className="home-hero container">
          <div className="hero-copy">
          <Eyebrow>People first. Performance follows.</Eyebrow>
          <h1>
            Better people.
            <br />
            Stronger teams.
            <br />
            <em>Lasting change.</em>
          </h1>
          <p className="hero-description">
            Close the gap between what your people know
            <br className="desktop-break" /> and how they show up. Talent development
            <br className="desktop-break" /> built for the real world.
          </p>
          <div className="hero-actions">
            <Button href={site.booking} external>
              Let’s start a conversation
            </Button>
            <Button href="/how-we-help" variant="text">
              How we help
            </Button>
          </div>
          <div className="hero-proof">
            <UpgradeMark className="small-mark" />
            <p>
              <strong>20 years of developing people.</strong>
              <br />A lifetime of believing in their potential.
            </p>
          </div>
          </div>
          <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" />
          <UpgradeMark className="hero-mark" live />
          <Photo
            className="hero-portrait"
            src="/images/paulette-cunningham.webp"
            alt="Paulette Cunningham, M.Ed., founder of PhenomComm"
            priority
            sizes="(max-width: 760px) 90vw, (max-width: 1100px) 44vw, 530px"
          />
          <div className="hero-note">
            <span className="hero-note-icon" aria-hidden="true">
              <Arrow diagonal />
            </span>
            <p>
              A little intention.
              <em>An extraordinary difference.</em>
            </p>
          </div>
          <div className="founder-caption">
            <div>
              <strong>Paulette Cunningham, M.Ed.</strong>
              <span>Founder. Facilitator. Your partner in growth.</span>
            </div>
            <Link href="/about-us" aria-label="Meet Paulette Cunningham">
              <Arrow diagonal />
            </Link>
          </div>
          </div>
        </div>
      </section>
      <section className="experience-strip">
        <div className="container">
          <p>
            Experience where
            <br />
            <strong>performance matters.</strong>
          </p>
          <div className="experience-names">
            <span>
              LaGuardia<small>TERMINAL B</small>
            </span>
            <span>
              JFK Airport<small>TERMINALS 4 & 8</small>
            </span>
            <span>
              University of
              <br />
              South Carolina
            </span>
            <span>
              Dominion
              <br />
              Energy
            </span>
            <span>
              PRISMA<small>HEALTH</small>
            </span>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="The gap we help you close"
          title={
            <>
              Knowing isn’t the challenge.
              <br />
              <em>Doing it consistently is.</em>
            </>
          }
        >
          <p>
            Most teams don’t have a skill problem. They have a performance problem. We help turn good intentions into
            the everyday behaviors that move your organization forward.
          </p>
        </SectionHeading>
        <div className="services-grid">
          {solutions.map((solution, index) => (
            <Link className="service-card" href={`/how-we-help#${solution.id}`} key={solution.id} data-reveal>
              <div className="service-card-top">
                <ServiceIcon kind={solution.icon} />
                <span>{index + 1} /</span>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <span className="service-link">
                {index === 0 ? "Develop your leaders" : index === 1 ? "Align your team" : "Build lasting change"}
                <Arrow diagonal />
              </span>
            </Link>
          ))}
        </div>
        <p className="section-footnote">
          Custom keynotes, workshops, consulting, and coaching.{" "}
          <Link href="/get-started">
            Built around your people.
            <Arrow />
          </Link>
        </p>
      </section>
      <Framework />
      <section className="section container founder-section">
        <div className="founder-photo-wrap" data-reveal>
          <Photo
            src="/images/workshop.webp"
            alt="Paulette facilitating a workshop, speaking beside a presentation screen"
            className="founder-photo"
          />
          <div className="image-caption">
            <span>In the room. In the work.</span>
            <span>That’s where change begins.</span>
          </div>
        </div>
        <div className="founder-story" data-reveal>
          <Eyebrow>A human approach to high performance</Eyebrow>
          <h2>
            Big on people.
            <br />
            <em>Serious about progress.</em>
          </h2>
          <p>
            From classrooms to airport terminals to boardrooms, Paulette Cunningham has spent two decades helping people
            rise to what’s possible.
          </p>
          <p>
            Her approach is personal, practical, and rooted in a simple belief: when people are seen, challenged, and
            given real structure, meaningful growth follows.
          </p>
          <Button href="/about-us" variant="outline">
            Meet the person behind the progress
          </Button>
          <div className="founder-credentials">
            <span>20 years of experience</span>
            <span>NYC & PANYNJ MWBE certified</span>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container testimonial-inner" data-reveal>
          <Eyebrow>The difference people feel</Eyebrow>
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>{testimonials[0].quote}</blockquote>
          <div className="quote-credit">
            <span className="quote-line" />
            <div>
              <strong>{testimonials[0].name}</strong>
              <p>
                {testimonials[0].role}
                <br />
                {testimonials[0].organization}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section container book-preview">
        <div className="book-stage" data-reveal>
          <span className="book-circle" aria-hidden="true" />
          <BookObject />
          <span className="book-stage-note">
            Your next upgrade
            <br />
            <em>is personal.</em>
          </span>
        </div>
        <div className="book-copy" data-reveal>
          <Eyebrow>The framework, in your hands</Eyebrow>
          <h2>
            Your phone keeps
            <br />
            upgrading.
            <br />
            <em>What about you?</em>
          </h2>
          <p>
            In <strong>Don’t Let Your Phone Upgrade Before You Do</strong>, Paulette shares a practical, three-step
            roadmap for intentional growth in your career, relationships, and life.
          </p>
          <p>The book behind The Upgrade Framework™. A place to begin your own next chapter.</p>
          <Button href="/book" variant="outline">
            Discover the book
          </Button>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
