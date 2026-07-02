import { apiClient } from "./api";
import blogPosts from "../data/blogPosts";

/**
 * Blog Service
 * Ready for backend integration
 */

export const blogService = {
  /**
   * Get all blog posts
   */
  async getPosts() {
    // TODO: Replace with actual API call
    // return await apiClient.get("/blog");
    return Promise.resolve(blogPosts);
  },

  /**
   * Get single blog post by slug
   */
  async getPostBySlug(slug) {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/blog/${slug}`);
    return Promise.resolve(blogPosts.find((post) => post.slug === slug));
  },

  /**
   * Get posts by category
   */
  async getPostsByCategory(category) {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/blog?category=${category}`);
    return Promise.resolve(
      blogPosts.filter((post) => post.category === category)
    );
  },

  /**
   * Search blog posts
   */
  async searchPosts(query) {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/blog/search?q=${query}`);
    return Promise.resolve(
      blogPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  },
};

export default blogService;
