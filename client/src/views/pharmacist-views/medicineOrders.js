import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import img7 from '../../assets/img/pharmacist/supplier.jpeg';

const containerStyle = {
  height: '100vh',
  width: '40vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center content horizontally
  justifyContent: 'center', // Center content vertically
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: 'rgba(255, 255, 255)',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '20px', // Adjust spacing between image and form
};

export default function OrderForm() {
  return (
    <Container maxWidth="xl" style={containerStyle}>
      <h1 style={{ textAlign: 'center' }}>Contact Supplier Manager</h1>
      <img src={img7} alt="" style={imageStyle} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-medicine-code"
            label="Medicine Code"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-medicine-name"
            label="Medicine Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-medicine-type"
            label="Medicine Type"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-quantity"
            label="Quantity"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-due-date"
            label="Due Date"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-order-no"
            label="Order No"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="error">
          Delete
        </Button>
        <Button variant="contained" color="primary">
          Update
        </Button>
        <Button variant="contained" color="secondary">
          Add
        </Button>
      </Box>
    </Container>
  );
}
