import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//добавляетм cors
app.use(cors({ origin: true, credentials: true }));
// Middleware для автоматического парсинга JSON
app.use(express.json());
// Middleware для парсинга данных формы в формате x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/products/search', productRoutes);

app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => {
	res.send('API is running....');
});
app.listen(port, () => {
	console.log(`Server is running on ${port} port`);
});
