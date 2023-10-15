// UpdateTestPage.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Link,
} from '@mui/material';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/LA-component/la-nav-bar';

const UpdateTestPage = () => {
  const { id } = useParams(); // Assuming you have a similar setup with a test ID in the URL

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

  const handleUpdateTest = () => {
    // Assuming you have an API endpoint for updating tests
    Axios.put(`http://localhost:4000/tests/${id}`, test)
      .then(() => {
        // Redirect or perform any necessary action after the update
        console.log('Test updated successfully');
      })
      .catch((error) => console.error(error));
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
            <form>
              <Grid container spacing={3}>
                {/* Assuming you are displaying the ID from the URL */}
                <Grid item xs={12}>
                  <TextField
                    label="Test ID"
                    fullWidth
                    disabled
                    value={id}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Result ID"
                    fullWidth
                    name="result_id"
                    value={test.result_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Sample ID"
                    fullWidth
                    name="sample_id"
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
                  <Link to='/lab-test'/>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpdateTest}
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
