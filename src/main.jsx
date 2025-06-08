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
import AllBook from "./Components/Dashboard/AddBooks/AllBook.jsx";
import Addblog from "./Components/Blog/Addblog.jsx";
import ViewCard from "./Components/card/ViewCard.jsx";
import AuthProvider from "./Components/Firebase/AuthProvider.jsx";
import Login from "./Components/Firebase/Login.jsx";
import Register from "./Components/Firebase/Register.jsx";
import BlogsDash from "./Components/Dashboard/blogsDash/BlogsDash.jsx";


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
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/viewcard/:id",
        element: <ViewCard></ViewCard>
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
      path: "/dashboard/allblogs",
      element: <BlogsDash></BlogsDash>
    },
    {
      path: "/dashboard/allbooks",
      element: <AllBook></AllBook>
    },
    {
      path: "/dashboard/allblog",
      element: <Addblog></Addblog>
    }
  ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
