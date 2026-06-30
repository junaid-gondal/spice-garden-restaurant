import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../../../common/Container";

const stats = [
  { id: 1, number: 25000, suffix: "+", title: "Happy Customers" },
  { id: 2, number: 15, suffix: "+", title: "Years Experience" },
  { id: 3, number: 18, suffix: "", title: "Expert Chefs" },
  { id: 4, number: 5, suffix: "", title: "Branches" },
];

const Statistics = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        
        if (currentStep === steps) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = stat.number;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(increment * currentStep);
            return newCounters;
          });
        }
      }, interval);
    });
  }, []);

  return (
    <section className="py-24 bg-[#0F172A]">
      <Container>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              
              <h2 className="text-5xl font-bold text-[#D4AF37] mb-3">
                {counters[index].toLocaleString()}{stat.suffix}
              </h2>

              <p className="text-gray-300 text-lg">
                {stat.title}
              </p>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Statistics;
