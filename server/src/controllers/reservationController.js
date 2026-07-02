const Reservation = require("../models/Reservation");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../middleware/asyncHandler");
const emailService = require("../services/emailService");

// Restaurant table configuration
// 20 tables with varying capacities
const TABLES = [
  { number: 1, capacity: 2 },
  { number: 2, capacity: 2 },
  { number: 3, capacity: 2 },
  { number: 4, capacity: 2 },
  { number: 5, capacity: 4 },
  { number: 6, capacity: 4 },
  { number: 7, capacity: 4 },
  { number: 8, capacity: 4 },
  { number: 9, capacity: 4 },
  { number: 10, capacity: 4 },
  { number: 11, capacity: 6 },
  { number: 12, capacity: 6 },
  { number: 13, capacity: 6 },
  { number: 14, capacity: 6 },
  { number: 15, capacity: 8 },
  { number: 16, capacity: 8 },
  { number: 17, capacity: 8 },
  { number: 18, capacity: 8 },
  { number: 19, capacity: 8 },
  { number: 20, capacity: 8 },
];

/**
 * Find the smallest available table that can accommodate the number of guests
 * @param {Number} guests - Number of guests
 * @param {Date} date - Reservation date
 * @param {String} time - Reservation time
 * @returns {Number|null} - Table number or null if no table available
 */
const findAvailableTable = async (guests, date, time) => {
  // Get all reservations for the same date and time that are not cancelled or rejected
  const existingReservations = await Reservation.find({
    reservationDate: date,
    reservationTime: time,
    status: { $nin: ["Cancelled", "Rejected", "No Show"] },
  });

  // Get occupied table numbers
  const occupiedTables = existingReservations.map((res) => res.tableNumber);

  // Find suitable tables (capacity >= guests) that are not occupied
  const availableTables = TABLES.filter(
    (table) =>
      table.capacity >= guests && !occupiedTables.includes(table.number)
  );

  if (availableTables.length === 0) {
    return null;
  }

  // Sort by capacity (ascending) to get the smallest suitable table
  availableTables.sort((a, b) => a.capacity - b.capacity);

  return availableTables[0].number;
};

/**
 * Check if a specific table is available for a given date and time
 * @param {Number} tableNumber - Table number
 * @param {Date} date - Reservation date
 * @param {String} time - Reservation time
 * @param {String} excludeReservationId - Reservation ID to exclude (for updates)
 * @returns {Boolean} - true if available, false otherwise
 */
const isTableAvailable = async (
  tableNumber,
  date,
  time,
  excludeReservationId = null
) => {
  const query = {
    tableNumber,
    reservationDate: date,
    reservationTime: time,
    status: { $nin: ["Cancelled", "Rejected", "No Show"] },
  };

  if (excludeReservationId) {
    query._id = { $ne: excludeReservationId };
  }

  const existingReservation = await Reservation.findOne(query);
  return !existingReservation;
};

