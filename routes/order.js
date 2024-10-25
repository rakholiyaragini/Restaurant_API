import express from 'express';
const router = express.Router();

import { getOrders, createOrder } from '../controllers/orderController.js';

router.get('/', getOrders);
router.post('/', createOrder);

export default router