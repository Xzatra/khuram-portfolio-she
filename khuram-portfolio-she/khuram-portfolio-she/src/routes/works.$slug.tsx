import { createFileRoute, Link } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { ProjectCard } from "@/components/project-card";
import { worksProjects, worksSupportHalfImage } from "@/lib/works-config";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/works/$slug")({
  head: ({ params }) => {
    const project = worksProjects.find((p) => p.slug === params.slug);
    const title = project ? `${project.name} — Khuram Shahzad` : "Project — Khuram Shahzad";
    const description = project?.description ?? "Selected project by Khuram Shahzad.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(project
          ? [
              { property: "og:image", content: project.image },
              { name: "twitter:image", content: project.image },
            ]
          : []),
      ],
    };
  },
  component: WorksProjectPage,
});

function WorksProjectPage() {
  const { slug } = Route.useParams();
  const project = worksProjects.find((p) => p.slug === slug);

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

            {project ? (
              <ProjectDetail project={project} />
            ) : (
              <section className="work-detail-section" aria-labelledby="work-detail-heading">
                <div className="work-detail-inner">
                  <div className="work-detail-missing">
                    <h1 id="work-detail-heading" className="work-detail-title">
                      Project not found
                    </h1>
                    <p className="work-detail-desc">
                      The project you’re looking for doesn’t exist or may have been moved.
                    </p>
                    <Link to="/works" className="work-detail-cta">
                      Back to all works
                    </Link>
                  </div>
                </div>
              </section>
            )}

            <ContactFooter />
          </main>
        </div>
      </div>

      <style>{`
        .work-detail-section {
          width: 100%;
          background: #ffffff;
          padding: 0 24px 80px;
          box-sizing: border-box;
        }
        .work-detail-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* Back link */
        .work-detail-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          color: #52525b;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .work-detail-back:hover { color: #09090b; }
        .work-detail-back:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #27272a;
          border-radius: 6px;
        }
        .work-detail-back-icon { width: 16px; height: 16px; }

        /* Hero image — full width, 516px desktop, 48px radius, cover */
        .work-detail-hero {
          width: 100%;
          height: 516px;
          border-radius: 48px;
          overflow: hidden;
          background: #fafafa;
        }
        .work-detail-hero img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }

        /* Title — 64px/64px, weight 500, -3.2px */
        .work-detail-title {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 64px;
          line-height: 64px;
          font-weight: 500;
          letter-spacing: -3.2px;
          color: #09090b;
        }

        /* Body — first row two equal columns, 40px gap */
        .work-detail-body {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .work-detail-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 40px;
          align-items: start;
        }

        /* Metadata */
        .work-meta {
          max-width: 300px;
          display: flex;
          flex-direction: column;
        }
        .work-meta-row {
          display: grid;
          grid-template-columns: 140px 140px;
          gap: 20px;
          padding: 12px 0;
          border-bottom: 1px solid #e4e4e7;
        }
        .work-meta-row:last-child { border-bottom: none; }
        .work-meta-label {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #a1a1aa;
          text-transform: uppercase;
        }
        .work-meta-value {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          color: #09090b;
        }

        /* Supporting half-width image */
        .work-support-half {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 48px;
          overflow: hidden;
          background: #fafafa;
          margin-top: 24px;
        }
        .work-support-half img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }

        /* Content typography */
        .work-content { display: flex; flex-direction: column; gap: 48px; }
        .work-block { display: flex; flex-direction: column; gap: 16px; }
        .work-h-major {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 24px;
          line-height: 31.2px;
          font-weight: 500;
          letter-spacing: -0.48px;
          color: #09090b;
        }
        .work-h-sub {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 18px;
          line-height: 23.4px;
          font-weight: 500;
          letter-spacing: -0.36px;
          color: #09090b;
        }
        .work-para {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          letter-spacing: -0.32px;
          color: #52525b;
        }

        /* Full-width image — 1.97:1 */
        .work-support-full {
          width: 100%;
          aspect-ratio: 1.97 / 1;
          border-radius: 48px;
          overflow: hidden;
          background: #fafafa;
        }
        .work-support-full img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }

        /* Final two-column row: square detail image + copy */
        .work-final-row {
          display: grid;
          grid-template-columns: minmax(0, 304px) minmax(0, 1fr);
          gap: 40px;
          align-items: start;
        }
        .work-detail-square {
          width: 100%;
          max-width: 304px;
          aspect-ratio: 1 / 1;
          border-radius: 48px;
          overflow: hidden;
          background: #fafafa;
        }
        .work-detail-square img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }

        /* Results panel */
        .work-results {
          background: #f4f4f5;
          border-radius: 56px;
          padding: 32px 12px 12px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .work-results-intro { padding: 0 20px; }
        .work-results-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .work-result-card {
          background: #fafafa;
          border-radius: 48px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .work-result-label {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #a1a1aa;
          text-transform: uppercase;
        }
        .work-result-value {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 24px;
          line-height: 31.2px;
          font-weight: 500;
          letter-spacing: -0.48px;
          color: #09090b;
        }

        /* Not-found state */
        .work-detail-missing {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .work-detail-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 10px 24px;
          border-radius: 10px;
          background: #27272a;
          color: #ffffff;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          text-decoration: none;
          box-shadow: inset 0 3px 1px rgba(255, 255, 255, 0.1);
        }

        /* Related works */
        .work-related-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 24px;
          box-sizing: border-box;
        }
        .work-related-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .work-related-head { display: flex; flex-direction: column; gap: 12px; }
        .work-related-label {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          height: 36px;
          padding: 8px 14px;
          border-radius: 50px;
          background: linear-gradient(198deg, #27272a 0%, #141414 100%);
          color: #ffffff;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
        }
        .work-related-heading {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 48px;
          line-height: 52px;
          font-weight: 500;
          letter-spacing: -2.4px;
          color: #09090b;
        }
        .work-related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        /* Tablet */
        @media (max-width: 1199px) {
          .work-detail-title { font-size: 48px; line-height: 48px; }
          .work-related-heading { font-size: 40px; line-height: 44px; }
        }

        /* Mobile */
        @media (max-width: 809px) {
          .work-detail-section { padding: 120px 16px 48px; }
          .work-detail-hero { height: 320px; border-radius: 32px; }
          .work-detail-title { font-size: 36px; line-height: 36px; letter-spacing: -1.8px; }
          .work-detail-row { grid-template-columns: 1fr; gap: 32px; }
          .work-meta { max-width: 100%; }
          .work-meta-row { grid-template-columns: 1fr 1fr; gap: 16px; }
          .work-support-half, .work-support-full, .work-detail-square { border-radius: 32px; }
          .work-final-row { grid-template-columns: 1fr; gap: 24px; }
          .work-detail-square { max-width: 100%; }
          .work-results { border-radius: 40px; padding: 24px 12px 12px; }
          .work-results-grid { grid-template-columns: 1fr; }
          .work-result-card { border-radius: 32px; padding: 24px; }
          .work-related-section { padding: 48px 16px; }
          .work-related-heading { font-size: 32px; line-height: 36px; letter-spacing: -1.6px; }
          .work-related-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

type ProjectDetailProps = {
  project: (typeof worksProjects)[number];
};

function ProjectDetail({ project }: ProjectDetailProps) {
  // Related works: exclude current project, take next two.
  const related = worksProjects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="work-detail-section" aria-labelledby="work-detail-heading">
        <div className="work-detail-inner">
          <Link to="/works" className="work-detail-back">
            <ArrowLeft className="work-detail-back-icon" aria-hidden="true" />
            All Works
          </Link>

          {/* 1. Hero image */}
          <div className="work-detail-hero">
            <img src={project.image} alt={project.alt} loading="eager" />
          </div>

          {/* 2. Project title */}
          <h1 id="work-detail-heading" className="work-detail-title">
            {project.name}
          </h1>

          {/* 3. Project body */}
          <div className="work-detail-body">
            {/* First row: metadata + supporting image (left) | Key Highlights (right) */}
            <div className="work-detail-row">
              {/* Left column */}
              <div>
                <dl className="work-meta">
                  <div className="work-meta-row">
                    <dt className="work-meta-label">Client</dt>
                    <dd className="work-meta-value">{project.client}</dd>
                  </div>
                  <div className="work-meta-row">
                    <dt className="work-meta-label">Year</dt>
                    <dd className="work-meta-value">{project.year}</dd>
                  </div>
                  <div className="work-meta-row">
                    <dt className="work-meta-label">Industry</dt>
                    <dd className="work-meta-value">{project.industry}</dd>
                  </div>
                  <div className="work-meta-row">
                    <dt className="work-meta-label">Scope</dt>
                    <dd className="work-meta-value" style={{ textTransform: "none" }}>
                      {project.scope}
                    </dd>
                  </div>
                </dl>

                {/* Supporting half-width image */}
                <div className="work-support-half">
                  <img
                    src={worksSupportHalfImage}
                    alt={`${project.name} supporting visual`}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right column: Challenge, Work, Outcome */}
              <div className="work-content">
                <div className="work-block">
                  <h2 className="work-h-major">The challenge</h2>
                  <p className="work-para">{project.challenge}</p>
                </div>
                <div className="work-block">
                  <h2 className="work-h-sub">The work</h2>
                  <p className="work-para">{project.work}</p>
                </div>
                {project.highlights.map((block) => (
                  <div className="work-block" key={block.title}>
                    <h2 className="work-h-sub">{block.title}</h2>
                    <p className="work-para">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full-width image */}
            <div className="work-support-full">
              <img
                src={project.fullImage}
                alt={`${project.name} full-width visual`}
                loading="lazy"
              />
            </div>

            {/* Final two-column row: square detail image + outcome */}
            <div className="work-final-row">
              <div className="work-detail-square">
                <img
                  src={project.detailImage}
                  alt={`${project.name} detail visual`}
                  loading="lazy"
                />
              </div>
              <div className="work-block">
                <h2 className="work-h-major">The outcome</h2>
                <p className="work-para">{project.outcome}</p>
              </div>
            </div>

            {/* Results panel — qualitative observations only, no numerical metrics */}
            <div className="work-results">
              <div className="work-results-intro">
                <h2 className="work-h-major">Outcome</h2>
                <p className="work-para" style={{ marginTop: "12px" }}>
                  What changed after the work — described qualitatively, not as measured figures.
                </p>
              </div>
              <div className="work-results-grid">
                {project.results.map((r) => (
                  <div className="work-result-card" key={r.label}>
                    <span className="work-result-label">{r.label}</span>
                    <span className="work-result-value">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related work */}
      <section className="work-related-section" aria-labelledby="work-related-heading">
        <div className="work-related-inner">
          <div className="work-related-head">
            <span className="work-related-label">Works</span>
            <h2 id="work-related-heading" className="work-related-heading">
              Explore More Works
            </h2>
          </div>
          <div className="work-related-grid">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
