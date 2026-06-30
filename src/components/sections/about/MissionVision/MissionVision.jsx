import { motion } from "framer-motion";
import Container from "../../../common/Container";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white rounded-3xl p-12 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaBullseye className="text-5xl" />
              <h2 className="text-4xl font-bold">Our Mission</h2>
            </div>

            <p className="text-lg leading-8 text-gray-100">
              To provide exceptional dining experiences through authentic cuisine, outstanding service, and a welcoming atmosphere. We strive to create memorable moments for every guest while maintaining the highest standards of quality and hospitality.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-12 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaEye className="text-5xl" />
              <h2 className="text-4xl font-bold">Our Vision</h2>
            </div>

            <p className="text-lg leading-8 text-gray-100">
              To become the leading multi-cuisine restaurant chain recognized for culinary excellence, innovation, and customer satisfaction. We envision expanding our reach while preserving our commitment to quality and authentic flavors.
            </p>
          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default MissionVision;
