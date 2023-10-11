import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    CompanyName: '',
    NIC: '',
    Bio: '',
  });

  const { FirstName, LastName, Email, PhoneNumber, Address, CompanyName, NIC, Bio } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/supplierRegistration",
        { ...formData },
        { withCredentials: true }
      );
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        CompanyName: '',
        NIC: '',
        Bio: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        height: '100vh',
        width: '140vw',
        backgroundColor: '#E1F5FE',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
      }}
    >
      <Box
        sx={{
          p: 3,
          border: '2px solid #90A4AE',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Supplier Registration</h1>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-first-name"
              label="First Name"
              value={FirstName}
              onChange={handleInputChange}
              name="FirstName"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-last-name"
              label="Last Name"
              value={LastName}
              onChange={handleInputChange}
              name="LastName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-email"
              label="Email Address"
              type="email"
              value={Email}
              onChange={handleInputChange}
              name="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-address"
              label="Address"
              value={Address}
              onChange={handleInputChange}
              name="Address"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-phone"
              label="Phone Numbers"
              value={PhoneNumber}
              onChange={handleInputChange}
              name="PhoneNumber"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-nic"
              label="NIC Number"
              value={NIC}
              onChange={handleInputChange}
              name="NIC"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-company-name"
              label="Company Name"
              value={CompanyName}
              onChange={handleInputChange}
              name="CompanyName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-bio"
              label="Your Bio"
              multiline
              rows={4}
              value={Bio}
              onChange={handleInputChange}
              name="Bio"
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
