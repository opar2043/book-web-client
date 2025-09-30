import { useEffect, useState } from "react";
import Card from "./Card";
import { CiSearch } from "react-icons/ci";
import { FaHome, FaFilter } from "react-icons/fa";
import { BsGrid3X3Gap, BsListUl } from "react-icons/bs";
import { Link } from "react-router-dom";

const Allbooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [dbSearch, setDbSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch('https://book-web-seconed.vercel.app/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDbSearch(search.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Get unique categories
  const categories = ["all", ...new Set(books.map(book => book.category).filter(Boolean))];

  // Filter books
  const filterBook = books.filter(
    (book) => {
      const matchesSearch = dbSearch === "" ||
        book.title?.toLowerCase().includes(dbSearch) ||
        book.author?.toLowerCase().includes(dbSearch) ||
        book.category?.toLowerCase().includes(dbSearch);
      
      const matchesCategory = selectedCategory === "all" || 
        book.category?.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-12 px-4 rounded-b-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <FaHome className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-medium">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="hidden sm:inline">Total Books:</span>
              <span className="font-bold bg-white/20 px-3 py-1 rounded-full">{books.length}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Explore Our Collection</h1>
          <p className="text-blue-100 text-sm sm:text-base">Discover your next favorite book from our curated selection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-6">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, author, or category..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 items-center">
              <FaFilter className="text-gray-400 w-4 h-4 flex-shrink-0" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 lg:w-48 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <BsGrid3X3Gap className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <BsListUl className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Filters */}
          {(dbSearch || selectedCategory !== "all") && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs sm:text-sm text-gray-500 font-medium">Active filters:</span>
              {dbSearch && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Search: "{dbSearch}"
                  <button onClick={() => setSearch("")} className="hover:text-blue-900">×</button>
                </span>
              )}
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory("all")} className="hover:text-purple-900">×</button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filterBook.length}</span> {filterBook.length === 1 ? 'book' : 'books'}
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm">Loading books...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Book Grid/List */}
            {filterBook.length > 0 ? (
              <div className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                  : "flex flex-col gap-4"
              } pb-12`}>
                {filterBook && filterBook.map((book) => (
                  <Card key={book._id || book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <CiSearch className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No books found</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Try adjusting your search or filters to find what you're looking for
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("all");
                  }}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Allbooks;