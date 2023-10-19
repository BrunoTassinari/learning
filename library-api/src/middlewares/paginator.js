import ErrorRequest from '../errors/ErrorRequest.js';

const paginator = async (req, res, next) => {
  try {
    let { limit = 5, page = 1, orderBy = '_id:-1' } = req.query;
    const [field, order] = orderBy.split(':');

    limit = parseInt(limit);
    page = parseInt(page);
      
    if( limit && limit <= 0 || page && page <= 0)
      next(new ErrorRequest('Limit and page must be greater than 0'));

    const result = await req.result.find()
      .sort({ [field]: order })
      .skip((page-1) * limit)
      .limit(limit);

    res.status(200).json(result);
    
  } catch (error) {
    next(error);
  }
};

export default paginator;