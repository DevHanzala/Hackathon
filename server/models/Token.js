import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
    cnic: { type: String, required: true },
    purpose: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'In Progress', 'Completed'], 
        default: 'Pending' 
    },
    remarks: { type: String },
    token: { type: String, required: true } // Add this field to store the random token
});

export default mongoose.model('Token', tokenSchema);
