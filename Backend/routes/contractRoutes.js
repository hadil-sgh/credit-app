import express from 'express';
import { createContract, getAllContracts ,deleteContract ,editContract  ,generateContractReport} from '../controllers/contractController.js';

const router = express.Router();

router.post('/', createContract);
router.get('/', getAllContracts);
router.put('/:id', editContract);
router.delete('/:id', deleteContract);
router.get('/:id/report', generateContractReport);

export default router;
