import { Link } from "react-router-dom";

const Card = ({book}) => {
    const {title , price , image , author , category , _id} = book || {};
    return (
 <Link to={`viewcard/${_id}`} >
         <div className="relative rounded-lg overflow-hidden hover:shadow-2xl p-2">

            {/* badge */}
            <span
                className="bg-color rounded-sm px-3 py-1 text-[0.9rem] text-white absolute top-3 left-3">Best</span>

            {/* product image */}
            <img alt="product/image" src= {image || "https://i.ibb.co.com/wrYPvfd/Link-31-jpg.png"}  
                 className="w-full"/>

            {/* product details */}
            <div className="mt-1">
                <span className="text-gray-400 text-[0.9rem]">{category}</span>
                <h3 className=" font-medium mt-1">{title}</h3>
                <p className="text-[0.9rem] text-gray-400 mt-1">By {author}</p>
                <p className="text-[1.1rem] font-semibold mt-1 text-color">${price}</p>
            </div>
        </div>
 </Link>
    );
};

export default Card;
          