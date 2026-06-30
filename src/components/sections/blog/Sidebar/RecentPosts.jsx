import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";

const RecentPosts = ({ posts }) => {
  const recentPosts = posts.slice(0, 5);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
        Recent Posts
      </h3>

      <div className="space-y-4">
        {recentPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="flex gap-4 group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            
            <div>
              <h4 className="font-bold text-sm text-[#0F172A] group-hover:text-[#D4AF37] transition mb-2 line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FaClock />
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
