import type { ReactNode } from "react";

/*
 * Shared configuration for the /works listing + /works/$slug detail pages.
 * Real KDM Growth projects — Khuram Shahzad's actual client work.
 * Cards 4–6 use neutral typographic covers until real screenshots are added.
 */

export type WorkCategory =
  "CRM & Automation" | "Funnels & Websites" | "Ads & Lead Gen" | "Training";

export type WorkProject = {
  slug: string;
  name: string;
  /** Short subtitle shown on cards / used for the cover label on typographic covers. */
  subtitle: string;
  image: string;
  alt: string;
  category: WorkCategory;
  description: string;
  // Detail-page content
  client: string;
  year: string;
  industry: string;
  scope: string;
  services: string[];
  challenge: string;
  work: string;
  outcome: string;
  highlights: { title: string; body: string }[];
  fullImage: string;
  detailImage: string;
  /** Qualitative observations only — no fabricated numerical metrics. */
  results: { label: string; value: string }[];
};

// Filter tabs on /works — presentation filters, not fake interactions.
export const worksFilterTabs: ("All" | WorkCategory)[] = [
  "All",
  "CRM & Automation",
  "Funnels & Websites",
  "Ads & Lead Gen",
  "Training",
];

// Category strip labels (kept for the homepage Featured Projects strip).
export const worksCategories = [
  { label: "CRM & Automation", icon: "Workflow" },
  { label: "Funnels & Websites", icon: "Monitor" },
  { label: "Ads & Lead Gen", icon: "Target" },
  { label: "Training", icon: "GraduationCap" },
];

