import { createFileRoute, Link } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import { getServiceDetail, serviceDetails } from "@/lib/service-details";
import { services } from "@/lib/services-config";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const detail = getServiceDetail(params.slug);
    const title = detail ? `${detail.name} — Khuram Shahzad` : "Service — Khuram Shahzad";
    const description = detail?.tagline ?? "GoHighLevel services by Khuram Shahzad.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `https://khuramshahzad.com/services/${params.slug}` }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const detail = getServiceDetail(slug);

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

            {detail ? (
              <ServiceDetail detail={detail} />
            ) : (
              <section className="svc-detail-section" aria-labelledby="svc-detail-heading">
                <div className="svc-detail-inner">
                  <div className="svc-detail-missing">
                    <h1 id="svc-detail-heading" className="svc-detail-title">
                      Service not found
                    </h1>
                    <p className="svc-detail-desc">
                      The service you’re looking for doesn’t exist or may have been moved.
                    </p>
                    <Link to="/services" className="svc-detail-cta">
                      Back to all services
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
        .svc-detail-section {
          width: 100%;
          background: #ffffff;
          padding: 0 24px 80px;
          box-sizing: border-box;
        }
        .svc-detail-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* Back link */
        .svc-detail-back {
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
        .svc-detail-back:hover { color: #09090b; }
        .svc-detail-back:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #27272a;
          border-radius: 6px;
        }
        .svc-detail-back-icon { width: 16px; height: 16px; }

        /* Label pill */
        .svc-detail-label {
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

        /* Title — 64px/64px, weight 500, -3.2px */
        .svc-detail-title {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 64px;
          line-height: 64px;
          font-weight: 500;
          letter-spacing: -3.2px;
          color: #09090b;
        }

        /* Tagline */
        .svc-detail-tagline {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 18px;
          line-height: 23.4px;
          font-weight: 400;
          letter-spacing: -0.36px;
          color: #52525b;
        }

        /* Body */
        .svc-detail-body {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .svc-detail-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 40px;
          align-items: start;
        }

        /* Content typography */
        .svc-content { display: flex; flex-direction: column; gap: 48px; }
        .svc-block { display: flex; flex-direction: column; gap: 16px; }
        .svc-h-major {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 24px;
          line-height: 31.2px;
          font-weight: 500;
          letter-spacing: -0.48px;
          color: #09090b;
        }
        .svc-h-sub {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 18px;
          line-height: 23.4px;
          font-weight: 500;
          letter-spacing: -0.36px;
          color: #09090b;
        }
        .svc-para {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          letter-spacing: -0.32px;
          color: #52525b;
        }

        /* Included checklist */
        .svc-included {
          display: flex;
          flex-direction: column;
          gap: 4px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .svc-included li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .svc-check-box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 12px;
          background: #f4f4f5;
          border: 1px solid #e4e4e7;
          margin-top: 1px;
        }
        .svc-check-text {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          color: #09090b;
          padding-top: 6px;
        }

        /* FAQ panel */
        .svc-faq-panel {
          background: #f4f4f5;
          border-radius: 56px;
          padding: 32px 12px 12px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .svc-faq-intro { padding: 0 20px; }
        .svc-faq-list { display: flex; flex-direction: column; gap: 12px; }
        .svc-faq-item {
          background: #fafafa;
          border-radius: 32px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .svc-faq-q {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.32px;
          color: #09090b;
        }
        .svc-faq-a {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525b;
        }

        /* CTA */
        .svc-detail-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
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
          transition: background-color 200ms ease;
        }
        .svc-detail-cta:hover { background-color: #1f1f22; }
        .svc-detail-cta:focus-visible {
          outline: none;
          box-shadow: inset 0 3px 1px rgba(255, 255, 255, 0.1), 0 0 0 2px #fff, 0 0 0 4px #27272a;
        }

        /* Related services */
        .svc-related-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 24px;
          box-sizing: border-box;
        }
        .svc-related-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .svc-related-head { display: flex; flex-direction: column; gap: 12px; }
        .svc-related-label {
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
        .svc-related-heading {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 48px;
          line-height: 52px;
          font-weight: 500;
          letter-spacing: -2.4px;
          color: #09090b;
        }
        .svc-related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .svc-related-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 32px;
          background: #f4f4f5;
          border-radius: 56px;
          text-decoration: none;
          transition: background-color 200ms ease;
        }
        .svc-related-card:hover { background-color: #e4e4e7; }
        .svc-related-card:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a;
        }
        .svc-related-name {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 24px;
          line-height: 28px;
          font-weight: 500;
          letter-spacing: -0.72px;
          color: #09090b;
        }
        .svc-related-desc {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.32px;
          color: #52525b;
        }

        /* Not-found state */
        .svc-detail-missing {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .svc-detail-desc {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 20px;
          color: #52525b;
        }

        /* Tablet */
        @media (max-width: 1199px) {
          .svc-detail-title { font-size: 48px; line-height: 48px; }
          .svc-related-heading { font-size: 40px; line-height: 44px; }
        }

        /* Mobile */
        @media (max-width: 809px) {
          .svc-detail-section { padding: 120px 16px 48px; }
          .svc-detail-title { font-size: 36px; line-height: 36px; letter-spacing: -1.8px; }
          .svc-detail-row { grid-template-columns: 1fr; gap: 32px; }
          .svc-faq-panel { border-radius: 40px; padding: 24px 12px 12px; }
          .svc-faq-item { border-radius: 24px; padding: 16px; }
          .svc-related-section { padding: 48px 16px; }
          .svc-related-heading { font-size: 32px; line-height: 36px; letter-spacing: -1.6px; }
          .svc-related-grid { grid-template-columns: 1fr; }
          .svc-related-card { border-radius: 40px; padding: 24px; }
        }
      `}</style>
    </div>
  );
}

type ServiceDetailProps = {
  detail: (typeof serviceDetails)[number];
};

function ServiceDetail({ detail }: ServiceDetailProps) {
  // Related services: exclude current, take next two.
  const related = serviceDetails.filter((s) => s.slug !== detail.slug).slice(0, 2);
  const relatedServices = related
    .map((r) => services.find((s) => s.slug === r.slug))
    .filter(Boolean) as (typeof services)[number][];

  return (
    <>
      <section className="svc-detail-section" aria-labelledby="svc-detail-heading">
        <div className="svc-detail-inner">
          <Link to="/services" className="svc-detail-back">
            <ArrowLeft className="svc-detail-back-icon" aria-hidden="true" />
            All Services
          </Link>

          {/* Label */}
          <span className="svc-detail-label">Services</span>

          {/* Title + tagline */}
          <h1 id="svc-detail-heading" className="svc-detail-title">
            {detail.name}
          </h1>
          <p className="svc-detail-tagline">{detail.tagline}</p>

          {/* Body */}
          <div className="svc-detail-body">
            {/* First row: introduction (left) | what's included (right) */}
            <div className="svc-detail-row">
              <div className="svc-content">
                <div className="svc-block">
                  <h2 className="svc-h-major">Overview</h2>
                  <p className="svc-para">{detail.introduction}</p>
                </div>
              </div>

              <div className="svc-block">
                <h2 className="svc-h-major">What’s included</h2>
                <ul className="svc-included">
                  {detail.included.map((item) => (
                    <li key={item}>
                      <span className="svc-check-box">
                        <Check className="w-3 h-3" strokeWidth={2.5} />
                      </span>
                      <span className="svc-check-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Approach block */}
            <div className="svc-block">
              <h2 className="svc-h-major">{detail.approachTitle}</h2>
              <p className="svc-para">{detail.approachBody}</p>
            </div>

            {/* FAQ panel */}
            <div className="svc-faq-panel">
              <div className="svc-faq-intro">
                <h2 className="svc-h-major">FAQs</h2>
              </div>
              <div className="svc-faq-list">
                {detail.faqs.map((faq) => (
                  <div className="svc-faq-item" key={faq.question}>
                    <h3 className="svc-faq-q">{faq.question}</h3>
                    <p className="svc-faq-a">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link to="/book" className="svc-detail-cta">
                Book a Strategy Call
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="svc-related-section" aria-labelledby="svc-related-heading">
        <div className="svc-related-inner">
          <div className="svc-related-head">
            <span className="svc-related-label">Services</span>
            <h2 id="svc-related-heading" className="svc-related-heading">
              Explore More Services
            </h2>
          </div>
          <div className="svc-related-grid">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="svc-related-card"
              >
                <span className="svc-related-name">{s.name}</span>
                <span className="svc-related-desc">{s.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
