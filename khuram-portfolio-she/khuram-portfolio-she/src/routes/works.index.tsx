import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { ProjectCard } from "@/components/project-card";
import {
  worksProjects,
  worksCategories,
  WorksCategoryIcon,
  worksFilterTabs,
  type WorkCategory,
} from "@/lib/works-config";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      {
        title: "Selected Work — Khuram Shahzad",
      },
      {
        name: "description",
        content:
          "CRM systems, funnels, websites, ad campaigns and training built by Khuram Shahzad for real businesses.",
      },
      { property: "og:title", content: "Selected Work — Khuram Shahzad" },
      {
        property: "og:description",
        content:
          "CRM systems, funnels, websites, ad campaigns and training built by Khuram Shahzad for real businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/works" }],
  }),
  component: WorksPage,
});

function WorksPage() {
  const [active, setActive] = useState<(typeof worksFilterTabs)[number]>("All");
  const filtered =
    active === "All" ? worksProjects : worksProjects.filter((p) => p.category === active);

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

            {/* ── Works listing: heading + filter tabs + gallery ── */}
            <section className="works-section" aria-labelledby="works-heading">
              <div className="works-inner">
                <h1 id="works-heading" className="works-heading">
                  <span className="works-line">Projects that</span>
                  <span className="works-line">tell you stories</span>
                </h1>

                {/* Filter tabs — presentational category filters */}
                <div className="works-tabs" role="tablist" aria-label="Filter work by category">
                  {worksFilterTabs.map((tab) => (
                    <button
                      key={tab}
                      role="tab"
                      type="button"
                      aria-selected={active === tab}
                      className={`works-tab${active === tab ? " works-tab-active" : ""}`}
                      onClick={() => setActive(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Category strip — presentation labels */}
                <div className="works-cats" role="list" aria-label="Project categories">
                  {worksCategories.map((cat) => (
                    <div key={cat.label} className="works-cat-item" role="listitem">
                      <span className="works-cat-tile">
                        <WorksCategoryIcon name={cat.icon} />
                      </span>
                      <span className="works-cat-label">{cat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Gallery — two equal columns, square cards */}
                <div className="works-grid">
                  {filtered.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} revealDelay={index * 60} />
                  ))}
                </div>
              </div>
            </section>

            <ContactFooter />
          </main>
        </div>
      </div>

      <style>{`
        .works-section {
          width: 100%;
          background: #ffffff;
          padding: 120px 24px 80px;
          box-sizing: border-box;
        }
        .works-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
        }

        /* Heading — two lines, 4px gap, 64px/64px, weight 500, -3.2px, left-aligned */
        .works-heading {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 64px;
          line-height: 64px;
          font-weight: 500;
          letter-spacing: -3.2px;
          color: #09090b;
          text-align: left;
        }
        .works-line { display: block; }

        /* Filter tabs */
        .works-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 48px;
        }
        .works-tab {
          height: 40px;
          padding: 0 16px;
          border: none;
          border-radius: 100px;
          background: #f4f4f5;
          color: #52525b;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease;
          white-space: nowrap;
        }
        .works-tab:hover { background: #e4e4e7; color: #09090b; }
        .works-tab:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #27272a;
        }
        .works-tab-active {
          background: #09090b;
          color: #ffffff;
        }
        .works-tab-active:hover { background: #09090b; color: #ffffff; }

        /* Category strip — 48px row height, reuses the homepage icon treatment */
        .works-cats {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 48px;
        }
        .works-cat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 48px;
          min-width: 0;
        }
        .works-cat-tile {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 12px;
          background: #fafafa;
          color: #09090b;
          flex-shrink: 0;
        }
        .works-cat-label {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.32px;
          color: #09090b;
          white-space: nowrap;
        }

        /* Gallery — two equal columns, 16px gap, square cards (shared ProjectCard) */
        .works-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        /* Tablet */
        @media (max-width: 1199px) {
          .works-heading { font-size: 48px; line-height: 48px; }
        }

        /* Mobile */
        @media (max-width: 809px) {
          .works-section { padding: 120px 16px 48px; }
          .works-heading { font-size: 36px; line-height: 36px; letter-spacing: -1.8px; }
          .works-tabs { margin-top: 32px; gap: 6px; }
          .works-tab { height: 36px; padding: 0 12px; font-size: 13px; }
          .works-cats { margin-top: 36px; gap: 12px; }
          .works-grid { grid-template-columns: 1fr; margin-top: 32px; }
        }
      `}</style>
    </div>
  );
}
