import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-md w-full">
      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
      
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-12 pr-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
      />
    </div>
  );
};

export default SearchBar;
