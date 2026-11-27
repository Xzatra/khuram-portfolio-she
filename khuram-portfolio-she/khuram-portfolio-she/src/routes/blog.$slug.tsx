import { createFileRoute, Outlet } from "@tanstack/react-router";

/*
 * /blog/$slug layout route.
 *
 * Renders <Outlet /> so the nested index route (src/routes/blog.$slug.index.tsx,
 * serving URL /blog/{slug}) can mount. The article page body and its
 * article-specific head metadata live in blog.$slug.index.tsx.
 *
 * This keeps blog.$slug a proper parent route rather than a leaf component
 * that would mask any nested children.
 */

export const Route = createFileRoute("/blog/$slug")({
  component: BlogSlugLayout,
});

function BlogSlugLayout() {
  return <Outlet />;
}
