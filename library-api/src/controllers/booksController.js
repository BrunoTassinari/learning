import NotFound from '../errors/NotFound.js';
import Book from '../models/Book.js';
import { author as authors}  from '../models/Author.js';

class BooksController {
  static async listAll(req, res, next) {
    try {
      req.result =  Book.find();

      next();
    } catch (error) {
      next(error);
    }
  }

  static async findById(req, res, next) {
    try {
      const book = await Book.findById(req.params.id);

      if (!book) 
        next(new NotFound('Book not found'));

      res.json(book);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const foundAuthor = await authors.findById(req.body.author);
      console.log(foundAuthor);

      const book = {
        ...req.body,
        author: {...foundAuthor}
      };

      const createdBook = await Book.create(book);
      res.status(201).json(createdBook);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      await Book.findByIdAndUpdate(req.params.id, req.body);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

 

  static async findByFilter(req, res, next) {
    try {

      const filter = await processQueryParams(req.query);

      if (!filter)
        res.status(200).json([]);

      const books = await Book.find(filter);

      if (!books.length)
        next(new NotFound('Books not found'));

      res.json(books);
    } catch (error) {
      next(error);
    }
  }
}
export default BooksController;


async function processQueryParams(queryParams) {
  const { title, author, publishing_company } = queryParams;
  let filter = {};

  if (title) filter.title = { $regex: title, $options: 'i'};
  if (publishing_company) filter.publishing_company = { $regex: publishing_company, $options: 'i'};

  if (author) {
    const foundAuthor = await authors.findOne({ name: { $regex: author, $options: 'i'} });

    if (!foundAuthor)
      return filter = null;

    filter.author = foundAuthor;
  }

  return filter;
}