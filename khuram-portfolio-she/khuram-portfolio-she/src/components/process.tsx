import { useInView } from "@/hooks/use-in-view";

/*
 * Process section (Section 4) — refined to match the reference.
 * Built inside the existing main content column using the shared design system.
 *
 * Order: Process label → heading + description + "04 Steps" counter → four steps
 *        → dark statistics panel. Restrained scroll-triggered reveals.
 *
 * The stat figure ("98%") is temporary reference/demo data — kept in config
 * and clearly flagged. Do not present it as a real client result.
 */

type Step = {
  number: string;
  title: string;
  tags: string[];
  icon: "Search" | "Sparkles" | "Grid" | "Rocket";
};

const steps: Step[] = [
  {
    number: "01",
    title: "Audit & Map",
    tags: ["Goals", "Lead Sources", "Pipeline"],
    icon: "Search",
  },
  {
    number: "02",
    title: "Build & Connect",
    tags: ["CRM", "Calendars", "Integrations"],
    icon: "Sparkles",
  },
  {
    number: "03",
    title: "Automate & Test",
    tags: ["Workflows", "AI", "QA"],
    icon: "Grid",
  },
  {
    number: "04",
    title: "Train & Improve",
    tags: ["Handover", "Reporting", "Iteration"],
    icon: "Rocket",
  },
];

const processIntro =
  "I start with how your leads arrive and move through the business, then build the GoHighLevel setup around that real journey.";

// Statistics panel content — Khuram-specific copy, template design.
// The stat figure ("98%") is a decorative template element, not a claim.
const statContent = {
  stat: "98%",
  heading: "Built for real follow-through",
  copy: "Clear stages, timely follow-up, and a team that knows what happens after every enquiry.",
};

// Original Framer dot-matrix decorative graphic (760:256 aspect ratio).
const dotMatrixImage =
  "https://vibe.filesafe.space/1794496492347241952/assets/304664b8-fddb-44f4-93cb-7cf7f460c242.png";

