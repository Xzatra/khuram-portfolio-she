import { createFileRoute, Link } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import {
  services,
  servicesIntro,
  servicesHeadingLines,
  ServiceIcon,
  DeliverablePill,
} from "@/lib/services-config";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "GoHighLevel Services — Khuram Shahzad" },
      {
        name: "description",
        content:
          "GoHighLevel CRM setup, automation and AI agents, funnels and websites, and Google & Meta ads — connected so each enquiry has a clear next step.",
      },
      { property: "og:title", content: "GoHighLevel Services — Khuram Shahzad" },
      {
        property: "og:description",
        content:
          "GoHighLevel CRM setup, automation and AI agents, funnels and websites, and Google & Meta ads — connected so each enquiry has a clear next step.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khuramshahzad.com/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
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

            {/* ── Page header ── */}
            <section aria-labelledby="services-page-heading" className="w-full bg-white">
              <div
                className="mx-auto w-full"
                style={{
                  maxWidth: "1000px",
                  padding: "clamp(40px, 6vw, 64px) clamp(16px, 3vw, 24px) clamp(48px, 8vw, 80px)",
                }}
              >
                <div className="flex flex-col gap-4 max-w-[640px] animate-section-rise">
                  <h1
                    id="services-page-heading"
                    className="svc-title min-w-0"
                    style={{
                      fontSize: "clamp(36px, 6vw, 64px)",
                      lineHeight: "clamp(40px, 6vw, 64px)",
                      fontWeight: 500,
                      letterSpacing: "-3.2px",
                      margin: 0,
                    }}
                  >
                    {servicesHeadingLines[0]}
                    <br />
                    {servicesHeadingLines[1]}
                  </h1>
                  <p
                    className="svc-desc font-normal"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      letterSpacing: "-0.32px",
                      margin: 0,
                      maxWidth: "304px",
                    }}
                  >
                    {servicesIntro}
                  </p>
                </div>
              </div>
            </section>

            {/* ── Stacked service cards ── */}
            <section aria-label="Service details" className="w-full bg-white">
              <div
                className="mx-auto w-full flex flex-col"
                style={{
                  maxWidth: "1000px",
                  padding: "0 clamp(16px, 3vw, 24px) clamp(48px, 8vw, 80px)",
                  gap: "16px",
                }}
              >
                {services.map((service, index) => (
                  <Link
                    key={service.id}
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="svc-card flex flex-col lg:flex-row animate-section-rise no-underline"
                    style={
                      {
                        "--rise-delay": `${index * 60}ms`,
                        gap: "clamp(20px, 3vw, 40px)",
                      } as React.CSSProperties
                    }
                  >
                    {/* 1. Icon circle on the left */}
                    <div
                      className="svc-icon-circle flex items-center justify-center shrink-0 self-start"
                      style={{ width: "48px", height: "48px", borderRadius: "100px" }}
                    >
                      <ServiceIcon name={service.icon} />
                    </div>

                    {/* 2. Main content */}
                    <div className="flex-1 min-w-0 flex flex-col">
                      {/* 3. Title + description */}
                      <div className="flex flex-col" style={{ gap: "8px" }}>
                        <h2
                          className="svc-title"
                          style={{
                            fontSize: "clamp(24px, 2.8vw, 32px)",
                            lineHeight: "clamp(27px, 3.2vw, 36px)",
                            fontWeight: 500,
                            letterSpacing: "-0.64px",
                            margin: 0,
                          }}
                        >
                          {service.name}
                        </h2>
                        <p
                          className="svc-desc font-normal"
                          style={{
                            fontSize: "16px",
                            lineHeight: "20px",
                            letterSpacing: "-0.32px",
                            margin: 0,
                          }}
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* 4. 24px gap, 5. Pills (left) + checklist (right) */}
                      <div
                        className="flex flex-col xl:flex-row"
                        style={{ marginTop: "24px", gap: "clamp(20px, 3vw, 40px)" }}
                      >
                        {/* Deliverable pills */}
                        <div className="flex flex-wrap flex-1 min-w-0" style={{ gap: "8px" }}>
                          {service.deliverables.map((d) => (
                            <DeliverablePill key={d} label={d} />
                          ))}
                        </div>

                        {/* Checklist */}
                        <ul
                          className="flex flex-col shrink-0"
                          style={{ gap: "4px", listStyle: "none", padding: 0, margin: 0 }}
                        >
                          {service.checklist.map((item) => (
                            <li key={item} className="flex items-start" style={{ gap: "12px" }}>
                              <span
                                className="svc-check-box flex items-center justify-center shrink-0"
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  borderRadius: "12px",
                                  marginTop: "1px",
                                }}
                              >
                                <Check className="w-3 h-3" strokeWidth={2.5} />
                              </span>
                              <span
                                className="svc-check-text"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "20px",
                                  fontWeight: 500,
                                  letterSpacing: "-0.28px",
                                  paddingTop: "6px",
                                }}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Footer */}
            <ContactFooter />
          </main>
        </div>
      </div>
    </div>
  );
}
