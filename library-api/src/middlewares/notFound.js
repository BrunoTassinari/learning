import NotFound from '../errors/NotFound.js';

function notFound (req, res, next) {
  const error = new NotFound();
  next(error);
}

export default notFound;