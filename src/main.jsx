import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Hero from "./Components/Root/Hero.jsx";
import Allbooks from "./Components/card/Allbooks.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import AddBooks from "./Components/Dashboard/AddBooks/AddBooks.jsx";
import Users from "./Components/Dashboard/Users/Users.jsx";
import AllBook from "./Components/Dashboard/AddBooks/AllBook.jsx";


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
    element: <Dashboard></Dashboard>,
    children: [
    {
      path: "/dashboard/addbooks",
      element: <AddBooks></AddBooks>
    },
    {
      path: "/dashboard/users",
      element: <Users></Users>
    },
    {
      path: "/dashboard/allbooks",
      element: <AllBook></AllBook>
    }
  ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
