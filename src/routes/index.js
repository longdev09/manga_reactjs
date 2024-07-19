import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Read from "../pages/Read";
import routes from "../config";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: routes.detail, component: Detail },
  { path: routes.read, component: Read, layout: null },
];
