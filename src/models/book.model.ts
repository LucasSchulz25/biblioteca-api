import mongoose, { Schema } from 'mongoose';
import { IBook } from '../interfaces/book.interface';

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
  genre: { type: String },
  available: { type: Boolean, default: true }
});

export const Book = mongoose.model<IBook>('Book', bookSchema);