const reservationController = {
  // @desc    Create new reservation
  // @route   POST /api/reservations
  // @access  Public
  createReservation: asyncHandler(async (req, res) => {
    const {
      fullName,
      email,
      phone,
      guests,
      reservationDate,
      reservationTime,
      occasion,
      specialRequests,
    } = req.body;

    // Find available table
    const tableNumber = await findAvailableTable(
      guests,
      reservationDate,
      reservationTime
    );

    if (!tableNumber) {
      throw ApiError.badRequest(
        "No tables available for the selected date and time. Please choose a different time slot."
      );
    }

    // Create reservation
    const reservation = await Reservation.create({
      fullName,
      email,
      phone,
      guests,
      reservationDate,
      reservationTime,
      occasion,
      specialRequests,
      tableNumber,
    });

    // Send confirmation email
    try {
      await emailService.sendReservationConfirmation(reservation);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the reservation if email fails
    }

    const response = ApiResponse.success(
      {
        reservation: {
          id: reservation._id,
          confirmationCode: reservation.confirmationCode,
          fullName: reservation.fullName,
          email: reservation.email,
          phone: reservation.phone,
          guests: reservation.guests,
          reservationDate: reservation.reservationDate,
          reservationTime: reservation.reservationTime,
          occasion: reservation.occasion,
          tableNumber: reservation.tableNumber,
          status: reservation.status,
        },
      },
      "Reservation created successfully. Confirmation email has been sent.",
      201
    );

    res.status(201).json(response);
  }),

  // @desc    Get all reservations with filters
  // @route   GET /api/reservations
  // @access  Private/Admin (will protect later)
  getReservations: asyncHandler(async (req, res) => {
    const {
      page = 1,
      limit = 20,
      sort = "reservationDate",
      order = "desc",
      status,
      date,
      search,
    } = req.query;

    // Build filter object
    const filter = {};

    if (status) filter.status = status;
    if (date) {
      const searchDate = new Date(date);
      filter.reservationDate = {
        $gte: new Date(searchDate.setHours(0, 0, 0, 0)),
        $lte: new Date(searchDate.setHours(23, 59, 59, 999)),
      };
    }

    // Search functionality
    if (search) {
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { confirmationCode: { $regex: search, $options: "i" } },
      ];
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Sort
    const sortOrder = order === "asc" ? 1 : -1;
    const sortObj = { [sort]: sortOrder };

    // Execute query
    const reservations = await Reservation.find(filter)
      .sort(sortObj)
      .limit(parseInt(limit))
      .skip(skip);

    // Get total count for pagination
    const total = await Reservation.countDocuments(filter);

    // Pagination info
    const pagination = {
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      itemsPerPage: parseInt(limit),
      hasNextPage: skip + reservations.length < total,
      hasPrevPage: page > 1,
    };

    const response = ApiResponse.paginated(
      reservations,
      pagination,
      "Reservations fetched successfully"
    );

    res.status(200).json(response);
  }),

  // @desc    Get single reservation by ID
  // @route   GET /api/reservations/:id
  // @access  Private/Admin (will protect later)
  getReservationById: asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      throw ApiError.notFound("Reservation not found");
    }

    const response = ApiResponse.success(
      reservation,
      "Reservation fetched successfully"
    );
    res.status(200).json(response);
  }),

  // @desc    Get reservation by confirmation code
  // @route   GET /api/reservations/code/:confirmationCode
  // @access  Public
  getReservationByCode: asyncHandler(async (req, res) => {
    const { confirmationCode } = req.params;

    const reservation = await Reservation.findOne({
      confirmationCode: confirmationCode.toUpperCase(),
    });

    if (!reservation) {
      throw ApiError.notFound("Reservation not found with this confirmation code");
    }

    const response = ApiResponse.success(
      reservation,
      "Reservation fetched successfully"
    );
    res.status(200).json(response);
  }),

  // @desc    Update reservation
  // @route   PUT /api/reservations/:id
  // @access  Private/Admin (will protect later)
  updateReservation: asyncHandler(async (req, res) => {
    let reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      throw ApiError.notFound("Reservation not found");
    }

    const {
      guests,
      reservationDate,
      reservationTime,
      tableNumber: requestedTable,
    } = req.body;

    // If date, time, or guests changed, check table availability
    if (
      (guests && guests !== reservation.guests) ||
      (reservationDate && reservationDate !== reservation.reservationDate) ||
      (reservationTime && reservationTime !== reservation.reservationTime)
    ) {
      const newGuests = guests || reservation.guests;
      const newDate = reservationDate || reservation.reservationDate;
      const newTime = reservationTime || reservation.reservationTime;

      let newTableNumber;

      if (requestedTable) {
        // Check if requested table is available
        const available = await isTableAvailable(
          requestedTable,
          newDate,
          newTime,
          req.params.id
        );

        if (!available) {
          throw ApiError.badRequest(
            "Requested table is not available for the selected date and time"
          );
        }

        // Check if table capacity is sufficient
        const table = TABLES.find((t) => t.number === requestedTable);
        if (table.capacity < newGuests) {
          throw ApiError.badRequest(
            `Table ${requestedTable} can only accommodate ${table.capacity} guests`
          );
        }

        newTableNumber = requestedTable;
      } else {
        // Find new available table
        newTableNumber = await findAvailableTable(newDate, newTime, newGuests);

        if (!newTableNumber) {
          throw ApiError.badRequest(
            "No tables available for the selected date and time"
          );
        }
      }

      req.body.tableNumber = newTableNumber;
    }

    // Update reservation
    reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    const response = ApiResponse.success(
      reservation,
      "Reservation updated successfully"
    );
    res.status(200).json(response);
  }),

  // @desc    Update reservation status
  // @route   PATCH /api/reservations/:id/status
  // @access  Private/Admin (will protect later)
  updateReservationStatus: asyncHandler(async (req, res) => {
    const { status, notes } = req.body;

    let reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      throw ApiError.notFound("Reservation not found");
    }

    const oldStatus = reservation.status;

    // Update status
    reservation.status = status;
    if (notes) {
      reservation.notes = notes;
    }

    await reservation.save();

    // Send email notifications based on status change
    try {
      if (status === "Confirmed" && oldStatus !== "Confirmed") {
        await emailService.sendReservationConfirmation(reservation);
      } else if (status === "Cancelled" && oldStatus !== "Cancelled") {
        await emailService.sendReservationCancelled(reservation);
      }
    } catch (emailError) {
      console.error("Failed to send status update email:", emailError);
      // Don't fail the status update if email fails
    }

    const response = ApiResponse.success(
      reservation,
      `Reservation status updated to ${status}`
    );
    res.status(200).json(response);
  }),

  // @desc    Delete reservation
  // @route   DELETE /api/reservations/:id
  // @access  Private/Admin (will protect later)
  deleteReservation: asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      throw ApiError.notFound("Reservation not found");
    }

    await reservation.deleteOne();

    const response = ApiResponse.success(
      null,
      "Reservation deleted successfully"
    );
    res.status(200).json(response);
  }),
};

module.exports = reservationController;
