import ErrorBase from './ErrorBase.js';

class ErrorRequest extends ErrorBase {
  constructor(message = 'Invalid request arguments') {
    super(message, 400);
  }
}

export default ErrorRequest;