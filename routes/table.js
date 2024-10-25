import express from 'express';
const router = express.Router();

import {getTables, createTable} from '../controllers/tableController.js';

router.get('/', getTables);
router.post('/', createTable);

export default router;