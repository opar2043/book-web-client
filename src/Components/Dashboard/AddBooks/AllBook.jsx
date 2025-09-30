import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const AllBook = () => {
  const [books, setBooks] = useState([]);
  const axiosSecure = useAxios();

  useEffect(() => {
    fetch("https://book-web-seconed.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/books/${id}`)
          .then((res) => {
            if (res.deletedCount > 0) {
              Swal.fire("Deleted!", "Book has been deleted.", "success");
              setBooks((prev) => prev.filter((b) => b._id !== id));
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Title */}
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-10 tracking-wide">
        📚 All Books
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto shadow-2xl rounded-2xl bg-white border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">#</th>
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Author</th>
              <th className="px-6 py-4 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {books.length > 0 ? (
              books.map((book, idx) => (
                <tr
                  key={book._id}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">
                    {book.title}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{book.author}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-5">
                      <button
                        title="Edit"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
                      >
                        <FaEdit />
                      </button>
                      <button
                        title="Delete"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition duration-300"
                        onClick={() => handleDelete(book._id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-500 italic"
                >
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
