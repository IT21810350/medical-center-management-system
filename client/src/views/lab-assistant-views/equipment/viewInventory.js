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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/LA-component/la-nav-bar';

const Equipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [newEquipment, setNewEquipment] = useState({
    equipment_id: '',
    equipment_name: '',
    manufacturer: '',
    purchase_date: '',
    maintainence_schedule: '',
    status: '',
  });

  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

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
          maintainence_schedule: '',
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

  const handleUpdateClick = equipment => {
    setSelectedEquipment(equipment);
    setOpenUpdateDialog(true);
  };

  const handleUpdateEquipment = () => {
    Axios.put(`http://localhost:4000/equipments/${selectedEquipment._id}`, {
      equipment_id: selectedEquipment.equipment_id,
      equipment_name: selectedEquipment.equipment_name,
      manufacturer: selectedEquipment.manufacturer,
      purchase_date: selectedEquipment.purchase_date,
      maintainence_schedule: selectedEquipment.maintainence_schedule, 
      status: selectedEquipment.status,
    })
      .then(response => {
        // Update the equipment in the state
        const updatedEquipments = equipments.map(equipment =>
          equipment._id === selectedEquipment._id ? response.data : equipment
        );
        setEquipments(updatedEquipments);
        setOpenUpdateDialog(false);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <NavBar />
      <h1 style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif', fontWeight:'bold' }}>Equipments</h1>

      {/* Create Equipment Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Equipment ID"
          variant="outlined"
          value={newEquipment.equipment_id}
          onChange={e => setNewEquipment({ ...newEquipment, equipment_id: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Equipment Name"
          variant="outlined"
          value={newEquipment.equipment_name}
          onChange={e => setNewEquipment({ ...newEquipment, equipment_name: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Manufacturer"
          variant="outlined"
          value={newEquipment.manufacturer}
          onChange={e => setNewEquipment({ ...newEquipment, manufacturer: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Purchase Date"
          type="date"
          variant="outlined"
          value={newEquipment.purchase_date}
          onChange={e => setNewEquipment({ ...newEquipment, purchase_date: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Maintainence Schedule"
          type="date"
          variant="outlined"
          value={newEquipment.maintainence_schedule}
          onChange={e => setNewEquipment({ ...newEquipment, maintainence_schedule: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Status"
          variant="outlined"
          value={newEquipment.status}
          onChange={e => setNewEquipment({ ...newEquipment, status: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />

        <Button variant="contained" color="primary" onClick={handleCreateEquipment} style={{ fontSize: '21px' }}>
          Create Equipment
        </Button>
      </Paper>

      {/* Equipments Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '30px', fontWeight:'bold' }}>Equipment ID</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold'  }}>Equipment Name</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold'  }}>Manufacturer</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold'  }}>Purchase Date</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight:'bold'  }}>Maintenance Schedule</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight:'bold'  }}>Status</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold'  }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipments.map(equipment => (
              <TableRow key={equipment._id}>
                <TableCell style={{ fontSize: '27px' }}>{equipment.equipment_id}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{equipment.equipment_name}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{equipment.manufacturer}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{new Date(equipment.purchase_date).toLocaleDateString()}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{new Date(equipment.maintainence_schedule).toLocaleDateString()}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{equipment.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteEquipment(equipment._id)} style={{ fontSize: '21px' }}>
                    Delete
                  </Button>
                  {' '}
                  <Button variant="contained" color="primary" component={Link} to={`/lab-inventory/update/${equipment._id}`} style={{ fontSize: '21px' }}>
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Update Equipment Dialog */}
      <Dialog open={openUpdateDialog} onClose={() => setOpenUpdateDialog(false)}>
        <DialogTitle style={{ fontSize: '30px', fontWeight:'bold' }}>Update Equipment</DialogTitle>
        <DialogContent>
          {/* Display details of selected equipment in text fields for update */}
          <TextField
            label="Equipment ID"
            variant="outlined"
            value={selectedEquipment?.equipment_id || ''}
            onChange={e => setSelectedEquipment({ ...selectedEquipment, equipment_id: e.target.value })}
            style={{ marginBottom: '10px', fontSize: '27px' }}
          />
          <TextField
            label="Equipment Name"
            variant="outlined"
            value={selectedEquipment?.equipment_name || ''}
            onChange={e => setSelectedEquipment({ ...selectedEquipment, equipment_name: e.target.value })}
            style={{ marginBottom: '10px', fontSize: '27px' }}
          />
          <TextField
            label="Manufacturer"
            variant="outlined"
            value={selectedEquipment?.manufacturer || ''}
            onChange={e => setSelectedEquipment({ ...selectedEquipment, manufacturer: e.target.value })}
            style={{ marginBottom: '10px', fontSize: '27px' }}
          />
          <TextField
            label="Purchase Date"
            type="date"
            variant="outlined"
            value={selectedEquipment?.purchase_date || ''}
            onChange={e => setSelectedEquipment({ ...selectedEquipment, purchase_date: e.target.value })}
            style={{ marginBottom: '10px', fontSize: '27px' }}
          />
          <TextField
            label="Maintenance Schedule"
            type="date"
            variant="outlined"
            value={selectedEquipment?.maintainence_schedule || ''}
            onChange={e => setSelectedEquipment({ ...selectedEquipment, maintainence_schedule: e.target.value })}
            style={{ marginBottom: '10px', fontSize: '27px' }}
          />
          <TextField
            label="Status"
            variant="outlined"
            value={selectedEquipment?.status || ''}
            onChange={e => setSelectedEquipment({ ...selectedEquipment, status: e.target.value })}
            style={{ marginBottom: '10px', fontSize: '27px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleUpdateEquipment} style={{ fontSize: '21px' }}>
            Update
          </Button>
          <Button variant="contained" onClick={() => setOpenUpdateDialog(false)} style={{ fontSize: '21px' }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Equipment;
