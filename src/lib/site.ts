import type { Metadata } from "next";

export const site = {
  name: "PhenomComm",
  legalName: "Phenomenal Communications, LLC",
  url: "https://www.phenomcomm.com",
  tagline: "Talent development that works.",
  email: "consult@phenomcomm.com",
  phone: "(803) 875-0525",
  phoneHref: "tel:+18038750525",
  booking: "https://calendly.com/phenomcomm-llc/discovery-meeting",
  book: "https://www.amazon.com/dp/B0H7M51529?spcref=PRINT_LISTING",
  ebook: "https://www.amazon.com/dp/B0H7QKR93G",
  capability: "/downloads/phenomcomm-capability-statement.pdf",
  workbook: "/downloads/upgrade-framework-workbook.pdf",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paulette-cunningham" },
    { label: "Instagram", href: "https://www.instagram.com/phenomcomm" },
    { label: "Facebook", href: "https://www.facebook.com/phenomcomm" },
  ],
};

export const navigation = [
  { label: "How we help", href: "/how-we-help" },
  { label: "Our story", href: "/about-us" },
  { label: "Speaking", href: "/speaking" },
  { label: "The book", href: "/book" },
];

export const pillars = [
  {
    name: "Upgrade Thinking",
    topic: "Mindset · Ownership · Adaptability",
    description:
      "Move from reactive to intentional. Build the mindset to take ownership, adapt to change, and lead with purpose.",
    short: "It starts with how you think.",
    color: "clay",
  },
  {
    name: "Upgrade Skills",
    topic: "Communication · Leadership · Execution",
    description:
      "Turn knowledge into consistent action. Practice the communication, leadership, and execution that hold up under real pressure.",
    short: "Make knowing become doing.",
    color: "sage",
  },
  {
    name: "Upgrade Environment",
    topic: "Culture · Systems · Support",
    description: "Make progress last. Shape what is modeled, supported, and reinforced around your people, every day.",
    short: "Give growth a place to stick.",
    color: "gold",
  },
];

export const solutions = [
  {
    id: "leadership",
    title: "Executive leadership development",
    short: "Leaders who own the moment.",
    description: "Develop leaders who take ownership, make better decisions, and drive consistent execution.",
    detail:
      "Through executive and small-group coaching, workshops, and customized development programs, we help leaders connect their intentions to the way they communicate, make decisions, and show up for their teams.",
    outcomes: [
      "Ownership and intentional decision-making",
      "Clearer communication and follow-through",
      "Consistent leadership under pressure",
    ],
    icon: "leadership",
  },
  {
    id: "teams",
    title: "Team performance & alignment",
    short: "Teams moving in the same direction.",
    description:
      "Strengthen communication, accountability, and follow-through so teams execute with greater consistency.",
    detail:
      "From frontline teams to managers across shifts and sites, we work on the behaviors and communication patterns that influence everyday performance. Assessment and practical application connect the work to your operational reality.",
    outcomes: [
      "Shared expectations and accountability",
      "Communication across roles and shifts",
      "More consistent day-to-day execution",
    ],
    icon: "teams",
  },
  {
    id: "organizations",
    title: "Organizational development",
    short: "Change that outlasts the workshop.",
    description:
      "Create lasting behavior change in how people think, communicate, and execute across your organization.",
    detail:
      "We look beyond individual skills to the culture, systems, and support surrounding your people. Customized engagements bring thinking, skills, and environment together to help new behaviors take hold.",
    outcomes: [
      "An environment that supports development",
      "Training connected to real work",
      "Sustainable performance improvement",
    ],
    icon: "organization",
  },
];

export const testimonials = [
  {
    quote:
      "This isn’t the kind of training you forget about the next day. My team actually uses what they learned. Paulette goes beyond teaching. She changes how teams work, for good.",
    name: "Antenell Britt",
    role: "Director of Performance Management",
    organization: "Council for Airport Opportunity NY & NJ",
  },
  {
    quote:
      "It is without hesitation that I recommend Phenomenal Communications, LLC to any organization seeking transformative professional development for their teams, across roles and responsibilities.",
    name: "Erica Fields, Ph.D.",
    role: "Director of Learning Environments & Instructional Resources",
    organization: "Richland School District One",
  },
  {
    quote: "Met and exceeded… you met and exceeded our expectations!",
    name: "Mammie Price",
    role: "Manager, Supplier Strategy",
    organization: "SCANA Corporation",
  },
];

export const packages = [
  {
    title: "Keynote",
    price: "$7,500",
    qualifier: "Starting at",
    description: "A 45–60 minute address to set the tone for your event and spark intentional growth.",
    features: [
      "Opening customized to your organization",
      "Pre-event consultation call",
      "A practical framework to take away",
    ],
    ideal: "Conferences & all-hands meetings",
  },
  {
    title: "Keynote + workshop",
    price: "$12,500",
    qualifier: "Starting at",
    description: "Inspiration meets application with a keynote and a half-day interactive workshop.",
    features: ["Discovery call", "Customized exercises", "Participant workbook"],
    ideal: "Leadership days & team offsites",
    featured: true,
  },
  {
    title: "Full training series",
    price: "Let’s talk",
    qualifier: "Custom pricing",
    description: "A multi-session engagement designed for lasting behavior change across your teams.",
    features: ["Organizational assessment", "Customized curriculum across all three pillars", "Coaching options"],
    ideal: "Sustained organizational development",
  },
];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: `${title} | PhenomComm` },
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | PhenomComm`, description, url: path },
  };
}
