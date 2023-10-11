import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const SampleComponent = () => {
  const [samples, setSamples] = useState([]);
  const [newSample, setNewSample] = useState({
    sample_id: '',
    sample_type: '',
    collection_date: '',
    status: '',
    lab_assistant_name: '',
  });

  const fetchSamples = async () => {
    try {
      const response = await axios.get('http://localhost:4000/samples');
      setSamples(response.data);
    } catch (error) {
      console.error('Error fetching samples:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewSample({
      ...newSample,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateSample = async () => {
    try {
      await axios.post('http://localhost:4000/samples', newSample);
      setNewSample({
        sample_id: '',
        sample_type: '',
        collection_date: '',
        status: '',
        lab_assistant_name: '',
      });
      fetchSamples();
    } catch (error) {
      console.error('Error creating sample:', error);
    }
  };

  const handleDeleteSample = async (sampleId) => {
    try {
      await axios.delete(`http://localhost:4000/samples/${sampleId}`);
      fetchSamples();
    } catch (error) {
      console.error('Error deleting sample:', error);
    }
  };

  useEffect(() => {
    fetchSamples();
  }, []);

  return (
    <div>
      <h1>Samples</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Lab Assistant</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {samples.map((sample) => (
              <TableRow key={sample.sample_id}>
                <TableCell>{sample.sample_id}</TableCell>
                <TableCell>{sample.sample_type}</TableCell>
                <TableCell>{sample.collection_date}</TableCell>
                <TableCell>{sample.status}</TableCell>
                <TableCell>{sample.lab_assistant_name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteSample(sample.sample_id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <h2>Create New Sample</h2>
        <TextField
          label="ID"
          name="sample_id"
          value={newSample.sample_id}
          onChange={handleInputChange}
        />
        <TextField
          label="Type"
          name="sample_type"
          value={newSample.sample_type}
          onChange={handleInputChange}
        />
        <TextField
          label="Date"
          name="collection_date"
          type="date" // Use type="date" for date input
          value={newSample.collection_date}
          onChange={handleInputChange}
        />
        <TextField
          label="Status"
          name="status"
          value={newSample.status}
          onChange={handleInputChange}
        />
        <TextField
          label="Lab Assistant"
          name="lab_assistant_name"
          value={newSample.lab_assistant_name}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateSample}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default SampleComponent;