// Neutral typographic cover for projects without a real screenshot yet.
// Rendered as a data-URI SVG so the card still shows a clean cover.
function typographicCover(label: string, sub: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <rect width="800" height="800" fill="#09090B"/>
    <g fill="#27272A">
      <circle cx="400" cy="400" r="220" />
    </g>
    <text x="400" y="392" text-anchor="middle" font-family="Inter, sans-serif" font-size="40" font-weight="600" fill="#FFFFFF" letter-spacing="-1">${label}</text>
    <text x="400" y="430" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" font-weight="400" fill="#A1A1AA">${sub}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Shared supporting images (reused across detail pages).
const SUPPORT_HALF = "https://framerusercontent.com/images/WxKTgKfcnediuf8YNEHRuBuFY.png";
const SUPPORT_FULL = "https://framerusercontent.com/images/BRDOxqN8qK0pxwtQYv0o2emPDoc.png";
const SUPPORT_SQUARE = "https://framerusercontent.com/images/qNBOdqYBak7ceVHLGpSbzz3mAU.png";

export const worksProjects: WorkProject[] = [
  {
    slug: "mfa-underwriting",
    name: "MFA Underwriting",
    subtitle: "GoHighLevel migration",
    image: "https://framerusercontent.com/images/gndTsdzIVdEAfbNrUWjADjDXuuk.jpg",
    alt: "MFA Underwriting website migrated into a connected GoHighLevel system",
    category: "CRM & Automation",
    description:
      "A fragmented WordPress and WooCommerce site and lead process migrated into a connected GoHighLevel system with CRM, workflows, products and Stripe.",
    client: "MFA Underwriting",
    year: "2025",
    industry: "Multifamily underwriting software",
    scope: "Website, WooCommerce-to-GoHighLevel migration, CRM, workflows, products and Stripe",
    services: ["Website", "CRM", "Workflows", "Payments"],
    challenge:
      "The team ran on a fragmented WordPress and WooCommerce setup with separate lead management, so investor enquiries were hard to track and follow up consistently.",
    work: "I migrated the website and product flow into GoHighLevel and connected the CRM, workflows and payment integration so enquiries, products and follow-up live in one place.",
    outcome:
      "A more organized investor enquiry journey with clearer follow-up — every lead has a visible next step instead of sitting across disconnected tools.",
    highlights: [
      {
        title: "Migration approach",
        body: "The existing WooCommerce product flow was moved into GoHighLevel with connected products and Stripe, so purchases flow straight into the CRM without a second manual step.",
      },
      {
        title: "Connected CRM",
        body: "Contacts, opportunities and follow-up now sit inside one CRM, which gives the team a single view of where each investor enquiry is and what happens next.",
      },
      {
        title: "Workflow follow-up",
        body: "Automated workflows handle the routine next steps after an enquiry, so the team spends less time chasing status and more time on the actual conversation.",
      },
    ],
    fullImage: SUPPORT_FULL,
    detailImage: SUPPORT_SQUARE,
    results: [
      { label: "System", value: "One connected CRM" },
      { label: "Payments", value: "Stripe integrated" },
      { label: "Follow-up", value: "Automated next steps" },
    ],
  },
  {
    slug: "lakeshore-rv-park",
    name: "Lakeshore RV Park",
    subtitle: "Website, funnels and acquisition",
    image: "https://framerusercontent.com/images/MnSNCnBiB0TrnLj3V0MNXzRq2s.jpg",
    alt: "Lakeshore RV Park mobile website, funnels and local search campaign",
    category: "Funnels & Websites",
    description:
      "A conversion-focused mobile website, funnels, Google Ads and local SEO built to turn an informational RV park site into a clear path to booking.",
    client: "Lakeshore RV Park",
    year: "2025",
    industry: "RV park and travel accommodation",
    scope: "Website, funnels, Google Ads, local SEO and automation",
    services: ["Website", "Funnels", "Google Ads", "Local SEO"],
    challenge:
      "The park had an informational website with no clear path to booking, so visitors landed, browsed, and left without a next step.",
    work: "I built a conversion-focused mobile website and funnels, ran a search campaign and local SEO, and added a follow-up structure so enquiries get a quick, consistent reply.",
    outcome:
      "A clearer discovery-to-booking journey — guests can find the park, understand the offer, and take a next step without leaving the page.",
    highlights: [
      {
        title: "Mobile-first site",
        body: "The new site was designed for the way guests actually find an RV park — on a phone, looking for availability, sites and amenities.",
      },
      {
        title: "Funnels and search",
        body: "Google Ads and local SEO point the right traffic at dedicated funnels, so the park shows up where people are already searching.",
      },
      {
        title: "Follow-up structure",
        body: "Enquiries drop into a follow-up sequence so no request sits unanswered, even outside office hours.",
      },
    ],
    fullImage: SUPPORT_FULL,
    detailImage: SUPPORT_SQUARE,
    results: [
      { label: "Discovery", value: "Clearer mobile path" },
      { label: "Traffic", value: "Targeted local search" },
      { label: "Enquiries", value: "Consistent follow-up" },
    ],
  },
  {
    slug: "in-home-trainer",
    name: "In Home Trainer",
    subtitle: "Ads, funnels and AI follow-up",
    image: "https://framerusercontent.com/images/f0dzufQ0gHJHWvW20YPPRnzln4.jpg",
    alt: "In Home Trainer Meta Ads, qualification funnel and AI agent for lead follow-up",
    category: "Ads & Lead Gen",
    description:
      "Meta Ads, a qualification funnel, an AI agent and GoHighLevel workflows built to take personal training leads from manual handling into faster structured follow-up.",
    client: "In Home Trainer",
    year: "2025",
    industry: "Health and fitness",
    scope: "Meta Ads, funnels, AI agent, automation and CRM",
    services: ["Meta Ads", "Funnels", "AI Agent", "Automation"],
    challenge:
      "Leads came in across channels and were handled manually, so replies were slow and good-fit enquiries sometimes went cold before anyone could respond.",
    work: "I set up Meta campaigns, a qualification funnel and an AI agent that answers common questions and guides booking, then connected it all into GoHighLevel workflows.",
    outcome:
      "Faster, structured lead handling — enquiries get an immediate response and a clear next step instead of waiting on a manual reply.",
    highlights: [
      {
        title: "Meta campaigns",
        body: "Ads target the right local audience and route responses into a qualification funnel that filters for fit before a call is booked.",
      },
      {
        title: "AI agent",
        body: "An AI assistant answers common questions and guides leads toward booking, so the first response is instant rather than hours later.",
      },
      {
        title: "GoHighLevel workflows",
        body: "Qualified leads drop into CRM workflows for follow-up, so the team sees the full history of each conversation in one place.",
      },
    ],
    fullImage: SUPPORT_FULL,
    detailImage: SUPPORT_SQUARE,
    results: [
      { label: "Response", value: "Instant first reply" },
      { label: "Qualification", value: "Funnel-led filtering" },
      { label: "Handoff", value: "Structured CRM flow" },
    ],
  },
  {
    slug: "venice-podcast-studio",
    name: "Venice Podcast Studio",
    subtitle: "Booking and CRM system",
    image: typographicCover("Venice Podcast Studio", "Booking & CRM"),
    alt: "Venice Podcast Studio booking and CRM system with Google Ads and Podyx integration",
    category: "CRM & Automation",
    description:
      "A booking and CRM system for a podcast studio — Google Ads, landing pages, Podyx integration and CRM automation so each enquiry becomes a booked session.",
    client: "Venice Podcast Studio",
    year: "2025",
    industry: "Podcast studio",
    scope: "Google Ads, landing pages, Podyx integration and CRM automation",
    services: ["Google Ads", "Landing Pages", "Podyx", "Automation"],
    challenge:
      "Studio enquiries came through several channels with no shared record, so booking a session meant checking scattered inboxes and spreadsheets.",
    work: "I built landing pages, ran Google Ads, and connected Podyx with CRM automation so every enquiry is captured, qualified and routed to a booking.",
    outcome:
      "A single booking and CRM flow that keeps every studio enquiry tracked from first click to confirmed session.",
    highlights: [
      {
        title: "Landing pages and ads",
        body: "Google Ads drive the right visitors to focused landing pages built around one clear action — booking a studio session.",
      },
      {
        title: "Podyx integration",
        body: "Podyx connects the booking detail straight into the CRM, so scheduling and follow-up stay in sync without a manual transfer.",
      },
      {
        title: "CRM automation",
        body: "Each enquiry is captured, tagged and followed up automatically, so no booking request slips through between sessions.",
      },
    ],
    fullImage: SUPPORT_FULL,
    detailImage: SUPPORT_SQUARE,
    results: [
      { label: "Enquiries", value: "Single CRM record" },
      { label: "Booking", value: "Podyx connected" },
      { label: "Follow-up", value: "Automated" },
    ],
  },
  {
    slug: "amz-gutters",
    name: "AMZ Gutters",
    subtitle: "Local lead journey",
    image: typographicCover("AMZ Gutters", "Local lead journey"),
    alt: "AMZ Gutters local lead journey with website, local SEO, CRM automation and quote follow-up",
    category: "Ads & Lead Gen",
    description:
      "A local lead journey for a home-services company — website, local SEO, CRM automation and quote follow-up so every enquiry gets a timely response.",
    client: "AMZ Gutters",
    year: "2025",
    industry: "Gutter and home services",
    scope: "Website, local SEO, CRM automation and quote follow-up",
    services: ["Website", "Local SEO", "CRM", "Automation"],
    challenge:
      "Quote requests came in by phone and form with no shared follow-up, so some leads were answered quickly while others were missed entirely.",
    work: "I built a website, set up local SEO, and connected CRM automation with quote follow-up so every request is captured and answered consistently.",
    outcome:
      "A reliable local lead journey where every quote request has a visible owner and a timely next step.",
    highlights: [
      {
        title: "Website and local SEO",
        body: "The site is built around the services people actually search for locally, with SEO tuned so the company shows up for the right nearby queries.",
      },
      {
        title: "CRM capture",
        body: "Every form and call enquiry lands in the CRM as a contact, so nothing is lost between channels.",
      },
      {
        title: "Quote follow-up",
        body: "Automated follow-up keeps quote requests moving, so a lead that comes in after hours still gets a timely response.",
      },
    ],
    fullImage: SUPPORT_FULL,
    detailImage: SUPPORT_SQUARE,
    results: [
      { label: "Capture", value: "Every lead recorded" },
      { label: "Local reach", value: "SEO-tuned site" },
      { label: "Quotes", value: "Timely follow-up" },
    ],
  },
  {
    slug: "ghl-growth-success-academy",
    name: "GHL Growth Success Academy",
    subtitle: "Training and client readiness",
    image: typographicCover("GHL Growth Success Academy", "Training"),
    alt: "GHL Growth Success Academy live training, assignments, templates and community",
    category: "Training",
    description:
      "A hands-on training program for turning platform skills into client-ready work — live classes, assignments, templates and community.",
    client: "Own Venture",
    year: "2025",
    industry: "Education and training",
    scope: "Live training, assignments, templates and community",
    services: ["Training", "Assignments", "Templates", "Community"],
    challenge:
      "Learners pick up individual features but struggle to turn them into a full system a real client will accept and use.",
    work: "I run live classes that build a real client-style system week by week, with assignments, templates and community feedback along the way.",
    outcome:
      "Learners leave with a working system and a repeatable process — not just feature knowledge, but the path from first build to client handover.",
    highlights: [
      {
        title: "Live, build-along classes",
        body: "Each week walks through part of a real client-style system, so learners build understanding by doing rather than memorising features.",
      },
      {
        title: "Assignments and feedback",
        body: "Weekly assignments are based on realistic client scenarios, with notes on what to tighten before moving on.",
      },
      {
        title: "Templates and community",
        body: "Reusable templates and a community give learners something to start from and people to ask when a build gets stuck.",
      },
    ],
    fullImage: SUPPORT_FULL,
    detailImage: SUPPORT_SQUARE,
    results: [
      { label: "Outcome", value: "Client-ready systems" },
      { label: "Format", value: "Live weekly classes" },
      { label: "Support", value: "Templates & community" },
    ],
  },
];

export const worksSupportHalfImage = SUPPORT_HALF;

export function WorksCategoryIcon({ name }: { name: string }): ReactNode {
  const common = {
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "Workflow":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <path d="M10 6.5h7a3 3 0 0 1 3 3V14" />
        </svg>
      );
    case "Monitor":
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      );
    case "Target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "GraduationCap":
      return (
        <svg {...common}>
          <path d="M22 9 12 4 2 9l10 5 10-5Z" />
          <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
        </svg>
      );
    case "Sparkles":
      return (
        <svg {...common}>
          <path d="M9.94 14.34 12 21l2.06-6.66L21 12l-6.94-2.06L12 3l-2.06 6.94L3 12z" />
        </svg>
      );
    case "MonitorSmartphone":
      return (
        <svg {...common}>
          <path d="M18 8V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7" />
          <path d="M11 18H3" />
          <path d="m15 18 2 2 4-4" />
          <rect x="15" y="14" width="7" height="8" rx="1" />
        </svg>
      );
    case "Layers":
      return (
        <svg {...common}>
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m2 12 8.58 3.91a2 2 0 0 0 1.66 0L21 12" />
          <path d="m2 17 8.58 3.91a2 2 0 0 0 1.66 0L21 17" />
        </svg>
      );
    case "Compass":
      return (
        <svg {...common}>
          <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    default:
      return null;
  }
}
