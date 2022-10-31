import { Navigate, useRoutes } from "react-router";

import NotFound from "./pages/NotFound";
import Timeline from "./pages/Timeline";

const Router = () =>
  useRoutes([
    {
      path: "/timeline",
      element: <Timeline />,
    },
    {
      path: "/",
      children: [
        { path: "/", element: <Navigate to="/timeline" /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" /> },
  ]);

export default Router;
