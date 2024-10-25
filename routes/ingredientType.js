import express from 'express';
const router = express.Router();

import {getIngredientTypes, getIngredientType, postIngredientType, putIngredientType, deleteIngredientType} from '../controllers/ingredientTypeController.js';

router.get('/', getIngredientTypes);
router.get('/:id', getIngredientType);
router.post('/', postIngredientType);
router.put('/:id', putIngredientType);
router.delete('/:id', deleteIngredientType);


export default router