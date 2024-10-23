import express from 'express';
const router = express.Router();

import { getMenus, getmenu, postmenu, putmenu, deletemenu } from '../controllers/menuController.js';

router.get('/', getMenus);
router.get('/:id', getmenu);
router.post('/', postmenu);
router.put('/:id', putmenu);
router.delete('/:id', deletemenu);

export default router;