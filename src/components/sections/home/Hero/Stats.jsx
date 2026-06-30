const stats = [
  {
    number: "25,000+",
    title: "Happy Customers",
  },
  {
    number: "15",
    title: "Years Experience",
  },
  {
    number: "18",
    title: "Professional Chefs",
  },
  {
    number: "5",
    title: "Branches",
  },
];

const Stats = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#0F172A]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 py-8">
        {stats.map((item) => (
          <div key={item.title} className="text-center">
            <h2 className="text-3xl font-bold text-[#D4AF37]">
              {item.number}
            </h2>

            <p className="text-gray-300 mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
