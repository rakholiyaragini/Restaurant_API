import express from 'express';
const router = express.Router();

import {getingredients, getingredient, postingredient, putingredient , deleteingredient} from '../controllers/ingredientController.js';

router.get('/', getingredients);
router.get('/:id', getingredient);
router.post('/', postingredient);
router.put('/:id', putingredient);
router.delete('/:id', deleteingredient);

export default router