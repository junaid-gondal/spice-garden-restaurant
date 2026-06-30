const Button = ({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-[#b8941f] hover:scale-105 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;