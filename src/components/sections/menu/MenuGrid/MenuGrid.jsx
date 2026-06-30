import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import ListCard from "./ListCard";

const MenuGrid = ({ items, viewMode, favorites, toggleFavorite }) => {
  
  // Empty State
  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <div className="text-6xl mb-4">🍽️</div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          No dishes found
        </h3>
        <p className="text-gray-600 text-lg">
          Try another keyword or category.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "flex flex-col gap-6"
      }
    >
      {items.map((item) => {
        const isFavorite = favorites.includes(item.id);

        return viewMode === "grid" ? (
          <MenuCard
            key={item.id}
            item={item}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ) : (
          <ListCard
            key={item.id}
            item={item}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        );
      })}
    </div>
  );
};

export default MenuGrid;
