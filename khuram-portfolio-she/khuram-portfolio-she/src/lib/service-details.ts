/*
 * Service detail content for /services/$slug pages.
 *
 * Each service has a distinct introduction, what is included, implementation
 * approach, and FAQs. Plain language only — no invented guarantees, metrics,
 * pricing, employer claims, or claims of results.
 *
 * Used by src/routes/services.$slug.tsx.
 */

export type ServiceFaq = { question: string; answer: string };

export type ServiceDetail = {
  slug: string;
  name: string;
  // Short tagline shown under the title
  tagline: string;
  // Distinct introduction (first content block)
  introduction: string;
  // "What's included" — checklist of deliverables
  included: string[];
  // Implementation approach — supporting copy block
  approachTitle: string;
  approachBody: string;
  // FAQs
  faqs: ServiceFaq[];
  // Related services (slugs) — exclude current
  related: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "crm-setup",
    name: "GoHighLevel CRM Setup",
    tagline: "A CRM structure built around how your team actually works.",
    introduction:
      "A practical CRM setup organises your contacts, pipelines, calendars, and reporting into one place. The goal is simple: every enquiry has a clear next step, and your team can see exactly where each opportunity stands without digging through separate tools.",
    included: [
      "Contact and pipeline structure",
      "Calendars and appointment links",
      "Custom fields and tags",
      "Reporting dashboards",
      "Data migration from your previous system",
    ],
    approachTitle: "How I approach it",
    approachBody:
      "I start by mapping how your team currently handles enquiries and where things slow down. From there I build a pipeline and contact structure that mirrors your real sales process, connect calendars and reporting, and migrate your existing data so nothing is lost in the move. The setup is designed to be usable day one, not just technically correct.",
    faqs: [
      {
        question: "Can you migrate my existing contacts?",
        answer:
          "Yes. I migrate your existing contacts, notes, and relevant records into the new CRM structure so your team starts with their current data in place.",
      },
      {
        question: "Do I need to already use a CRM?",
        answer:
          "No. The setup works whether you are moving from another CRM or organising contacts for the first time. I build the structure around your actual process.",
      },
      {
        question: "Will my team be able to use it?",
        answer:
          "The structure is built to match how your team already works, so day-to-day use stays straightforward. I keep pipelines and fields focused on what you actually need.",
      },
    ],
    related: ["automation-ai", "funnels-websites"],
  },
  {
    slug: "automation-ai",
    name: "Automation & AI Agents",
    tagline: "Follow-up that happens on time, every time.",
    introduction:
      "Automation handles the repetitive follow-up work so enquiries don't go cold. I build workflows for email and SMS sequences, lead qualification, and AI assistants that answer common questions and route conversations to the right person when a human is needed.",
    included: [
      "Follow-up workflows",
      "Email and SMS sequences",
      "AI chat for common questions",
      "Lead qualification and routing",
      "Notification and assignment rules",
    ],
    approachTitle: "How I approach it",
    approachBody:
      "I map the conversations and follow-ups your team repeats most often, then turn those into workflows that run consistently. AI assistants are scoped to answer common questions and hand off to a person when needed — they support your team rather than replacing the conversations that matter. Everything is tied back to the CRM so each contact's history stays in one place.",
    faqs: [
      {
        question: "What can the AI assistant actually do?",
        answer:
          "It answers common questions from information you provide and routes conversations to the right person when a question falls outside its scope. It supports your team rather than replacing the conversations that need a human.",
      },
      {
        question: "Will automation feel impersonal to my leads?",
        answer:
          "Workflows are built around your real follow-up process and tone, so messages stay relevant. The aim is timely, useful contact rather than generic blasts.",
      },
      {
        question: "Can you connect it to my existing CRM?",
        answer:
          "Yes. The automation is built inside the same CRM system, so contact history and follow-up stay connected in one place.",
      },
    ],
    related: ["crm-setup", "funnels-websites"],
  },
  {
    slug: "funnels-websites",
    name: "Funnels & Websites",
    tagline: "Pages that turn the right traffic into enquiries.",
    introduction:
      "I build fast, clear landing pages and websites with conversion paths that turn the right traffic into measurable enquiries and booked calls. Each page is connected to your CRM and tracking so you can see what is working and follow up quickly.",
    included: [
      "Landing pages",
      "Website builds",
      "Forms and enquiry capture",
      "Conversion tracking",
      "Connection to CRM follow-up",
    ],
    approachTitle: "How I approach it",
    approachBody:
      "I focus on clarity and speed first — a clear message, a single next step, and pages that load quickly. Forms and tracking are connected to your CRM so every enquiry has a follow-up path, and the layout is built to stay readable on mobile where most of your traffic actually lands.",
    faqs: [
      {
        question: "Do you build full websites or just landing pages?",
        answer:
          "Both. I build focused landing pages for campaigns as well as larger website builds, depending on what you need to support your lead flow.",
      },
      {
        question: "Will the pages connect to my CRM?",
        answer:
          "Yes. Forms and enquiry capture are connected to your CRM so each enquiry has a follow-up path and a clear record.",
      },
      {
        question: "Can you work with my existing website?",
        answer:
          "Where it makes sense, I can build standalone landing pages alongside an existing site, or rebuild sections that need to convert better.",
      },
    ],
    related: ["ads", "crm-setup"],
  },
  {
    slug: "ads",
    name: "Google & Meta Ads",
    tagline: "Campaigns tied to lead tracking and follow-up.",
    introduction:
      "I set up and optimise Google and Meta ad campaigns that are tied to lead tracking, CRM follow-up, and realistic business goals. The focus is on generating enquiries you can actually act on, not just clicks.",
    included: [
      "Google Ads setup",
      "Meta Ads setup",
      "Conversion tracking",
      "Connection to CRM follow-up",
      "Ongoing optimisation",
    ],
    approachTitle: "How I approach it",
    approachBody:
      "I start with realistic goals and the enquiries you actually want, then build campaigns and tracking around those outcomes. Conversion tracking is connected to your CRM so you can see which campaigns produce follow-up-worthy leads, and optimisation focuses on cost per real enquiry rather than surface metrics.",
    faqs: [
      {
        question: "Do you guarantee a specific number of leads?",
        answer:
          "No. I don't guarantee specific lead numbers or results. I focus on setup, tracking, and optimisation tied to realistic business goals.",
      },
      {
        question: "Which platforms do you work with?",
        answer:
          "Google Ads and Meta Ads. I set up campaigns, conversion tracking, and the connection to your CRM follow-up.",
      },
      {
        question: "Is ad spend included?",
        answer:
          "No. Ad spend is separate and paid directly to the platforms. I handle setup, tracking, and optimisation.",
      },
    ],
    related: ["funnels-websites", "crm-setup"],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
