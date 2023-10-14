// Reports.js
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

const Test = () => {
  const [tests, setTests] = useState([]);
  const [newTest, setNewTest] = useState({
    test_id: '',
    sample_id: '',
    test_name: '',
    test_date: '',
    lab_assistant_name: '',
    result_data: '',
  });

  useEffect(() => {
    // Fetch all tests when component mounts
    Axios.get('http://localhost:4000/tests')
      .then(response => setTests(response.data.tests))
      .catch(error => console.error(error));
  }, []);

  const handleCreateTest = () => {
    Axios.post('http://localhost:4000/tests', newTest)
      .then(response => {
        setTests([...tests, response.data]);
        setNewTest({
          test_id: '',
          sample_id: '',
          test_name: '',
          test_date: '',
          lab_assistant_name: '',
          result_data: '',
        });
      })
      .catch(error => console.error(error));
  };

  const handleDeleteTest = id => {
    Axios.delete(`http://localhost:4000/tests/${id}`)
      .then(() => setTests(tests.filter(test => test._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Tests</h1>

      {/* Create Test Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Test ID"
          variant="outlined"
          value={newTest.test_id}
          onChange={e => setNewTest({ ...newTest, test_id: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Sample ID"
          variant="outlined"
          value={newTest.sample_id}
          onChange={e => setNewTest({ ...newTest, sample_id: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Test Name"
          variant="outlined"
          value={newTest.test_name}
          onChange={e => setNewTest({ ...newTest, test_name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Test Date"
          type="date"
          variant="outlined"
          value={newTest.test_date}
          onChange={e => setNewTest({ ...newTest, test_date: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Lab Assistant Name"
          variant="outlined"
          value={newTest.lab_assistant_name}
          onChange={e => setNewTest({ ...newTest, lab_assistant_name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Result Data"
          variant="outlined"
          value={newTest.result_data}
          onChange={e => setNewTest({ ...newTest, result_data: e.target.value })}
          style={{ marginRight: '10px' }}
        />

        <Button variant="contained" color="primary" onClick={handleCreateTest}>
          Create Test
        </Button>
      </Paper>

      {/* Tests Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Test ID</TableCell>
              <TableCell>Sample ID</TableCell>
              <TableCell>Test Name</TableCell>
              <TableCell>Test Date</TableCell>
              <TableCell>Lab Assistant Name</TableCell>
              <TableCell>Result Data</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tests.map(test => (
              <TableRow key={test._id}>
                <TableCell>{test.test_id}</TableCell>
                <TableCell>{test.sample_id}</TableCell>
                <TableCell>{test.test_name}</TableCell>
                <TableCell>{new Date(test.test_date).toLocaleDateString()}</TableCell>
                <TableCell>{test.lab_assistant_name}</TableCell>
                <TableCell>{test.result_data}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteTest(test._id)}>
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

export default Test;
