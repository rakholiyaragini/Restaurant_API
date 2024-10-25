import express from 'express';
const router = express.Router();

import {getCustomers, getCustomer, postcustomer, putcustomer} from '../controllers/customerController.js';

router.get('/', getCustomers);
router.get('/:id', getCustomer);
router.post('/', postcustomer);
router.put('/:id', putcustomer);


export default router