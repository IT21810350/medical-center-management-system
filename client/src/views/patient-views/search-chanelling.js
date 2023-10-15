import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from '@mui/material';
import Heading from '../../components/patient-components/heading.component';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';

const SearchChanelling = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getD/');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    const filtered = doctors.filter((doctor) => {
      // Check for undefined or null values before calling toLowerCase
      const firstName = doctor.firstName || '';
      const lastName = doctor.lastName || '';
      const specialization = doctor.specialization || '';

      return (
        firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredDoctors(filtered);
  }, [searchTerm, doctors]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = (id) => {
    // Redirect to the "make-chanelling" page with the doctor's ID as a query parameter
    window.location.href = `/make-chanelling?doctorId=${id}`;
  };

  return (
    <div >
      <PatientNavigationBar />
      <Heading
        title="Doctor Channeling"
        description="Use filters to select your preferred doctor"
      />
      <div className='container'> 
      <TextField
        label="Search"
        
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        placeholder="Enter name of the doctor/specialization"
      />
      
      </div>
      <br/><br/>
      <TableContainer className='container' component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDoctors.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{`${row.firstName || ''} ${row.middleName || ''} ${row.lastName || ''}`}</TableCell>
                <TableCell>{row.specialization || row.specialty || ''}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleButtonClick(row._id)}
                  >
                    Channel
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

export default SearchChanelling;
