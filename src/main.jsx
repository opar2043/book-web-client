import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Hero from "./Components/Root/Hero.jsx";
import Allbooks from "./Components/card/Allbooks.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>
      },
      {
        path: "/allbook",
        element: <Allbooks></Allbooks>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
