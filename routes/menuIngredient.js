import express from 'express';
const router = express.Router();

import { getMenuItemIngredients, getMenuItemIngredient, createMenuItemIngredient, updateMenuItemIngredient, deleteMenuItemIngredient } from '../controllers/menuItemIngredientController.js';

router.get('/', getMenuItemIngredients);
router.get('/:id', getMenuItemIngredient);
router.post('/', createMenuItemIngredient);
router.put('/:id', updateMenuItemIngredient);
router.delete('/:id', deleteMenuItemIngredient);


export default router