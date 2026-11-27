import { ProjectCard } from "@/components/project-card";
import { worksProjects } from "@/lib/works-config";

/*
 * Featured Projects section (Section 2 — homepage, immediately after the hero).
 *
 * Reuses the shared worksProjects records (same six images, same slugs) so the
 * homepage cards open the real /works/$slug detail pages via the shared
 * ProjectCard component (image-zoom + name-badge hover, no shape morph).
 *
 * Layout:
 *  - 80px 24px section padding, centred 1000px wrapper.
 *  - Heading row: "Latest Projects" pill, then heading (left) + ©/24-26 (right).
 *  - Category tiles: four full #F4F4F5 tiles (text left, icon tile right).
 *  - Gallery: two equal columns, 16px gap, square cards, 56px corners.
 */

// Category tiles use these specific outline icons (12px, stroke 1.5px).
const categoryTiles = [
  { label: "CRM & Automation", icon: "Workflow" },
  { label: "Funnels & Websites", icon: "Monitor" },
  { label: "Ads & Lead Gen", icon: "Target" },
  { label: "Training", icon: "GraduationCap" },
];

function CategoryIcon({ name }: { name: string }) {
  const common = {
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
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
    default:
      return null;
  }
}

export function FeaturedProjects() {
  return (
    <section id="works" className="fp-section" aria-labelledby="projects-heading">
      <div className="fp-inner">
        {/* ── "Latest Projects" pill ── */}
        <span className="fp-pill">Latest Projects</span>

        {/* ── Heading row: heading (left) + ©/24-26 (right), space-between ── */}
        <div className="fp-heading-row">
          <h2 id="projects-heading" className="fp-heading" style={{ maxWidth: "270px" }}>
            Projects that
            <br />
            tell you stories
          </h2>
          <div className="fp-year" aria-hidden="true">
            <span>©</span>
            <span>24-26</span>
          </div>
        </div>

        {/* ── Category tiles: four full tiles ── */}
        <div className="fp-categories">
          {categoryTiles.map((cat) => (
            <div key={cat.label} className="fp-cat-tile">
              <span className="fp-cat-text">{cat.label}</span>
              <span className="fp-cat-icon-tile">
                <CategoryIcon name={cat.icon} />
              </span>
            </div>
          ))}
        </div>

        {/* ── Project grid: four featured projects on home (excluding AMZ Gutters and Academy) ── */}
        <div className="fp-grid">
          {worksProjects
            .filter((p) => p.slug !== "amz-gutters" && p.slug !== "ghl-growth-success-academy")
            .map((project, index) => (
              <ProjectCard key={project.slug} project={project} revealDelay={index * 60} />
            ))}
        </div>
      </div>

      <style>{`
        .fp-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          box-sizing: border-box;
        }
        .fp-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
        }

        /* "Latest Projects" pill — dark gradient, 36px */
        .fp-pill {
          display: inline-flex;
          align-items: center;
          height: 36px;
          padding: 8px 14px;
          border-radius: 50px;
          width: fit-content;
          background: linear-gradient(198deg, #27272A 0%, #141414 100%);
          color: #ffffff;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
        }

        /* Heading row: 12px below pill, space-between, centred vertically */
        .fp-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-top: 12px;
        }
        .fp-heading {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 48px;
          line-height: 52px;
          font-weight: 500;
          letter-spacing: -2.4px;
          color: #09090b;
        }
        .fp-year {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0;
          flex-shrink: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 48px;
          line-height: 52px;
          font-weight: 500;
          letter-spacing: -2.4px;
          color: #d4d4d8;
          text-align: right;
        }

        /* Category tiles: 48px gap from heading row, four equal columns, 8px gap */
        .fp-categories {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
          margin-top: 48px;
        }
        .fp-cat-tile {
          display: flex;
          align-items: center;
          gap: 16px;
          height: 48px;
          padding: 8px 8px 8px 16px;
          background: #f4f4f5;
          border-radius: 16px;
          box-sizing: border-box;
          min-width: 0;
        }
        .fp-cat-text {
          flex: 1;
          min-width: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.32px;
          color: #09090b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .fp-cat-icon-tile {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          background: #fafafa;
          border-radius: 12px;
          box-shadow: 0 12px 10px rgba(0, 0, 0, 0.1);
          color: #09090b;
        }

        /* Gallery: 48px gap from category strip, two equal columns, 16px gap */
        .fp-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        /* ── Tablet ── */
        @media (max-width: 1199px) {
          .fp-heading {
            font-size: 40px;
            line-height: 43.33px;
            letter-spacing: -2px;
            max-width: 225px !important;
          }
          .fp-year {
            font-size: 40px;
            line-height: 43.33px;
            letter-spacing: -2px;
          }
        }

        /* ── Mobile (<810px) ── */
        @media (max-width: 809px) {
          .fp-section {
            padding: 48px 16px;
          }
          .fp-heading {
            font-size: 32px;
            line-height: 34.67px;
            letter-spacing: -1.6px;
            max-width: 180px !important;
          }
          .fp-year {
            font-size: 32px;
            line-height: 34.67px;
            letter-spacing: -1.6px;
          }
          /* Category tiles become four stacked 48px rows */
          .fp-categories {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          /* Category-strip-to-gallery gap shrinks to 24px */
          .fp-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 24px;
          }
        }
      `}</style>
    </section>
  );
}
