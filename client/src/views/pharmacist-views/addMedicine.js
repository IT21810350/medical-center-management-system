import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Grid } from '@mui/material';
import NavBar from '../../components/pharmacist-component/pharmacist-nav-bar'; // Correct the import path
import axios from 'axios'; // Import axios for making API requests

export default function AddData() {
  const [medicineDetails, setMedicineDetails] = useState({
    code: '',
    name: '',
    dosage: '',
    type: '',
    availability: '',
    expiry: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setMedicineDetails({
      ...medicineDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/pharmacistProfile/mdadd', medicineDetails);
      // After submitting, you may want to handle the response or reset the form
      console.log(response.data); // Log the response
      setMedicineDetails({
        code: '',
        name: '',
        dosage: '',
        type : '',
        availability: '',
        expiry: '',
      });
    } catch (error) {
      console.error(error); // Handle errors here
    }
  };

  return (
    <div>
      <NavBar style={{ marginBottom: '20px' }} />
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', minHeight: '400px' }}>
          <h1>Medicine Details</h1>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Medicine Code"
                  fullWidth
                  name="code" // Corrected name attribute
                  value={medicineDetails.code}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Medicine Name"
                  fullWidth
                  name="name" // Corrected name attribute
                  value={medicineDetails.name}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Dosage"
                  fullWidth
                  name="dosage" // Corrected name attribute
                  value={medicineDetails.dosage}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Medicine Type"
                  fullWidth
                  name="type" // Corrected name attribute
                  value={medicineDetails.type}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Availability"
                  fullWidth
                  name="availability" // Corrected name attribute
                  value={medicineDetails.availability}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Expiry Date"
                  fullWidth
                  name="expiry" // Corrected name attribute
                  value={medicineDetails.expiry}
                  onChange={handleOnChange}
                />
              </Grid>
            </Grid>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="error" style={{ marginRight: '10px' }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">Submit</Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
