import React, { useContext, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FiBook, FiHome, FiFileText, FiLogOut, FiLogIn, FiGrid } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function logOut() {
    handleLogout()
      .then(() => {
        Swal.fire({
          title: "Logged Out Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home", icon: FiHome },
    { path: "/allbook", label: "All Books", icon: FiBook },
    { path: "/blog", label: "Blog", icon: FiFileText },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="bg-[#DC0155] p-2 sm:p-2.5 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <FiBook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#DC0155]">
                Book Store
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Discover & Read</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-pink-50 text-[#DC0155]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#DC0155]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}

            {/* Auth Buttons */}
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-200">
              {!user ? (
                <Link to="/register">
                  <button                   className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50 hover:text-[#DC0155] transition-all duration-200">
                    <FiLogIn className="w-4 h-4" />
                    Register
                  </button>
                </Link>
              ) : (
                <button
                  onClick={logOut}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                >
                  <FiLogOut className="w-4 h-4" />
                  Logout
                </button>
              )}

{     user &&         <Link to="/dashboard">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#DC0155] text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:bg-[#B8004A] transform hover:-translate-y-0.5 transition-all duration-200">
                  <FiGrid className="w-4 h-4" />
                  Dashboard
                </button>
              </Link>}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <IoMdClose className="w-6 h-6 text-gray-700" />
            ) : (
              <IoIosMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-pink-50 text-[#DC0155]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}

          {/* Mobile Auth Buttons */}
          <div className="pt-2 space-y-2 border-t border-gray-100 mt-2">
            {!user ? (
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200">
                  <FiLogIn className="w-5 h-5" />
                  Register
                </button>
              </Link>
            ) : (
              <button
                onClick={logOut}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
              >
                <FiLogOut className="w-5 h-5" />
                Logout
              </button>
            )}

{    user?.email &&          <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#DC0155] text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:bg-[#B8004A] transition-all duration-200">
                <FiGrid className="w-5 h-5" />
                Dashboard
              </button>
            </Link>}
          </div>

          {/* User Info (if logged in) */}
          {user && (
            <div className="pt-3 mt-3 border-t border-gray-100">
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="w-10 h-10 bg-[#DC0155] rounded-full flex items-center justify-center text-white font-semibold">
                  {user.email?.[0]?.toUpperCase() || "U"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;