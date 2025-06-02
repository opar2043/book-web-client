import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdAddBox, MdLibraryBooks, MdPeople } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-64 w-full bg-pink-500 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-3 text-white text-base">
          <li>
            <Link
              to="/dashboard/addbooks"
              className="flex items-center gap-2 hover:bg-pink-600 rounded px-3 py-2"
            >
              <MdAddBox size={20} /> Add Books
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/allbooks"
              className="flex items-center gap-2 hover:bg-pink-600 rounded px-3 py-2"
            >
              <MdLibraryBooks size={20} /> All Books List
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/allblog"
              className="flex items-center gap-2 hover:bg-pink-600 rounded px-3 py-2"
            >
              <FaBloggerB size={18} /> Add Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/users"
              className="flex items-center gap-2 hover:bg-pink-600 rounded px-3 py-2"
            >
              <MdPeople size={20} /> Users
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 rounded px-3 py-2"
            >
              <AiOutlineHome size={20} /> Back to Home
            </Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
