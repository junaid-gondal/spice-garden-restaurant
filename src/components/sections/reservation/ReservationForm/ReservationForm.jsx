import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Container from "../../../common/Container";
import Button from "../../../common/Button";
import GuestSelector from "./GuestSelector";
import TimeSelector from "./TimeSelector";
import OccasionSelector from "./OccasionSelector";
import SummaryCard from "./SummaryCard";
import SuccessModal from "./SuccessModal";

const ReservationForm = () => {
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      specialRequests: "",
      terms: false,
    },
  });

  const formData = {
    name: watch("name"),
    guests: guests,
    date: watch("date"),
    time: time,
    occasion: occasion,
  };

  const onSubmit = (data) => {
    const reservationData = {
      ...data,
      guests,
      time,
      occasion,
    };
    console.log("Reservation Data:", reservationData);
    setShowModal(true);
  };

  const handleNewReservation = () => {
    reset();
    setGuests(2);
    setTime("");
    setOccasion("");
    setShowModal(false);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <Container>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
                
                <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
                  Book Your Table
                </h2>

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
                        message: "Invalid phone number",
                      },
                    })}
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                    placeholder="1234567890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
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

                {/* Guests */}
                <GuestSelector value={guests} onChange={setGuests} />

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reservation Date *
                  </label>
                  <input
                    type="date"
                    {...register("date", { required: "Date is required" })}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-2">{errors.date.message}</p>
                  )}
                </div>

                {/* Time */}
                <TimeSelector
                  value={time}
                  onChange={setTime}
                  error={!time && "Please select a time"}
                />

                {/* Occasion */}
                <OccasionSelector
                  value={occasion}
                  onChange={setOccasion}
                  error={!occasion && "Please select an occasion"}
                />

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    {...register("specialRequests")}
                    rows={4}
                    className="w-full px-6 py-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition resize-none"
                    placeholder="Any dietary restrictions or special requirements..."
                  ></textarea>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    {...register("terms", {
                      required: "You must accept the terms and conditions",
                    })}
                    className="mt-1 w-5 h-5 text-[#D4AF37] rounded focus:ring-2 focus:ring-[#D4AF37]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the terms and conditions and cancellation policy
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-sm">{errors.terms.message}</p>
                )}

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  Confirm Reservation
                </Button>

              </form>
            </motion.div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <SummaryCard formData={formData} />
            </div>

          </div>
        </Container>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onNewReservation={handleNewReservation}
      />
    </>
  );
};

export default ReservationForm;
