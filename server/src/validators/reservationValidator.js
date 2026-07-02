const { body, param, query } = require("express-validator");

const reservationValidator = {
  create: [
    body("fullName")
      .trim()
      .notEmpty()
      .withMessage("Full name is required")
      .isLength({ min: 2, max: 100 })
      .withMessage("Name must be between 2 and 100 characters"),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),

    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required")
      .matches(/^[0-9]{10,15}$/)
      .withMessage("Phone number must be between 10 and 15 digits"),

    body("guests")
      .notEmpty()
      .withMessage("Number of guests is required")
      .isInt({ min: 1, max: 20 })
      .withMessage("Number of guests must be between 1 and 20"),

    body("reservationDate")
      .notEmpty()
      .withMessage("Reservation date is required")
      .isISO8601()
      .withMessage("Invalid date format")
      .custom((value) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const reservationDate = new Date(value);
        reservationDate.setHours(0, 0, 0, 0);
        if (reservationDate < today) {
          throw new Error("Reservation date cannot be in the past");
        }
        return true;
      }),

    body("reservationTime")
      .trim()
      .notEmpty()
      .withMessage("Reservation time is required")
      .matches(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i)
      .withMessage("Invalid time format. Use format: 7:00 PM"),

    body("occasion")
      .trim()
      .notEmpty()
      .withMessage("Occasion is required")
      .isIn([
        "Birthday",
        "Anniversary",
        "Family Dinner",
        "Business Meeting",
        "Romantic Dinner",
        "Graduation",
        "Celebration",
        "Other",
      ])
      .withMessage("Invalid occasion"),

    body("specialRequests")
      .optional()
      .trim()
      .isLength({ max: 500 })
      .withMessage("Special requests cannot exceed 500 characters"),
  ],

  update: [
    param("id").isMongoId().withMessage("Invalid reservation ID"),

    body("fullName")
      .optional()
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage("Name must be between 2 and 100 characters"),

    body("email")
      .optional()
      .trim()
      .isEmail()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),

    body("phone")
      .optional()
      .trim()
      .matches(/^[0-9]{10,15}$/)
      .withMessage("Phone number must be between 10 and 15 digits"),

    body("guests")
      .optional()
      .isInt({ min: 1, max: 20 })
      .withMessage("Number of guests must be between 1 and 20"),

    body("reservationDate")
      .optional()
      .isISO8601()
      .withMessage("Invalid date format")
      .custom((value) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const reservationDate = new Date(value);
        reservationDate.setHours(0, 0, 0, 0);
        if (reservationDate < today) {
          throw new Error("Reservation date cannot be in the past");
        }
        return true;
      }),

    body("reservationTime")
      .optional()
      .trim()
      .matches(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i)
      .withMessage("Invalid time format. Use format: 7:00 PM"),

    body("occasion")
      .optional()
      .trim()
      .isIn([
        "Birthday",
        "Anniversary",
        "Family Dinner",
        "Business Meeting",
        "Romantic Dinner",
        "Graduation",
        "Celebration",
        "Other",
      ])
      .withMessage("Invalid occasion"),

    body("specialRequests")
      .optional()
      .trim()
      .isLength({ max: 500 })
      .withMessage("Special requests cannot exceed 500 characters"),

    body("notes")
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage("Notes cannot exceed 1000 characters"),
  ],

  updateStatus: [
    param("id").isMongoId().withMessage("Invalid reservation ID"),

    body("status")
      .notEmpty()
      .withMessage("Status is required")
      .isIn(["Pending", "Confirmed", "Completed", "Cancelled", "Rejected", "No Show"])
      .withMessage("Invalid status"),

    body("notes")
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage("Notes cannot exceed 1000 characters"),
  ],

  getById: [param("id").isMongoId().withMessage("Invalid reservation ID")],

  getByCode: [
    param("confirmationCode")
      .trim()
      .notEmpty()
      .withMessage("Confirmation code is required")
      .matches(/^SG-\d{4}-[A-Z0-9]{6}$/i)
      .withMessage("Invalid confirmation code format"),
  ],

  delete: [param("id").isMongoId().withMessage("Invalid reservation ID")],

  query: [
    query("page")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Page must be a positive integer"),

    query("limit")
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage("Limit must be between 1 and 100"),

    query("sort")
      .optional()
      .isIn(["reservationDate", "reservationTime", "guests", "createdAt", "status"])
      .withMessage("Invalid sort field"),

    query("order")
      .optional()
      .isIn(["asc", "desc"])
      .withMessage("Order must be asc or desc"),

    query("status")
      .optional()
      .isIn(["Pending", "Confirmed", "Completed", "Cancelled", "Rejected", "No Show"])
      .withMessage("Invalid status"),

    query("date")
      .optional()
      .isISO8601()
      .withMessage("Invalid date format"),
  ],
};

module.exports = reservationValidator;
