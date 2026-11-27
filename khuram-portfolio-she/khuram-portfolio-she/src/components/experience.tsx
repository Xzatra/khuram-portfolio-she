import { Fragment } from "react";
import { useInView } from "@/hooks/use-in-view";

/*
 * Experience section (Section 5).
 * Built inside the existing main content column using the shared design system.
 *
 * Recreates the original timeline layout:
 *  - Centred header group (label + heading)
 *  - One centred outer card (624px, #F4F4F5, 56px radius) with a 1px inset outline,
 *    holding a single lighter inner panel (#FAFAFA, 48px radius, soft shadow) with
 *    all four role rows.
 *  - Desktop rows: three-column grid (role/dates · 8px marker · description),
 *    vertically centred. Connectors are separate 48px dashed lines BETWEEN rows.
 *  - Centred "Let's Work Together" action below the inner panel.
 *
 * Roles are temporary template/demo content — kept in config and clearly
 * flagged. Do not present them as verified employment history.
 */

type Role = {
  id: string;
  role: string;
  category: string;
  description: string;
};

// Practice areas (not invented employment history).
const roles: Role[] = [
  {
    id: "digital-marketing",
    role: "Digital Marketing",
    category: "Focus",
    description: "Campaign and conversion thinking across websites, search, and paid channels",
  },
  {
    id: "ghl-systems",
    role: "GoHighLevel Systems",
    category: "Focus",
    description: "CRM, pipelines, calendars, and connected client operations",
  },
  {
    id: "automation-ai",
    role: "Automation & AI",
    category: "Focus",
    description: "Practical workflows and assistants for lead response and handoff",
  },
  {
    id: "training-mentorship",
    role: "Training & Mentorship",
    category: "Focus",
    description: "Hands-on guidance that helps learners deliver client-ready systems",
  },
];

export function Experience() {
  const header = useInView<HTMLDivElement>();
  const card = useInView<HTMLDivElement>();

  return (
    <section
      id="experience"
      className="w-full bg-white border-t border-[var(--color-divider)] experience-section px-4 sm:px-6"
      style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full" style={{ maxWidth: "1000px" }}>
        {/* ── Centred header group: label → heading ── */}
        <div ref={header.ref} className={`experience-reveal ${header.inView ? "is-visible" : ""}`}>
          <div className="flex flex-col items-center">
            <h2
              id="experience-heading"
              className="experience-heading"
              style={{
                fontSize: "var(--exp-heading-fs)",
                lineHeight: "var(--exp-heading-lh)",
                fontWeight: 500,
                letterSpacing: "var(--exp-heading-ls)",
                color: "#09090B",
                margin: 0,
                textAlign: "center",
              }}
            >
              Experience that connects the pieces
            </h2>
          </div>
        </div>

        {/* 48px gap between header and timeline card */}
        <div style={{ marginTop: "var(--exp-header-to-card)" }}>
          {/* ── Centred outer card ── */}
          <div
            ref={card.ref}
            className={`mx-auto experience-card experience-reveal experience-reveal-block ${
              card.inView ? "is-visible" : ""
            }`}
            style={{ maxWidth: "min(100%, 624px)" }}
          >
            {/* Inner panel holding all four role rows */}
            <div className="experience-inner">
              <div className="experience-rows">
                {roles.map((item, index) => (
                  <Fragment key={item.id}>
                    <div className="experience-row">
                      <div className="experience-grid">
                        {/* Left: role + category (right-aligned) */}
                        <div className="experience-rolecol">
                          <h3 className="experience-role">{item.role}</h3>
                          <p className="experience-dates">{item.category}</p>
                        </div>

                        {/* Centre: marker (vertically centred) */}
                        <div className="experience-markercol" aria-hidden="true">
                          <span className="experience-dot" />
                        </div>

                        {/* Right: description (left-aligned) */}
                        <div className="experience-desccol">
                          <p className="experience-desc">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* 48px dashed connector BETWEEN rows (none after the last) */}
                    {index < roles.length - 1 && (
                      <div className="experience-connector" aria-hidden="true" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            {/* 24px gap between inner panel and action */}
            <div className="flex justify-center" style={{ marginTop: "24px" }}>
              <a href="/contact" className="btn-dark" aria-label="Let's Work Together">
                Let’s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Component-scoped responsive styles ── */}
      <style>{`
        .experience-section {
          --exp-heading-fs: 48px;
          --exp-heading-lh: 52px;
          --exp-heading-ls: -2.4px;
          --exp-header-to-card: 48px;
        }

        /* Entrance reveal (opacity + translateY, settles at 0) */
        .experience-reveal {
          opacity: 0;
          will-change: transform, opacity;
        }
        .experience-reveal-block {
          transform: translateY(40px);
        }
        .experience-reveal.is-visible {
          animation: process-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .experience-reveal-block.is-visible {
          animation-name: process-fade-up-lg;
        }

        /* ── Outer card ──
         * 1px #E4E4E7 inset outline via a positioned pseudo-element so it
         * does not reduce the content width. Overflow stays visible so the
         * inner panel's shadow is not clipped.
         */
        .experience-card {
          position: relative;
          width: 100%;
          background: #F4F4F5;
          border-radius: 56px;
          padding: 12px 12px 32px;
          overflow: visible;
        }
        .experience-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid #E4E4E7;
          border-radius: inherit;
          pointer-events: none;
        }

        /* ── Inner panel ── */
        .experience-inner {
          position: relative;
          width: 100%;
          background: #FAFAFA;
          border-radius: 48px;
          padding: 32px 24px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        /* ── Role rows ── */
        .experience-rows {
          display: flex;
          flex-direction: column;
        }
        .experience-row {
          display: block;
        }

        /* Desktop three-column grid: role/dates · marker · description */
        .experience-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 8px minmax(0, 1fr);
          column-gap: 24px;
          align-items: center;
        }

        /* Left: role + dates, right-aligned */
        .experience-rolecol {
          min-width: 0;
          text-align: right;
        }
        .experience-role {
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.32px;
          color: #09090B;
          margin: 0;
        }
        .experience-dates {
          margin: 0;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #71717A;
        }

        /* Centre marker column — dot vertically centred, no margin-top */
        .experience-markercol {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .experience-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #09090B;
          box-shadow: 0 0 0 4px rgba(9, 9, 11, 0.08);
          flex-shrink: 0;
        }

        /* Right: description, left-aligned */
        .experience-desccol {
          min-width: 0;
          text-align: left;
        }
        .experience-desc {
          margin: 0;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525B;
        }

        /* 48px dashed connector BETWEEN rows, centred horizontally */
        .experience-connector {
          width: 0;
          height: 48px;
          align-self: center;
          border-right: 1px dashed #D4D4D8;
          background: transparent;
        }

        /* ── Tablet ── */
        @media (max-width: 1199px) {
          .experience-section {
            --exp-heading-fs: 40px;
            --exp-heading-lh: 43.33px;
            --exp-heading-ls: -2px;
          }
        }

        /* ── Mobile: stacked, centred; markers hidden ── */
        @media (max-width: 809px) {
          .experience-section {
            --exp-heading-fs: 32px;
            --exp-heading-lh: 34.67px;
            --exp-heading-ls: -1.6px;
            --exp-header-to-card: 40px;
          }

          .experience-inner {
            padding: 24px 16px;
          }

          .experience-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .experience-rolecol {
            text-align: center;
          }
          .experience-markercol {
            display: none;
          }
          .experience-desccol {
            text-align: center;
            margin-top: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-reveal,
          .experience-reveal-block {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
