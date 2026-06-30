import { motion } from "framer-motion";
import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import awards from "../../../../data/awards";

const Awards = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        
        <SectionTitle
          subtitle="Recognition"
          title="Awards & Achievements"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition text-center border border-gray-100"
            >
              
              <div className="text-6xl mb-4">
                {award.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                {award.title}
              </h3>

              <p className="text-gray-600 mb-2">
                {award.organization}
              </p>

              <div className="text-[#D4AF37] font-bold text-lg">
                {award.year}
              </div>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Awards;
