import blogTags from "../../../../data/blogTags";

const TagsWidget = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
        Popular Tags
      </h3>

      <div className="flex flex-wrap gap-3">
        {blogTags.map((tag, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-gray-100 hover:bg-[#D4AF37] hover:text-white rounded-full text-sm font-medium transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsWidget;
