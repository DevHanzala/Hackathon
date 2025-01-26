import express from 'express';
import { scanToken, updateStatus } from '../controllers/departmentStaffController.js';

const router = express.Router();

router.get('/scan', scanToken);
router.post('/update-status', updateStatus);

export default router;
