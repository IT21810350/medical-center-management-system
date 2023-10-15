import React from 'react';
import { Container, Paper, TextField, Button, Grid } from '@mui/material';
//import { Link } from 'react-router-dom';
import NavBar from '../../components/pharmacist-component/pharmacist-nav-bar';

const initialFormData = {
  id: '001',
  col1: 'Paracetamol',
  col2: '50mg',
  col3: 'Tablet',
  col4: '100 Packs',
  col5: '12/12/2023',
};

function UpdateMedicine() {
  const [formData, setFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    // Implement the update functionality here
    // You can update the medicine details with formData
    // After updating, you can navigate back to the medicine store page
  };

  return (
    <div>
      <NavBar style={{ marginBottom: '20px' }} />
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <h1>Medicine Details</h1>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Medicine Code"
                  fullWidth
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Medicine Name"
                  fullWidth
                  name="col1"
                  value={formData.col1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Dosage"
                  fullWidth
                  name="col2"
                  value={formData.col2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Medicine Type"
                  fullWidth
                  name="col3"
                  value={formData.col3}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Availability"
                  fullWidth
                  name="col4"
                  value={formData.col4}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Expiry date"
                  fullWidth
                  name="col5"
                  value={formData.col5}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default UpdateMedicine;
