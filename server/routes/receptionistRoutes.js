import express from 'express';
import { registerBeneficiary } from '../controllers/receptionistController.js';

const router = express.Router();

router.post('/register', registerBeneficiary);

export default router;
