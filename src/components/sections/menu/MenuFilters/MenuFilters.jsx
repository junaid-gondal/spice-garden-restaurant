import { FaThLarge, FaListUl } from "react-icons/fa";

const categories = [
  "All",
  "Pakistani",
  "Chinese",
  "Italian",
  "BBQ",
  "Fast Food",
  "Dessert",
  "Drinks",
];

const MenuFilters = ({
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="space-y-6">
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-full font-medium transition ${
              activeCategory === cat
                ? "bg-[#D4AF37] text-white"
                : "bg-gray-100 hover:bg-[#D4AF37] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort and View Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
        >
          <option value="default">Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>

        {/* View Toggle */}
        <div className="flex gap-3">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-3 rounded-lg transition ${
              viewMode === "grid"
                ? "bg-[#D4AF37] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Grid view"
          >
            <FaThLarge className="text-xl" />
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`p-3 rounded-lg transition ${
              viewMode === "list"
                ? "bg-[#D4AF37] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="List view"
          >
            <FaListUl className="text-xl" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default MenuFilters;
