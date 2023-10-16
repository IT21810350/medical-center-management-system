// Test.js
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
import NavBar from '../../../components/LA-component/la-nav-bar';

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

  // New state variables for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTests, setFilteredTests] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/tests')
      .then((response) => {
        setTests(response.data.tests);
        setFilteredTests(response.data.tests); // Initialize filtered tests with all tests
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCreateTest = () => {
    Axios.post('http://localhost:4000/tests', newTest)
      .then((response) => {
        setTests([...tests, response.data]);
        setNewTest({
          test_id: '',
          sample_id: '',
          test_name: '',
          test_date: '',
          lab_assistant_name: '',
          result_data: '',
        });

        // After creating a new test, update filtered tests to include the new test
        setFilteredTests([...filteredTests, response.data]);
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteTest = (id) => {
    Axios.delete(`http://localhost:4000/tests/${id}`)
      .then(() => {
        setTests(tests.filter((test) => test._id !== id));

        // After deleting a test, update filtered tests to exclude the deleted test
        setFilteredTests(filteredTests.filter((test) => test._id !== id));
      })
      .catch((error) => console.error(error));
  };

  // Update filtered tests based on the search term
  useEffect(() => {
    const filtered = tests.filter(
      (test) =>
        test.test_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.test_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTests(filtered);
  }, [searchTerm, tests]);

  return (
    <div>
      <NavBar />
      <h1 style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif', fontWeight:'bold' }}>Tests</h1>

      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', fontSize: '39px' }}
      />

      {/* Create Test Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Test ID"
          variant="outlined"
          value={newTest.test_id}
          onChange={(e) => setNewTest({ ...newTest, test_id: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Sample ID"
          variant="outlined"
          value={newTest.sample_id}
          onChange={(e) => setNewTest({ ...newTest, sample_id: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Test Name"
          variant="outlined"
          value={newTest.test_name}
          onChange={(e) => setNewTest({ ...newTest, test_name: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Test Date"
          type="date"
          variant="outlined"
          value={newTest.test_date}
          onChange={(e) => setNewTest({ ...newTest, test_date: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Lab Assistant Name"
          variant="outlined"
          value={newTest.lab_assistant_name}
          onChange={(e) => setNewTest({ ...newTest, lab_assistant_name: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Result Data"
          variant="outlined"
          value={newTest.result_data}
          onChange={(e) => setNewTest({ ...newTest, result_data: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />

        <Button variant="contained" color="primary" onClick={handleCreateTest} style={{ fontSize: '21px' }}>
          Create Test
        </Button>
      </Paper>

      {/* Tests Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '30px', fontWeight:'bold' }}>Test ID</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold' }}>Sample ID</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold' }}>Test Name</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight:'bold' }}>Test Date</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold' }}>Lab Assistant Name</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold' }}>Result Data</TableCell>
              <TableCell style={{ fontSize: '30px',  fontWeight:'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTests.map((test) => (
              <TableRow key={test._id}>
                <TableCell style={{ fontSize: '27px' }}>{test.test_id}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{test.sample_id}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{test.test_name}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{new Date(test.test_date).toLocaleDateString()}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{test.lab_assistant_name}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{test.result_data}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteTest(test._id)} style={{ fontSize: '21px' }}>
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
