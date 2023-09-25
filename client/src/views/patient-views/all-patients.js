// 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField, Stack, Button } from '@mui/material';

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTable, setShowTable] = useState(false);

  const fetchPatientDetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/patientData/');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setShowTable(false); // Hide the table when the search term changes
  };

  const filteredPatients = patients.filter((patient) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      patient.fName.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.lName.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.email.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div>
      <h1>List of Patients</h1>
      <TextField
        fullWidth
        variant="outlined"
        label="Search patients"
        value={searchTerm}
        onChange={handleSearchChange}
        margin="normal"
      />
      {showTable && filteredPatients.length > 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                
                <TableCell>Country</TableCell>
                <TableCell>ID Type</TableCell>
                <TableCell>ID Number</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Guardian Name</TableCell>
                <TableCell>Relation</TableCell>
                <TableCell>Guardian ID</TableCell>
                <TableCell>Guardian Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient._id}>
                  
                  <TableCell>{patient.country}</TableCell>
                  <TableCell>{patient.idType}</TableCell>
                  <TableCell>{patient.idNumber}</TableCell>
                  <TableCell>{patient.fName}</TableCell>
                  <TableCell>{patient.lName}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.dob}</TableCell>
                  <TableCell>{patient.phone}</TableCell>
                  <TableCell>{patient.email}</TableCell>
                  <TableCell>{patient.address}</TableCell>
                  <TableCell>{patient.gName}</TableCell>
                  <TableCell>{patient.relation}</TableCell>
                  <TableCell>{patient.gId}</TableCell>
                  <TableCell>{patient.gContact}</TableCell>
                  <TableCell>
                  <Stack direction="row" spacing={2}>
              <Button
                component={Link}
                to="/confirm-chanelling"
                variant="contained"
                style={{ width: '25%' }}
                color="success">
                Edit
              </Button>
              <Button
                component={Link}
                to="/confirm-chanelling"
                variant="contained"
                style={{ width: '25%' }}
                color="error">
                Delete
              </Button>
            </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            
          </Table>
        </TableContainer>
      )}
      {showTable && filteredPatients.length === 0 && <p>No matching patients found.</p>}
      {!showTable && filteredPatients.length > 0 && (
        <button onClick={() => setShowTable(true)}>Show Results</button>
      )}
    </div>
  );
}
