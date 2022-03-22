import AppLayout from "@/layout";
import Forbidden from "@/views/Exception/Forbidden";
import NotFound from "@/views/Exception/NotFound";
import { RouteObject } from "react-router-dom";
import AppAbout from "@/views/About";
import AppHome from "@/views/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <AppHome /> },
      {
        path: "/about",
        element: <AppAbout />,
      },
      {
        path: "/forbidden",
        element: <Forbidden />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
