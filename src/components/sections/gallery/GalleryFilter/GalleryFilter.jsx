import { motion } from "framer-motion";

const categories = ["All", "Interior", "Food", "Kitchen", "Events", "Customers"];

const GalleryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          onClick={() => setActiveCategory(category)}
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-[#D4AF37] text-white shadow-lg scale-105"
              : "bg-white text-gray-700 hover:bg-[#D4AF37] hover:text-white shadow"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default GalleryFilter;
