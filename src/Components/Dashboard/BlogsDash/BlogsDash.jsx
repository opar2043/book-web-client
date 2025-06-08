import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';

const BlogsDash = () => {

    const [blogs, setBlogs] = useState([]);
    const axiosSecure = useAxios()
    useEffect(() => {
      fetch("https://book-web-seconed.vercel.app/blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
        });
    }, []);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/blogs/${id}`)
          .then((res) => {
            if (res.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Blog has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
            console.error(err);
          });
      }
    });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">📚 All Blogs</h2>

      <div className="overflow-x-auto shadow-lg rounded-xl bg-white p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.length > 0 ? (
              blogs.map((book, idx) => (
                <tr key={book._id} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-3 text-sm text-gray-600">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">{book.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{book.date}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-4">

                      <button
                        title="Delete"
                        className="text-red-600 hover:text-red-800 transition"
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
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No books available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogsDash