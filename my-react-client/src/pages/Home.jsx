import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/saylani-bg.jpg')", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 3,
          boxShadow: 3,
          p: 5,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom color="#111827">
          Saylani Welfare Trust
        </Typography>
        <Typography variant="h5" gutterBottom>
          Beneficiary Management System
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
          Empowering those in need by streamlining assistance processes. Our mission is to provide 
          support, dignity, and hope to underprivileged individuals and families through an 
          efficient and compassionate system.
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
          Whether you are seeking help or looking to assist, this platform is here to make a 
          difference.
        </Typography>
        <Button
          variant="contained"
          color="#111827"
          size="large"
          sx={{ textTransform: "none", fontWeight: "bold", borderRadius: 2, px: 5, py: 1.5 }}
          onClick={() => navigate("/reception")}
        >
          Get Help Now
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
