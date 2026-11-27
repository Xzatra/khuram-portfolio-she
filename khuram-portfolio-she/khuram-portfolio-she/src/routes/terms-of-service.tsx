import { createFileRoute } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { LegalPage } from "@/components/legal-page";
import { termsOfServiceConfig } from "@/lib/legal-config";

/*
 * /terms-of-service — uses the shared shell (sticky LEFT sidebar, gutters,
 * dotted texture, responsive black header, top status bar) and the reusable
 * LegalPage template. Shared footer rendered once.
 *
 * NOTE: The terms content is editable draft text. No approved legal wording,
 * payment terms, or governing-law details have been supplied — review and
 * replace before publishing.
 */

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Khuram Shahzad" },
      {
        name: "description",
        content:
          "Terms of Service for khuramshahzad.com — the terms governing use of the website and services.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Terms of Service — Khuram Shahzad" },
      {
        property: "og:description",
        content: "The terms governing use of the website and services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
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

            {/* Reusable legal page template — Terms of Service */}
            <LegalPage config={termsOfServiceConfig} />

            {/* Shared footer */}
            <ContactFooter />
          </main>
        </div>
      </div>
    </div>
  );
}
