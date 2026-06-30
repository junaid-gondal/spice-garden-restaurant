import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Container from "../common/Container";
import Button from "../common/Button";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-bold text-white tracking-wide"
          >
            Spice
            <span className="text-[#D4AF37]"> Garden</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4AF37] font-medium"
                    : "text-white hover:text-[#D4AF37] transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:block">
            <Button>Reserve Table</Button>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden text-white text-3xl">
            <HiOutlineMenuAlt3 />
          </button>
         
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
