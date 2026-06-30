import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import BlogCard from "../BlogGrid/BlogCard";
import blogPosts from "../../../../data/blogPosts";

const RelatedPosts = ({ currentPost }) => {
  const relatedPosts = blogPosts
    .filter((post) => post.category === currentPost.category && post.id !== currentPost.id)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <Container>
        
        <SectionTitle
          subtitle="Continue Reading"
          title="Related Articles"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default RelatedPosts;
