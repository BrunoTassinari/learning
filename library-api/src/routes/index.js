import express from 'express';
import books from './bookRoutes.js';
import authors from './authorsRoutes.js';

const routes = (app) => {
  app.use(express.json());
  app.use('/api', books, authors);
};

export default routes;
