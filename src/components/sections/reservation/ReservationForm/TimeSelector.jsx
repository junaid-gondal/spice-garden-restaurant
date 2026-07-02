import availableTimes from "../../../../data/availableTimes";

const TimeSelector = ({ value, onChange, error }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Select Time *
      </label>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-64 overflow-y-auto p-2">
        {availableTimes.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => onChange(time)}
            className={`px-4 py-3 rounded-lg font-medium transition ${
              value === time
                ? "bg-[#D4AF37] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default TimeSelector;
