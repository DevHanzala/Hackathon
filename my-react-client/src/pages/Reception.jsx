import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import { beneficiaryZodSchema } from '../Scheema/BeneficeryScheema';

const Reception = () => {
  const [formData, setFormData] = useState({
    cnic: '',
    name: '',
    contact: '',
    address: '',
    purpose: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async () => {
    // Clear previous messages and errors
    setSuccessMessage('');
    setErrorMessage('');
    setErrors({});

    try {
      // Validate form data with Zod schema
      beneficiaryZodSchema.parse(formData);

      // Debug formData before sending to backend
      console.log('Sending formData:', formData);

      // Send data to backend
      const response = await axios.post(
        'http://localhost:3000/api/receptionist/register',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      // Handle successful response
      if (response.status === 201) {
        setSuccessMessage('Token generated successfully!');
        setFormData({
          cnic: '',
          name: '',
          contact: '',
          address: '',
          purpose: '',
        });
      }
    } catch (err) {
      // Check if the error is from Zod validation
      if (err.issues) {
        const zodErrors = {};
        err.issues.forEach((issue) => {
          zodErrors[issue.path[0]] = issue.message;
        });
        setErrors(zodErrors);
      } else {
        // Handle other errors (e.g., backend errors)
        console.error('Error:', err.response || err.message);
        setErrorMessage(
          err.response?.data?.message || 'Failed to generate token. Please try again later.'
        );
      }
    }
  };

  return (
    <Container
      sx={{
        mt: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: '400px',
          boxShadow: 3,
          p: 4,
          borderRadius: 2,
          backgroundColor: '#fff',
        }}
        onSubmit={(e) => e.preventDefault()} // Prevent default form submission
      >
        <Typography variant="h5" gutterBottom align="center">
          Register Beneficiary
        </Typography>

        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <TextField
          label="CNIC"
          name="cnic"
          value={formData.cnic}
          onChange={handleChange}
          error={Boolean(errors.cnic)}
          helperText={errors.cnic}
          required
        />
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          required
        />
        <TextField
          label="Contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          error={Boolean(errors.contact)}
          helperText={errors.contact}
          required
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={Boolean(errors.address)}
          helperText={errors.address}
          required
        />
        <TextField
          label="Purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          error={Boolean(errors.purpose)}
          helperText={errors.purpose}
          required
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Generate Token
        </Button>
      </Box>
    </Container>
  );
};

export default Reception;
