import mongoose from 'mongoose';
import ErrorBase from '../errors/ErrorBase.js';
import ErrorRequest from '../errors/ErrorRequest.js';
import ErrorValidation from '../errors/ErrorValidation.js';
import NotFound from '../errors/NotFound.js';

// eslint-disable-next-line no-unused-vars
const sendError = (error, req, res, next) => {
  console.log(error);

  if(error instanceof mongoose.Error.ValidationError) 
    new ErrorValidation(error).sendError(res);
  

  if(error instanceof mongoose.Error.CastError)
    new ErrorRequest().sendError(res);

  if(error instanceof ErrorBase)
    error.sendError(res);

  new ErrorBase().sendError(res);
};

export default sendError;