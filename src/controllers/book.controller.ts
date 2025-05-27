import { Request, Response } from 'express';
import { Book } from '../models/book.model';
import { handleResponse } from '../utils/responseHandler';

export const getAllBooks = async (_req: Request, res: Response) => {
  try {
    const books = await Book.find();
    handleResponse(res, 200, true, books);
  } catch (error) {
    handleResponse(res, 500, false, null, 'Error al obtener los libros');
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return handleResponse(res, 404, false, null, 'Libro no encontrado');
    handleResponse(res, 200, true, book);
  } catch (error) {
    handleResponse(res, 500, false, null, 'Error al obtener el libro');
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    handleResponse(res, 201, true, newBook);
  } catch (error) {
    handleResponse(res, 400, false, null, 'Error al crear el libro');
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return handleResponse(res, 404, false, null, 'Libro no encontrado');
    handleResponse(res, 200, true, book);
  } catch (error) {
    handleResponse(res, 400, false, null, 'Error al actualizar el libro');
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return handleResponse(res, 404, false, null, 'Libro no encontrado');
    handleResponse(res, 200, true, book, 'Libro eliminado');
  } catch (error) {
    handleResponse(res, 500, false, null, 'Error al eliminar el libro');
  }
};