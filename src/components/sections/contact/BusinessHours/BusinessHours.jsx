import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import Container from "../../../common/Container";
import businessHours from "../../../../data/businessHours";

const BusinessHours = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-3xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
              Business Hours
            </h2>
            <p className="text-gray-600">
              We're here to serve you
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            {businessHours.map((schedule, index) => (
              <motion.div
                key={schedule.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex justify-between items-center py-4 ${
                  index !== businessHours.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <span className="font-semibold text-[#0F172A]">
                  {schedule.days}
                </span>
                <span className="text-[#D4AF37] font-bold">
                  {schedule.hours}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              * Hours may vary on holidays
            </p>
          </div>

        </motion.div>

      </Container>
    </section>
  );
};

export default BusinessHours;
