import express from 'express';
import { createCredit, getAllCredits ,deleteCredit,editCredit } from '../controllers/creditController.js';

const router = express.Router();

router.post('/', createCredit);
router.get('/', getAllCredits);
router.put('/:id', editCredit);
router.delete('/:id', deleteCredit);

export default router;
