import {
  FaLeaf,
  FaUserTie,
  FaUtensils,
  FaConciergeBell,
  FaMoneyBillWave,
  FaCalendarCheck,
} from "react-icons/fa";

import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";

const features = [
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
  },
  {
    icon: <FaUserTie />,
    title: "Certified Chefs",
  },
  {
    icon: <FaUtensils />,
    title: "Luxury Dining",
  },
  {
    icon: <FaConciergeBell />,
    title: "Fast Service",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Online Reservation",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Price",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50">
      
      <Container>
        
        <SectionTitle
          subtitle="Why Choose Us"
          title="We Serve Quality & Excellence"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition text-center"
            >
              
              <div className="text-5xl text-[#D4AF37] mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                Experience premium quality service and unforgettable dining moments.
              </p>
            
            </div>
          ))}
        
        </div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;
