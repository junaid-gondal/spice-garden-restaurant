import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Container from "../../components/common/Container";
import MenuHero from "../../components/sections/menu/MenuHero/MenuHero";
import SearchBar from "../../components/sections/menu/SearchBar/SearchBar";
import MenuFilters from "../../components/sections/menu/MenuFilters/MenuFilters";
import MenuGrid from "../../components/sections/menu/MenuGrid/MenuGrid";
import menuData from "../../data/menuData";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState([]);

  // Toggle Favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // Filter and Sort Menu Items
  const filteredItems = useMemo(() => {
    let items = [...menuData];

    // Filter by search
    if (searchTerm) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== "All") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Sort
    if (sortBy === "priceLowHigh") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighLow") {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      items.sort((a, b) => b.rating - a.rating);
    }

    return items;
  }, [searchTerm, activeCategory, sortBy]);

  return (
    <>
      <MenuHero />

      <section className="py-16 bg-gray-50">
        <Container>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <MenuFilters
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              viewMode={viewMode}
              setViewMode={setViewMode}
            />
          </motion.div>

          {/* Menu Grid */}
          <MenuGrid
            items={filteredItems}
            viewMode={viewMode}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </Container>
      </section>
    </>
  );
};

export default Menu;
