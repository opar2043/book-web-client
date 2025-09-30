import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import useAxios from "../Hooks/useAxios";
import { FiUser, FiMail, FiLock, FiImage, FiBook } from "react-icons/fi";

const Register = () => {
  const { setUser, handleRegister, updateData } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxios();

  function handleSignUp(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const pass = target.pass.value;

    const info = { name, photo, email, role: "user" };

    // Validate input fields
    if (!name || !photo || !email || !pass) {
      Swal.fire({
        title: "Error!",
        text: "Please fill out all fields.",
        icon: "error",
        draggable: true,
      });
      return;
    }

    handleRegister(email, pass)
      .then((userCredential) => {
        updateData(name, photo)
          .then(() => {
            const userData = userCredential.user;
            console.log(userData);
            setUser(userData);
          })
          .catch((error) => {});

        axiosSecure.post("/users", info).then((res) => {
          Swal.fire({
            title: "Registered Successfully!",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: "Registration Failed!",
          text: errorMessage,
          icon: "error",
          draggable: true,
        });
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
                Join Our Book Store
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Create your account and discover thousands of amazing books. Start your reading journey today!
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Vast Collection</h3>
                    <p className="text-sm text-gray-600">Access thousands of books</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Great Deals</h3>
                    <p className="text-sm text-gray-600">Exclusive discounts for members</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                    <p className="text-sm text-gray-600">Quick shipping worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
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
                Create Account
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Fill in your details to get started
              </p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

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
                    type="password"
                    name="pass"
                    placeholder="Create a strong password"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Photo URL Field */}
              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Photo URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiImage className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="url"
                    name="photo"
                    placeholder="https://example.com/photo.jpg"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#DC0155] hover:bg-[#B8004A] text-white py-3.5 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>

              {/* Sign In Link */}
              <Link to="/login">
                <button
                  type="button"
                  className="w-full border-2 border-[#DC0155] text-[#DC0155] py-3.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-pink-50 transition-all duration-200"
                >
                  Sign In Instead
                </button>
              </Link>
            </form>
          </div>

          {/* Terms & Privacy */}
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-[#DC0155] hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-[#DC0155] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;