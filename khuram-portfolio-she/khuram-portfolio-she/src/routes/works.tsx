import { createFileRoute, Outlet } from "@tanstack/react-router";

/*
 * /works layout route. Renders <Outlet /> so nested children
 * (/works/index and /works/$slug) can mount. The listing body lives in
 * src/routes/works.index.tsx; per-project pages live in works.$slug.tsx.
 */

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Works — Khuram Shahzad" },
      {
        name: "description",
        content:
          "Selected projects — GoHighLevel builds, funnels, and automation work by Khuram Shahzad.",
      },
      { property: "og:title", content: "Works — Khuram Shahzad" },
      {
        property: "og:description",
        content:
          "Selected projects — GoHighLevel builds, funnels, and automation work by Khuram Shahzad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorksLayout,
});

function WorksLayout() {
  return <Outlet />;
}
