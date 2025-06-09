import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ViewCard = () => {
  const { id } = useParams(); 
  console.log(id);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-web-seconed.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover md:rounded-l-2xl"
          />
        </div>
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-3xl font-bold text-pink-500">{title}</h2>
          <p className="text-gray-600">by <span className="font-semibold">{author}</span></p>
          <p className="text-sm text-gray-700">{description}</p>
          
          <ul className="text-sm text-gray-600 space-y-1">
            <li><strong>Pages :</strong> {pages}</li>
            <li><strong>Category:</strong> {category}</li>
            <li><strong>Size:</strong> {size}</li>
            <li><strong>Format:</strong> {format}</li>
         
            <li><strong>Features:</strong> {features }</li>
          </ul>

          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">${price}</span>
            <div className="flex items-center gap-2">
                <button className="btn bg-color text-white">Buy Now</button>
                <Link to={'/'}>
                                   <button className="btn bg-color text-white text-2xl">
                    <FaHome></FaHome>
                </button>
                </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewCard;


//    {/* <li><strong>Features:</strong> {features?.join(", ") || ''}</li> */}
