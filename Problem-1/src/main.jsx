import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import TopUsers from "./pages/TopUsers.jsx";
import Feed from "./pages/Feed.jsx";
import TrendingPosts from "./pages/TrendingPosts.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/TopUsers",
    element: <TopUsers />,
  },
  {
    path: "/Feed",
    element: <Feed />,
  },
  {
    path: "/TrendingPosts",
    element: <TrendingPosts />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
