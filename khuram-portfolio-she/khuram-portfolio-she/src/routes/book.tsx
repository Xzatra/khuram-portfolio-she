import { createFileRoute, Link } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { ArrowUpRight } from "lucide-react";
import { portfolioConfig } from "@/lib/portfolio-config";

/*
 * /book — "Book a Strategy Call" page.
 *
 * Reuses the shared shell (sticky LEFT sidebar, gutters, dotted texture,
 * responsive black header, top status bar) and the shared footer once.
 *
 * The calendar embed is NOT connected yet. A single, clearly-marked
 * integration point (`#ghl-calendar-embed`) is provided where the exact
 * calendar embed code can be pasted later. Until then, a visible fallback
 * button links to the existing live booking calendar so visitors can
 * actually book. No availability or working calendar is fabricated.
 */

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — Khuram Shahzad" },
      {
        name: "description",
        content:
          "Book a strategy call with Khuram Shahzad to talk through your GoHighLevel setup, lead follow-up, funnels, and AI automation.",
      },
      { property: "og:title", content: "Book a Strategy Call — Khuram Shahzad" },
      {
        property: "og:description",
        content:
          "Book a strategy call with Khuram Shahzad to talk through your GoHighLevel setup, lead follow-up, funnels, and AI automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { person } = portfolioConfig;

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

            {/* ── Booking section ── */}
            <section
              className="w-full px-6 py-16 sm:px-6 lg:px-6 lg:py-20"
              aria-labelledby="book-heading"
            >
              <div className="mx-auto w-full" style={{ maxWidth: "1000px" }}>
                {/* Label */}
                <span
                  className="inline-flex items-center text-white"
                  style={{
                    height: "36px",
                    padding: "8px 14px",
                    borderRadius: "50px",
                    background: "linear-gradient(198deg,#27272A 0%,#141414 100%)",
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    letterSpacing: "-0.28px",
                  }}
                >
                  Booking
                </span>

                {/* Heading */}
                <h1
                  id="book-heading"
                  className="mt-3 mb-0"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "clamp(32px, 5vw, 48px)",
                    lineHeight: "clamp(34.67px, 5vw, 52px)",
                    fontWeight: 500,
                    letterSpacing: "clamp(-1.6px, -0.24vw, -2.4px)",
                    color: "#09090B",
                    maxWidth: "624px",
                  }}
                >
                  Book a Strategy Call
                </h1>

                {/* Supporting copy */}
                <p
                  className="mt-6 mb-0"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    letterSpacing: "-0.32px",
                    color: "#52525B",
                    maxWidth: "624px",
                  }}
                >
                  Tell me about your business, current setup, and where follow-up or automation is
                  slowing you down. We’ll use the call to identify a practical next step.
                </p>

                {/* Calendar embed card */}
                <div
                  className="mt-12 flex flex-col"
                  style={{
                    background: "#F4F4F5",
                    borderRadius: "56px",
                    padding: "32px",
                  }}
                >
                  {/* "Choose a time" heading */}
                  <h2
                    className="mb-0"
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: "24px",
                      lineHeight: "28px",
                      fontWeight: 500,
                      letterSpacing: "-0.72px",
                      color: "#09090B",
                    }}
                  >
                    Choose a time
                  </h2>

                  {/* Calendar embed container.
                      INTEGRATION POINT: paste the exact calendar embed
                      (script/iframe) inside the element with id
                      "ghl-calendar-embed" below. It is intentionally empty
                      until the embed code is supplied. */}
                  <div
                    id="ghl-calendar-embed"
                    data-ghl-calendar
                    className="mt-6 w-full"
                    style={{
                      minHeight: "560px",
                      background: "#FAFAFA",
                      borderRadius: "48px",
                      padding: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label="Calendar scheduling widget"
                  >
                    {/* Placeholder shown until the real embed is pasted in. */}
                    <div
                      className="flex flex-col items-center text-center"
                      style={{ maxWidth: "420px" }}
                    >
                      <p
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontSize: "16px",
                          lineHeight: "24px",
                          fontWeight: 400,
                          letterSpacing: "-0.32px",
                          color: "#52525B",
                          margin: 0,
                        }}
                      >
                        The scheduling calendar will appear here once the embed is connected.
                      </p>

                      {/* Fallback button — links to the existing live calendar so
                          visitors can actually book right now. */}
                      <a
                        href={person.externalBookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-6 inline-flex items-center gap-2 px-6 text-white transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          height: "40px",
                          borderRadius: "10px",
                          background: "#27272A",
                          boxShadow: "inset 0 3px 1px rgba(255,255,255,0.1)",
                          fontFamily: "Satoshi, sans-serif",
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontWeight: 500,
                        }}
                      >
                        Open booking calendar
                        <ArrowUpRight className="w-4 h-4 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Prefer to email? */}
                <p
                  className="mt-8 mb-0"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 400,
                    letterSpacing: "-0.28px",
                    color: "#71717A",
                  }}
                >
                  Prefer to write first?{" "}
                  <Link
                    to="/contact"
                    className="underline text-[#09090B] hover:opacity-70 transition-opacity"
                  >
                    Send a message
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Shared footer (single instance) */}
            <ContactFooter />
          </main>
        </div>
      </div>
    </div>
  );
}
