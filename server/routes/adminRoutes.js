import express from 'express';
import { getAllBeneficiaries } from '../controllers/adminController.js';

const router = express.Router();

router.post('/dashboard', getAllBeneficiaries);
// router.get('/reports', generateReports);

export default router;

