import { createFileRoute } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { MobileHeaderAndMenu } from "@/components/mobile-header-menu";
import { TopStatusBar, CentralHero } from "@/components/top-status-and-hero";
import { AnimatedImageStrip } from "@/components/animated-image-strip";
import { FeaturedProjects } from "@/components/featured-projects";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Experience } from "@/components/experience";
import { Philosophy } from "@/components/philosophy";
import { Testimonials } from "@/components/testimonials";
import { Toolkits } from "@/components/toolkits";
import { BlogPreview } from "@/components/blog-preview";
import { Faqs } from "@/components/faqs";
import { ContactFooter } from "@/components/contact-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GoHighLevel Specialist & AI Automation | Khuram Shahzad" },
      {
        name: "description",
        content:
          "Work with Khuram Shahzad for GoHighLevel CRM setup, sales funnels and AI automation that simplify lead follow-up and business operations.",
      },
      { property: "og:title", content: "GoHighLevel Specialist & AI Automation | Khuram Shahzad" },
      {
        property: "og:description",
        content:
          "Work with Khuram Shahzad for GoHighLevel CRM setup, sales funnels and AI automation that simplify lead follow-up and business operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomepageSectionOne,
});

function HomepageSectionOne() {
  return (
    <div className="relative min-h-screen w-full selection:bg-neutral-900 selection:text-white">
      {/*
        Decorative dotted-texture background layer (absolute, behind the white frame).
        Visible only in the outer gutters; the white frame covers it elsewhere.
        Narrower on tablet, hidden entirely on mobile.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-dotted-texture hidden sm:block"
      />

      {/*
        Centred page container: white, square corners, subtle 1px #E4E4E7 vertical borders.
        72px outer gutters on desktop (calc(100% - 144px), margin-inline: auto);
        16px below 1024px; 8px below 640px. No restrictive max-width.
      */}
      <div className="relative z-10 mx-auto bg-white border-x border-[#E4E4E7] flex flex-col min-h-screen w-[calc(100%-144px)] max-lg:w-[calc(100%-32px)] max-sm:w-[calc(100%-16px)]">
        {/* Tablet and Mobile Header (< 1024px): Compact Black Header with Expandable Black Menu */}
        <MobileHeaderAndMenu />

        {/*
          Section 1 Layout:
          Desktop (1024px+): LEFT Sidebar column (304px incl. 16px padding) + RIGHT main content.
          Main column uses remaining width, min-width: 0. Hero centred within it.
          Sidebar remains visible at all widths of 1024px and above.
        */}
        <div className="flex-1 flex flex-col lg:flex-row relative w-full">
          {/* Desktop Dedicated LEFT Column for Sidebar (1024px and above) */}
          <aside
            className="hidden lg:block w-[304px] shrink-0 p-4 relative bg-white self-stretch"
            aria-label="Desktop Profile Sidebar Container"
          >
            <div className="sticky top-4 h-[calc(100dvh-32px)] w-full z-20">
              <ProfileSidebar />
            </div>
          </aside>

          {/*
            Main Content Area (RIGHT of sidebar on desktop).
            Desktop hero: 100dvh. 112px status bar at top, then space-evenly between
            headline group and image strip. Mobile/tablet: content-driven height + 32px gaps.
            Subsequent sections (Featured Projects, etc.) flow below the hero.
          */}
          <main className="flex-1 min-w-0 flex flex-col border-t border-[#E4E4E7] lg:border-t-0 lg:border-l lg:border-[#E4E4E7]">
            {/* Hero block: headline group at top; the logo strip sits a
                controlled distance below the CTA and Projects appears soon
                after. Tablet/mobile use content-driven natural spacing. */}
            <div className="flex flex-col">
              <TopStatusBar />

              <div className="flex flex-col justify-start gap-8 sm:gap-10 lg:gap-0 px-3 sm:px-6 lg:px-10 py-4 sm:py-6 lg:pt-32 lg:pb-6">
                <CentralHero />
                <AnimatedImageStrip />
              </div>
            </div>

            {/* Section 2: Featured Projects — inside the main content column */}
            <FeaturedProjects />

            {/* Section 3: Services — inside the main content column */}
            <Services />

            {/* Section 4: Process — inside the main content column */}
            <Process />

            {/* Section 5: Experience — inside the main content column */}
            <Experience />

            {/* Section 6: Philosophy — inside the main content column */}
            <Philosophy />

            {/* Section 7: Testimonials — inside the main content column */}
            <Testimonials />

            {/* Section 8: Toolkits — inside the main content column */}
            <Toolkits />

            {/* Section 9: Blog Preview — inside the main content column */}
            <BlogPreview />

            {/* Section 10: FAQs — inside the main content column */}
            <Faqs />

            {/* Section 11: Contact CTA + Footer — inside the main content column */}
            <ContactFooter />
          </main>
        </div>
      </div>
    </div>
  );
}
