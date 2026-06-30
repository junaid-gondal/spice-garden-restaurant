import { motion } from "framer-motion";
import { FaStar, FaHeart, FaRegHeart, FaFire } from "react-icons/fa";
import Button from "../../../common/Button";

const ListCard = ({ item, isFavorite, toggleFavorite }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
    >
      
      {/* Image Container */}
      <div className="relative md:w-80 h-64 md:h-auto overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

        {/* Availability Badge */}
        {!item.available && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Unavailable
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        
        {/* Top Section */}
        <div>
          {/* Title and Rating */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-3xl font-bold text-gray-900">
              {item.name}
            </h3>
            
            <div className="flex items-center gap-4 ml-4">
              <div className="flex items-center gap-1 text-yellow-500">
                <FaStar />
                <span className="text-gray-900 font-semibold">{item.rating}</span>
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(item.id)}
                className="hover:scale-110 transition"
                aria-label="Add to favorites"
              >
                {isFavorite ? (
                  <FaHeart className="text-red-500 text-2xl" />
                ) : (
                  <FaRegHeart className="text-gray-600 text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            {item.description}
          </p>

          {/* Ingredients */}
          <div className="mb-3">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Ingredients:</span> {item.ingredients}
            </p>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2 mb-4 text-orange-600">
            <FaFire />
            <span className="text-sm font-medium">{item.calories}</span>
          </div>
        </div>

        {/* Bottom Section - Price and Button */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-[#D4AF37] font-bold text-3xl">
            ${item.price}
          </span>

          <Button 
            className={`${!item.available ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!item.available}
          >
            {item.available ? 'Order Now' : 'Unavailable'}
          </Button>
        </div>

      </div>

    </motion.div>
  );
};

export default ListCard;
