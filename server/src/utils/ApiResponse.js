class ApiResponse {
  constructor(success = true, message = "", data = null, statusCode = 200) {
    this.success = success;
    this.message = message;
    if (data !== null) {
      this.data = data;
    }
    this.statusCode = statusCode;
  }

  static success(data, message = "Success", statusCode = 200) {
    return new ApiResponse(true, message, data, statusCode);
  }

  static error(message = "Error", statusCode = 500) {
    return new ApiResponse(false, message, null, statusCode);
  }

  static paginated(data, pagination, message = "Success") {
    const response = new ApiResponse(true, message, data, 200);
    response.pagination = pagination;
    return response;
  }
}

module.exports = ApiResponse;
