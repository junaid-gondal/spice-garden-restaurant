import { useState, useMemo } from "react";
import Container from "../../components/common/Container";
import BlogHero from "../../components/sections/blog/BlogHero/BlogHero";
import FeaturedPost from "../../components/sections/blog/FeaturedPost/FeaturedPost";
import BlogGrid from "../../components/sections/blog/BlogGrid/BlogGrid";
import Sidebar from "../../components/sections/blog/Sidebar/Sidebar";
import Pagination from "../../components/sections/blog/Pagination/Pagination";
import blogPosts from "../../data/blogPosts";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPost = blogPosts[0];

  // Filter posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.slice(1); // Exclude featured post

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (activeCategory !== "All") {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }

    return filtered;
  }, [searchTerm, activeCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <BlogHero />
      <FeaturedPost post={featuredPost} />

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <BlogGrid posts={paginatedPosts} />
            <Sidebar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              posts={blogPosts}
            />
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </Container>
      </section>
    </>
  );
};

export default Blog;
