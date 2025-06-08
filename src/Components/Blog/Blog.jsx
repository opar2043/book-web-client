import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";


// const posts = [
//   {
//     title: "🎄 Cozy Holiday Coloring Book – Perfect for Stress Relief!",
//     description: "Our 'Cozy Holiday Bold and Easy Coloring Book' is the ideal Christmas gift. With 50 simple yet charming designs, this book is perfect for kids and adults to relax and celebrate the holiday season creatively.",
//     date: "May 28, 2025"
//   },
//   {
//     title: "🎃 Spooky & Cutie: Halloween Fun for Everyone!",
//     description: "Get into the Halloween spirit with 'Spooky & Cutie'. This bold and easy coloring book is packed with playful spooky scenes great for teens, children, and adults alike!",
//     date: "May 24, 2025"
//   },
//   {
//     title: "🍭 Sweet Treats: Dessert-Inspired Coloring Fun",
//     description: "Filled with mouthwatering desserts, 'Sweet Treats' offers a relaxing coloring experience that sparks creativity in both kids and grownups.",
//     date: "May 20, 2025"
//   },
//   {
//     title: "🍂 Autumn Vibes: A Fall-Themed Coloring Journey",
//     description: "Enjoy the beauty of fall with detailed illustrations of leaves, pumpkins, and cozy scenes. Suitable for all ages, perfect for family bonding time!",
//     date: "May 15, 2025"
//   }
// ];




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
