class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message); // Error class ke constructor ko call karo, message pass karke

    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false; // hamesha false rahega errors ke liye
    this.errors = errors; // multiple errors ka array (jaise validation errors)

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;