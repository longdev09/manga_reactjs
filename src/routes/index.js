import Home from "../pages/Home";
import Detail from "../pages/Detail";
import routes from "../config";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: routes.detail, component: Detail },
];
