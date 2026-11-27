import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { blogArticles, blogConfig } from "@/lib/blog-config";

/*
 * Blog Preview section (Section 9).
 *
 * Contained layout (max-width 624px), centred heading group, then a vertical
 * list of the first three article cards and a "View All Posts" button with a
 * rolling-letter hover effect.
 *
 * Article data is shared from src/lib/blog-config.ts — the same records power
 * the /blog listing and /blog/$slug detail pages. Links point to real
 * /blog/$slug routes.
 */

const viewAllHref = "/blog";
const previewArticles = blogArticles.slice(0, 3);

/*
 * Rolling-letter button.
 * Each character sits in a column with two stacked copies; on hover the column
 * rolls up to reveal the second copy, staggered per character. The whole
 * button is a single link. Reduced motion disables the roll.
 */
function RollingButton({ label, href }: { label: string; href: string }) {
  const chars = Array.from(label);
  return (
    <a href={href} className="bp-roll-btn" aria-label={label}>
      <span className="bp-roll-text" aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={i} className="bp-roll-char" style={{ transitionDelay: `${i * 22}ms` }}>
            <span className="bp-roll-face">{ch === " " ? "\u00A0" : ch}</span>
            <span className="bp-roll-face">{ch === " " ? "\u00A0" : ch}</span>
          </span>
        ))}
      </span>
    </a>
  );
}

