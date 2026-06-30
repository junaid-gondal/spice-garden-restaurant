import { motion } from "framer-motion";
import Container from "../../../common/Container";

const Story = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000"
              alt="Restaurant Story"
              className="rounded-3xl w-full h-[600px] object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#D4AF37] uppercase tracking-[4px] mb-3 font-semibold">
              Our Story
            </p>

            <h2 className="text-5xl font-bold text-[#0F172A] mb-6">
              A Journey of Flavor & Passion
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Since opening our doors in 2010, Spice Garden has been committed to delivering exceptional dining experiences. What started as a small family restaurant has grown into a beloved culinary destination with 5 locations across the city.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              Our philosophy is simple: use the finest ingredients, honor traditional recipes, and create dishes with love and passion. Every meal we serve tells a story of dedication, authenticity, and culinary excellence.
            </p>

            <p className="text-gray-600 leading-8">
              Today, we proudly serve Pakistani, Chinese, Italian, BBQ, and Fast Food cuisine, prepared by our team of expert chefs. With over 25,000 satisfied customers, we continue to set the standard for fine dining.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Story;
