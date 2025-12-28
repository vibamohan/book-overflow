import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import PostBook from "../pages/PostBook";
import Books from "../pages/Books";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post", element: <PostBook /> },
      { path: "/listings", element: <Books /> }
    ],
  },
]);
