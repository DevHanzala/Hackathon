import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema({
    cnic: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    purpose: { type: String, required: true },
});

export default mongoose.model('Beneficiary', beneficiarySchema);
