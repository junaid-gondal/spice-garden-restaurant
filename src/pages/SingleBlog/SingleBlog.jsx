import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "../../components/common/Container";
import RelatedPosts from "../../components/sections/blog/RelatedPosts/RelatedPosts";
import blogPosts from "../../data/blogPosts";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container>
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold">Post not found</h1>
        </div>
      </Container>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-12 shadow-xl -mt-32 relative z-10"
            >
              
              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl font-bold text-[#0F172A] mb-6">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
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

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-8 mb-6">
                  {post.excerpt}
                </p>

                <p className="text-gray-700 leading-8 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="text-3xl font-bold text-[#0F172A] mt-12 mb-4">
                  Key Ingredients
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                {/* Quote Block */}
                <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-4 my-8 bg-gray-50 rounded-r-xl">
                  <p className="text-xl italic text-gray-800">
                    "The secret to great cooking is attention to detail and passion for ingredients."
                  </p>
                </blockquote>

                <h2 className="text-3xl font-bold text-[#0F172A] mt-12 mb-4">
                  Preparation Steps
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                {/* Image Gallery */}
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <img
                    src={post.image}
                    alt="Gallery 1"
                    className="rounded-xl w-full h-64 object-cover"
                  />
                  <img
                    src={post.image}
                    alt="Gallery 2"
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-8 mb-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 mt-12 pt-8 border-t">
                <span className="font-bold text-gray-700">Share:</span>
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition">
                  <FaFacebook />
                </button>
                <button className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition">
                  <FaTwitter />
                </button>
                <button className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition">
                  <FaLinkedin />
                </button>
              </div>

            </motion.article>

            {/* Prev/Next Navigation */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex items-center gap-4"
                >
                  <FaChevronLeft className="text-[#D4AF37] text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Previous</p>
                    <h3 className="font-bold text-[#0F172A] hover:text-[#D4AF37]">
                      {prevPost.title}
                    </h3>
                  </div>
                </Link>
              )}

              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex items-center gap-4 justify-end text-right"
                >
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Next</p>
                    <h3 className="font-bold text-[#0F172A] hover:text-[#D4AF37]">
                      {nextPost.title}
                    </h3>
                  </div>
                  <FaChevronRight className="text-[#D4AF37] text-2xl flex-shrink-0" />
                </Link>
              )}
            </div>

          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <RelatedPosts currentPost={post} />
    </>
  );
};

export default SingleBlog;
