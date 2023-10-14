import * as React from 'react';
//import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import NavBar from '../../components/pharmacist-component/pharmacist-nav-bar';

export default function OrderForm() {
  return (
    <div>
      <NavBar />
      <Container
        maxWidth="xl"
        style={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Center both horizontally and vertically
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'white',
        }}
      >
        <div style={{ padding: '20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Supplier Manager</h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              required
              fullWidth
              id="outlined-required-medicine-name"
              label="Medicine Name"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              required
              fullWidth
              id="outlined-required-dosage"
              label="Dosage"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              required
              fullWidth
              id="outlined-required-medicine-type"
              label="Medicine Type"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              required
              fullWidth
              id="outlined-required-quantity"
              label="Quantity"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              required
              fullWidth
              id="outlined-required-due-date"
              label="Due Date"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              required
              fullWidth
              id="outlined-required-order-no"
              label="Order No"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              required
              fullWidth
              id="outlined-required-order-no"
              label="Medicine Reorder"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              required
              fullWidth
              id="outlined-required-order-no"
              label="More Details"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
            />
          </div>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Cancel
          </Button>
          <Button variant="contained" color="error">
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
}
