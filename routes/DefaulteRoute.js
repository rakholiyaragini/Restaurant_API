import express from 'express';
const router = express.Router();

//routes

import bookingRoute from './booking.js';
import customerRoute from './customer.js';
import ingredientRoute from './ingredient.js';
import ingredientTypeRoute from './ingredientType.js';
import menuRoute from './menu.js';
import menuItemRoute from './menuItem.js';
import menuItemIngredientRoutes from './menuIngredient.js';
import orderRoute from './order.js';
import staffRoute from './staff.js';
import staffRoleRoute from './staffRole.js';
import tableRoute from './table.js';

router.use('/booking', bookingRoute);
router.use('/customer', customerRoute);
router.use('/ingredient', ingredientRoute);
router.use('/ingredientType', ingredientTypeRoute);
router.use('/menu', menuRoute);
router.use('/menuItem', menuItemRoute);
router.use('/menuItemIngredient', menuItemIngredientRoutes);
router.use('/order', orderRoute);
router.use('/staff', staffRoute);
router.use('/staffRole', staffRoleRoute);
router.use('/table', tableRoute);

export default router;