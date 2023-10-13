// viewSample.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
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
      await axios.delete(`http://localhost:4000/samples/${id}`);
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sample ID</TableCell>
              <TableCell>Sample Type</TableCell>
              <TableCell>Collection Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Lab Assistant Name</TableCell>
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
                  <Link to={`/lab-sample/update/`+sample.sample_id}>
                    <button>Edit</button>
                  </Link>
                </TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(sample.sample_id)}>Delete</button>
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
