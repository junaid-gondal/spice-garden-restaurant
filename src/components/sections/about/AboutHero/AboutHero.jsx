import { motion } from "framer-motion";
import Container from "../../../common/Container";

const AboutHero = () => {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1800')",
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
            Our Story
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Spice Garden
          </h1>

          <p className="text-gray-300 text-lg">
            Home / <span className="text-[#D4AF37]">About</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutHero;
