import occasions from "../../../../data/occasions";

const OccasionSelector = ({ value, onChange, error }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Occasion *
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
      >
        <option value="">Select an occasion</option>
        {occasions.map((occasion) => (
          <option key={occasion} value={occasion}>
            {occasion}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default OccasionSelector;
