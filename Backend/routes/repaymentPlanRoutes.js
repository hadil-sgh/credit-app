import express from 'express';
import {
  createRepaymentPlan,
  deleteRepaymentPlan,
  editRepaymentPlan,
  getAllRepaymentPlans
} from '../controllers/repaymentPlanController.js';

const router = express.Router();

router.post('/', createRepaymentPlan);
router.delete('/:id', deleteRepaymentPlan);
router.put('/:id', editRepaymentPlan);
router.get('/', getAllRepaymentPlans);

export default router;
