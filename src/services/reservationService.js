import { apiClient } from "./api";

/**
 * Reservation Service
 * Ready for backend integration
 */

export const reservationService = {
  /**
   * Create a new reservation
   */
  async createReservation(data) {
    // TODO: Replace with actual API call
    // return await apiClient.post("/reservations", data);
    console.log("Reservation Data:", data);
    return Promise.resolve({
      success: true,
      message: "Reservation created successfully",
      data: { id: Date.now(), ...data },
    });
  },

  /**
   * Get available time slots
   */
  async getAvailableSlots(date) {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/reservations/slots?date=${date}`);
    return Promise.resolve({
      slots: [
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
      ],
    });
  },

  /**
   * Cancel a reservation
   */
  async cancelReservation(id) {
    // TODO: Replace with actual API call
    // return await apiClient.delete(`/reservations/${id}`);
    return Promise.resolve({ success: true, message: "Reservation cancelled" });
  },
};

export default reservationService;
