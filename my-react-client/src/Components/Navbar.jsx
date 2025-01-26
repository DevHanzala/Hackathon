import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ mb: 4, backgroundColor: '#111827' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Beneficiary Management App
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/admin')}>
            Admin
          </Button>
          <Button color="inherit" onClick={() => navigate('/reception')}>
            Reception
          </Button>
          <Button color="inherit" onClick={() => navigate('/department')}>
            Department
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;