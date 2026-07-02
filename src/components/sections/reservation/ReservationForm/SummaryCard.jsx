import { motion } from "framer-motion";
import { FaUser, FaCalendar, FaClock, FaStar } from "react-icons/fa";

const SummaryCard = ({ formData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-3xl p-8 text-white shadow-xl sticky top-24"
    >
      <h3 className="text-2xl font-bold mb-6">
        Reservation Summary
      </h3>

      <div className="space-y-4">
        
        {formData.name && (
          <div className="flex items-center gap-3">
            <FaUser className="text-xl flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-100">Name</p>
              <p className="font-semibold">{formData.name}</p>
            </div>
          </div>
        )}

        {formData.guests && (
          <div className="flex items-center gap-3">
            <FaUser className="text-xl flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-100">Guests</p>
              <p className="font-semibold">
                {formData.guests} {formData.guests === 1 ? "Guest" : "Guests"}
              </p>
            </div>
          </div>
        )}

        {formData.date && (
          <div className="flex items-center gap-3">
            <FaCalendar className="text-xl flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-100">Date</p>
              <p className="font-semibold">{formData.date}</p>
            </div>
          </div>
        )}

        {formData.time && (
          <div className="flex items-center gap-3">
            <FaClock className="text-xl flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-100">Time</p>
              <p className="font-semibold">{formData.time}</p>
            </div>
          </div>
        )}

        {formData.occasion && (
          <div className="flex items-center gap-3">
            <FaStar className="text-xl flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-100">Occasion</p>
              <p className="font-semibold">{formData.occasion}</p>
            </div>
          </div>
        )}

      </div>

      <div className="mt-8 pt-6 border-t border-white/30">
        <p className="text-sm text-gray-100">
          You will receive a confirmation email once your reservation is confirmed.
        </p>
      </div>
    </motion.div>
  );
};

export default SummaryCard;
