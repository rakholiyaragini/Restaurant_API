import express from 'express';
const router = express.Router();

import { getMenuItems, getMenuItem, createMenuItem, updateMenuItem, deleteMenuItem } from '../controllers/menuItemController.js';

router.get('/', getMenuItems);
router.get('/:id', getMenuItem);
router.post('/', createMenuItem);
router.put('/:id', updateMenuItem);
router.delete('/:id', deleteMenuItem);

export default router;
