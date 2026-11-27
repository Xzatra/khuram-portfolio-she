import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

/*
 * Philosophy section (Section 6).
 * Built inside the existing main content column using the shared design system.
 *
 * Contained image panel (max-width 1000px, centred), 592px tall, 56px radius,
 * overflow hidden. Background image fills with object-fit cover; a 20% black
 * overlay sits beneath the content. White pill label at the upper-left; a
 * lower content group (heading + divider + two-column paragraphs) sits at the
 * bottom via flex space-between.
 *
 * Reveal robustness: content is visible by default. The initial hidden state
 * (opacity:0 + translateY) is applied ONLY once the observer is confirmed
 * ready (the `philosophy-ready` class is added after mount). If JS or the
 * IntersectionObserver is unavailable, content stays fully visible.
 *
 * Copy is temporary demo content — kept in config and clearly flagged.
 */

const philosophyConfig = {
  label: "My Approach",
  heading: "Good tools need a clear process.",
  image:
    "https://framerusercontent.com/images/IwoXfJfRggqjtSrLAkLMh6kf3JU.png?width=936&height=640",
  imageAlt: "Abstract dark studio backdrop used as the philosophy panel cover",
  paragraphs: [
    "A CRM only helps when every lead has an owner, a next step, and a reliable follow-up.",
    "I connect the customer-facing pages with the behind-the-scenes system so the team can act quickly and see what is working.",
  ],
};

