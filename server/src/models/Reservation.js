const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[0-9]{10,15}$/, "Please provide a valid phone number"],
    },
    guests: {
      type: Number,
      required: [true, "Number of guests is required"],
      min: [1, "At least 1 guest is required"],
      max: [20, "Maximum 20 guests allowed"],
    },
    reservationDate: {
      type: Date,
      required: [true, "Reservation date is required"],
      validate: {
        validator: function (value) {
          // Date must be today or in the future
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return value >= today;
        },
        message: "Reservation date cannot be in the past",
      },
    },
    reservationTime: {
      type: String,
      required: [true, "Reservation time is required"],
      validate: {
        validator: function (value) {
          // Validate time format (e.g., "7:00 PM")
          return /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i.test(value);
        },
        message: "Invalid time format. Use format: 7:00 PM",
      },
    },
    occasion: {
      type: String,
      required: [true, "Occasion is required"],
      enum: [
        "Birthday",
        "Anniversary",
        "Family Dinner",
        "Business Meeting",
        "Romantic Dinner",
        "Graduation",
        "Celebration",
        "Other",
      ],
    },
    specialRequests: {
      type: String,
      trim: true,
      maxlength: [500, "Special requests cannot exceed 500 characters"],
    },
    tableNumber: {
      type: Number,
      min: 1,
      max: 20,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled", "Rejected", "No Show"],
      default: "Pending",
    },
    confirmationCode: {
      type: String,
      unique: true,
      index: true,
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [1000, "Notes cannot exceed 1000 characters"],
    },
  },
  {
    timestamps: true,
  }
);

// Generate unique confirmation code before saving
reservationSchema.pre("save", async function() {
  if (!this.confirmationCode) {
    const year = new Date().getFullYear();
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.confirmationCode = `SG-${year}-${randomCode}`;
  }
});

// Index for faster queries
reservationSchema.index({ reservationDate: 1, reservationTime: 1 });
reservationSchema.index({ status: 1 });
reservationSchema.index({ email: 1 });

module.exports = mongoose.model("Reservation", reservationSchema);
