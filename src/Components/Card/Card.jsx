import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";

const Card = ({ book }) => {
  const { title, price, image, author, category, _id } = book || {};

  return (
    <Link to={`viewcard/${_id}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

        {/* Image Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          
          {/* Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-white" />
              Best
            </span>
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:scale-110">
            <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
          </button>

          {/* Book Image */}
          <img
            alt={title || "Book cover"}
            src={image || "https://i.ibb.co.com/wrYPvfd/Link-31-jpg.png"}
            className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5">
          {/* Category */}
          <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>

          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 min-h-[3rem] sm:min-h-[3.5rem]">
            {title}
          </h3>

          {/* Author */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <span className="font-medium">by</span>
            <span className="text-gray-700">{author}</span>
          </p>

          {/* Price & Rating */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${price}
            </p>

            {/* Static Rating */}
            <div className="flex items-center gap-0.5 text-amber-400">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <Star className="w-4 h-4 fill-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
