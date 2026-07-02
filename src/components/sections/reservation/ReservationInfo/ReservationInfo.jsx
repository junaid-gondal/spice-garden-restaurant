import { motion } from "framer-motion";
import { FaCheck, FaLeaf, FaGem, FaUsers } from "react-icons/fa";
import Container from "../../../common/Container";

const features = [
  {
    icon: <FaCheck />,
    title: "Instant Confirmation",
    description: "Get immediate booking confirmation via email",
  },
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    description: "All dishes prepared with premium quality ingredients",
  },
  {
    icon: <FaGem />,
    title: "Luxury Ambience",
    description: "Elegant dining spaces for memorable experiences",
  },
  {
    icon: <FaUsers />,
    title: "Private Dining Available",
    description: "Exclusive areas for special occasions and events",
  },
];

const ReservationInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ReservationInfo;
