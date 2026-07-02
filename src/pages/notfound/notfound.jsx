import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import SEO from "../../components/common/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Spice Garden"
        description="The page you are looking for does not exist."
      />

      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[200px] md:text-[300px] font-bold text-[#D4AF37] leading-none"
            >
              404
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-8xl mb-8"
            >
              🍽️
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Page Not Found
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have left the menu. Let's get you back to delicious options.
            </p>

            <Link to="/">
              <Button>Back to Home</Button>
            </Link>

          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
