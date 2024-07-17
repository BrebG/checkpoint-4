import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Consult from "./pages/Consult";
import Blog from "./pages/Blog";
import NavbarLayout from "./components/NavbarLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/consultation",
        element: <Consult />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
