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
import { Link } from 'react-router-dom';
import NavBar from '../../components/LA-component/la-nav-bar';

const Equipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [newEquipment, setNewEquipment] = useState({
    equipment_name: '',
    manufacturer: '',
    purchase_date: '',
    maintenance_schedule: '',
    status: '',
  });

  // New state variables for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEquipments, setFilteredEquipments] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/equipments')
      .then((response) => {
        setEquipments(response.data.equipments);
        setFilteredEquipments(response.data.equipments); // Initialize filtered equipments with all equipments
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCreateEquipment = () => {
    Axios.post('http://localhost:4000/equipments', newEquipment)
      .then((response) => {
        setEquipments([...equipments, response.data]);
        setNewEquipment({
          equipment_name: '',
          manufacturer: '',
          purchase_date: '',
          maintenance_schedule: '',
          status: '',
        });

        // After creating a new equipment, update filtered equipments to include the new equipment
        setFilteredEquipments([...filteredEquipments, response.data]);
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteEquipment = (id) => {
    Axios.delete(`http://localhost:4000/equipments/${id}`)
      .then(() => {
        setEquipments(equipments.filter((equipment) => equipment._id !== id));

        // After deleting an equipment, update filtered equipments to exclude the deleted equipment
        setFilteredEquipments(filteredEquipments.filter((equipment) => equipment._id !== id));
      })
      .catch((error) => console.error(error));
  };

  // Update filtered equipments based on the search term
  useEffect(() => {
    const filtered = equipments.filter(
      (equipment) =>
        equipment.equipment_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEquipments(filtered);
  }, [searchTerm, equipments]);

  return (
    <div>
      <NavBar />
      <h1 style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Equipments</h1>

      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', fontSize: '39px' }}
      />

      {/* Create Equipment Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Equipment Name"
          variant="outlined"
          value={newEquipment.equipment_name}
          onChange={(e) => setNewEquipment({ ...newEquipment, equipment_name: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Manufacturer"
          variant="outlined"
          value={newEquipment.manufacturer}
          onChange={(e) => setNewEquipment({ ...newEquipment, manufacturer: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Purchase Date"
          type="date"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={newEquipment.purchase_date}
          onChange={(e) => setNewEquipment({ ...newEquipment, purchase_date: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Maintenance Schedule"
          type="date"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={newEquipment.maintenance_schedule}
          onChange={(e) => setNewEquipment({ ...newEquipment, maintenance_schedule: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Status"
          variant="outlined"
          value={newEquipment.status}
          onChange={(e) => setNewEquipment({ ...newEquipment, status: e.target.value })}
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
              <TableCell style={{ fontSize: '30px', fontWeight:'bold' }}>Equipment Name</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold'  }}>Manufacturer</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold'  }}>Purchase Date</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight:'bold'  }}>Maintenance Schedule</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight:'bold'  }}>Status</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold'  }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEquipments.map(equipment => (
              <TableRow key={equipment._id}>
                <TableCell style={{ fontSize: '27px' }}>{equipment.equipment_name}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{equipment.manufacturer}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{new Date(equipment.purchase_date).toLocaleDateString()}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{new Date(equipment.maintenance_schedule).toLocaleDateString()}</TableCell>
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
    </div>
  );
};

export default Equipment;
