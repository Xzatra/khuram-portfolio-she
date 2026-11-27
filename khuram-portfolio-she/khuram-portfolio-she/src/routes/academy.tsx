import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { ArrowUpRight, Plus } from "lucide-react";

/*
 * /academy — GHL Growth Success Academy overview.
 *
 * Reuses the shared shell (sticky LEFT sidebar, gutters, dotted texture,
 * responsive black header, top status bar) and the shared footer once.
 *
 * This page guides visitors to the existing academy enrolment/waitlist site
 * (https://kdmgrowth.academy/) — it does NOT invent an on-site checkout,
 * specific class weekdays, pricing, or income guarantees.
 */

const SATOSHI = '"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const academyConfig = {
  label: "Academy",
  h1: "Learn GoHighLevel by building real client systems.",
  subhead:
    "GHL Growth Success Academy is Khuram Shahzad’s hands-on, eight-week training for people who want to turn GoHighLevel skills into client-ready work.",
  exploreHref: "https://kdmgrowth.academy/",
  exploreLabel: "Explore the Academy",
  askHref: "/contact",
  askLabel: "Ask a question",
};

type BuildCard = {
  id: string;
  title: string;
  desc: string;
};

const buildCards: BuildCard[] = [
  {
    id: "crm-pipelines",
    title: "CRM & Pipelines",
    desc: "Contacts, opportunities, and calendars — set up the way a real team uses them.",
  },
  {
    id: "funnels-websites",
    title: "Funnels & Websites",
    desc: "Lead capture and conversion paths that turn the right traffic into booked calls.",
  },
  {
    id: "workflows-ai",
    title: "Workflows & AI",
    desc: "Follow-up sequences and conversational assistants that keep leads moving.",
  },
  {
    id: "client-delivery",
    title: "Client Delivery",
    desc: "Testing, handover, and a portfolio plus service offers you can actually use.",
  },
];

const formatPoints: string[] = [
  "8 weeks",
  "3 live classes each week",
  "Weekly Q&A and assignments",
  "Templates, community and feedback",
];

const whoItsFor: string[] = [
  "Beginners who want a clear path from first login to client-ready work.",
  "Freelancers adding GoHighLevel as a billable service.",
  "Agency team members who build and hand off systems.",
  "Business owners managing their own CRM and follow-up.",
];

type AcademyFaq = {
  id: string;
  question: string;
  answer: string;
};

const academyFaqs: AcademyFaq[] = [
  {
    id: "prereqs",
    question: "Do I need experience before I start?",
    answer:
      "No. We begin with the foundations — how contacts, pipelines and calendars fit together — so you can follow even if this is your first time inside the platform.",
  },
  {
    id: "live",
    question: "Is the training live or pre-recorded?",
    answer:
      "It’s live. Three classes each week walk through real builds, and a weekly Q&A gives you space to ask about your own setup as you go.",
  },
  {
    id: "feedback",
    question: "Will I get feedback on my assignments?",
    answer:
      "Yes. Each week has an assignment based on a real client scenario, and you’ll get notes on what’s working and what to tighten before you move on.",
  },
];

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      {
        title:
          "GHL Growth Success Academy — Learn GoHighLevel by building real systems | Khuram Shahzad",
      },
      {
        name: "description",
        content:
          "GHL Growth Success Academy is Khuram Shahzad’s hands-on, eight-week training for building real GoHighLevel CRM systems, funnels, and AI automations into client-ready work.",
      },
      {
        property: "og:title",
        content: "GHL Growth Success Academy — Khuram Shahzad",
      },
      {
        property: "og:description",
        content:
          "An eight-week, hands-on GoHighLevel training: CRM, pipelines, funnels, workflows, AI, and client delivery. Learn by building real client systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
  component: AcademyPage,
});

