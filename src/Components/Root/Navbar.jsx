import React, { useContext } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  function logOut() {
    handleLogout()
      .then(() => {
        Swal.fire({
          title: "Log Out Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  const link = (
    <>
      <Link to={"/allbook"}>
        <li className="">
          <a>All Books</a>
        </li>
      </Link>
      <Link to={"/blog"}>
        <li className="">
          <a>Blog</a>
        </li>
      </Link>
      {!user ? (
        <Link to="/register">
          <li>
            <a>register</a>
          </li>
        </Link>
      ) : (
        <button
          onClick={() => logOut()}
          className="hover:bg-color hover:text-white rounded"
        >
          <li>
            <a href="">Log Out</a>
          </li>
        </button>
      )}

      <Link to={"/dashboard"}>
        <li className="bg-color hover:bg-pink-600 text-white rounded font-semibold">
          <a href="">Dashboard</a>
        </li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 border-b">
        <div className="flex-1">
          <p className="text-lg md:text-xl text-color font-extrabold">
            Book Store
          </p>
        </div>

        {/* Window */}

        <div className="hidden md:flex">
          <div className=" flex-none   ">
            <ul className="menu menu-horizontal text-color px-1 gap-2">
              {link}
            </ul>
          </div>
        </div>

        {/* Mobile */}

        <div className="drawer md:hidden justify-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn text-color drawer-button"
            >
              <IoIosMenu  size={35} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {link}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
