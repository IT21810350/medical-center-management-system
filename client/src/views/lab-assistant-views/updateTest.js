import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper, Grid } from '@mui/material';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UpdateTest = () => {
  const { id } = useParams();

  const [test, setTest] = useState({
    test_name: '',
    test_date: '',
    lab_assistant_name: '',
    result_data: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:4000/tests/${id}`)
      .then((response) => {
        setTest(response.data.test);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const validateForm = () => {
    const errors = {};

    if (!test.test_name.trim()) {
      errors.test_name = 'Test Name is required';
    }
    if (!test.test_date) {
      errors.test_date = 'Test Date is required';
    }
    if (!test.lab_assistant_name.trim()) {
      errors.lab_assistant_name = 'Lab Assistant Name is required';
    }
    if (!test.result_data.trim()) {
      errors.result_data = 'Result Data is required';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleUpdateTest = () => {
    if (!validateForm()) {
      // Form validation failed
      return;
    }

    Axios.put(`http://localhost:4000/tests/${id}`, test)
      .then(() => {
        // Use Link component for navigation
        // Note: You might want to use useHistory() for programmatic navigation
        return <Link to="/lab-test" />;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Update Test</h1>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Test Name"
              variant="outlined"
              fullWidth
              value={test.test_name}
              onChange={(e) => setTest({ ...test, test_name: e.target.value })}
              error={Boolean(validationErrors.test_name)}
              helperText={validationErrors.test_name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Test Date"
              type="date"
              variant="outlined"
              fullWidth
              value={test.test_date}
              onChange={(e) => setTest({ ...test, test_date: e.target.value })}
              error={Boolean(validationErrors.test_date)}
              helperText={validationErrors.test_date}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Lab Assistant Name"
              variant="outlined"
              fullWidth
              value={test.lab_assistant_name}
              onChange={(e) => setTest({ ...test, lab_assistant_name: e.target.value })}
              error={Boolean(validationErrors.lab_assistant_name)}
              helperText={validationErrors.lab_assistant_name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Result Data"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={test.result_data}
              onChange={(e) => setTest({ ...test, result_data: e.target.value })}
              error={Boolean(validationErrors.result_data)}
              helperText={validationErrors.result_data}
            />
          </Grid>
          <Grid item xs={12}>
            {/* Use Link component for navigation */}
            <Link to="/lab-test" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" onClick={handleUpdateTest}>
                Update Test
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UpdateTest;
