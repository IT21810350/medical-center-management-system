// UpdateTest.js
import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper, Grid } from '@mui/material';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UpdateTest = () => {
  const { id } = useParams();

  const [test, setTest] = useState({
    test_id: '',
    sample_id: '',
    test_name: '',
    test_date: '',
    lab_assistant_name: '',
    result_data: '',
  });

  useEffect(() => {
    Axios.get(`http://localhost:4000/tests/${id}`)
      .then((response) => {
        setTest(response.data.test);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdateTest = () => {
    Axios.put(`http://localhost:4000/tests/${id}`, test)
      .then(() => {
        // Use Link to navigate to the '/lab-test' route
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
              label="Test ID"
              variant="outlined"
              fullWidth
              value={test.test_id}
              onChange={(e) => setTest({ ...test, test_id: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Sample ID"
              variant="outlined"
              fullWidth
              value={test.sample_id}
              onChange={(e) => setTest({ ...test, sample_id: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Test Name"
              variant="outlined"
              fullWidth
              value={test.test_name}
              onChange={(e) => setTest({ ...test, test_name: e.target.value })}
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
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Lab Assistant Name"
              variant="outlined"
              fullWidth
              value={test.lab_assistant_name}
              onChange={(e) => setTest({ ...test, lab_assistant_name: e.target.value })}
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
