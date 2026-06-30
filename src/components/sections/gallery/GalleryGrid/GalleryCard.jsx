import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const GalleryCard = ({ item, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
    >
      
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        
        <div className="p-6 w-full">
          <p className="text-white text-lg font-bold mb-1">
            {item.title}
          </p>
          <p className="text-[#D4AF37] text-sm font-medium">
            {item.category}
          </p>
        </div>

        {/* Eye Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center"
          >
            <FaEye className="text-white text-2xl" />
          </motion.div>
        </div>

      </div>

    </motion.div>
  );
};

export default GalleryCard;
