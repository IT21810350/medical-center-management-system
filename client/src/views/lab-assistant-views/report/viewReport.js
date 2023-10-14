// Reports.js
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
import {Link} from 'react-router-dom';
import NavBar from '../../../components/LA-component/la-nav-bar';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({
    report_id: '',
    report_name: '',
    created_date: '',
    content: '',
    lab_assistant_name: '',
  });

  // New state variables for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReports, setFilteredReports] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/reports')
      .then(response => {
        setReports(response.data.reports);
        setFilteredReports(response.data.reports); // Initialize filtered reports with all reports
      })
      .catch(error => console.error(error));
  }, []);

  const handleCreateReport = () => {
    Axios.post('http://localhost:4000/reports', newReport)
      .then(response => {
        setReports([...reports, response.data]);
        setNewReport({
          report_id: '',
          report_name: '',
          created_date: '',
          content: '',
          lab_assistant_name: '',
        });

        // After creating a new report, update filtered reports to include the new report
        setFilteredReports([...filteredReports, response.data]);
      })
      .catch(error => console.error(error));
  };

  const handleDeleteReport = id => {
    Axios.delete(`http://localhost:4000/reports/${id}`)
      .then(() => {
        setReports(reports.filter(report => report._id !== id));

        // After deleting a report, update filtered reports to exclude the deleted report
        setFilteredReports(filteredReports.filter(report => report._id !== id));
      })
      .catch(error => console.error(error));
  };


  // Update filtered reports based on the search term
  useEffect(() => {
    const filtered = reports.filter(
      report =>
        report.report_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.report_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReports(filtered);
  }, [searchTerm, reports]);

  return (
    <div>
      <NavBar/>
      <h1>Reports</h1>

      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      {/* Create Report Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Report ID"
          variant="outlined"
          value={newReport.report_id}
          onChange={e => setNewReport({ ...newReport, report_id: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Report Name"
          variant="outlined"
          value={newReport.report_name}
          onChange={e => setNewReport({ ...newReport, report_name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Created Date"
          type="date"
          variant="outlined"
          value={newReport.created_date}
          onChange={e => setNewReport({ ...newReport, created_date: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Content"
          variant="outlined"
          value={newReport.content}
          onChange={e => setNewReport({ ...newReport, content: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Lab Assistant Name"
          variant="outlined"
          value={newReport.lab_assistant_name}
          onChange={e => setNewReport({ ...newReport, lab_assistant_name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCreateReport}>
          Create Report
        </Button>
      </Paper>
	  
      {/* Reports Table */}
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Report ID</TableCell>
            <TableCell>Report Name</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Lab Assistant Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredReports.map(report => (
            <TableRow key={report._id}>
              <TableCell>{report.report_id}</TableCell>
              <TableCell>{report.report_name}</TableCell>
              <TableCell>{new Date(report.created_date).toLocaleDateString()}</TableCell>
              <TableCell>{report.content}</TableCell>
              <TableCell>{report.lab_assistant_name}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" component={Link} to={`/lab-report/update/${report._id}`}>
                  Update
                </Button>
                {' '}
                <Button variant="contained" color="secondary" onClick={() => handleDeleteReport(report._id)}>
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

export default Reports;
