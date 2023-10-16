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
import { Link } from 'react-router-dom';
import NavBar from '../../components/LA-component/la-nav-bar';

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
      .then((response) => {
        setReports(response.data.reports);
        setFilteredReports(response.data.reports); // Initialize filtered reports with all reports
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCreateReport = () => {
    Axios.post('http://localhost:4000/reports', newReport)
      .then((response) => {
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
      .catch((error) => console.error(error));
  };

  const handleDeleteReport = (id) => {
    Axios.delete(`http://localhost:4000/reports/${id}`)
      .then(() => {
        setReports(reports.filter((report) => report._id !== id));

        // After deleting a report, update filtered reports to exclude the deleted report
        setFilteredReports(filteredReports.filter((report) => report._id !== id));
      })
      .catch((error) => console.error(error));
  };

  // Update filtered reports based on the search term for report_name
  useEffect(() => {
    const filtered = reports.filter(
      (report) =>
        report.report_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReports(filtered);
  }, [searchTerm, reports]);

  return (
    <div>
      <NavBar />
      <h1 style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Reports</h1>

      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', fontSize: '39px' }}
      />

      {/* Create Report Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Report Name"
          variant="outlined"
          value={newReport.report_name}
          onChange={(e) => setNewReport({ ...newReport, report_name: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Created Date"
          type="date"
          variant="outlined"
          value={newReport.created_date}
          InputLabelProps={{
            shrink: true, // This will prevent the "mm/dd/yyyy" placeholder
          }}
          onChange={(e) => setNewReport({ ...newReport, created_date: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Content"
          variant="outlined"
          value={newReport.content}
          onChange={(e) => setNewReport({ ...newReport, content: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Lab Assistant Name"
          variant="outlined"
          value={newReport.lab_assistant_name}
          onChange={(e) => setNewReport({ ...newReport, lab_assistant_name: e.target.value })}
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCreateReport} style={{ fontSize: '21px' }}>
          Create Report
        </Button>
      </Paper>

      {/* Reports Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Report Name</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Created Date</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Content</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Lab Assistant Name</TableCell>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report._id}>
                <TableCell style={{ fontSize: '27px' }}>{report.report_name}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{new Date(report.created_date).toLocaleDateString()}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{report.content}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{report.lab_assistant_name}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" component={Link} to={`/lab-report/update/${report._id}`} style={{ fontSize: '21px' }}>
                    Update
                  </Button>
                  {' '}
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteReport(report._id)} style={{ fontSize: '21px' }}>
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
