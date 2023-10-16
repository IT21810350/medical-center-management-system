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
import jsPDF from 'jspdf';

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

  const handleGenerateReport = () => {
    // Fetch data from the server
    Axios.get('http://localhost:4000/tests')
      .then((response) => {
        const testsData = response.data.tests;
  
        // Create a new instance of jsPDF
        const pdf = new jsPDF();
  
        // Add content to the PDF
        pdf.text('Test Report', 10, 10);
        testsData.forEach((test, index) => {
          const yPosition = 20 + index * 10;
          pdf.text(`Test Name: ${test.test_name}`, 10, yPosition,'\n');
          pdf.text(`Test Date: ${new Date(test.test_date).toLocaleDateString()}`, 10, yPosition + 5,'\n');
          pdf.text(`Lab Assistant Name: ${test.lab_assistant_name}`, 10, yPosition + 10,'\n');
          pdf.text(`Result Data: ${test.result_data}`, 10, yPosition + 15,'\n');
          pdf.text('-------------------------------------', 10, yPosition + 20,'\n');
        });
  
        // Save the PDF
        pdf.save('test_report.pdf');
      })
      .catch((error) => console.error(error));
  };

  
  return (
    <div>
      <NavBar />
      <h1>Tests</h1>

      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Test Name"
          variant="outlined"
          value={newTest.test_name}
          onChange={(e) => setNewTest({ ...newTest, test_name: e.target.value })}
          error={Boolean(validationErrors.test_name)}
          helperText={validationErrors.test_name}
          style={{ marginRight: '10px', marginBottom: '10px' }}
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
          style={{ marginRight: '10px', marginBottom: '10px' }}
        />
        <TextField
          label="Lab Assistant Name"
          variant="outlined"
          value={newTest.lab_assistant_name}
          onChange={(e) => setNewTest({ ...newTest, lab_assistant_name: e.target.value })}
          error={Boolean(validationErrors.lab_assistant_name)}
          helperText={validationErrors.lab_assistant_name}
          style={{ marginRight: '10px', marginBottom: '10px' }}
        />
        <TextField
          label="Result Data"
          variant="outlined"
          value={newTest.result_data}
          onChange={(e) => setNewTest({ ...newTest, result_data: e.target.value })}
          error={Boolean(validationErrors.result_data)}
          helperText={validationErrors.result_data}
          style={{ marginRight: '10px', marginBottom: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCreateTest}>
          Create Test
        </Button>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Test Name</TableCell>
              <TableCell>Test Date</TableCell>
              <TableCell>Lab Assistant Name</TableCell>
              <TableCell>Result Data</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTests.map((test) => (
              <TableRow key={test._id}>
                <TableCell>{test.test_name}</TableCell>
                <TableCell>{new Date(test.test_date).toLocaleDateString()}</TableCell>
                <TableCell>{test.lab_assistant_name}</TableCell>
                <TableCell>{test.result_data}</TableCell>
                <TableCell>
                <Button variant="contained" color="primary" onClick={handleGenerateReport}>
                  Generate Report
                </Button>
                  <Button variant="contained" color="primary" component={Link} to={`/lab-test/update/${test._id}`}>
                    Update
                  </Button>
                  {' '}
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
