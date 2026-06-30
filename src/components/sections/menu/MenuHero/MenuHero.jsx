import { motion } from "framer-motion";
import Container from "../../../common/Container";

const MenuHero = () => {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-3">
            Discover Our
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Complete Menu
          </h1>

          <p className="text-gray-300 text-lg">
            Home / <span className="text-[#D4AF37]">Menu</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default MenuHero;
