import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition z-50"
          aria-label="Close lightbox"
        >
          <FaTimes className="text-4xl" />
        </button>

        {/* Counter */}
        <div className="absolute top-8 left-8 text-white text-xl font-semibold z-50">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-8 text-white hover:text-[#D4AF37] transition z-50"
          aria-label="Previous image"
        >
          <FaChevronLeft className="text-5xl" />
        </button>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-6xl max-h-[90vh] mx-auto px-20"
        >
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="w-full h-full object-contain rounded-lg"
          />

          <div className="text-center mt-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              {currentImage.title}
            </h3>
            <p className="text-[#D4AF37] text-lg">
              {currentImage.category}
            </p>
          </div>
        </motion.div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-8 text-white hover:text-[#D4AF37] transition z-50"
          aria-label="Next image"
        >
          <FaChevronRight className="text-5xl" />
        </button>

      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
