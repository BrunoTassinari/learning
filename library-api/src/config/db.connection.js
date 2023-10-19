import mongoose from 'mongoose';

const createDataBaseConnection = async () => {
  mongoose.connect(process.env.DB_URL_CONNECTION);

  return mongoose.connection;
};

export default createDataBaseConnection;
