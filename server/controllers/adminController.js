import beneficiarySchema from '../models/Beneficiary.js'
export const getAllBeneficiaries = async (req, res) => {
    try {
      // Fetch all beneficiaries from the database
      const beneficiaries = await beneficiarySchema.find();
  
      res.status(200).json({
        message: 'Beneficiaries fetched successfully.',
        data: beneficiaries,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching beneficiaries.' });
    }
  };
  