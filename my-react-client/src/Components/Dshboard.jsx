// src/components/Dashboard.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const Dashboard = () => {
  const stats = [
    { title: 'Daily Visitors', value: 120 },
    { title: 'New Beneficiaries', value: 45 },
    { title: 'Completed Requests', value: 80 },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h5" color="primary">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;