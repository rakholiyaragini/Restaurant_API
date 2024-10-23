import express from 'express';
const router = express.Router();

import {postbooking, getBookings} from '../controllers/bookingController.js';

router.get('/', getBookings);
router.post('/', postbooking);

export default router