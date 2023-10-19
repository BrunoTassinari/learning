import express from 'express';
import createDataBaseConnection from './config/db.connection.js';
import routes from './routes/index.js';
import sendError from './middlewares/sendError.js';
import notFound from './middlewares/notFound.js';

const connection = await createDataBaseConnection();
connection.on('error', (err) => console.log(err));
connection.once('open', () => console.log('Ok'));

const app = express();
routes(app);

app.use(notFound);
app.use(sendError);

export default app;
