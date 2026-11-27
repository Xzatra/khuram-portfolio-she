import { createFileRoute, Link } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { blogArticles, blogConfig } from "@/lib/blog-config";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Khuram Shahzad" },
      {
        name: "description",
        content:
          "Journal on GoHighLevel systems, AI automation, sales funnels, and lead follow-up by Khuram Shahzad.",
      },
      { property: "og:title", content: "Blog — Khuram Shahzad" },
      {
        property: "og:description",
        content:
          "Journal on GoHighLevel systems, AI automation, sales funnels, and lead follow-up by Khuram Shahzad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
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

            <section className="blp-section" aria-labelledby="blp-heading">
              <div className="blp-inner">
                <h1 id="blp-heading" className="blp-heading">
                  {blogConfig.heading}
                </h1>

                <div className="blp-grid">
                  {blogArticles.map((article, index) => (
                    <Link
                      key={article.id}
                      to="/blog/$slug"
                      params={{ slug: article.slug }}
                      className="blp-card group"
                      style={{ "--blp-delay": `${index * 60}ms` } as React.CSSProperties}
                      aria-label={article.title}
                    >
                      <span className="blp-thumb">
                        <img
                          src={article.image}
                          alt={`${article.title} cover image`}
                          loading="lazy"
                          className="blp-thumb-img"
                        />
                      </span>
                      <span className="blp-body">
                        <span className="blp-title">{article.title}</span>
                        <span className="blp-excerpt">{article.excerpt}</span>
                        <span className="blp-meta">
                          <span className="blp-pill">{article.category}</span>
                          {article.date ? <span className="blp-pill">{article.date}</span> : null}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <ContactFooter />
          </main>
        </div>
      </div>

      <style>{`
        .blp-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 24px;
          box-sizing: border-box;
        }
        .blp-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
          box-sizing: border-box;
        }

        /* Heading — 64px/64px, weight 500, -3.2px, left-aligned */
        .blp-heading {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 64px;
          line-height: 64px;
          font-weight: 500;
          letter-spacing: -3.2px;
          color: #09090b;
          text-align: left;
        }

        /* Grid — two equal columns, 16px gap, 48px below heading */
        .blp-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        /* Card — vertical: image above text */
        .blp-card {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 0;
          padding: 12px 12px 32px;
          background: #f4f4f5;
          border-radius: 56px;
          box-sizing: border-box;
          text-decoration: none;
          transition: background-color 250ms ease;
          outline: none;
        }
        .blp-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 56px;
          border: 1px solid #e4e4e7;
          pointer-events: none;
        }
        .blp-card:focus-visible {
          box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #09090b;
        }
        @media (hover: hover) {
          .blp-card:hover {
            background: #e4e4e7;
          }
        }

        /* Thumbnail — 1.65/1, 48px radius, overflow hidden, object-fit cover */
        .blp-thumb {
          display: block;
          width: 100%;
          aspect-ratio: 1.65 / 1;
          border-radius: 48px;
          overflow: hidden;
          background: #e4e4e7;
          flex-shrink: 0;
        }
        .blp-thumb-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 250ms ease;
        }
        @media (hover: hover) {
          .blp-card:hover .blp-thumb-img {
            transform: scale(1.1);
          }
        }

        /* Body — 12px gap below thumbnail, content padding 0 24px */
        .blp-body {
          display: flex;
          flex-direction: column;
          padding: 12px 24px 0;
          gap: 12px;
          min-width: 0;
        }

        /* Title — 18px/23.4px, weight 700, -0.36px, #09090B */
        .blp-title {
          display: block;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 18px;
          line-height: 23.4px;
          font-weight: 700;
          letter-spacing: -0.36px;
          color: #09090b;
          margin: 0;
        }

        /* Excerpt — 14px/20px, weight 400, #52525B */
        .blp-excerpt {
          display: block;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525b;
          margin: 0;
        }

        /* Metadata — category + date pills, 8px gap */
        .blp-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }
        .blp-pill {
          display: inline-flex;
          align-items: center;
          height: 32px;
          padding: 0 16px;
          border-radius: 100px;
          background: rgba(21, 21, 21, 0.05);
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          color: #09090b;
          white-space: nowrap;
        }

        /* Tablet */
        @media (max-width: 1199px) {
          .blp-heading {
            font-size: 48px;
            line-height: 48px;
          }
        }

        /* Mobile */
        @media (max-width: 809px) {
          .blp-section {
            padding: 120px 16px 48px;
          }
          .blp-heading {
            font-size: 36px;
            line-height: 36px;
            letter-spacing: -1.8px;
          }
          .blp-grid {
            grid-template-columns: 1fr;
            margin-top: 32px;
          }
          .blp-card {
            border-radius: 40px;
          }
          .blp-thumb {
            border-radius: 32px;
          }
        }
      `}</style>
    </div>
  );
}
