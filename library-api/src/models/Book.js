import mongoose from 'mongoose';
import { authorSchema } from './Author.js';

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { 
      type: String, 
      required: [true, 'title is required']
    },
    price: { type: Number },
    pages: { type: Number },
    author: {
      type: authorSchema,
      required: [true, 'author is required']
    },
    publishing_company: {
      type: String,
      required: [true, 'publishing company is required']
    }
  },
  { versionKey: false }
);

const book = mongoose.model('books', bookSchema);

export default book;
