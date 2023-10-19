import NotFound from '../errors/NotFound.js';
import {author as authors}  from '../models/Author.js';

class AuthorsController {

  static listAll = async (req, res, next) => {
    try {
      const response = await authors.find();
      res.status(200).send(response);
      
    } catch (error) {
      next(error);
    }
  };

  static findById = async (req, res, next) => {
    try {
      const response = await authors.findById(req.params.id);

      if(!response)
        next(new NotFound('Author not found'));

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    try {
      const autor = new authors(req.body);
      const response = await autor.save();
      res.status(201).send(response);

    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const foundAuthor = await authors.findByIdAndUpdate(req.params.id, {$set: req.body});

      if(!foundAuthor)
        next(new NotFound('Author not found'));

      res.status(204).json();
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const foundAuthor = await authors.findByIdAndDelete(req.params.id);

      if(!foundAuthor)
        next(new NotFound('Author not found'));

      res.status(204).json();

    } catch (error) {
      next(error);
    }
  };

}

export default AuthorsController;