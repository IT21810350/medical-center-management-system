import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function OrderForm() {
  return (
    <Container
      maxWidth="xl"
      style={{
        height: '80vh',
        width: '40vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(155, 155, 155, 0.5)', // Adjust the alpha value to control transparency
      }}
    >
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Contact Supplier Manager</h1>
        <Grid container spacing={2}>
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
              id="outlined-required-dosage"
              label="Dosage"
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

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-order-no"
              label="Medicine Reorder"
            />
          </Grid>
        </Grid>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="primary">
          Cancel
        </Button>
        <Button variant="contained" color="error">
          Submit
        </Button>
      </Box>
    </Container>
  );
}
