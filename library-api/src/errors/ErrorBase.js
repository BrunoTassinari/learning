class ErrorBase extends Error {
  constructor(message = 'Internal Server Error', status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  sendError(res) {
    res.status(this.status).json({
      status: this.status,
      message: this.message,
    });
  }
}

export default ErrorBase;