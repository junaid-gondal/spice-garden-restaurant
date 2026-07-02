import { apiClient } from "./api";

/**
 * Contact Service
 * Ready for backend integration
 */

export const contactService = {
  /**
   * Send contact form message
   */
  async sendMessage(data) {
    // TODO: Replace with actual API call
    // return await apiClient.post("/contact", data);
    console.log("Contact Form Data:", data);
    return Promise.resolve({
      success: true,
      message: "Message sent successfully",
    });
  },

  /**
   * Subscribe to newsletter
   */
  async subscribeNewsletter(email) {
    // TODO: Replace with actual API call
    // return await apiClient.post("/newsletter/subscribe", { email });
    console.log("Newsletter subscription:", email);
    return Promise.resolve({
      success: true,
      message: "Subscribed successfully",
    });
  },
};

export default contactService;
