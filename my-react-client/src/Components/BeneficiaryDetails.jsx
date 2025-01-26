import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BeneficiaryDetails = ({ beneficiary }) => {
  return (
    <Card elevation={3} sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Beneficiary Details
        </Typography>
        <Typography variant="body1">CNIC: {beneficiary.cnic}</Typography>
        <Typography variant="body1">Name: {beneficiary.name}</Typography>
        <Typography variant="body1">Phone: {beneficiary.phone}</Typography>
        <Typography variant="body1">Address: {beneficiary.address}</Typography>
        <Typography variant="body1">Purpose: {beneficiary.purpose}</Typography>
        <Typography variant="body1">Status: {beneficiary.status}</Typography>
      </CardContent>
    </Card>
  );
};

export default BeneficiaryDetails;