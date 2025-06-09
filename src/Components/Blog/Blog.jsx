import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";



const Blog = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://book-web-seconed.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <section className="w-full md:w-11/12 mx-auto px-4 py-10">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-pink-500">🖍️ Blog & Book Highlights</h2>
      <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-3 ">
         {
          blogs && blogs.map(
            blog => <BlogCard key={blog._id} myblog={blog}></BlogCard>
          )
         }
      </div>
    </section>
  );
};

export default Blog;
