const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Health check route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Spice Garden API is running",
    version: "1.0.0",
  });
});

// API Routes
app.use("/api/menu", require("./routes/menuRoutes"));
// app.use("/api/reservations", require("./routes/reservationRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/api/blog", require("./routes/blogRoutes"));
// app.use("/api/auth", require("./routes/authRoutes"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
