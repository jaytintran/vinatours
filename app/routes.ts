import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  route("", "routes/home.tsx"),
  route("sign-in", "routes/root/sign-in.tsx"),
  route("sign-up", "routes/root/sign-up.tsx"),
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/all-users.tsx"),
    route("trips", "routes/admin/trips.tsx"),
  ]),
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
