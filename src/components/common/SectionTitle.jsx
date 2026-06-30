const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-14">
      <p className="text-[#D4AF37] uppercase tracking-[4px] font-semibold mb-2">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;