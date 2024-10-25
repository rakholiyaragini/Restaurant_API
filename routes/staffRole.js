import express from 'express';
const router = express.Router();

import { getStaffRoles, getStaffRole, createStaffRole, updateStaffRole, deleteStaffRole } from '../controllers/staffRoleController.js';

router.get('/', getStaffRoles);
router.get('/:id', getStaffRole);
router.post('/', createStaffRole);
router.put('/:id', updateStaffRole);
router.delete('/:id', deleteStaffRole);

export default router;
