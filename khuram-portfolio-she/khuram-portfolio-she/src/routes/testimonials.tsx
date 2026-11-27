import { createFileRoute, redirect } from "@tanstack/react-router";

// The dedicated /testimonials page has been removed. The full collection of
// 10 genuine video testimonials now lives entirely in the homepage
// Testimonials section (`/#testimonials`). Old links to /testimonials
// redirect there so visitors land on the complete collection rather than a
// broken or duplicate page.

export const Route = createFileRoute("/testimonials")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "testimonials" });
  },
  // No component — redirect is handled in beforeLoad.
});
