// ViewEquipment.jsx
import React, { useState, useEffect } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/LA-component/la-nav-bar';

const ViewSample = () => {
  const [samples, setSamples] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSamples, setFilteredSamples] = useState([]);
  const [newSample, setNewSample] = useState({
    sample_id: '',
    sample_type: '',
    collection_date: '',
    status: '',
    lab_assistant_name: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/samples');
        setSamples(response.data.samples);
        setFilteredSamples(response.data.samples); // Initialize filtered samples with all samples
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log('Deleting sample with ID:', id);
      await axios.delete(`http://localhost:4000/samples/${id}`);
      console.log('Sample deleted successfully.');
      // Update the local state after deletion
      setSamples(samples.filter((sample) => sample.sample_id !== id));
      // Update the filtered samples as well
      setFilteredSamples(filteredSamples.filter((sample) => sample.sample_id !== id));
    } catch (error) {
      console.error('Error deleting sample:', error);
    }
  };

  // Update filtered samples based on the search term
  useEffect(() => {
    const filtered = samples.filter(
      (sample) =>
        sample.sample_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sample.sample_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSamples(filtered);
  }, [searchTerm, samples]);

  const handleCreateSample = async () => {
    try {
      // Make sure to replace 'http://localhost:4000/samples' with your actual API endpoint
      const response = await axios.post('http://localhost:4000/samples', newSample);
  
      // Assuming the server returns the created sample in the response
      const createdSample = response.data;
  
      // Update the local state to include the newly created sample
      setSamples([...samples, createdSample]);
  
      // Optionally, reset the newSample state to clear the form fields
      setNewSample({
        sample_id: '',
        sample_type: '',
        collection_date: '',
        status: '',
        lab_assistant_name: '',
      });
  
      console.log('Sample created successfully:', createdSample);
    } catch (error) {
      console.error('Error creating sample:', error);
    }
  };

  return (
    <Container>
      <NavBar/>
      <Typography variant="h4" gutterBottom>
        All Samples
      </Typography>

      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      {/*Create Samples Table */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Sample ID"
          variant="outlined"
          value={newSample.sample_id}
          onChange={(e) => setNewSample({ ...newSample, sample_id: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Sample Type"
          variant="outlined"
          value={newSample.sample_type}
          onChange={(e) => setNewSample({ ...newSample, sample_type: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Collection Date"
          type="date"
          variant="outlined"
          value={newSample.collection_date}
          onChange={(e) => setNewSample({ ...newSample, collection_date: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Status"
          variant="outlined"
          value={newSample.status}
          onChange={(e) => setNewSample({ ...newSample, status: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Lab Assistant Name"
          variant="outlined"
          value={newSample.lab_assistant_name}
          onChange={(e) => setNewSample({ ...newSample, lab_assistant_name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCreateSample}>
          Create Sample
        </Button>
      </Paper>

      {/* Samples Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sample ID</TableCell>
              <TableCell>Sample Type</TableCell>
              <TableCell>Collection Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Lab Assistant Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSamples.map((sample) => (
              <TableRow key={sample.sample_id}>
                <TableCell>{sample.sample_id}</TableCell>
                <TableCell>{sample.sample_type}</TableCell>
                <TableCell>{new Date(sample.collection_date).toLocaleDateString()}</TableCell>
                <TableCell>{sample.status}</TableCell>
                <TableCell>{sample.lab_assistant_name}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" component={Link} to={`/lab-sample/update/${sample.sample_id}`}>
                    Update
                  </Button>
                  {' '}
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(sample.sample_id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewSample;
