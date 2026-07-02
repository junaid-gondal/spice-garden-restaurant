import { motion } from "framer-motion";

const ContactCard = ({ info, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="text-6xl mb-4">
        {info.icon}
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] mb-3">
        {info.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {info.value}
      </p>
    </motion.div>
  );
};

export default ContactCard;
