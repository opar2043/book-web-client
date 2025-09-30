import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiMail, FiLock, FiEye, FiEyeOff, FiBook } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import useAxios from "../Hooks/useAxios";

const Login = () => {
  const { handleLogin, user, setUser, googleSignin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const axiosSecure = useAxios();

  function handleSignIn(e) {
    e.preventDefault();
    const target = e.target;
    const pass = target.pass.value;
    const email = target.email.value;

    handleLogin(email, pass)
      .then((userCredential) => {
        const myUser = userCredential.user;
        setUser(myUser);
        Swal.fire({
          title: "Logged In!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Something went wrong. Please try again.");
      });
  }

  function handleGoogle() {
    googleSignin()
      .then((userCredential) => {
        console.log("User created:", userCredential.user);
        setUser(userCredential.user);
        axiosSecure.post("/users", userCredential.user).then((res) => {
          Swal.fire({
            title: "Logged In Successfully!",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        });
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
        toast.error("Google sign-in failed. Please try again.");
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#DC0155]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DC0155] rounded-2xl mb-6 shadow-xl">
                <FiBook className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                Welcome Back!
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sign in to continue your reading journey and explore our vast collection of books.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized</h3>
                    <p className="text-sm text-gray-600">Recommendations just for you</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Track Progress</h3>
                    <p className="text-sm text-gray-600">Save your reading history</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Exclusive Access</h3>
                    <p className="text-sm text-gray-600">Members-only deals and offers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DC0155] rounded-xl shadow-lg">
                <FiBook className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Sign In
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Start shopping for your favorite books today!
              </p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-5">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    defaultValue="jasim12@gmail.com"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="pass"
                    defaultValue="1234567"
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-5 h-5" />
                    ) : (
                      <FiEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#DC0155] border-gray-300 rounded focus:ring-[#DC0155]"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-[#DC0155] hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#DC0155] hover:bg-[#B8004A] text-white py-3.5 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google Sign In */}
              <button
                type="button"
                onClick={handleGoogle}
                className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-[#DC0155] text-gray-700 py-3.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 transition-all duration-200"
              >
                <FaGoogle className="w-5 h-5 text-red-500" />
                Sign in with Google
              </button>

              {/* Sign Up Link */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Don't have an account?</span>
                </div>
              </div>

              <Link to="/register">
                <button
                  type="button"
                  className="w-full border-2 border-[#DC0155] text-[#DC0155] py-3.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-pink-50 transition-all duration-200"
                >
                  Create New Account
                </button>
              </Link>
            </form>
          </div>

          {/* Terms & Privacy */}
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
            By signing in, you agree to our{" "}
            <a href="#" className="text-[#DC0155] hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-[#DC0155] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;