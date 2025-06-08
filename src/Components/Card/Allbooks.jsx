import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CiSearch } from "react-icons/ci";
import { FaArrowAltCircleLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import useBooks from "../Hooks/useBooks";

const Allbooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [dbSearch, setDbSearch] = useState("");


  // Fetch books from local JSON
  useEffect(() => {
    fetch('https://book-web-seconed.vercel.app/books')
    // fetch('books.json')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);


  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDbSearch(search.trim().toLowerCase());
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Filter books based on title, author, or category
  const filterBook = books && books.filter(
    (book) =>
      dbSearch === "" ||
      book.title?.toLowerCase().includes(dbSearch) ||
      book.author?.toLowerCase().includes(dbSearch) ||
      book.category?.toLowerCase().includes(dbSearch)
  );

  return (
    <div className="my-5 md:my-10 mx-auto md:w-11/12 w-full">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 flex items-center gap-2">
          <h2 className="text-color font-semibold text-lg shadow">
            Back to Home
          </h2>
          <Link to={"/"}>
            <FaArrowRight className="text-color "></FaArrowRight>
          </Link>
        </div>

        <div className="flex-1 md:-mr-16">
          <div className="flex justify-end my-6">
            <div className="w-full md:w-2/3 flex flex-row justify-center items-center gap-4 p-2 border rounded-xl shadow-md bg-white mx-auto">
              <div className="w-full flex items-center pl-2">
                <CiSearch />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, author, or category"
                  className="w-full rounded-lg px-4 py-2 outline-0 shadow-sm text-sm"
                />
              </div>
              <button className="btn bg-color text-white">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterBook.length > 0 ? (
          filterBook.map((book, index) => <Card key={index} book={book} />)
        ) : (
          <p className="text-center col-span-full text-red-500 font-medium">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Allbooks;
