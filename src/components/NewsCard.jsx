/* eslint-disable react/prop-types */
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ singleNews={} }) => {
  const {
    author,
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = singleNews || {};

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden mr-4">
      {/* Card Header */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <img
          src={author?.img || "https://via.placeholder.com/150"}
          alt={author?.name || "Author"}
          className="w-12 h-12 rounded-full object-contain"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{author?.name || "Unknown Author"}</h4>
          <p className="text-gray-500 text-sm">
            {author?.published_date
              ? new Date(author.published_date).toLocaleDateString()
              : "No Date"}
          </p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        <img
          src={thumbnail_url || "https://via.placeholder.com/300"}
          alt={title}
          className="w-full h-48 lg:h-72 object-contain my-4 rounded-lg"
        />
        <p className="text-gray-600 text-sm line-clamp-3">{details}</p>
        <button className="mt-3 text-primary font-medium">Read More</button>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: Math.floor(rating?.number || 0) }).map((_, i) => (
            <AiFillStar key={i} />
          ))}
          {rating?.number?.toFixed(1) || "0.0"}
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500">
          <FaRegEye className="mr-1" />
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
