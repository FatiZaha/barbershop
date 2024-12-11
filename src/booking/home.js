import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    TextField,
    Box,
  } from "@mui/material";
import logo from '../logo_barbershop.png';

export default function home() {
  return (
    <>
    {/* Navbar */}
    <AppBar position="static" sx={{ backgroundColor: "#a2c1ff" }}>
      <Toolbar >
      <img src={logo} style={{width: "5%"}} alt="logo" />
        <Typography variant="h6" sx={{ color: "black" }}>
          Barbershop
        </Typography>
        
      </Toolbar>
    </AppBar>

    {/* Main Content */}
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Barbershop
      </Typography>
      <Typography align="center" sx={{ marginBottom: 4 }}>
        Book your appointment quickly and easily.
      </Typography>

      {/* Booking Form */}
      <Box
        id="booking"
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#f9f9f9",
          padding: 3,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <TextField label="Name" variant="outlined" required />
        <TextField type="date" label="Date" InputLabelProps={{ shrink: true }} required />
        <TextField type="time" label="Time" InputLabelProps={{ shrink: true }} required />
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#A2C9A2", color: "white" }}
        >
          Book Now
        </Button>
      </Box>
    </Container>
  </>
  )
}