export function BlogPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      id="blog"
      ref={sectionRef}
      className={`bp-section w-full${ready ? " bp-ready" : ""}`}
      aria-labelledby="blog-heading"
    >
      <div className="bp-inner">
        {/* ── Centred heading group ── */}
        <div className="bp-head">
          <h2 id="blog-heading" className={`bp-heading bp-reveal${inView ? " is-visible" : ""}`}>
            {blogConfig.heading}
          </h2>
        </div>

        {/* ── Article list (48px below heading) ── */}
        <div className={`bp-list bp-reveal-lg${inView ? " is-visible" : ""}`}>
          {previewArticles.map((article) => (
            <Link
              key={article.id}
              to="/blog/$slug"
              params={{ slug: article.slug }}
              className="bp-card"
              aria-label={article.title}
            >
              {/* Thumbnail: 164px square, radius 48px, object-fit cover */}
              <span className="bp-thumb">
                <img
                  src={article.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="bp-thumb-img"
                />
              </span>

              {/* Text column: remaining width, min-width 0 */}
              <span className="bp-text">
                <span className="bp-title">{article.title}</span>
                <span className="bp-bottom">
                  <span className="bp-excerpt">{article.excerpt}</span>
                  <span className="bp-meta">
                    <span className="bp-pill">{article.category}</span>
                    {article.date ? <span className="bp-pill">{article.date}</span> : null}
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* ── View All Posts (48px below list) ── */}
        <div className={`bp-actions bp-reveal${inView ? " is-visible" : ""}`}>
          <RollingButton label={blogConfig.viewAllLabel} href={viewAllHref} />
        </div>
      </div>

      {/* ── Component-scoped styles ── */}
      <style>{`
        /* Outer section: white, 80px 24px desktop/tablet; 48px 16px mobile */
        .bp-section {
          padding: 80px 24px;
          background: #ffffff;
          box-sizing: border-box;
        }

        /* Centred inner container — max-width 624px */
        .bp-inner {
          width: 100%;
          max-width: 624px;
          margin-inline: auto;
          min-width: 0;
          box-sizing: border-box;
        }

        /* ── Heading group (left-aligned within the centred container) ── */
        .bp-head {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .bp-heading {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 48px;
          line-height: 52px;
          font-weight: 500;
          letter-spacing: -2.4px;
          color: #09090b;
          text-align: left;
        }

        /* ── Article list: 48px below heading, 20px gaps ── */
        .bp-list {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        /* ── Article card ──
         * Desktop height 188px (grows if needed). #F4F4F5, radius 56px,
         * padding 12px 24px 12px 12px, 1px #E4E4E7 inset outline (no width loss),
         * flex row, align center, gap 24px, no shadow. Whole card = one link.
         */
        .bp-card {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 24px;
          width: 100%;
          min-height: 188px;
          padding: 12px 24px 12px 12px;
          background: #f4f4f5;
          border-radius: 56px;
          box-sizing: border-box;
          text-decoration: none;
          transition: background-color 250ms ease;
        }
        .bp-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 56px;
          border: 1px solid #e4e4e7;
          pointer-events: none;
        }
        .bp-card:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #09090b;
        }
        @media (hover: hover) {
          .bp-card:hover {
            background: #e4e4e7;
          }
        }

        /* Thumbnail: 164px square, radius 48px, overflow hidden */
        .bp-thumb {
          display: block;
          width: 164px;
          height: 164px;
          flex-shrink: 0;
          border-radius: 48px;
          overflow: hidden;
          background: #e4e4e7;
        }
        .bp-thumb-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 250ms ease;
        }
        @media (hover: hover) {
          .bp-card:hover .bp-thumb-img {
            transform: scale(1.1);
          }
        }

        /* Text column: remaining width, min-width 0, height 164px, padding 8px 0,
         * flex column, justify space-between (title top, excerpt+meta bottom) */
        .bp-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1 1 auto;
          min-width: 0;
          height: 164px;
          padding: 8px 0;
        }

        /* Title: 18px/23.4px, weight 700, -0.36px, #09090B */
        .bp-title {
          display: block;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 18px;
          line-height: 23.4px;
          font-weight: 700;
          letter-spacing: -0.36px;
          color: #09090b;
          margin: 0;
          /* Reserve ~48px for up to two lines */
          max-height: 46.8px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* Bottom group: excerpt + metadata, 8px gap */
        .bp-bottom {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Excerpt: 14px/20px, weight 400, -0.28px, #52525B */
        .bp-excerpt {
          display: block;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525b;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Metadata: category + date as separate pills, wrap, 8px gap */
        .bp-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .bp-pill {
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

        /* ── View All Posts (48px below list) ── */
        .bp-actions {
          margin-top: 48px;
          display: flex;
          justify-content: center;
        }

        /* Rolling-letter button:
         * 40px height, padding 10px 24px, #27272A, white 14px text, weight 500,
         * line-height 19.6px, letter-spacing -0.42px, radius 10px,
         * inset shadow 0 3px 1px rgba(255,255,255,0.1). No arrow. */
        .bp-roll-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 10px 24px;
          border-radius: 10px;
          background-color: #27272a;
          color: #ffffff;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 19.6px;
          font-weight: 500;
          letter-spacing: -0.42px;
          box-shadow: inset 0 3px 1px rgba(255, 255, 255, 0.1);
          text-decoration: none;
          transition: background-color 200ms ease;
          outline: none;
        }
        .bp-roll-btn:hover {
          background-color: #1f1f22;
        }
        .bp-roll-btn:focus-visible {
          box-shadow:
            inset 0 3px 1px rgba(255, 255, 255, 0.1),
            0 0 0 2px #fff,
            0 0 0 4px #27272a;
        }

        /* Rolling text: inline-flex row of character columns */
        .bp-roll-text {
          display: inline-flex;
          align-items: center;
          overflow: hidden;
          line-height: 19.6px;
        }
        /* Each character column: two stacked faces, height = one line */
        .bp-roll-char {
          display: inline-flex;
          flex-direction: column;
          height: 19.6px;
          overflow: hidden;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .bp-roll-face {
          display: block;
          height: 19.6px;
          line-height: 19.6px;
        }
        @media (hover: hover) {
          .bp-roll-btn:hover .bp-roll-char {
            transform: translateY(-50%);
          }
        }

        /* ── Entrance reveal (content visible by default) ──
         * Hidden starting state applies ONLY when bp-ready is present. */
        .bp-ready .bp-reveal {
          opacity: 0;
          transform: translateY(12px);
          will-change: transform, opacity;
        }
        .bp-ready .bp-reveal-lg {
          opacity: 0;
          transform: translateY(12px);
          will-change: transform, opacity;
        }
        .bp-reveal.is-visible {
          animation: bp-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .bp-reveal-lg.is-visible {
          animation: bp-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 120ms;
        }
        .bp-actions.bp-reveal.is-visible {
          animation-delay: 240ms;
        }
        @keyframes bp-fade-up {
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
          .bp-ready .bp-reveal,
          .bp-ready .bp-reveal-lg,
          .bp-reveal,
          .bp-reveal-lg {
            opacity: 1;
            transform: none;
            animation: none;
          }
          .bp-roll-char {
            transition: none;
          }
        }

        /* ── Tablet ── */
        @media (max-width: 1199px) {
          .bp-heading {
            font-size: 40px;
            line-height: 43.33px;
            letter-spacing: -2px;
          }
        }

        /* ── Mobile (<810px) ── */
        @media (max-width: 809px) {
          .bp-section {
            padding: 48px 16px;
          }
          .bp-heading {
            font-size: 32px;
            line-height: 34.67px;
            letter-spacing: -1.6px;
          }
          .bp-list {
            margin-top: 48px;
          }
          /* Cards become vertical */
          .bp-card {
            flex-direction: column;
            align-items: stretch;
            min-height: 0;
            padding: 12px 12px 32px;
          }
          .bp-thumb {
            width: 100%;
            height: auto;
            aspect-ratio: 1.65 / 1;
            border-radius: 48px;
          }
          .bp-text {
            width: 100%;
            height: auto;
            padding: 0 24px;
            gap: 16px;
          }
          .bp-title {
            -webkit-line-clamp: 3;
            max-height: none;
          }
          .bp-excerpt {
            -webkit-line-clamp: 3;
          }
        }
      `}</style>
    </section>
  );
}