function StepIcon({ name }: { name: Step["icon"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "Search": // magnifying glass
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "Sparkles": // three sparkles
      return (
        <svg {...common}>
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
          <path d="M19 14l.7 1.9L21.6 16.6 19.7 17.3 19 19.2 18.3 17.3 16.4 16.6 18.3 15.9z" />
          <path d="M5 14l.6 1.6L7.2 16.2 5.6 16.8 5 18.4 4.4 16.8 2.8 16.2 4.4 15.6z" />
        </svg>
      );
    case "Grid": // four rounded squares in a grid
      return (
        <svg {...common}>
          <rect width="7.5" height="7.5" x="3" y="3" rx="2" />
          <rect width="7.5" height="7.5" x="13.5" y="3" rx="2" />
          <rect width="7.5" height="7.5" x="3" y="13.5" rx="2" />
          <rect width="7.5" height="7.5" x="13.5" y="13.5" rx="2" />
        </svg>
      );
    case "Rocket":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    default:
      return null;
  }
}

export function Process() {
  const header = useInView<HTMLDivElement>();
  const stepsBlock = useInView<HTMLDivElement>();
  const statBlock = useInView<HTMLDivElement>();

  // Heading words reveal individually with an 80ms stagger.
  const headingWords = ["From", "enquiry", "to", "a", "working", "system"];

  return (
    <section
      id="process"
      className="w-full border-t border-[var(--color-divider)] bg-white process-section px-4 sm:px-6"
      style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}
      aria-labelledby="process-heading"
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "1000px",
        }}
      >
        {/* ── Header: pill (top), then heading + description (left) with "04 Steps" (right, top-aligned) ── */}
        <div ref={header.ref} className="process-reveal is-visible">
          {/* Horizontal heading row: heading + description (left), "04 Steps" (right, top-aligned) */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            {/* Left: heading → description (vertical flex, 24px gap; 16px on mobile) */}
            <div className="min-w-0 process-heading-group">
              <h2
                id="process-heading"
                className="process-heading"
                style={{
                  fontSize: "var(--proc-heading-fs)",
                  lineHeight: "var(--proc-heading-lh)",
                  fontWeight: 500,
                  letterSpacing: "var(--proc-heading-ls)",
                  color: "#09090B",
                  margin: 0,
                }}
              >
                {headingWords.map((word, i) => (
                  <span key={word} style={{ display: "inline-block" }}>
                    <span
                      className="process-reveal-word is-visible"
                      style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                    >
                      {word}
                    </span>
                    {i < headingWords.length - 1 ? "\u00A0" : ""}
                  </span>
                ))}
              </h2>
              <p
                className="process-desc mt-5"
                style={{
                  maxWidth: "520px",
                  fontSize: "16px",
                  lineHeight: "22px",
                  fontWeight: 400,
                  letterSpacing: "-0.32px",
                  color: "#52525B",
                  margin: 0,
                }}
              >
                {processIntro}
              </p>
            </div>

            {/* Right: "04 Steps" counter — aligned with the top of the heading */}
            <span
              className="process-counter shrink-0 lg:text-right font-medium"
              style={{
                fontSize: "var(--proc-counter-fs)",
                lineHeight: "var(--proc-counter-lh)",
                fontWeight: 500,
                letterSpacing: "var(--proc-counter-ls)",
                color: "#D4D4D8",
                display: "var(--proc-counter-display)",
              }}
            >
              04 Steps
            </span>
          </div>
        </div>

        {/* 80px gap between header and steps (48px on mobile) */}
        <div style={{ marginTop: "var(--proc-header-to-steps)" }}>
          {/* ── Four process steps ── */}
          <div ref={stepsBlock.ref} className="process-steps-grid">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`process-step process-reveal process-reveal-block is-visible process-step-${index + 1}`}
                style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
              >
                {/* Top row: step number (left) + icon (right) */}
                <div className="process-step-top">
                  <span className="process-step-number">Step {step.number}</span>
                  <div className="process-step-icon">
                    <StepIcon name={step.icon} />
                  </div>
                </div>

                {/* Lower content: title + tags (space-between drives vertical layout) */}
                <div className="process-step-content">
                  <h3 className="process-step-title">{step.title}</h3>
                  <div className="process-tags">
                    {step.tags.map((tag) => (
                      <span key={tag} className="process-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Dark statistics panel: 24px below steps ── */}
          <div
            ref={statBlock.ref}
            className="process-stat-panel process-reveal process-reveal-block is-visible"
            style={{ marginTop: "24px", "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            <div className="process-stat-row">
              {/* Left: 98% statistic + supporting copy */}
              <div className="process-stat-left">
                <span className="process-stat-number">{statContent.stat}</span>
                <div className="process-stat-copy">
                  <span className="process-stat-label">{statContent.heading}</span>
                  <p className="process-stat-paragraph">{statContent.copy}</p>
                </div>
              </div>

              {/* Right: original dot-matrix decorative graphic */}
              <img src={dotMatrixImage} alt="" aria-hidden="true" className="process-dot-matrix" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Component-scoped responsive styles ── */}
      <style>{`
        .process-section {
          --proc-heading-fs: 48px;
          --proc-heading-lh: 52px;
          --proc-heading-ls: -2.4px;
          --proc-counter-fs: 48px;
          --proc-counter-lh: 52px;
          --proc-counter-ls: -2.4px;
          --proc-counter-display: block;
          --proc-header-to-steps: 80px;
          --proc-head-desc-gap: 24px;
        }

        /* Heading + description group: vertical flex, 24px gap (16px on mobile) */
        .process-heading-group {
          display: flex;
          flex-direction: column;
          gap: var(--proc-head-desc-gap);
        }

        /* ── Steps grid ── */
        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .process-step {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 228px;
          padding: 0 16px;
          background: transparent;
        }
        /* Dashed right divider on the first three columns */
        .process-step-1, .process-step-2, .process-step-3 {
          border-right: 1px dashed #E4E4E7;
        }
        .process-step-4 { border-right: none; }

        .process-step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 48px;
        }
        .process-step-number {
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.32px;
          color: #71717A;
        }
        .process-step-icon {
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: #27272A;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .process-step-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: flex-end;
          margin-top: 32px;
        }
        .process-step-title {
          font-size: 24px;
          line-height: 28px;
          font-weight: 500;
          letter-spacing: -0.72px;
          color: #09090B;
          margin: 0;
          min-height: 56px;
          display: flex;
          align-items: flex-end;
        }
        .process-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 24px;
          min-height: 68px;
          align-content: flex-start;
        }
        .process-tag {
          display: inline-flex;
          align-items: center;
          height: 32px;
          padding: 0 16px;
          border-radius: 100px;
          background: rgba(21, 21, 21, 0.05);
          color: #09090B;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          white-space: nowrap;
        }

        /* ── Statistics panel ── */
        .process-stat-panel {
          width: 100%;
          background: #09090B;
          border-radius: 48px;
          padding: 32px;
          box-shadow: 0 24px 40px rgba(0,0,0,0.15), 0 3px 3px rgba(0,0,0,0.12);
        }
        .process-stat-row {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .process-stat-left {
          display: flex;
          align-items: center;
          gap: 28px;
          flex: 1 1 auto;
          min-width: 0;
        }
        .process-stat-number {
          font-size: 64px;
          line-height: 64px;
          font-weight: 500;
          letter-spacing: -3.2px;
          background: linear-gradient(109deg, #FFFFFF 43%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          flex-shrink: 0;
        }
        .process-stat-copy {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          min-width: 0;
          max-width: 460px;
        }
        .process-stat-label {
          font-size: 18px;
          line-height: 23.4px;
          font-weight: 500;
          letter-spacing: -0.36px;
          color: #fff;
        }
        .process-stat-paragraph {
          margin-top: 4px;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: rgba(255, 255, 255, 0.7);
        }
        .process-dot-matrix {
          width: 220px;
          height: auto;
          aspect-ratio: 760 / 256;
          object-fit: contain;
          margin-left: auto;
          flex-shrink: 0;
          min-width: 0;
        }

        /* ── Tablet (810px – 1199px) ── */
        @media (max-width: 1199px) {
          .process-section {
            --proc-heading-fs: 40px;
            --proc-heading-lh: 43.33px;
            --proc-heading-ls: -2px;
            --proc-counter-fs: 40px;
            --proc-counter-lh: 43.33px;
            --proc-counter-ls: -2px;
          }
          .process-dot-matrix { display: none; }
        }

        /* ── Mobile (< 810px) ── */
        @media (max-width: 809px) {
          .process-section {
            --proc-heading-fs: 32px;
            --proc-heading-lh: 34.67px;
            --proc-heading-ls: -1.6px;
            --proc-counter-display: none;
            --proc-header-to-steps: 48px;
            --proc-head-desc-gap: 16px;
          }

          .process-steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 40px;
          }
          /* Two-column dividers: right divider on columns 1 & 3 (left of each row) */
          .process-step { border-right: none; }
          .process-step-1, .process-step-3 {
            border-right: 1px dashed #E4E4E7;
          }
          .process-step {
            min-height: 0;
          }
          .process-step-title {
            font-size: 20px;
            line-height: 23.33px;
            letter-spacing: -0.6px;
            min-height: 48px;
          }
          .process-tags {
            min-height: 68px;
          }
          .process-step-icon {
            width: 36px;
            height: 36px;
          }
          .process-step-icon svg {
            width: 18px;
            height: 18px;
          }

          .process-stat-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .process-stat-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            max-width: 100%;
          }
          .process-stat-number {
            font-size: 48px;
            line-height: 48px;
            letter-spacing: -2.4px;
          }
        }
      `}</style>
    </section>
  );
}
