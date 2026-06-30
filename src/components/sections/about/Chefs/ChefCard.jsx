import { motion } from "framer-motion";

const ChefCard = ({ chef, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      
      <div className="overflow-hidden h-80">
        <img
          src={chef.image}
          alt={chef.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-8 text-center">
        
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
          {chef.name}
        </h3>

        <p className="text-[#D4AF37] font-semibold mb-3">
          {chef.position}
        </p>

        <div className="text-gray-600 mb-2">
          <span className="font-semibold">Experience:</span> {chef.experience}
        </div>

        <div className="text-gray-600">
          <span className="font-semibold">Specialty:</span> {chef.specialty}
        </div>

      </div>

    </motion.div>
  );
};

export default ChefCard;
