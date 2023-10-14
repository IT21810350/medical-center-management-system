import React from 'react';
import { Container, Paper, TextField, Button, Grid } from '@mui/material';
import NavBar from '../../components/pharmacist-component/pharmacist-nav-bar';

const initialFormData = {
  id: '001',
  col1: 'Paracetamol',
  col2: '50mg',
  col3: 'Tablet',
  col4: '100 Packs',
  col5: '12/12/2023',
};

function FormPage() {
  const [formData, setFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavBar style={{ marginBottom: '20px' }} /> {/* Add margin-bottom to create space */}
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', minHeight: '400px' }}>
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
                  label="Expiry Date"
                  fullWidth
                  name="col5"
                  value={formData.col5}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="error" style={{ marginRight: '10px' }}>
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default FormPage;
