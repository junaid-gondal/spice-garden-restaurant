import { apiClient } from "./api";
import menuData from "../data/menuData";

/**
 * Menu Service
 * Ready for backend integration
 */

export const menuService = {
  /**
   * Get all menu items
   */
  async getMenuItems() {
    // TODO: Replace with actual API call
    // return await apiClient.get("/menu");
    return Promise.resolve(menuData);
  },

  /**
   * Get menu item by ID
   */
  async getMenuItem(id) {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/menu/${id}`);
    return Promise.resolve(menuData.find((item) => item.id === id));
  },

  /**
   * Filter menu by category
   */
  async getMenuByCategory(category) {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/menu?category=${category}`);
    return Promise.resolve(
      menuData.filter((item) => item.category === category)
    );
  },
};

export default menuService;
