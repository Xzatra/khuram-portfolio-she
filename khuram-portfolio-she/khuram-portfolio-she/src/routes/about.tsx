import { createFileRoute } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar } from "@/components/top-status-and-hero";
import { ContactFooter } from "@/components/contact-footer";
import { AboutHero } from "@/components/about-hero";
import { AboutPhilosophy } from "@/components/about-philosophy";
import { AboutExperience } from "@/components/about-experience";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Khuram Shahzad — GoHighLevel Specialist & Founder of KDM Growth" },
      {
        name: "description",
        content:
          "I'm Khuram Shahzad, a GoHighLevel specialist and founder of KDM Growth. I build connected CRM systems, lead generation, automation, and training that help businesses follow through.",
      },
      { property: "og:title", content: "About Khuram Shahzad — GoHighLevel Specialist" },
      {
        property: "og:description",
        content:
          "I build connected GoHighLevel systems across CRM setup, lead generation, automation, and practical training so teams can follow up and grow with less manual work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
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

            {/* About hero: image orbit + GHL SPECIALIST wordmark */}
            <AboutHero />

            {/* About philosophy panel */}
            <AboutPhilosophy />

            {/* About experience (wider timeline) */}
            <AboutExperience />

            {/* Shared footer */}
            <ContactFooter />
          </main>
        </div>
      </div>
    </div>
  );
}
