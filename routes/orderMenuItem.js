import express from 'express';
const router = express.Router();

import { getOrderMenuItems, getOrderMenuItem, createOrderMenuItem, updateOrderMenuItem, deleteOrderMenuItem } from '../controllers/orderMenuItemController.js';

router.get('/', getOrderMenuItems);
router.get('/:id', getOrderMenuItem);
router.post('/', createOrderMenuItem);  
router.put('/:id', updateOrderMenuItem);
router.delete('/:id', deleteOrderMenuItem);

export default router