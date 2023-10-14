// UpdateReport.js
import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UpdateReport = () => {
  const { id } = useParams(); // Extract the report ID from the URL
  
  
  const [report, setReport] = useState({
    report_id: '',
    report_name: '',
    created_date: '',
    content: '',
    lab_assistant_name: '',
  });

  useEffect(() => {
    // Fetch the report details using the report ID
    Axios.get(`http://localhost:4000/reports/${id}`)
      .then(response => {
        setReport(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdateReport = () => {
    // Update the report details
    Axios.put(`http://localhost:4000/reports/${id}`, report)
      .then(() => {
        // Redirect back to the original page
        return(<Link to="/lab-report"/>)
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Update Report</h1>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Report ID"
          variant="outlined"
          value={report.report_id}
          onChange={e => setReport({ ...report, report_id: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Report Name"
          variant="outlined"
          value={report.report_name}
          onChange={e => setReport({ ...report, report_name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Created Date"
          type="date"
          variant="outlined"
          value={report.created_date}
          onChange={e => setReport({ ...report, created_date: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Content"
          variant="outlined"
          value={report.content}
          onChange={e => setReport({ ...report, content: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Lab Assistant Name"
          variant="outlined"
          value={report.lab_assistant_name}
          onChange={e => setReport({ ...report, lab_assistant_name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleUpdateReport}>
          Update Report
        </Button>
      </Paper>
    </div>
  );
};

export default UpdateReport;
