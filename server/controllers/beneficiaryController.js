import Beneficiary from '../models/Beneficiary.js';

export const getBeneficiaryDetails = async (req, res) => {
    const { cnic } = req.params;

    try {
        const beneficiary = await Beneficiary.findOne({ cnic });
        if (!beneficiary) return res.status(404).json({ error: 'Beneficiary not found.' });

        res.status(200).json(beneficiary);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving beneficiary details.' });
    }
};
