import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function RegistrationForm() {
  return (
    <Container
      maxWidth="xl"
      style={{
        height: '100vh', 
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(155, 155, 155, 0.5)', // Adjust the alpha value to control transparency
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
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-last-name"
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-email"
              label="Email Address"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-address"
              label="Address"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-phone"
              label="Phone Numbers"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-nic"
              label="NIC Number"
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
            />
          </Grid>
        </Grid>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}
