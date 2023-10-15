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

const Test = () => {
  const [tests, setTests] = useState([]);
  const [newTest, setNewTest] = useState({
    test_name: '',
    test_date: '',
    lab_assistant_name: '',
    result_data: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    test_name: '',
    test_date: '',
    lab_assistant_name: '',
    result_data: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTests, setFilteredTests] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/tests')
      .then((response) => {
        setTests(response.data.tests);
        setFilteredTests(response.data.tests);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCreateTest = () => {
    const errors = {};
    if (!newTest.test_name.trim()) {
      errors.test_name = 'Test Name is required';
    }
    if (!newTest.test_date) {
      errors.test_date = 'Test Date is required';
    }
    if (!newTest.lab_assistant_name.trim()) {
      errors.lab_assistant_name = 'Lab Assistant Name is required';
    }
    if (!newTest.result_data.trim()) {
      errors.result_data = 'Result Data is required';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    Axios.post('http://localhost:4000/tests', {
      test_name: newTest.test_name,
      test_date: newTest.test_date,
      lab_assistant_name: newTest.lab_assistant_name,
      result_data: newTest.result_data,
    })
      .then((response) => {
        setTests([...tests, response.data]);
        setNewTest({
          test_name: '',
          test_date: '',
          lab_assistant_name: '',
          result_data: '',
        });
        setValidationErrors({});
        setSearchTerm(''); // Clear search term on create

        setFilteredTests([...filteredTests, response.data]);
      })
      .catch((error) => console.error(error));
  };
  

  const handleDeleteTest = (id) => {
    Axios.delete(`http://localhost:4000/tests/${id}`)
      .then(() => {
        setTests(tests.filter((test) => test._id !== id));
        setFilteredTests(filteredTests.filter((test) => test._id !== id));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const filtered = tests.filter(
      (test) =>
        test.test_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.lab_assistant_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTests(filtered);
  }, [searchTerm, tests]);

  return (
    <div>
      <NavBar />
      <h1 style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Tests</h1>

      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', fontSize: '39px' }}
      />

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Test Name"
          variant="outlined"
          value={newTest.test_name}
          onChange={(e) => setNewTest({ ...newTest, test_name: e.target.value })}
          error={Boolean(validationErrors.test_name)}
          helperText={validationErrors.test_name}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Test Date"
          type="date"
          variant="outlined"
          value={newTest.test_date}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setNewTest({ ...newTest, test_date: e.target.value })}
          error={Boolean(validationErrors.test_date)}
          helperText={validationErrors.test_date}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Lab Assistant Name"
          variant="outlined"
          value={newTest.lab_assistant_name}
          onChange={(e) => setNewTest({ ...newTest, lab_assistant_name: e.target.value })}
          error={Boolean(validationErrors.lab_assistant_name)}
          helperText={validationErrors.lab_assistant_name}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Result Data"
          variant="outlined"
          value={newTest.result_data}
          onChange={(e) => setNewTest({ ...newTest, result_data: e.target.value })}
          error={Boolean(validationErrors.result_data)}
          helperText={validationErrors.result_data}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCreateTest} style={{ fontSize: '21px' }}>
          Create Test
        </Button>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Test Name</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Test Date</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Lab Assistant Name</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Result Data</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTests.map((test) => (
              <TableRow key={test._id}>
                <TableCell style={{ fontSize: '27px' }}>{test.test_name}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{new Date(test.test_date).toLocaleDateString()}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{test.lab_assistant_name}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{test.result_data}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" component={Link} to={`/lab-test/update/${test._id}`} style={{ fontSize: '21px' }}>
                    Update
                  </Button>
                  {' '}
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
