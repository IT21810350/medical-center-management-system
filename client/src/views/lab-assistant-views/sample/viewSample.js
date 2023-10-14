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
} from '@mui/material';
import axios from 'axios';

const ViewSample = () => {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/samples');
        setSamples(response.data.samples);
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
    } catch (error) {
      console.error("Error deleting sample:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Samples
      </Typography>
      {/* Create Sample Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        {/* You can add a create sample form here if needed */}
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
            {samples.map((sample) => (
              <TableRow key={sample.sample_id}>
                <TableCell>{sample.sample_id}</TableCell>
                <TableCell>{sample.sample_type}</TableCell>
                <TableCell>{new Date(sample.collection_date).toLocaleDateString()}</TableCell>
                <TableCell>{sample.status}</TableCell>
                <TableCell>{sample.lab_assistant_name}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
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
