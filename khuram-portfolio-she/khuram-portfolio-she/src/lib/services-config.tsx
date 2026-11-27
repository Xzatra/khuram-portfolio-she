/*
 * Shared, editable service data used by BOTH:
 *  - the homepage Services section (two-column card grid), and
 *  - the /services page (four full-width stacked cards).
 *
 * No prices, "From" labels, "/project" suffixes, or per-card CTAs — booking
 * actions live in the shared sidebar / contact section only.
 *
 * Approved content for khuramshahzad.com.
 */

export type ServiceIconName = "Crm" | "Automation" | "Funnels" | "Ads";

export type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  deliverables: string[];
  icon: ServiceIconName;
  checklist: string[];
};

export const servicesIntro =
  "I connect your CRM, automation, websites, and lead generation so each enquiry has a clear next step.";

export const servicesHeadingLines = ["GoHighLevel services", "built around your business."];

export const services: Service[] = [
  {
    id: "crm-setup",
    slug: "crm-setup",
    name: "GoHighLevel CRM Setup",
    description:
      "A practical CRM structure for contacts, pipelines, calendars, and reporting, built around how your team actually works.",
    deliverables: ["Pipelines", "Calendars", "Contact Management", "Migration"],
    icon: "Crm",
    checklist: [
      "A clear contact and pipeline structure.",
      "Calendars and reporting connected.",
      "Existing data migrated cleanly.",
    ],
  },
  {
    id: "automation-ai",
    slug: "automation-ai",
    name: "Automation & AI Agents",
    description:
      "Follow-up workflows and AI assistants that capture enquiries, answer common questions, and route conversations to the right person.",
    deliverables: ["Workflows", "Email & SMS", "AI Chat", "Lead Qualification"],
    icon: "Automation",
    checklist: [
      "Timely follow-up workflows.",
      "Email and SMS sequences.",
      "AI chat for common questions.",
    ],
  },
  {
    id: "funnels-websites",
    slug: "funnels-websites",
    name: "Funnels & Websites",
    description:
      "Fast, clear pages and conversion paths that turn the right traffic into measurable enquiries and booked calls.",
    deliverables: ["Landing Pages", "Websites", "Forms", "Tracking"],
    icon: "Funnels",
    checklist: [
      "Fast, clear landing pages.",
      "Conversion paths to booked calls.",
      "Forms and tracking connected.",
    ],
  },
  {
    id: "ads",
    slug: "ads",
    name: "Google & Meta Ads",
    description:
      "Campaign setup and optimisation tied to lead tracking, CRM follow-up, and realistic business goals.",
    deliverables: ["Google Ads", "Meta Ads", "Conversion Tracking", "Follow-up"],
    icon: "Ads",
    checklist: [
      "Campaign setup and optimisation.",
      "Conversion tracking connected.",
      "Tied to CRM follow-up.",
    ],
  },
];

/* ── Shared icon glyphs (thin outline, rounded caps) ── */

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "Crm":
      return (
        <svg {...common}>
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      );
    case "Automation":
      return (
        <svg {...common}>
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "Funnels":
      return (
        <svg {...common}>
          <path d="M3 4h18l-7 8v6l-4 2v-8L3 4Z" />
        </svg>
      );
    case "Ads":
      return (
        <svg {...common}>
          <path d="M3 12a9 9 0 1 0 9-9" />
          <path d="M3 4v5h5" />
          <path d="m12 9 3 4-4 1 1-5Z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── Shared deliverable pill ── */
export function DeliverablePill({ label }: { label: string }) {
  return (
    <span
      className="svc-pill inline-flex items-center text-center whitespace-nowrap"
      style={{
        height: "clamp(34px, 4.5vw, 40px)",
        padding: "0 clamp(12px, 2vw, 16px)",
        borderRadius: "100px",
        background: "rgba(21,21,21,0.05)",
        fontSize: "clamp(13px, 1.6vw, 16px)",
        lineHeight: "20px",
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  );
}
