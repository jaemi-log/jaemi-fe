import { Navigate, useRoutes } from "react-router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Router = () =>
  useRoutes([
    {
      path: "/",
      children: [
        { path: "/", element: <Home /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" /> },
  ]);

export default Router;
