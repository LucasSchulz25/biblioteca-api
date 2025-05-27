import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import bookRoutes from './routes/book.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', bookRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});