// UpdateTest.js
import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper, Grid } from '@mui/material';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UpdateTest = () => {
  const { id } = useParams();

  const [report, setReport] = useState({
    report_id: '',
    report_name: '',
    created_date: '',
    content: '',
    lab_assistant_name: '',
  });

  useEffect(() => {
    Axios.get(`http://localhost:4000/reports/${id}`)
      .then((response) => {
        setReport(response.data.report);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdateReport = () => {
    Axios.put(`http://localhost:4000/reports/${id}`, report)
      .then(() => {
        // Use Link to navigate to the '/lab-test' route
        return <Link to="/lab-report" />;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Update Report</h1>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Report Name"
              variant="outlined"
              fullWidth
              value={report.report_name}
              onChange={(e) => setReport({ ...report, report_name: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Created Date"
              type="date"
              variant="outlined"
              fullWidth
              value={report.created_date}
              onChange={(e) => setReport({ ...report, created_date: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Lab Assistant Name"
              variant="outlined"
              fullWidth
              value={report.lab_assistant_name}
              onChange={(e) => setReport({ ...report, lab_assistant_name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={report.content}
              onChange={(e) => setReport({ ...report, content: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            {/* Use Link component for navigation */}
            <Link to="/lab-report" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" onClick={handleUpdateReport}>
                Update Report
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UpdateTest;
