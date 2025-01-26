import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CircularProgress, TextField, Button, Modal, Box } from '@mui/material';
import axios from 'axios';
import { Bar } from 'react-chartjs-2'; // Import Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState([]);
  const [purposeFilter, setPurposeFilter] = useState('');
  const [cnicSearch, setCnicSearch] = useState('');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Fetch all beneficiaries from the backend
  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get('https://hackathon-chi-ruddy.vercel.app/api/admin/');
        setBeneficiaries(response.data.data);
        setFilteredBeneficiaries(response.data.data); // Initially, show all beneficiaries
        setLoading(false);
      } catch (error) {
        console.error('Error fetching beneficiaries:', error);
        setLoading(false);
      }
    };

    fetchBeneficiaries();
  }, []);

  // Filter beneficiaries based on purpose and CNIC search
  useEffect(() => {
    let filteredData = beneficiaries;

    // Filter by purpose
    if (purposeFilter) {
      filteredData = filteredData.filter((beneficiary) =>
        beneficiary.purpose.toLowerCase().includes(purposeFilter.toLowerCase())
      );
    }

    // Filter by CNIC
    if (cnicSearch) {
      filteredData = filteredData.filter((beneficiary) =>
        beneficiary.cnic.includes(cnicSearch)
      );
    }

    setFilteredBeneficiaries(filteredData);
  }, [purposeFilter, cnicSearch, beneficiaries]);

  // Open modal to show beneficiary details
  const handleOpenModal = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedBeneficiary(null);
  };

  // Chart data (example: purpose statistics)
  const chartData = {
    labels: ['Purpose 1', 'Purpose 2', 'Purpose 3'],
    datasets: [
      {
        label: 'Beneficiaries by Purpose',
        data: [
          beneficiaries.filter(b => b.purpose === 'Purpose 1').length,
          beneficiaries.filter(b => b.purpose === 'Purpose 2').length,
          beneficiaries.filter(b => b.purpose === 'Purpose 3').length,
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  if (loading) {
    return (
      <Container sx={{ mt: 4 }} align="center">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Search and Filters */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Search Department"
            variant="outlined"
            fullWidth
            value={purposeFilter}
            onChange={(e) => setPurposeFilter(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Search by CNIC"
            variant="outlined"
            fullWidth
            value={cnicSearch}
            onChange={(e) => setCnicSearch(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Chart Display */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Beneficiaries Chart (by Purpose)</Typography>
              <Bar data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Beneficiaries by Purpose' } } }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Data Display */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Beneficiaries List */}
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Beneficiaries List</Typography>
              <ul>
                {filteredBeneficiaries.map((beneficiary) => (
                  <li key={beneficiary._id}>
                    <Button onClick={() => handleOpenModal(beneficiary)} sx={{ textAlign: 'left', display: 'block', width: '100%', padding: '10px', border: '1px solid #ddd', marginBottom: '8px' }}>
                      <Typography variant="body1">{beneficiary.name}</Typography>
                      <Typography variant="body2">{beneficiary.purpose}</Typography>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Modal to Show Beneficiary Details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: 24,
          width: '400px',
        }}>
          {selectedBeneficiary && (
            <>
              <Typography variant="h6">Beneficiary Details</Typography>
              <Typography variant="body1">Name: {selectedBeneficiary.name}</Typography>
              <Typography variant="body1">CNIC: {selectedBeneficiary.cnic}</Typography>
              <Typography variant="body1">Purpose: {selectedBeneficiary.purpose}</Typography>
              <Typography variant="body1">Created At: {new Date(selectedBeneficiary.createdAt).toLocaleDateString()}</Typography>
              <Button variant="outlined" onClick={handleCloseModal} sx={{ mt: 2 }}>
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
