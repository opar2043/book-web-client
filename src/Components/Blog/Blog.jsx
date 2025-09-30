import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { FiBook } from "react-icons/fi";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://book-web-seconed.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative rounded-b-lg bg-gradient-to-r from-[#DC0155] to-pink-500 text-white py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <FiBook className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Blog & Book Highlights
          </h1>
          
          <p className="text-base sm:text-lg text-pink-100 max-w-2xl mx-auto">
            Discover insights, reviews, and the latest updates from our literary world
          </p>
          
          {/* Accent Line */}
          <div className="w-24 h-1 bg-white/50 rounded-full mx-auto mt-6"></div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16 -mt-8">
        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 sm:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#DC0155]">{blogs.length}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Total Articles</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#DC0155]">12K+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Readers</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#DC0155]">500+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Book Reviews</p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DC0155] mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm">Loading articles...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Blog Grid */}
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog._id} myblog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FiBook className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  No articles yet
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Check back soon for exciting book reviews and insights!
                </p>
              </div>
            )}
          </>
        )}
      </section>


    </div>
  );
};

export default Blog;
