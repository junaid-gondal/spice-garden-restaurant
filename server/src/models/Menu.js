const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Menu item name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Pakistani",
        "Chinese",
        "Italian",
        "BBQ",
        "Fast Food",
        "Dessert",
        "Drinks",
      ],
    },
    ingredients: {
      type: String,
      required: [true, "Ingredients are required"],
      trim: true,
    },
    calories: {
      type: String,
      required: [true, "Calories information is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot exceed 5"],
    },
    available: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    preparationTime: {
      type: String,
      default: "20-30 mins",
    },
  },
  {
    timestamps: true,
  }
);

// Generate slug before saving
menuSchema.pre("save", async function() {
  if (this.isNew || this.isModified("name")) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }
});

// Index for search
menuSchema.index({ name: "text", description: "text", category: "text" });

module.exports = mongoose.model("Menu", menuSchema);
