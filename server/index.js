import express from 'express';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes.js';
import receptionistRoutes from './routes/receptionistRoutes.js';
import departmentStaffRoutes from './routes/departmentStaffRoutes.js';
import beneficiaryRoutes from './routes/beneficiaryRoutes.js';
import cors from "cors";
import connectDB from './DB/connectDB.js';

dotenv.config();

const app = express();
app.use(express.json());

// CORS Configuration
const corsOptions = {
    origin: "https://hackathon-vox5.vercel.app/", // No trailing slash
    credentials: true // Allows cookies to be sent with the request
};
app.use(cors(corsOptions)); // Apply CORS middleware globally

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/receptionist', receptionistRoutes);
app.use('/api/department-staff', departmentStaffRoutes);
app.use('/api/beneficiary', beneficiaryRoutes);

app.listen( () => {
    connectDB();
});