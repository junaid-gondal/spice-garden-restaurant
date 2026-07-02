import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import Button from "../../../common/Button";

const ContactSuccessModal = ({ isOpen, onClose, onNewMessage }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-12 max-w-md w-full text-center relative"
        >
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition"
          >
            <FaTimes className="text-2xl" />
          </button>

          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-5xl text-green-500" />
          </div>

          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Message Sent Successfully!
          </h2>

          <p className="text-gray-600 leading-7 mb-8">
            Thank you for contacting Spice Garden. Our team will respond within 24 hours.
          </p>

          <div className="flex flex-col gap-3">
            <Button onClick={onClose} className="w-full">
              Close
            </Button>
            
            <button
              onClick={onNewMessage}
              className="w-full py-3 text-[#D4AF37] font-semibold hover:underline"
            >
              Send Another Message
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactSuccessModal;
