import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Modal, FormControl, Select, MenuItem, InputLabel, TextareaAutosize } from '@mui/material';
import axios from 'axios';

const Department = () => {
  const [tokenId, setTokenId] = useState('');
  const [details, setDetails] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState('');
  const [remarks, setRemarks] = useState('');

  // Dummy token details
  const dummyToken = {
    cnic: '12345-6789012-3',
    name: 'John Doe',
    contact: '123-456-7890',
    address: '1234 Main St, Some City, Some Country',
    purpose: 'Consultation',
  };

  const handleScan = async () => {
    try {
      // Adjust the API call to use the new endpoint for scanning the token
      const response = await axios.post('http://localhost:3000/api/department-staff/scan', { tokenId });
      setDetails(response.data); // Populate details with the response from the server
      setStatus(response.data.status); // Set the initial status of the token
      setOpenModal(true); // Open the modal with the token details
    } catch (error) {
      console.error('Error fetching token details:', error);
      alert('Failed to fetch token details');
    }
  };

  const handleStatusUpdate = async () => {
    try {
      // Send a POST request to update the token status
      await axios.post('http://localhost:3000/api/department-staff/update-status', {
        tokenId: tokenId,
        status: status,
        remarks: remarks,
      });

      // Close the modal after updating
      setOpenModal(false);

      // Clear the status and remarks fields
      setRemarks('');
      setStatus('');

      // Display success message
      alert('Token status updated successfully!');
    } catch (error) {
      console.error('Error updating token status:', error);
      alert('Failed to update token status');
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById('token-details');
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Token Details</title></head><body>');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Container sx={{ my: 4 }} style={{ display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
      <Box sx={{ width: '60%' }}>
        <Typography variant="h5" gutterBottom>
          Department Token Scanner
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '400px' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            label="Token ID"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" onClick={handleScan}>
            Scan Token
          </Button>
        </Box>
      </Box>

      {/* Dummy Token Section */}
      <Box
        sx={{
          width: '35%',
          backgroundColor: '#f0f0f0',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Dummy Token Details
        </Typography>
        <Box id="token-details">
          <Typography><strong>CNIC:</strong> {dummyToken.cnic}</Typography>
          <Typography><strong>Name:</strong> {dummyToken.name}</Typography>
          <Typography><strong>Contact:</strong> {dummyToken.contact}</Typography>
          <Typography><strong>Address:</strong> {dummyToken.address}</Typography>
          <Typography><strong>Purpose:</strong> {dummyToken.purpose}</Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={handlePrint} sx={{ mt: 2 }}>
          Print Token
        </Button>
      </Box>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2, maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>Token Details</Typography>
          <Typography>CNIC: {details?.cnic}</Typography>
          <Typography>Name: {details?.name}</Typography>
          <Typography>Purpose: {details?.purpose}</Typography>
          <Typography>Status: {details?.status}</Typography>
          
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
          
          <Typography variant="body2" sx={{ mt: 2 }}>Remarks</Typography>
          <TextareaAutosize
            minRows={3}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
          
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" onClick={handleStatusUpdate}>
              Update Status
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default Department;
