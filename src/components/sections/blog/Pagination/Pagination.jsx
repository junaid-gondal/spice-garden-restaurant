import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-3 mt-12">
      
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-[#0F172A] hover:bg-[#D4AF37] hover:text-white"
        }`}
      >
        <FaChevronLeft />
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg font-semibold transition ${
            currentPage === page
              ? "bg-[#D4AF37] text-white"
              : "bg-white text-[#0F172A] hover:bg-[#D4AF37] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-[#0F172A] hover:bg-[#D4AF37] hover:text-white"
        }`}
      >
        Next
        <FaChevronRight />
      </button>

    </div>
  );
};

export default Pagination;
