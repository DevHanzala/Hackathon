// src/components/TokenForm.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const TokenForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cnic: '',
    name: '',
    phone: '',
    address: '',
    purpose: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      cnic: '',
      name: '',
      phone: '',
      address: '',
      purpose: '',
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Generate Token
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="CNIC"
          name="cnic"
          value={formData.cnic}
          onChange={handleChange}
          required
        />
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextField
          label="Purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default TokenForm;