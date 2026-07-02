const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");
const menuValidator = require("../validators/menuValidator");
const validate = require("../middleware/validate");

// Public routes
router.get(
  "/",
  menuValidator.query,
  validate,
  menuController.getMenus
);

router.get("/search", menuController.searchMenus);

router.get("/featured", menuController.getFeaturedMenus);

router.get("/category/:category", menuController.getMenusByCategory);

router.get(
  "/:id",
  menuValidator.getById,
  validate,
  menuController.getMenuById
);

// Admin routes (will protect with auth middleware later)
router.post(
  "/",
  menuValidator.create,
  validate,
  menuController.createMenu
);

router.put(
  "/:id",
  menuValidator.update,
  validate,
  menuController.updateMenu
);

router.delete(
  "/:id",
  menuValidator.delete,
  validate,
  menuController.deleteMenu
);

module.exports = router;
