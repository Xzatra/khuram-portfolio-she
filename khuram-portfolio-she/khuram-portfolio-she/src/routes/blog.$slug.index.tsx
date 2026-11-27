import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { blogArticles, blogArticleBySlug, type Article } from "@/lib/blog-config";
import { blogArticleStyles } from "./blog.$slug.styles";
import { ArrowLeft, Check, Link2, Linkedin } from "lucide-react";

// Site origin for absolute canonical / share URLs. Update when the custom
// domain is live. Used so article share links are never empty on first render.
const SITE_ORIGIN = "https://khuramshahzad.com";

export const Route = createFileRoute("/blog/$slug/")({
  head: ({ params }) => {
    const article = blogArticleBySlug(params.slug);
    const title = article ? `${article.title} — Khuram Shahzad` : "Article — Khuram Shahzad";
    const description = article?.excerpt ?? "Journal article by Khuram Shahzad.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(article
          ? [
              { property: "og:image", content: article.image },
              { name: "twitter:image", content: article.image },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: `${SITE_ORIGIN}/blog/${params.slug}` }],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const article = blogArticleBySlug(slug);
  // Related articles: exclude current, take next three
  const related = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

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

            {article ? (
              <ArticleDetail article={article} related={related} />
            ) : (
              <section className="ba-section" aria-labelledby="ba-heading">
                <div className="ba-inner">
                  <div className="ba-missing">
                    <h1 id="ba-heading" className="ba-title">
                      Article not found
                    </h1>
                    <p className="ba-desc">
                      The article you're looking for doesn't exist or may have been moved.
                    </p>
                    <Link to="/blog" className="ba-cta">
                      Back to all articles
                    </Link>
                  </div>
                </div>
              </section>
            )}

            <ContactFooter />
          </main>
        </div>
      </div>

      <style>{blogArticleStyles}</style>
    </div>
  );
}

type ArticleDetailProps = {
  article: Article;
  related: Article[];
};

function ArticleDetail({ article, related }: ArticleDetailProps) {
  const [copied, setCopied] = useState(false);

  // Absolute canonical URL for this article — built server-side so the share
  // links are never empty. Used for both LinkedIn share and Copy Link.
  const absoluteUrl = `${SITE_ORIGIN}/blog/${article.slug}`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(absoluteUrl);
      } else {
        // Fallback for environments without the async Clipboard API
        const ta = document.createElement("textarea");
        ta.value = absoluteUrl;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    absoluteUrl,
  )}`;

  // Only render the date pill when a publication date exists
  const showDate = Boolean(article.date);

  return (
    <>
      <article className="ba-section" aria-labelledby="ba-article-title">
        <div className="ba-inner">
          <Link to="/blog" className="ba-back">
            <ArrowLeft className="ba-back-icon" aria-hidden="true" />
            All Articles
          </Link>

          {/* Cover image */}
          <div className="ba-cover">
            <img src={article.image} alt={`${article.title} cover image`} loading="eager" />
          </div>

          {/* Heading group (centred 624px) */}
          <div className="ba-head">
            <div className="ba-meta">
              <span className="ba-meta-pill">{article.category}</span>
              {showDate ? <span className="ba-meta-pill">{article.date}</span> : null}
            </div>
            <h1 id="ba-article-title" className="ba-title">
              {article.title}
            </h1>
          </div>

          {/* Intro paragraph */}
          <div className="ba-body">
            <p className="ba-para">{article.intro}</p>

            {/* Body sections */}
            {article.sections.map((block, index) => (
              <div
                className={`ba-block${index === 0 ? " ba-block-major" : ""}`}
                key={block.heading}
              >
                <h2 className="ba-h2">{block.heading}</h2>
                <p className="ba-para">{block.body}</p>
              </div>
            ))}
          </div>

          {/* Internal links (kept inside the 624px body) */}
          {article.links && article.links.length > 0 && (
            <div className="ba-links">
              {article.links.map((l) => (
                <Link key={l.to} to={l.to} className="ba-link-pill">
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {/* FAQs */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="ba-faqs" aria-labelledby="ba-faqs-heading">
              <h2 id="ba-faqs-heading" className="ba-h2 ba-faqs-title">
                Quick answers
              </h2>
              <div className="ba-faqs-list">
                {article.faqs.map((f, i) => (
                  <details key={i} className="ba-faq-item" {...(i === 0 ? { open: true } : {})}>
                    <summary className="ba-faq-q">{f.question}</summary>
                    <div className="ba-faq-a">
                      <p className="ba-para">{f.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Share area */}
          <div className="ba-share">
            <p className="ba-share-label">Share this article</p>
            <div className="ba-share-actions">
              <a
                className="ba-share-btn"
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share this article on LinkedIn"
              >
                <Linkedin className="ba-share-icon" aria-hidden="true" />
                LinkedIn
              </a>
              <button
                type="button"
                className="ba-share-btn"
                onClick={handleCopyLink}
                data-copied={copied}
                aria-label="Copy link to this article"
              >
                {copied ? (
                  <Check className="ba-share-icon" aria-hidden="true" />
                ) : (
                  <Link2 className="ba-share-icon" aria-hidden="true" />
                )}
                {copied ? "Copied" : "Copy Link"}
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="ba-related-section" aria-labelledby="ba-related-heading">
        <div className="ba-related-inner">
          <div className="ba-related-head">
            <span className="ba-related-label">My Blog</span>
            <h2 id="ba-related-heading" className="ba-related-heading">
              Explore More Posts
            </h2>
          </div>
          <div className="ba-related-list">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="ba-card"
                aria-label={r.title}
              >
                <span className="ba-card-thumb">
                  <img src={r.image} alt={`${r.title} cover image`} loading="lazy" />
                </span>
                <span className="ba-card-text">
                  <span className="ba-card-title">{r.title}</span>
                  <span className="ba-card-bottom">
                    <span className="ba-card-excerpt">{r.excerpt}</span>
                    <span className="ba-card-meta">
                      <span className="ba-card-pill">{r.category}</span>
                      {r.date ? <span className="ba-card-pill">{r.date}</span> : null}
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
