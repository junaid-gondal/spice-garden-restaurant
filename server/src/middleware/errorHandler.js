const ApiResponse = require("../utils/ApiResponse");

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    message = errors.join(", ");
    statusCode = 400;
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    message = `${field} already exists`;
    statusCode = 409;
  }

  // Mongoose cast error (invalid ObjectId)
  if (err.name === "CastError") {
    message = "Invalid ID format";
    statusCode = 400;
  }

  // Log error in development
  if (process.env.NODE_ENV === "development") {
    console.error("❌ Error:", err);
  }

  const response = ApiResponse.error(message, statusCode);
  res.status(statusCode).json(response);
};

module.exports = errorHandler;
