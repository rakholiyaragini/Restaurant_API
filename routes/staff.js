import express from 'express';
const router = express.Router();

import { getStaffs, getStaff, postStaff, putStaff, deleteStaff } from '../controllers/staffController.js';

router.get('/', getStaffs);
router.get('/:id', getStaff);
router.post('/', postStaff);
router.put('/:id', putStaff);
router.delete('/:id', deleteStaff);

export default router;