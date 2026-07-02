import { motion } from "framer-motion";
import Container from "../../../common/Container";

const ContactMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-3 font-semibold">
            Find Us
          </p>
          <h2 className="text-4xl font-bold text-[#0F172A]">
            Our Location
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374555863!2d-73.98823492346534!3d40.75797097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
          ></iframe>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Parking Available</span> | Easy Navigation | Accessible Location
          </p>
        </div>

      </Container>
    </section>
  );
};

export default ContactMap;
