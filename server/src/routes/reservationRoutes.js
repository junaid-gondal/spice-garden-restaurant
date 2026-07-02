const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const reservationValidator = require("../validators/reservationValidator");
const validate = require("../middleware/validate");

// Public routes
router.post(
  "/",
  reservationValidator.create,
  validate,
  reservationController.createReservation
);

router.get(
  "/code/:confirmationCode",
  reservationValidator.getByCode,
  validate,
  reservationController.getReservationByCode
);

// Admin routes (will protect with auth middleware later)
router.get(
  "/",
  reservationValidator.query,
  validate,
  reservationController.getReservations
);

router.get(
  "/:id",
  reservationValidator.getById,
  validate,
  reservationController.getReservationById
);

router.put(
  "/:id",
  reservationValidator.update,
  validate,
  reservationController.updateReservation
);

router.patch(
  "/:id/status",
  reservationValidator.updateStatus,
  validate,
  reservationController.updateReservationStatus
);

router.delete(
  "/:id",
  reservationValidator.delete,
  validate,
  reservationController.deleteReservation
);

module.exports = router;
