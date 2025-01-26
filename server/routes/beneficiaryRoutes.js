import express from 'express';
import { getBeneficiaryDetails } from '../controllers/beneficiaryController.js';
const router = express.Router();
router.get('/:cnic', getBeneficiaryDetails);
export default router;
