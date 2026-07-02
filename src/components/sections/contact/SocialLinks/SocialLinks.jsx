import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Container from "../../../common/Container";

const socialLinks = [
  { id: 1, name: "Facebook", icon: <FaFacebook />, url: "#", color: "bg-blue-600" },
  { id: 2, name: "Instagram", icon: <FaInstagram />, url: "#", color: "bg-pink-600" },
  { id: 3, name: "Twitter", icon: <FaTwitter />, url: "#", color: "bg-sky-500" },
  { id: 4, name: "WhatsApp", icon: <FaWhatsapp />, url: "#", color: "bg-green-600" },
  { id: 5, name: "YouTube", icon: <FaYoutube />, url: "#", color: "bg-red-600" },
];

const SocialLinks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-3 font-semibold">
            Stay Connected
          </p>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Follow Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest menu items, special offers, and events by following us on social media.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`${social.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default SocialLinks;
