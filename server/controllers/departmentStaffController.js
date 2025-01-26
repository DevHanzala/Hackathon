import Token from '../models/Token.js';

export const scanToken = async (req, res) => {
    const { tokenId } = req.body; // tokenId should be passed as the token value, not CNIC

    try {
        // Find the token using the 'token' field, not the '_id' or 'cnic'
        const token = await Token.findOne({ _id: tokenId });
        
        if (!token) {
            return res.status(404).json({ error: 'Token not found.' });
        }

        // If the token is found, return the token data along with the populated beneficiary
        res.status(200).json(token);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error scanning token.' });
    }
};



export const updateStatus = async (req, res) => {
    const { tokenId, status, remarks } = req.body;

    try {
        // Find the token by the 'token' field (not the default _id)
        const token = await Token.findOneAndUpdate({ token: tokenId }, { status, remarks }, { new: true });

        if (!token) {
            return res.status(404).json({ error: 'Token not found.' });
        }

        res.status(200).json({ message: 'Status updated successfully.', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating status.' });
    }
};

