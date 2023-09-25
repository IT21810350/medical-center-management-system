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

const UpdateSamplePage = () => {
  const [sample, setSample] = useState({
    sample_id: '',
    collection_date: '',
    sample_type: '',
    status: '',
    lab_assistant_id: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSample({
      ...sample,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the update sample operation here
    console.log('Updated sample:', sample);
  };

  return (
    <div>
      {/* Include your NavBar component here */}
      <NavBar />

      <Container>
        <Typography variant="h4" gutterBottom>
          Update Sample
        </Typography>
        <Paper elevation={3}>
          <Box p={3}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Sample ID"
                    fullWidth
                    name="sample_id"
                    value={sample.sample_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Collection Date"
                    fullWidth
                    type="date"
                    name="collection_date"
                    value={sample.collection_date}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Sample Type"
                    fullWidth
                    name="sample_type"
                    value={sample.sample_type}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Status"
                    fullWidth
                    name="status"
                    value={sample.status}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Lab Assistant ID"
                    fullWidth
                    name="lab_assistant_id"
                    value={sample.lab_assistant_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Update Sample
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

export default UpdateSamplePage;
