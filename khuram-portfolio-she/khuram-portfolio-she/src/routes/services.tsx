import { createFileRoute, Outlet } from "@tanstack/react-router";

/*
 * /services layout route.
 *
 * The Services page body lives in src/routes/services.index.tsx (→ /services)
 * and each service detail lives in src/routes/services.$slug.tsx
 * (→ /services/$slug). Both child routes render their own full shared shell
 * (sticky sidebar, gutters, header, footer), so this layout only needs to
 * yield to the matching child via <Outlet />.
 */

export const Route = createFileRoute("/services")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
