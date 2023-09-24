import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
} from '@mui/material';
import NavBar from '../../components/LA-component/la-nav-bar';

const UpdateInventoryPage = () => {
  const [equipment, setEquipment] = useState({
    equipment_id: '',
    name: '',
    manufacturer: '',
    purchase_date: '',
    maintenance_schedule: '',
    status: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEquipment({
      ...equipment,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the update equipment operation here
    console.log('Updated equipment:', equipment);
  };

  return (
    <div>
      {/* Include your NavBar component here */}
      <NavBar />

      <Container>
        <Typography variant="h4" gutterBottom>
          Update Equipment
        </Typography>
        <Paper elevation={3}>
          <Box p={3}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Equipment ID"
                    fullWidth
                    name="equipment_id"
                    type="number"
                    value={equipment.equipment_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    fullWidth
                    name="name"
                    value={equipment.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Manufacturer"
                    fullWidth
                    name="manufacturer"
                    value={equipment.manufacturer}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Purchase Date"
                    fullWidth
                    type="date"
                    name="purchase_date"
                    value={equipment.purchase_date}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Maintenance Schedule"
                    fullWidth
                    type="date"
                    name="maintenance_schedule"
                    value={equipment.maintenance_schedule}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Status"
                    fullWidth
                    name="status"
                    value={equipment.status}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Update Equipment
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default UpdateInventoryPage;
