import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios'; // Added axios import

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
        {
          ...formData,
        },
      );
    } catch (error) {
      console.error(error);
    }
    setFormData({
      ...formData,
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      Address: '',
      CompanyName: '',
      NIC: '',
      Bio: '',
    });
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(155, 155, 155, 0.5)',
      }}
    >
      <div style={{ padding: '20px' }}>
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
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}
