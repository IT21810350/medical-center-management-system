// Equipment.js
import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Axios from 'axios';

const Equipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [newEquipment, setNewEquipment] = useState({
    equipment_id: '',
    equipment_name: '',
    manufacturer: '',
    purchase_date: '',
    maintenance_schedule: '',
    status: '',
  });

  useEffect(() => {
    // Fetch all equipment when the component mounts
    Axios.get('http://localhost:4000/equipments')
      .then(response => setEquipments(response.data.equipments))
      .catch(error => console.error(error));
  }, []);

  const handleCreateEquipment = () => {
    Axios.post('http://localhost:4000/equipments', newEquipment)
      .then(response => {
        setEquipments([...equipments, response.data]);
        setNewEquipment({
          equipment_id: '',
          equipment_name: '',
          manufacturer: '',
          purchase_date: '',
          maintenance_schedule: '',
          status: '',
        });
      })
      .catch(error => console.error(error));
  };

  const handleDeleteEquipment = id => {
    Axios.delete(`http://localhost:4000/equipments/${id}`)
      .then(() => setEquipments(equipments.filter(equipment => equipment._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Equipments</h1>

      {/* Create Equipment Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Equipment ID"
          variant="outlined"
          value={newEquipment.equipment_id}
          onChange={e => setNewEquipment({ ...newEquipment, equipment_id: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Equipment Name"
          variant="outlined"
          value={newEquipment.equipment_name}
          onChange={e => setNewEquipment({ ...newEquipment, equipment_name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Manufacturer"
          variant="outlined"
          value={newEquipment.manufacturer}
          onChange={e => setNewEquipment({ ...newEquipment, manufacturer: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Purchase Date"
          type="date"
          variant="outlined"
          value={newEquipment.purchase_date}
          onChange={e => setNewEquipment({ ...newEquipment, purchase_date: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Maintenance Schedule"
          type="date"
          variant="outlined"
          value={newEquipment.maintenance_schedule}
          onChange={e =>
            setNewEquipment({ ...newEquipment, maintenance_schedule: e.target.value })
          }
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Status"
          variant="outlined"
          value={newEquipment.status}
          onChange={e => setNewEquipment({ ...newEquipment, status: e.target.value })}
          style={{ marginRight: '10px' }}
        />

        <Button variant="contained" color="primary" onClick={handleCreateEquipment}>
          Create Equipment
        </Button>
      </Paper>

      {/* Equipments Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Equipment ID</TableCell>
              <TableCell>Equipment Name</TableCell>
              <TableCell>Manufacturer</TableCell>
              <TableCell>Purchase Date</TableCell>
              <TableCell>Maintenance Schedule</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipments.map(equipment => (
              <TableRow key={equipment._id}>
                <TableCell>{equipment.equipment_id}</TableCell>
                <TableCell>{equipment.equipment_name}</TableCell>
                <TableCell>{equipment.manufacturer}</TableCell>
                <TableCell>{new Date(equipment.purchase_date).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(equipment.maintenance_schedule).toLocaleDateString()}</TableCell>
                <TableCell>{equipment.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteEquipment(equipment._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Equipment;
