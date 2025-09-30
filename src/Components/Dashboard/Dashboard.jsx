import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdAddBox, MdLibraryBooks, MdPeople, MdMenu, MdClose } from "react-icons/md";
import { FaBlog, FaBloggerB } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiBook } from "react-icons/fi";

const Dashboard = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: "/dashboard/addbooks", label: "Add Books", icon: MdAddBox },
    { path: "/dashboard/allbooks", label: "All Books List", icon: MdLibraryBooks },
    { path: "/dashboard/allblog", label: "Add Blogs", icon: FaBloggerB },
    { path: "/dashboard/allblogs", label: "All Blogs", icon: FaBlog },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#DC0155] rounded-lg flex items-center justify-center">
            <FiBook className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isSidebarOpen ? (
            <MdClose className="w-6 h-6 text-gray-700" />
          ) : (
            <MdMenu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:sticky top-0 left-0 md:top-0 w-72 h-screen bg-gradient-to-b from-[#DC0155] to-pink-600 text-white shadow-xl transition-transform duration-300 ease-in-out z-50 md:z-auto`}
      >
        <div className="p-6">
          {/* Logo Section */}
          <div className="hidden md:flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <FiBook className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="text-xs text-pink-100">Admin Panel</p>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-white text-[#DC0155] shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Divider */}
            <div className="pt-4 mt-4 border-t border-white/20">
              <Link
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium text-sm text-white transition-all duration-200"
              >
                <AiOutlineHome className="w-5 h-5 flex-shrink-0" />
                <span>Back to Home</span>
              </Link>
            </div>
          </nav>

          {/* Bottom Section */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-xs text-pink-100 mb-1">Need Help?</p>
              <p className="text-sm font-semibold">Contact Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Content Area */}
      <div className="flex-1 md:ml-0 overflow-auto">
        <div className="p-4 sm:p-6 lg:p-8">


          {/* Content Outlet */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-200px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;