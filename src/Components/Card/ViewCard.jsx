import React, { useEffect, useState } from "react";
import { FaHome, FaBook, FaRuler, FaFileAlt, FaTags, FaShoppingCart, FaHeart } from "react-icons/fa";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const ViewCard = () => {
  const { id } = useParams(); 
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://book-web-seconed.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  const view = books.find((book) => book._id == id || book.id == 1); 

  const {
    title,
    author,
    description,
    pages,
    features,
    price,
    category,
    size,
    format,
    image
  } = view || {};

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto mb-4 sm:mb-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-700">Book Details</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg sm:rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image Section */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-slate-100 to-blue-50 p-6 sm:p-8 lg:p-10 flex items-center justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                  src={image}
                  alt={title}
                  className="relative rounded-lg shadow-xl w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full shadow-md flex items-center gap-1 text-xs font-semibold">
                <BsStarFill className="w-3 h-3" />
                Bestseller
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col">
              <div className="flex-grow space-y-4 sm:space-y-5">
                {/* Category Badge */}
                <div>
                  <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {category}
                  </span>
                </div>

                {/* Title & Author */}
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                    {title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600">
                    by <span className="font-semibold text-gray-800">{author}</span>
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <BsStarFill className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <BsStarFill className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <BsStarFill className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <BsStarFill className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <BsStar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">(4.0 • 2.8k reviews)</span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {description}
                </p>

                {/* Book Details Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-5 border-t border-b border-gray-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                      <FaBook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Pages</p>
                      <p className="text-sm sm:text-base text-gray-900 font-semibold">{pages}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="bg-purple-50 p-2 rounded-lg flex-shrink-0">
                      <FaRuler className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Size</p>
                      <p className="text-sm sm:text-base text-gray-900 font-semibold">{size}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="bg-green-50 p-2 rounded-lg flex-shrink-0">
                      <FaFileAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Format</p>
                      <p className="text-sm sm:text-base text-gray-900 font-semibold">{format}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="bg-orange-50 p-2 rounded-lg flex-shrink-0">
                      <FaTags className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Features</p>
                      <p className="text-xs sm:text-sm text-gray-900 font-semibold">{features}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="space-y-4 mt-4 sm:mt-6">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${price}
                  </span>
                  <span className="text-gray-400 line-through text-base sm:text-lg">${(price * 1.3).toFixed(2)}</span>
                  <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                    30% OFF
                  </span>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-3.5 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                    <FaShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>
                  
                  <button className="bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-500 p-3 sm:p-3.5 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5">
                    <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <Link to="/">
                    <button className="bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 p-3 sm:p-3.5 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5">
                      <FaHome className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </Link>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 pt-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>In Stock</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🚚</span>
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>↩️</span>
                    <span>30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;