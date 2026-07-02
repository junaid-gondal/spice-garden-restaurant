import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Container from "../../../common/Container";
import Button from "../../../common/Button";
import ContactSuccessModal from "./ContactSuccessModal";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    setShowModal(true);
  };

  const handleNewMessage = () => {
    reset();
    setShowModal(false);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-[4px] mb-3 font-semibold">
                Send Us a Message
              </p>
              <h2 className="text-4xl font-bold text-[#0F172A]">
                We're Here to Help
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                  )}
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Phone must be 10-15 digits",
                      },
                    })}
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                    placeholder="1234567890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-2">{errors.subject.message}</p>
                  )}
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 20,
                      message: "Message must be at least 20 characters",
                    },
                  })}
                  rows={6}
                  className="w-full px-6 py-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Send Message
              </Button>

            </form>

          </motion.div>
        </Container>
      </section>

      {/* Success Modal */}
      <ContactSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onNewMessage={handleNewMessage}
      />
    </>
  );
};

export default ContactForm;
