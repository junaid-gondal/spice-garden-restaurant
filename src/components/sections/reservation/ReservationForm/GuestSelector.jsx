import { FaMinus, FaPlus } from "react-icons/fa";

const GuestSelector = ({ value, onChange, error }) => {
  const increment = () => onChange(Math.min(value + 1, 20));
  const decrement = () => onChange(Math.max(value - 1, 1));

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Number of Guests *
      </label>
      
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={decrement}
          disabled={value <= 1}
          className="w-12 h-12 bg-gray-200 hover:bg-[#D4AF37] hover:text-white rounded-full flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaMinus />
        </button>

        <div className="flex-1 text-center">
          <span className="text-3xl font-bold text-[#0F172A]">
            {value}
          </span>
          <p className="text-sm text-gray-500">
            {value === 1 ? "Guest" : "Guests"}
          </p>
        </div>

        <button
          type="button"
          onClick={increment}
          disabled={value >= 20}
          className="w-12 h-12 bg-gray-200 hover:bg-[#D4AF37] hover:text-white rounded-full flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaPlus />
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default GuestSelector;
