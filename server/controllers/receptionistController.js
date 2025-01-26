import Beneficiary from '../models/Beneficiary.js';
import Token from '../models/Token.js';
import crypto from 'crypto'; // Import the crypto module

export const registerBeneficiary = async (req, res) => {
    const { cnic, name, contact, address, purpose } = req.body;

    try {
        
        // Create a new beneficiary
        const newBeneficiary = new Beneficiary({ cnic, name, contact, address, purpose });
        await newBeneficiary.save();

        // Generate a random token using crypto
        const randomToken = crypto.randomBytes(16).toString('hex'); // Generates a random token

        // Create a new token with the generated random token and purpose
        const token = new Token({ cnic, purpose, token: randomToken });
        await token.save();

        res.status(201).json({ message: 'Beneficiary registered successfully.', token });
    } catch (error) {
        res.status(500).json({ error: 'Error registering beneficiary.' });
    }
};
