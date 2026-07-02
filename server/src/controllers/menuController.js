const Menu = require("../models/Menu");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../middleware/asyncHandler");

const menuController = {
  // @desc    Get all menus with filters, search, sort, pagination
  // @route   GET /api/menu
  // @access  Public
  getMenus: asyncHandler(async (req, res) => {
    const {
      page = 1,
      limit = 12,
      sort = "createdAt",
      order = "desc",
      category,
      featured,
      available,
      search,
    } = req.query;

    // Build filter object
    const filter = {};

    if (category) filter.category = category;
    if (featured !== undefined) filter.featured = featured === "true";
    if (available !== undefined) filter.available = available === "true";

    // Search functionality
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { ingredients: { $regex: search, $options: "i" } },
      ];
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Sort
    const sortOrder = order === "asc" ? 1 : -1;
    const sortObj = { [sort]: sortOrder };

    // Execute query
    const menus = await Menu.find(filter)
      .sort(sortObj)
      .limit(parseInt(limit))
      .skip(skip);

    // Get total count for pagination
    const total = await Menu.countDocuments(filter);

    // Pagination info
    const pagination = {
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      itemsPerPage: parseInt(limit),
      hasNextPage: skip + menus.length < total,
      hasPrevPage: page > 1,
    };

    const response = ApiResponse.paginated(
      menus,
      pagination,
      "Menus fetched successfully"
    );

    res.status(200).json(response);
  }),

  // @desc    Get single menu by ID
  // @route   GET /api/menu/:id
  // @access  Public
  getMenuById: asyncHandler(async (req, res) => {
    const menu = await Menu.findById(req.params.id);

    if (!menu) {
      throw ApiError.notFound("Menu item not found");
    }

    const response = ApiResponse.success(menu, "Menu fetched successfully");
    res.status(200).json(response);
  }),

  // @desc    Search menus
  // @route   GET /api/menu/search
  // @access  Public
  searchMenus: asyncHandler(async (req, res) => {
    const { q } = req.query;

    if (!q) {
      throw ApiError.badRequest("Search query is required");
    }

    const menus = await Menu.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { ingredients: { $regex: q, $options: "i" } },
      ],
    }).limit(20);

    const response = ApiResponse.success(
      menus,
      `Found ${menus.length} results for "${q}"`
    );

    res.status(200).json(response);
  }),

  // @desc    Get featured menus
  // @route   GET /api/menu/featured
  // @access  Public
  getFeaturedMenus: asyncHandler(async (req, res) => {
    const menus = await Menu.find({ featured: true, available: true })
      .sort({ rating: -1 })
      .limit(6);

    const response = ApiResponse.success(menus, "Featured menus fetched successfully");
    res.status(200).json(response);
  }),

  // @desc    Get menus by category
  // @route   GET /api/menu/category/:category
  // @access  Public
  getMenusByCategory: asyncHandler(async (req, res) => {
    const { category } = req.params;

    const menus = await Menu.find({ category, available: true }).sort({
      rating: -1,
    });

    const response = ApiResponse.success(
      menus,
      `${menus.length} items found in ${category} category`
    );

    res.status(200).json(response);
  }),

  // @desc    Create menu
  // @route   POST /api/menu
  // @access  Private/Admin (will protect later)
  createMenu: asyncHandler(async (req, res) => {
    const menu = await Menu.create(req.body);

    const response = ApiResponse.success(
      menu,
      "Menu item created successfully",
      201
    );

    res.status(201).json(response);
  }),

  // @desc    Update menu
  // @route   PUT /api/menu/:id
  // @access  Private/Admin (will protect later)
  updateMenu: asyncHandler(async (req, res) => {
    let menu = await Menu.findById(req.params.id);

    if (!menu) {
      throw ApiError.notFound("Menu item not found");
    }

    menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    const response = ApiResponse.success(menu, "Menu item updated successfully");
    res.status(200).json(response);
  }),

  // @desc    Delete menu
  // @route   DELETE /api/menu/:id
  // @access  Private/Admin (will protect later)
  deleteMenu: asyncHandler(async (req, res) => {
    const menu = await Menu.findById(req.params.id);

    if (!menu) {
      throw ApiError.notFound("Menu item not found");
    }

    await menu.deleteOne();

    const response = ApiResponse.success(null, "Menu item deleted successfully");
    res.status(200).json(response);
  }),
};

module.exports = menuController;
