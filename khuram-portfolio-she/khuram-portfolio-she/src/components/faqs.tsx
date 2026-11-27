import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { RollingLink } from "@/components/rolling-button";

/*
 * FAQs section (Section 10).
 *
 * Contained layout (max-width 1000px), two equal grid columns (16px gap):
 *  - Left: "FAQ" label + introduction (max-width 305px), email invitation near
 *    the bottom (space-between on desktop).
 *  - Right: accordion filling its grid column (492px at full container width).
 *
 * Each accordion item is a horizontal flex row: inner text card (#FAFAFA,
 * radius 24px, padding 16px, inner shadow) holds BOTH the question and the
 * expandable answer; the 40px circular toggle sits separately on the right.
 * The plus icon rotates 45deg when open.
 *
 * Answers are short editable demo text — not real business commitments.
 */

type Faq = {
  id: string;
  question: string;
  answer: string;
};

const faqsConfig = {
  label: "FAQ",
  intro: "Questions before we build?",
  emailPrompt: "Still have a question? Send me an email",
  emailLabel: "Send Me Email",
  emailHref: "mailto:support@kdmgrowth.com",
  // FAQ CTA goes to /book (strategy call).
  ctaHref: "/book",
  items: [
    {
      id: "q1",
      question: "Can you improve an existing GoHighLevel account?",
      answer:
        "Yes. I can audit your current setup, identify gaps in pipelines, calendars, workflows and follow-up, then improve the parts that matter most.",
    },
    {
      id: "q2",
      question: "Do you build everything from scratch?",
      answer:
        "No. I can work with your current account, website and campaigns, or plan a new setup when that is the better fit.",
    },
    {
      id: "q3",
      question: "Will my team know how to use the system?",
      answer:
        "The handover includes clear guidance on the stages, tasks and automations your team will use.",
    },
    {
      id: "q4",
      question: "How do we start?",
      answer:
        "Book a strategy call and share your current tools, lead sources and main bottleneck. We will agree on a practical scope before implementation.",
    },
  ] as Faq[],
};

function FaqItem({ item, isOpen, onToggle }: { item: Faq; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="faq-item">
      {/* Inner text card: question + expandable answer */}
      <div className="faq-inner">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${item.id}`}
          id={`faq-trigger-${item.id}`}
          className="faq-question-btn"
        >
          <span className="faq-question">{item.question}</span>
        </button>

        {/* Answer: animated height via grid-rows trick, inside the inner card */}
        <div
          id={`faq-panel-${item.id}`}
          role="region"
          aria-labelledby={`faq-trigger-${item.id}`}
          className="faq-panel"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="faq-panel-overflow">
            <p className="faq-answer">{item.answer}</p>
          </div>
        </div>
      </div>

      {/* Separate 40px circular toggle on the right */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${item.id}`}
        aria-label={`${isOpen ? "Collapse" : "Expand"} answer to: ${item.question}`}
        className="faq-toggle"
      >
        <Plus
          className="faq-toggle-icon"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        />
      </button>
    </div>
  );
}

