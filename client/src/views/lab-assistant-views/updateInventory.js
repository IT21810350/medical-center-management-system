// UpdateEquipment.js
import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper, Grid } from '@mui/material';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UpdateEquipment = () => {
  const { id } = useParams();

  const [equipment, setEquipment] = useState({
    equipment_name: '',
    manufacturer: '',
    purchase_date: '',
    maintenance_schedule: '',
    status: '',
  });

  useEffect(() => {
    Axios.get(`http://localhost:4000/equipments/${id}`)
      .then((response) => {
        setEquipment(response.data.equipment);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdateEquipment = () => {
    Axios.put(`http://localhost:4000/equipments/${id}`, equipment)
      .then(() => {
        // Use Link to navigate to the '/lab-inventory' route
        window.location.href = '/lab-inventory';  // Simulate navigation
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Update Equipment</h1>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Equipment Name"
              variant="outlined"
              fullWidth
              value={equipment.equipment_name}
              onChange={(e) => setEquipment({ ...equipment, equipment_name: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Manufacturer"
              variant="outlined"
              fullWidth
              value={equipment.manufacturer}
              onChange={(e) => setEquipment({ ...equipment, manufacturer: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Purchase Date"
              type="date"
              variant="outlined"
              fullWidth
              value={equipment.purchase_date}
              onChange={(e) => setEquipment({ ...equipment, purchase_date: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Maintenance Schedule"
              type="date"
              variant="outlined"
              fullWidth
              value={equipment.maintenance_schedule}
              onChange={(e) => setEquipment({ ...equipment, maintenance_schedule: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Status"
              variant="outlined"
              fullWidth
              value={equipment.status}
              onChange={(e) => setEquipment({ ...equipment, status: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            {/* Use Link component for navigation */}
            <Link to="/lab-inventory" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" onClick={handleUpdateEquipment}>
                Update Equipment
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UpdateEquipment;
