import { createFileRoute, Outlet } from "@tanstack/react-router";

/*
 * /blog layout route. Renders <Outlet /> so nested children
 * (/blog/index and /blog/$slug) can mount. The listing lives in
 * src/routes/blog.index.tsx; per-article pages live in blog.$slug.tsx.
 */

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Khuram Shahzad" },
      {
        name: "description",
        content:
          "Journal on GoHighLevel systems, AI automation, sales funnels, and lead follow-up by Khuram Shahzad.",
      },
      { property: "og:title", content: "Blog — Khuram Shahzad" },
      {
        property: "og:description",
        content:
          "Journal on GoHighLevel systems, AI automation, sales funnels, and lead follow-up by Khuram Shahzad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
