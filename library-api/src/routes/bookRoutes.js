import express from 'express';
import BooksController from '../controllers/booksController.js';
import paginator from '../middlewares/paginator.js';

const routes = express.Router();

routes.get('/books', BooksController.listAll, paginator);
routes.get('/books/find', BooksController.findByFilter);
routes.get('/books/:id', BooksController.findById);
routes.post('/books', BooksController.create);
routes.put('/books/:id', BooksController.update);
routes.delete('/books/:id', BooksController.delete);

export default routes;

