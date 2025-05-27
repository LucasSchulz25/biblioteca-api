import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('🟢 Conectado a MongoDB');
  } catch (error) {
    console.error('🔴 Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};