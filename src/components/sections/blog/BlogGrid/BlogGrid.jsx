import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => {
  return (
    <div className="lg:col-span-2">
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
