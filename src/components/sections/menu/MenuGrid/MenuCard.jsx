import { motion } from "framer-motion";
import { FaStar, FaHeart, FaRegHeart, FaFire } from "react-icons/fa";
import Button from "../../../common/Button";

const MenuCard = ({ item, isFavorite, toggleFavorite }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
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

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(item.id)}
          className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Add to favorites"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 text-xl" />
          ) : (
            <FaRegHeart className="text-gray-600 text-xl" />
          )}
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-gray-900 flex-1">
            {item.name}
          </h3>
          
          <div className="flex items-center gap-1 text-yellow-500 ml-2">
            <FaStar />
            <span className="text-gray-900 font-semibold">{item.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Ingredients */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Ingredients:</span> {item.ingredients}
          </p>
        </div>

        {/* Calories */}
        <div className="flex items-center gap-2 mb-4 text-orange-600">
          <FaFire />
          <span className="text-sm font-medium">{item.calories}</span>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-[#D4AF37] font-bold text-2xl">
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

export default MenuCard;