function AcademyPage() {
  return (
    <div className="relative min-h-screen w-full selection:bg-neutral-900 selection:text-white">
      {/* Decorative dotted-texture background layer (gutters only) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-dotted-texture hidden sm:block"
      />

      {/* Centred page frame */}
      <div className="relative z-10 mx-auto bg-white border-x border-[#E4E4E7] flex flex-col min-h-screen w-[calc(100%-144px)] max-lg:w-[calc(100%-32px)] max-sm:w-[calc(100%-16px)]">
        <MobileHeaderAndMenu />

        <div className="flex-1 flex flex-col lg:flex-row relative w-full">
          {/* Desktop LEFT sidebar */}
          <aside
            className="hidden lg:block w-[304px] shrink-0 p-4 relative bg-white self-stretch"
            aria-label="Desktop Profile Sidebar Container"
          >
            <div className="sticky top-4 h-[calc(100dvh-32px)] w-full z-20">
              <ProfileSidebar />
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 flex flex-col border-t border-[#E4E4E7] lg:border-t-0 lg:border-l lg:border-[#E4E4E7]">
            <TopStatusBar />

            <AcademyHero />
            <AcademyBuild />
            <AcademyFormat />
            <AcademyWho />
            <AcademyFaqs />
            <AcademyCta />

            {/* Shared footer (single instance) */}
            <ContactFooter />
          </main>
        </div>
      </div>

      <style>{`
        .academy-section { width: 100%; background: #ffffff; box-sizing: border-box; }
        .academy-inner { width: 100%; max-width: 1000px; margin-inline: auto; min-width: 0; box-sizing: border-box; }

        /* ── Hero ── */
        .academy-hero { padding: 80px 24px 0; }
        .academy-hero .academy-inner { display: flex; flex-direction: column; align-items: flex-start; }
        .academy-hero-h1 { margin: 12px 0 0; max-width: 720px; font-family: ${SATOSHI}; font-size: clamp(32px, 4.2vw, 48px); line-height: clamp(34.67px, 4.6vw, 52px); font-weight: 500; letter-spacing: -0.05em; color: #09090b; }
        .academy-hero-sub { margin: 24px 0 0; max-width: 620px; font-family: ${SATOSHI}; font-size: 16px; line-height: 24px; font-weight: 400; letter-spacing: -0.32px; color: #52525b; }

        /* ── Build cards ── */
        .academy-build { padding: 80px 24px 0; }
        .academy-build-head { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
        .academy-build-h2 { margin: 0; font-family: ${SATOSHI}; font-size: clamp(24px, 2.6vw, 32px); line-height: clamp(28px, 3vw, 36px); font-weight: 500; letter-spacing: -0.02em; color: #09090b; }
        .academy-build-grid { margin-top: 48px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; width: 100%; }
        .academy-build-card { position: relative; isolation: isolate; background: #f4f4f5; border-radius: 32px; padding: 28px; box-sizing: border-box; transition: background-color 300ms ease, box-shadow 300ms ease; }
        .academy-build-card-h3 { margin: 0; font-family: ${SATOSHI}; font-size: 24px; line-height: 28px; font-weight: 500; letter-spacing: -0.02em; color: #09090b; }
        .academy-build-card-p { margin: 8px 0 0; font-family: ${SATOSHI}; font-size: 16px; line-height: 24px; font-weight: 400; letter-spacing: -0.32px; color: #52525b; }
        .academy-build-card-num { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 9999px; background: #27272a; color: #fff; font-family: ${SATOSHI}; font-size: 14px; font-weight: 500; margin-bottom: 20px; }

        /* ── Format panel ── */
        .academy-format { padding: 80px 24px 0; }
        .academy-format-panel { width: 100%; background: #f4f4f5; border-radius: 56px; padding: 32px; box-sizing: border-box; }
        .academy-format-h2 { margin: 0; font-family: ${SATOSHI}; font-size: 24px; line-height: 28px; font-weight: 500; letter-spacing: -0.02em; color: #09090b; }
        .academy-format-grid { margin-top: 24px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .academy-format-item { display: flex; align-items: center; gap: 12px; min-height: 56px; padding: 16px 20px; background: #fafafa; border-radius: 24px; font-family: ${SATOSHI}; font-size: 16px; line-height: 20px; font-weight: 500; letter-spacing: -0.32px; color: #09090b; box-sizing: border-box; }
        .academy-format-dot { width: 8px; height: 8px; flex-shrink: 0; border-radius: 9999px; background: #09090b; }

        /* ── Who it's for ── */
        .academy-who { padding: 80px 24px 0; }
        .academy-who-head { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
        .academy-who-h2 { margin: 0; font-family: ${SATOSHI}; font-size: clamp(24px, 2.6vw, 32px); line-height: clamp(28px, 3vw, 36px); font-weight: 500; letter-spacing: -0.02em; color: #09090b; }
        .academy-who-grid { margin-top: 48px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .academy-who-card { display: flex; align-items: flex-start; gap: 16px; padding: 24px; background: #fafafa; border-radius: 32px; box-sizing: border-box; }
        .academy-who-tile { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; flex-shrink: 0; border-radius: 12px; background: #f4f4f5; color: #09090b; }
        .academy-who-text { margin: 0; font-family: ${SATOSHI}; font-size: 16px; line-height: 24px; font-weight: 400; letter-spacing: -0.32px; color: #52525b; }

        /* ── FAQ ── */
        .academy-faqs { padding: 80px 24px 0; }
        .academy-faqs-h2 { margin: 12px 0 0; font-family: ${SATOSHI}; font-size: clamp(24px, 2.6vw, 32px); line-height: clamp(28px, 3vw, 36px); font-weight: 500; letter-spacing: -0.02em; color: #09090b; }
        .academy-faqs-list { margin-top: 48px; display: flex; flex-direction: column; gap: 12px; }
        .academy-faq-item { display: flex; flex-direction: row; align-items: flex-start; gap: 12px; padding: 8px; background: #f4f4f5; border-radius: 32px; box-sizing: border-box; }
        .academy-faq-inner { flex: 1 1 auto; min-width: 0; background: #fafafa; border-radius: 24px; padding: 16px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); box-sizing: border-box; }
        .academy-faq-q-btn { display: block; width: 100%; text-align: left; background: transparent; border: none; padding: 0; margin: 0; cursor: pointer; font: inherit; color: inherit; border-radius: 16px; }
        .academy-faq-q-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a; }
        .academy-faq-q { display: block; font-family: ${SATOSHI}; font-size: 16px; line-height: 20px; font-weight: 500; letter-spacing: -0.32px; color: #09090b; }
        .academy-faq-panel { display: grid; transition: grid-template-rows 250ms ease-out; }
        .academy-faq-panel-overflow { overflow: hidden; }
        .academy-faq-a { margin: 2px 0 0 0; font-family: ${SATOSHI}; font-size: 14px; line-height: 20px; font-weight: 400; letter-spacing: -0.28px; color: #52525b; }
        .academy-faq-toggle { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; flex-shrink: 0; border-radius: 9999px; background: transparent; border: none; padding: 0; cursor: pointer; color: #09090b; transition: background-color 200ms ease; margin-top: 4px; }
        .academy-faq-toggle:hover { background-color: rgba(21,21,21,0.05); }
        .academy-faq-toggle:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a; }
        .academy-faq-toggle-icon { width: 18px; height: 18px; transition: transform 250ms ease-out; }

        /* ── CTA ── */
        .academy-cta { padding: 80px 24px; }
        .academy-cta-panel { width: 100%; background: #f4f4f5; border-radius: 56px; padding: 48px 32px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px; }
        .academy-cta-h2 { margin: 0; max-width: 560px; font-family: ${SATOSHI}; font-size: clamp(24px, 2.8vw, 32px); line-height: clamp(28px, 3.2vw, 36px); font-weight: 500; letter-spacing: -0.02em; color: #09090b; }
        .academy-cta-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
        .academy-cta-primary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 40px; padding: 0 24px; border-radius: 10px; background: #27272a; color: #fff; font-family: ${SATOSHI}; font-size: 14px; line-height: 20px; font-weight: 500; letter-spacing: -0.28px; box-shadow: inset 0 3px 1px rgba(255,255,255,0.1); transition: all 200ms ease; text-decoration: none; }
        .academy-cta-primary:hover { background: #1f1f22; transform: translateY(-1px); }
        .academy-cta-primary:focus-visible { outline: none; box-shadow: inset 0 3px 1px rgba(255,255,255,0.1), 0 0 0 2px #fff, 0 0 0 4px #27272a; }
        .academy-cta-secondary { display: inline-flex; align-items: center; justify-content: center; height: 40px; padding: 0 24px; border-radius: 10px; background: #fff; color: #09090b; font-family: ${SATOSHI}; font-size: 14px; line-height: 20px; font-weight: 500; letter-spacing: -0.28px; border: 1px solid #e4e4e7; transition: all 200ms ease; text-decoration: none; }
        .academy-cta-secondary:hover { background: #fafafa; }
        .academy-cta-secondary:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a; }

        /* ── Entrance reveal ── */
        @keyframes academy-rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .academy-reveal { animation: academy-rise 600ms ease-out both; }

        /* ── Responsive ── */
        @media (max-width: 1199px) {
          .academy-hero-h1 { font-size: 40px; line-height: 44px; }
        }
        @media (max-width: 809px) {
          .academy-hero, .academy-build, .academy-format, .academy-who, .academy-faqs, .academy-cta { padding-left: 16px; padding-right: 16px; }
          .academy-hero { padding-top: 48px; }
          .academy-build, .academy-format, .academy-who, .academy-faqs { padding-top: 48px; }
          .academy-cta { padding: 48px 16px; }
          .academy-hero-h1 { font-size: 32px; line-height: 34.67px; letter-spacing: -1.6px; }
          .academy-build-h2, .academy-who-h2, .academy-faqs-h2 { font-size: 24px; line-height: 28px; }
          .academy-build-grid, .academy-who-grid { grid-template-columns: 1fr; }
          .academy-format-grid { grid-template-columns: 1fr; }
          .academy-format-panel { padding: 24px; border-radius: 32px; }
          .academy-build-card { border-radius: 24px; padding: 20px; }
          .academy-cta-panel { padding: 32px 20px; border-radius: 32px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .academy-reveal, .academy-faq-panel, .academy-faq-toggle-icon { animation: none; transition: none; opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

function AcademyHero() {
  return (
    <section className="academy-section academy-hero" aria-labelledby="academy-heading">
      <div className="academy-inner academy-reveal">
        <span className="section-label">{academyConfig.label}</span>
        <h1 id="academy-heading" className="academy-hero-h1">
          {academyConfig.h1}
        </h1>
        <p className="academy-hero-sub">{academyConfig.subhead}</p>
      </div>
    </section>
  );
}

function AcademyBuild() {
  return (
    <section className="academy-section academy-build" aria-labelledby="academy-build-heading">
      <div className="academy-inner">
        <div className="academy-build-head">
          <span className="section-label">What you will build</span>
          <h2 id="academy-build-heading" className="academy-build-h2">
            Four real client systems, one cohort.
          </h2>
        </div>
        <div className="academy-build-grid">
          {buildCards.map((card, i) => (
            <div
              className="academy-build-card academy-reveal"
              key={card.id}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="academy-build-card-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="academy-build-card-h3">{card.title}</h3>
              <p className="academy-build-card-p">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyFormat() {
  return (
    <section className="academy-section academy-format" aria-labelledby="academy-format-heading">
      <div className="academy-inner">
        <div className="academy-format-panel academy-reveal">
          <span className="section-label" style={{ background: "#27272a", color: "#fff" }}>
            Format
          </span>
          <h2 id="academy-format-heading" className="academy-format-h2" style={{ marginTop: 12 }}>
            How the cohort runs
          </h2>
          <div className="academy-format-grid">
            {formatPoints.map((point) => (
              <div className="academy-format-item" key={point}>
                <span className="academy-format-dot" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AcademyWho() {
  return (
    <section className="academy-section academy-who" aria-labelledby="academy-who-heading">
      <div className="academy-inner">
        <div className="academy-who-head">
          <span className="section-label">Who it is for</span>
          <h2 id="academy-who-heading" className="academy-who-h2">
            Built for people who ship.
          </h2>
        </div>
        <div className="academy-who-grid">
          {whoItsFor.map((line, i) => (
            <div
              className="academy-who-card academy-reveal"
              key={line}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="academy-who-tile" aria-hidden="true">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </span>
              <p className="academy-who-text">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyFaqRow({
  faq,
  isOpen,
  onToggle,
}: {
  faq: AcademyFaq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="academy-faq-item">
      <div className="academy-faq-inner">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`academy-faq-panel-${faq.id}`}
          id={`academy-faq-trigger-${faq.id}`}
          className="academy-faq-q-btn"
        >
          <span className="academy-faq-q">{faq.question}</span>
        </button>
        <div
          id={`academy-faq-panel-${faq.id}`}
          role="region"
          aria-labelledby={`academy-faq-trigger-${faq.id}`}
          className="academy-faq-panel"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="academy-faq-panel-overflow">
            <p className="academy-faq-a">{faq.answer}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`academy-faq-panel-${faq.id}`}
        aria-label={`${isOpen ? "Collapse" : "Expand"} answer to: ${faq.question}`}
        className="academy-faq-toggle"
      >
        <Plus
          className="academy-faq-toggle-icon"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        />
      </button>
    </div>
  );
}

function AcademyFaqs() {
  const [openId, setOpenId] = useState<string | null>(academyFaqs[0]?.id ?? null);

  return (
    <section className="academy-section academy-faqs" aria-labelledby="academy-faqs-heading">
      <div className="academy-inner">
        <span className="section-label">FAQ</span>
        <h2 id="academy-faqs-heading" className="academy-faqs-h2">
          Before you join
        </h2>
        <div className="academy-faqs-list">
          {academyFaqs.map((faq) => (
            <AcademyFaqRow
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademyCta() {
  return (
    <section className="academy-section academy-cta" aria-labelledby="academy-cta-heading">
      <div className="academy-inner">
        <div className="academy-cta-panel">
          <h2 id="academy-cta-heading" className="academy-cta-h2">
            Ready to build real client systems?
          </h2>
          <div className="academy-cta-row">
            <a
              href={academyConfig.exploreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="academy-cta-primary"
            >
              {academyConfig.exploreLabel}
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <Link to={academyConfig.askHref} className="academy-cta-secondary">
              {academyConfig.askLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
