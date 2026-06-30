import { FaSearch } from "react-icons/fa";

const SearchWidget = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
        Search
      </h3>

      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
        />
        <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchWidget;
