import express from 'express';
import { searchProductApi } from '../controllers/productController.js';

const router = express.Router();

router.route('/:query').get(searchProductApi);

export default router;