export function Philosophy() {
  const panel = useInView<HTMLDivElement>();
  const label = useInView<HTMLSpanElement>();
  const heading = useInView<HTMLHeadingElement>();
  const content = useInView<HTMLDivElement>();

  // `ready` becomes true only after mount, when the observers are wired up.
  // The initial hidden reveal styles are scoped under `.philosophy-ready`, so
  // content is visible by default (SSR / no-JS / no-observer fallback).
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  // Split the heading into words for the staggered word reveal.
  const headingWords = philosophyConfig.heading.split(" ");

  return (
    <section
      id="philosophy"
      className={`philosophy-section w-full${ready ? " philosophy-ready" : ""}`}
      aria-labelledby="philosophy-heading"
    >
      {/* ── Contained image panel ── */}
      <div
        ref={panel.ref}
        className={`philosophy-panel mx-auto philosophy-reveal philosophy-reveal-block ${
          panel.inView ? "is-visible" : ""
        }`}
      >
        {/* Background image (object-fit cover, object-position 50% 50%) */}
        <img
          src={philosophyConfig.image}
          alt={philosophyConfig.imageAlt}
          loading="lazy"
          className="philosophy-bg"
        />
        {/* Full-panel black overlay at 20% opacity */}
        <div aria-hidden="true" className="philosophy-overlay" />

        {/* Content layer — above the overlay. Vertical space-between. */}
        <div className="philosophy-content">
          {/* White pill label near the panel top (upper-left) */}
          <span
            ref={label.ref}
            className={`philosophy-label philosophy-reveal philosophy-reveal-sm ${
              label.inView ? "is-visible" : ""
            }`}
          >
            {philosophyConfig.label}
          </span>

          {/* Lower content group: heading + divider + paragraphs */}
          <div
            ref={content.ref}
            className={`philosophy-lower philosophy-reveal philosophy-reveal-block ${
              content.inView ? "is-visible" : ""
            }`}
            style={{ animationDelay: "120ms" }}
          >
            {/* Heading — word-by-word staggered reveal */}
            <h2 id="philosophy-heading" ref={heading.ref} className="philosophy-heading">
              {headingWords.map((word, i) => (
                <span
                  key={i}
                  className={`philosophy-word philosophy-reveal philosophy-reveal-sm ${
                    heading.inView ? "is-visible" : ""
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {word}
                  {i < headingWords.length - 1 ? "\u00A0" : ""}
                </span>
              ))}
            </h2>

            {/* Full-width horizontal divider */}
            <div aria-hidden="true" className="philosophy-divider" />

            {/* Right-aligned paragraph row, max-width 680px, two 320px columns */}
            <div className="philosophy-paragraphs">
              {philosophyConfig.paragraphs.map((para, i) => (
                <p key={i} className="philosophy-paragraph">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Component-scoped styles ── */}
      <style>
        {`
        .philosophy-section {
          /* Outer section padding: 24px desktop/tablet; 24px 16px mobile */
          padding: 24px;
        }
        @media (max-width: 809px) {
          .philosophy-section {
            padding: 24px 16px;
          }
        }

        /* ── Contained panel ── */
        .philosophy-panel {
          position: relative;
          width: 100%;
          max-width: 1000px;
          height: 592px;
          border-radius: 56px;
          overflow: hidden;
          isolation: isolate;
        }

        /* Background image fills the panel */
        .philosophy-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          z-index: 0;
        }

        /* Full-panel black overlay at 20% opacity */
        .philosophy-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        /* Content layer above the overlay */
        .philosophy-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          height: 100%;
          /* Desktop/tablet padding: 80px 24px */
          padding: 80px 24px;
        }
        @media (max-width: 809px) {
          .philosophy-content {
            /* Mobile inner panel padding: 48px 16px */
            padding: 48px 16px;
          }
        }

        /* ── White label ── */
        .philosophy-label {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          height: 36px;
          padding: 8px 14px;
          border-radius: 50px;
          background: #FFFFFF;
          color: #09090B;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          white-space: nowrap;
        }

        /* ── Lower content group — centred ── */
        .philosophy-lower {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          width: 100%;
        }

        /* Heading — centred */
        .philosophy-heading {
          margin: 0;
          color: #FFFFFF;
          font-size: 48px;
          line-height: 52px;
          font-weight: 500;
          letter-spacing: -2.4px;
          text-align: center;
          max-width: 680px;
        }
        .philosophy-word {
          display: inline;
        }

        /* Divider */
        .philosophy-divider {
          width: 100%;
          max-width: 680px;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Paragraph row: centred, max-width 680px, two 320px columns */
        .philosophy-paragraphs {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          max-width: 680px;
          margin-inline: auto;
          gap: 40px;
        }
        .philosophy-paragraph {
          margin: 0;
          color: #FFFFFF;
          text-align: left;
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.32px;
          flex: 1 1 320px;
          max-width: 320px;
        }

        /* ── Tablet ── */
        @media (max-width: 1199px) {
          .philosophy-heading {
            font-size: 40px;
            line-height: 43.33px;
            letter-spacing: -2px;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 809px) {
          .philosophy-heading {
            font-size: 32px;
            line-height: 34.67px;
            letter-spacing: -1.6px;
          }
          /* Stack paragraphs vertically with 40px gap; row becomes width:100% */
          .philosophy-paragraphs {
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            max-width: 100%;
            gap: 40px;
          }
          /* Override the desktop 320px flex-basis after switching to vertical stacking */
          .philosophy-paragraph {
            flex: 0 1 auto;
            max-width: 100%;
          }
          /* Allow the panel to grow on narrower screens rather than clip text */
          .philosophy-panel {
            height: auto;
            min-height: 592px;
          }
        }

        /* ── Entrance reveals ──
         * Initial hidden state (opacity:0 + translateY) is applied ONLY when
         * the section has class philosophy-ready (observer wired up after mount).
         * Otherwise content is fully visible by default.
         * Panel: translateY(40px). Label/words: translateY(20px).
         * Duration 600ms, easing cubic-bezier(0.22,1,0.36,1). Play once.
         */
        .philosophy-ready .philosophy-reveal {
          opacity: 0;
          will-change: transform, opacity;
        }
        .philosophy-ready .philosophy-reveal-sm {
          transform: translateY(20px);
        }
        .philosophy-ready .philosophy-reveal-block {
          transform: translateY(40px);
        }
        .philosophy-reveal.is-visible {
          animation: philosophy-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .philosophy-reveal-block.is-visible {
          animation-name: philosophy-fade-up-lg;
        }

        @keyframes philosophy-fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes philosophy-fade-up-lg {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .philosophy-reveal,
          .philosophy-reveal-sm,
          .philosophy-reveal-block {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}
      </style>
    </section>
  );
}
