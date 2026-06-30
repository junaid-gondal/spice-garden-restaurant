import blogCategories from "../../../../data/blogCategories";

const CategoriesWidget = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
        Categories
      </h3>

      <ul className="space-y-3">
        {blogCategories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => setActiveCategory(category.name)}
              className={`w-full flex justify-between items-center py-2 px-4 rounded-lg transition ${
                activeCategory === category.name
                  ? "bg-[#D4AF37] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <span className="text-sm">({category.count})</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;
