import { createFileRoute } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";

/*
 * /contact page.
 *
 * Reuses the shared shell (sticky LEFT sidebar, gutters, dotted texture,
 * responsive black header, top status bar) and renders the existing wide
 * ContactFooter component once — which contains both the contact CTA / form
 * panel and the lower contact + navigation + legal panel. No second footer is
 * appended.
 *
 * The form inside ContactFooter handles its own validation, pending, success
 * and error states. Submission integration is configurable there; until an
 * endpoint is connected it does not fake a success message.
 */

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Khuram Shahzad" },
      {
        name: "description",
        content:
          "Get in touch with Khuram Shahzad about GoHighLevel CRM setup, sales funnels, and AI automation.",
      },
      { property: "og:title", content: "Contact — Khuram Shahzad" },
      {
        property: "og:description",
        content:
          "Get in touch with Khuram Shahzad about GoHighLevel CRM setup, sales funnels, and AI automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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

            {/* Contact CTA + form + lower contact/navigation/legal panel (single footer) */}
            <ContactFooter forceH1 />
          </main>
        </div>
      </div>
    </div>
  );
}
