import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const AllBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">📚 All Books</h2>

      <div className="overflow-x-auto shadow-lg rounded-xl bg-white p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Author</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books && books.map((book, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition">
                <td className="px-4 py-3 text-sm text-gray-600">{idx + 1}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-800">{book.title}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{book.author}</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-4">
                    <button
                      title="Edit"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <FaEdit />
                    </button>
                    <button
                      title="Delete"
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {books.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No books available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBook;
