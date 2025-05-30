import { Response } from 'express';

export const handleResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  data: any,
  message?: string
) => {
  res.status(statusCode).json({
    success,
    message,
    data
  });
};