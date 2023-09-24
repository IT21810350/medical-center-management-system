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

const UpdateReportPage = () => {
  const [report, setReport] = useState({
    report_id: '',
    report_name: '',
    created_date: '',
    content: '',
    lab_assistant_id: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReport({
      ...report,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the update report operation here
    console.log('Updated report:', report);
  };

  return (
    <div>
      {/* Include your NavBar component here */}
      <NavBar />

      <Container>
        <Typography variant="h4" gutterBottom>
          Update Report
        </Typography>
        <Paper elevation={3}>
          <Box p={3}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Report ID"
                    fullWidth
                    name="report_id"
                    value={report.report_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Report Name"
                    fullWidth
                    name="report_name"
                    value={report.report_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Created Date"
                    fullWidth
                    type="date"
                    name="created_date"
                    value={report.created_date}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Content"
                    fullWidth
                    multiline
                    rows={4}
                    name="content"
                    value={report.content}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Lab Assistant ID"
                    fullWidth
                    name="lab_assistant_id"
                    value={report.lab_assistant_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Update Report
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

export default UpdateReportPage;
