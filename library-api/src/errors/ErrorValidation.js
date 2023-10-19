
import ErrorRequest from './ErrorRequest.js';

class ErrorValidation extends ErrorRequest {
  constructor(error) {
    const fieldErrors = Object.values(error.errors).map(err => err.message).join(', ');

    super(`Validation errors: ${fieldErrors}`);
  }
}

export default ErrorValidation;