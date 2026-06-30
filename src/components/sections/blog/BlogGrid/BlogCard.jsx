import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      
      <Link to={`/blog/${post.slug}`}>
        <div className="overflow-hidden h-64">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
          />
        </div>
      </Link>

      <div className="p-6">
        
        <div className="mb-3">
          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-3 hover:text-[#D4AF37] transition">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 leading-7 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <FaUser />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">{post.date}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="text-[#D4AF37] font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>

      </div>

    </motion.article>
  );
};

export default BlogCard;
