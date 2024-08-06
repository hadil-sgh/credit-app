import express from 'express';
import { createPaymentDetails, deletePaymentDetails, editPaymentDetails, getAllPaymentDetails } from '../controllers/paymentDetailsController.js'; // Adjust the path accordingly

const router = express.Router();

router.post('/', createPaymentDetails);
router.delete('/:id', deletePaymentDetails);
router.put('/:id', editPaymentDetails);
router.get('/', getAllPaymentDetails);

export default router;
