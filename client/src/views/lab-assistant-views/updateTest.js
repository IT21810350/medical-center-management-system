import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
} from '@mui/material';
import NavBar from '../../components/LA-component/la-nav-bar';

const UpdateTestPage = () => {
  const [test, setTest] = useState({
    result_id: '',
    sample_id: '',
    test_name: '',
    test_date: '',
    lab_assistant_id: '',
    result_data: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTest({
      ...test,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the update test operation here
    console.log('Updated test:', test);
  };

  return (
    <div>
      {/* Include your NavBar component here */}
      <NavBar />

      <Container>
        <Typography variant="h4" gutterBottom>
          Update Test
        </Typography>
        <Paper elevation={3}>
          <Box p={3}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Result ID"
                    fullWidth
                    name="result_id"
                    type="number"
                    value={test.result_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Sample ID"
                    fullWidth
                    name="sample_id"
                    type="number"
                    value={test.sample_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Test Name"
                    fullWidth
                    name="test_name"
                    value={test.test_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Test Date"
                    fullWidth
                    type="date"
                    name="test_date"
                    value={test.test_date}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Lab Assistant ID"
                    fullWidth
                    name="lab_assistant_id"
                    type="number"
                    value={test.lab_assistant_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Result Data"
                    fullWidth
                    multiline
                    rows={4}
                    name="result_data"
                    value={test.result_data}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Update Test
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default UpdateTestPage;
