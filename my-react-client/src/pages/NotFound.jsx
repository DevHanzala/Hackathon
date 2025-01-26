// src/pages/NotFound.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h4" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography>
        The page you’re looking for doesn’t exist. Please check the URL or go back to the home
        page.
      </Typography>
    </Container>
  );
};

export default NotFound;
