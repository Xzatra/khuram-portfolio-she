import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import type { LegalPageConfig } from "@/lib/legal-config";

/*
 * Reusable legal page template — Privacy Policy & Terms of Service.
 *
 * Uses the shared shell (sticky LEFT sidebar, gutters, dotted texture,
 * responsive black header, top status bar) which is provided by the
 * route file that renders <LegalPage config={...} /> inside its <main>.
 *
 * Layout:
 *  - Hero: 64px 24px padding, centred 1000px wrapper, breadcrumb + title.
 *  - Body: 80px 24px padding, centred 1000px wrapper, numbered policy blocks.
 *  - Entrance reveals via .legal-reveal + IntersectionObserver (useInView).
 *  - Content visible by default; hidden starting styles only applied once
 *    the observer initializes (inView flips on first viewport entry).
 */

export function LegalPage({ config }: { config: LegalPageConfig }) {
  const { ref: heroRef, inView: heroIn } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: bodyRef, inView: bodyIn } = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="legal-hero" aria-labelledby="legal-title">
        <div className="legal-hero-inner">
          <div className={`legal-hero-reveal ${heroIn ? "is-visible" : ""}`}>
            {/* Breadcrumb */}
            <nav className="legal-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="legal-crumb-link">
                Home
              </Link>
              <ChevronRight className="legal-crumb-sep" aria-hidden="true" />
              <span className="legal-crumb-current">{config.breadcrumb}</span>
            </nav>

            {/* Title — one semantic H1 */}
            <h1 id="legal-title" className="legal-title">
              {config.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Policy body ── */}
      <section ref={bodyRef} className="legal-body" aria-label={`${config.title} body`}>
        <div className="legal-body-inner">
          {config.blocks.map((block, idx) => (
            <article
              key={block.number}
              className={`legal-block ${bodyIn ? "is-visible" : ""}`}
              style={{ ["--legal-block-delay" as string]: `${idx * 60}ms` }}
            >
              <div className="legal-block-head">
                {/* Numbered pill */}
                <span className="legal-num-pill" aria-hidden="true">
                  {block.number}
                </span>
                {/* Block heading (h2 — one H1 above) */}
                <h2 className="legal-block-heading">{block.heading}</h2>
              </div>

              <div className="legal-block-content">
                {block.content.map((item, i) => {
                  if (item.type === "subheading") {
                    return (
                      <h3 key={i} className="legal-subheading">
                        {item.text}
                      </h3>
                    );
                  }
                  if (item.type === "list") {
                    return (
                      <ul key={i} className="legal-list">
                        {item.items?.map((li, j) => (
                          <li key={j} className="legal-list-item">
                            <span className="legal-list-marker" aria-hidden="true" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="legal-paragraph">
                      {item.text}
                    </p>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        /* ── Hero ──
         * Outer padding 64px 24px, centred 1000px wrapper.
         * Breadcrumb 16px gap above the title (controlled by the group gap). */
        .legal-hero {
          width: 100%;
          padding: 64px 24px;
          background: #ffffff;
          box-sizing: border-box;
        }
        .legal-hero-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
        }
        .legal-hero-reveal {
          display: flex;
          flex-direction: column;
          gap: 16px;
          opacity: 1;
          transform: none;
        }
        .legal-hero-reveal.is-visible {
          opacity: 1;
          transform: none;
        }

        /* Breadcrumb: 14px/20px, muted grey */
        .legal-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #a1a1aa;
        }
        .legal-crumb-link {
          color: #a1a1aa;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .legal-crumb-link:hover {
          color: #52525b;
        }
        .legal-crumb-link:focus-visible {
          outline: 2px solid #27272a;
          outline-offset: 2px;
          border-radius: 4px;
        }
        .legal-crumb-sep {
          width: 14px;
          height: 14px;
          color: #a1a1aa;
          flex-shrink: 0;
        }
        .legal-crumb-current {
          color: #52525b;
        }

        /* Title: 64px/64px, weight 500, -3.2px, #09090B */
        .legal-title {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 64px;
          line-height: 64px;
          font-weight: 500;
          letter-spacing: -3.2px;
          color: #09090b;
        }

        /* ── Body ──
         * Outer padding 80px 24px, centred 1000px wrapper, 64px gap between blocks. */
        .legal-body {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          box-sizing: border-box;
        }
        .legal-body-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        /* Each policy block */
        .legal-block {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Number pill + heading row */
        .legal-block-head {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .legal-num-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          padding: 0 16px;
          border-radius: 100px;
          background: #f4f4f5;
          color: #09090b;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          flex-shrink: 0;
        }
        .legal-block-heading {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 24px;
          line-height: 28px;
          font-weight: 500;
          letter-spacing: -0.72px;
          color: #09090b;
        }

        /* Block content: 16px gap between heading and supporting content */
        .legal-block-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .legal-paragraph {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          letter-spacing: -0.32px;
          color: #52525b;
        }
        .legal-subheading {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 18px;
          line-height: 23.4px;
          font-weight: 500;
          letter-spacing: -0.36px;
          color: #09090b;
        }

        /* Lists: readable indentation + spacing */
        .legal-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .legal-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          letter-spacing: -0.32px;
          color: #52525b;
          padding-left: 4px;
        }
        .legal-list-marker {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #a1a1aa;
          margin-top: 10px;
          flex-shrink: 0;
        }

        /* ── Entrance reveal ──
         * Hidden starting state only when the observer has NOT yet fired.
         * Once inView is true, .is-visible animates to opacity 1 / translateY 0.
         * Reduced motion shows everything immediately. */
        @keyframes legal-fade-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .legal-block {
          opacity: 0;
        }
        .legal-block.is-visible {
          opacity: 1;
          animation: legal-fade-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--legal-block-delay, 0ms);
        }
        .legal-hero-reveal {
          opacity: 0;
        }
        .legal-hero-reveal.is-visible {
          opacity: 1;
          animation: legal-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .legal-block,
          .legal-hero-reveal {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        /* ── Tablet ── */
        @media (max-width: 1199px) {
          .legal-title {
            font-size: 48px;
            line-height: 48px;
            letter-spacing: -2.4px;
          }
        }

        /* ── Mobile (<810px) ──
         * 16px horizontal padding, 120px top clearance for compact header,
         * 48px vertical body padding, readable text. */
        @media (max-width: 809px) {
          .legal-hero {
            padding: 120px 16px 48px;
          }
          .legal-body {
            padding: 48px 16px 64px;
          }
          .legal-title {
            font-size: 36px;
            line-height: 36px;
            letter-spacing: -1.8px;
          }
          .legal-body-inner {
            gap: 48px;
          }
          .legal-block {
            gap: 20px;
          }
          .legal-block-head {
            gap: 12px;
            align-items: flex-start;
          }
          /* Keep long links/headings from overflowing on narrow screens */
          .legal-paragraph,
          .legal-list-item,
          .legal-block-heading,
          .legal-subheading,
          .legal-crumb-link,
          .legal-crumb-current {
            overflow-wrap: break-word;
            word-break: break-word;
          }
        }
      `}</style>
    </>
  );
}
