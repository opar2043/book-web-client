import React, { useState } from "react";
import useAxios from "../Hooks/useAxios";
import { BsYoutube } from "react-icons/bs";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const axiosSecure = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      blog,
      date: new Date().toLocaleString(),
    };

    axiosSecure
      .post("/blogs", newBlog)
      .then((res) => {
        console.log(res.data);
          Swal.fire({
          title: "Blog Added!",
          text: "Your blog was successfully added.",
          icon: "success",
        });
      })
      .then((err) => {
        console.log(err);
        toast.error("Something Happen Wrong");
      });

    setTitle("");
    setBlog("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
        Add a New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Blog Content
          </label>
          <textarea
            placeholder="Write your blog..."
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition duration-200"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default Addblog;
