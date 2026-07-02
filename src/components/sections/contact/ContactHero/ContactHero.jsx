import { motion } from "framer-motion";
import Container from "../../../common/Container";

const ContactHero = () => {
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
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-300 text-lg mb-2">
            Home / <span className="text-[#D4AF37]">Contact</span>
          </p>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
            We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactHero;
