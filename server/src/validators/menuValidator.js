const { body, param, query } = require("express-validator");

const menuValidator = {
  create: [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ max: 100 })
      .withMessage("Name cannot exceed 100 characters"),

    body("description")
      .trim()
      .notEmpty()
      .withMessage("Description is required")
      .isLength({ max: 500 })
      .withMessage("Description cannot exceed 500 characters"),

    body("category")
      .notEmpty()
      .withMessage("Category is required")
      .isIn([
        "Pakistani",
        "Chinese",
        "Italian",
        "BBQ",
        "Fast Food",
        "Dessert",
        "Drinks",
      ])
      .withMessage("Invalid category"),

    body("ingredients")
      .trim()
      .notEmpty()
      .withMessage("Ingredients are required"),

    body("calories").trim().notEmpty().withMessage("Calories are required"),

    body("price")
      .isFloat({ min: 0 })
      .withMessage("Price must be a positive number"),

    body("rating")
      .optional()
      .isFloat({ min: 0, max: 5 })
      .withMessage("Rating must be between 0 and 5"),

    body("image").trim().notEmpty().withMessage("Image is required"),

    body("featured").optional().isBoolean().withMessage("Featured must be boolean"),

    body("available").optional().isBoolean().withMessage("Available must be boolean"),

    body("preparationTime").optional().trim(),
  ],

  update: [
    param("id").isMongoId().withMessage("Invalid menu ID"),

    body("name")
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage("Name cannot exceed 100 characters"),

    body("description")
      .optional()
      .trim()
      .isLength({ max: 500 })
      .withMessage("Description cannot exceed 500 characters"),

    body("category")
      .optional()
      .isIn([
        "Pakistani",
        "Chinese",
        "Italian",
        "BBQ",
        "Fast Food",
        "Dessert",
        "Drinks",
      ])
      .withMessage("Invalid category"),

    body("price")
      .optional()
      .isFloat({ min: 0 })
      .withMessage("Price must be a positive number"),

    body("rating")
      .optional()
      .isFloat({ min: 0, max: 5 })
      .withMessage("Rating must be between 0 and 5"),

    body("featured").optional().isBoolean().withMessage("Featured must be boolean"),

    body("available").optional().isBoolean().withMessage("Available must be boolean"),
  ],

  getById: [param("id").isMongoId().withMessage("Invalid menu ID")],

  delete: [param("id").isMongoId().withMessage("Invalid menu ID")],

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
      .isIn(["name", "price", "rating", "createdAt"])
      .withMessage("Invalid sort field"),

    query("order")
      .optional()
      .isIn(["asc", "desc"])
      .withMessage("Order must be asc or desc"),

    query("category")
      .optional()
      .isIn([
        "Pakistani",
        "Chinese",
        "Italian",
        "BBQ",
        "Fast Food",
        "Dessert",
        "Drinks",
      ])
      .withMessage("Invalid category"),

    query("featured")
      .optional()
      .isBoolean()
      .withMessage("Featured must be boolean"),

    query("available")
      .optional()
      .isBoolean()
      .withMessage("Available must be boolean"),
  ],
};

module.exports = menuValidator;