export function Faqs() {
  // Open the second item initially (index 1).
  const [openId, setOpenId] = useState<string | null>(faqsConfig.items[1]?.id ?? null);
  const sectionRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setReady(true);
    const node = sectionRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`faq-section w-full${ready ? " faq-ready" : ""}`}
      aria-labelledby="faq-heading"
    >
      <div className="faq-inner-wrapper">
        {/* ── Centred introduction ── */}
        <div className={`faq-intro-group faq-reveal${inView ? " is-visible" : ""}`}>
          <h2 id="faq-heading" className="faq-intro">
            {faqsConfig.intro}
          </h2>
        </div>

        {/* ── Accordion (centred, max-width) ── */}
        <div className={`faq-accordion faq-reveal${inView ? " is-visible" : ""}`}>
          {faqsConfig.items.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* ── Email invitation (centred, below the accordion) ── */}
        <div className={`faq-email-group faq-reveal${inView ? " is-visible" : ""}`}>
          <p className="faq-email-prompt">{faqsConfig.emailPrompt}</p>
          <RollingLink label={faqsConfig.emailLabel} href={faqsConfig.ctaHref} />
        </div>
      </div>

      {/* ── Component-scoped styles ── */}
      <style>{`
        /* Outer section: white, 80px 24px desktop/tablet; 48px 16px mobile */
        .faq-section {
          padding: 80px 24px;
          background: #ffffff;
          box-sizing: border-box;
        }

        /* Centred inner wrapper — max-width 1000px */
        .faq-inner-wrapper {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
          box-sizing: border-box;
        }

        /* Centred introduction group */
        .faq-intro-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 624px;
          margin-inline: auto;
          margin-bottom: 48px;
        }

        /* Introduction: 24px/28px weight 500, -0.72px, #09090B, centred */
        .faq-intro {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 24px;
          line-height: 28px;
          font-weight: 500;
          letter-spacing: -0.72px;
          color: #09090b;
          text-align: center;
        }

        /* Accordion — centred, max-width 492px */
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 492px;
          margin-inline: auto;
          min-width: 0;
        }

        /* Email invitation — centred below accordion, 48px gap */
        .faq-email-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          text-align: center;
          margin-top: 48px;
        }
        .faq-email-prompt {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525b;
        }

        /* Outer item: #F4F4F5, padding 8px, radius 32px, flex row, align center, gap 12px */
        .faq-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          padding: 8px;
          background: #f4f4f5;
          border-radius: 32px;
          box-sizing: border-box;
        }

        /* Inner text card: flex 1, min-width 0, #FAFAFA, radius 24px, padding 16px, inner shadow */
        .faq-inner {
          flex: 1 1 auto;
          min-width: 0;
          background: #fafafa;
          border-radius: 24px;
          padding: 16px;
          box-sizing: border-box;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        /* Question button (full width, no default styling) */
        .faq-question-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          font: inherit;
          color: inherit;
          border-radius: 16px;
        }
        .faq-question-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a;
        }

        /* Question: 16px/20px, weight 500, -0.32px, #09090B */
        .faq-question {
          display: block;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.32px;
          color: #09090b;
        }

        /* Answer panel: grid-rows trick for smooth height animation */
        .faq-panel {
          display: grid;
          transition: grid-template-rows 250ms ease-out;
        }
        .faq-panel-overflow {
          overflow: hidden;
        }
        /* Answer: 14px/20px, weight 400, -0.28px, #52525B; 2px gap from question */
        .faq-answer {
          margin: 2px 0 0 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525b;
        }

        /* Right toggle: 40px square, circular, transparent background, dark plus icon */
        .faq-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 9999px;
          background: transparent;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          color: #09090b;
          transition: background-color 200ms ease;
        }
        .faq-toggle:hover {
          background-color: rgba(21, 21, 21, 0.05);
        }
        .faq-toggle:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a;
        }
        .faq-toggle-icon {
          width: 18px;
          height: 18px;
          transition: transform 250ms ease-out;
        }

        /* ── Entrance reveal (content visible by default) ──
         * Hidden starting state applies ONLY when faq-ready is present. */
        .faq-ready .faq-reveal {
          opacity: 0;
          transform: translateY(12px);
          will-change: transform, opacity;
        }
        .faq-reveal.is-visible {
          animation: faq-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .faq-accordion.faq-reveal.is-visible {
          animation-delay: 120ms;
        }
        .faq-email-group.faq-reveal.is-visible {
          animation-delay: 200ms;
        }
        @keyframes faq-fade-up {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-ready .faq-reveal,
          .faq-reveal {
            opacity: 1;
            transform: none;
            animation: none;
          }
          .faq-panel {
            transition: none;
          }
          .faq-toggle-icon {
            transition: none;
          }
        }

        /* ── Tablet (810px–1199px) ── */
        @media (min-width: 810px) and (max-width: 1199px) {
          .faq-intro {
            font-size: 22px;
            line-height: 25.67px;
            letter-spacing: -0.66px;
          }
        }

        /* ── Mobile (<810px): centred, 48px between intro and accordion ── */
        @media (max-width: 809px) {
          .faq-section {
            padding: 48px 16px;
          }
          .faq-intro {
            font-size: 20px;
            line-height: 23.33px;
            letter-spacing: -0.6px;
          }
          .faq-email-group {
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  );
}
