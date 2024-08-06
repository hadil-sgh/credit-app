import express from 'express';
import { createContract, getAllContracts ,deleteContract ,editContract  } from '../controllers/contractController.js';

const router = express.Router();

router.post('/', createContract);
router.get('/', getAllContracts);
router.put('/:id', editContract);
router.delete('/:id', deleteContract);

export default router;
