import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";

const RestaurantTour = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        
        <SectionTitle
          subtitle="Take a Tour"
          title="Experience Our Restaurant"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
            alt="Restaurant Tour"
            className="w-full h-[600px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-xl"
            >
              <FaPlay className="text-white text-3xl ml-2" />
            </motion.div>

          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">
              Virtual Restaurant Tour
            </h3>
            <p className="text-gray-200">
              Click to explore our beautiful dining spaces and kitchen
            </p>
          </div>

        </motion.div>

      </Container>
    </section>
  );
};

export default RestaurantTour;
