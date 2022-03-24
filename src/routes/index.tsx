import AppLayout from "@/layout";
import AppAbout from "@/views/About";
import Forbidden from "@/views/Exception/Forbidden";
import NotFound from "@/views/Exception/NotFound";
import AppHome from "@/views/Home";
import { RouteObject } from "react-router-dom";

export type RouteType = RouteObject & {
  title?: string;
  hideInMenu?: boolean;
  children?: RouteType[];
};

const routes: RouteType[] = [
  {
    path: "/",
    element: <AppHome />,
    title: "首页",
  },
  {
    path: "/admin",
    element: <AppLayout />,
    title: "控制台",
    children: [
      {
        index: true,
        path: "/admin/about",
        element: <AppAbout />,
      },
      {
        path: "/admin/about",
        element: <AppAbout />,
        title: "About",
      },
    ],
  },
  {
    path: "/admin/forbidden",
    element: <Forbidden />,
    title: "403",
  },
  { path: "*", element: <NotFound />, title: "404", hideInMenu: true },
];

export default routes;
