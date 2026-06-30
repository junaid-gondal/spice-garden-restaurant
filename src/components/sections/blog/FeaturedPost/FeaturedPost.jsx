import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";
import Container from "../../../common/Container";
import Button from "../../../common/Button";

const FeaturedPost = ({ post }) => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            
            <div className="h-96 lg:h-auto overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-12 flex flex-col justify-center">
              
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-[#D4AF37] font-semibold">
                  {post.category}
                </span>
              </div>

              <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
                {post.title}
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-6 text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{post.readTime}</span>
                </div>
                <span>{post.date}</span>
              </div>

              <Link to={`/blog/${post.slug}`}>
                <Button>Read More</Button>
              </Link>

            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedPost;
