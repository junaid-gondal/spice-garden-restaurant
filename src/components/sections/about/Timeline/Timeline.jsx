import { motion } from "framer-motion";
import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import timeline from "../../../../data/timeline";

const Timeline = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        
        <SectionTitle
          subtitle="Our Journey"
          title="Restaurant Timeline"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#D4AF37] transform -translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              
              {/* Content */}
              <div className="w-full lg:w-5/12">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
                  <div className="text-[#D4AF37] font-bold text-3xl mb-3">
                    {item.year}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden lg:flex w-2/12 justify-center">
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Empty Space */}
              <div className="hidden lg:block w-5/12"></div>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Timeline;
