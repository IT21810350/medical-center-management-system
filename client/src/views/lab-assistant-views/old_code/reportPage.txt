import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';
import NavBar from '../../components/LA-component/la-nav-bar';

const styles = {
  labReportPage: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  contentContainer: {
    flexGrow: 1,
    padding: '20px',
  },
  tableContainer: {
    maxHeight: '400px',
    overflowY: 'auto',
  },
};

function LabReportPage() {
  const [labReports, setLabReports] = useState([
    {
      report_id: '1', // Use String data type
      report_name: 'Experiment 1 Report',
      created_date: new Date('2022-01-15'), // Use Date objects
      content: 'This is the content of Experiment 1 Report.',
      lab_assistant_id: '101', // Use String data type
    },
    {
      report_id: '2', // Use String data type
      report_name: 'Experiment 2 Report',
      created_date: new Date('2022-03-20'), // Use Date objects
      content: 'This is the content of Experiment 2 Report.',
      lab_assistant_id: '102', // Use String data type
    },
  ]);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [newReportName, setNewReportName] = useState('');
  const [newReportDate, setNewReportDate] = useState('');
  const [newReportContent, setNewReportContent] = useState('');
  const [newLabAssistantId, setNewLabAssistantId] = useState('');
  const [openReportDialog, setOpenReportDialog] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null); // Store the selected report for viewing

  const handleCreateReport = () => {
    const newReport = {
      report_id: (labReports.length + 1).toString(), // Convert to String
      report_name: newReportName,
      created_date: new Date(newReportDate), // Convert to Date
      content: newReportContent,
      lab_assistant_id: newLabAssistantId, // Convert to String
    };

    setLabReports([...labReports, newReport]);
    setOpenCreateDialog(false);
  };

  const handleDeleteReport = (report_id) => {
    const updatedReports = labReports.filter((report) => report.report_id !== report_id);
    setLabReports(updatedReports);
  };

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setOpenReportDialog(true);
  };

  return (
    <div style={styles.labReportPage}>
      <NavBar />
      <Container style={styles.contentContainer}>
        <Typography variant="h4" gutterBottom>
          Lab Reports
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenCreateDialog(true)}
        >
          Create New Report
        </Button>

        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Report ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Lab Assistant ID</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labReports.map((report) => (
                <TableRow key={report.report_id}>
                  <TableCell>{report.report_id}</TableCell>
                  <TableCell>{report.report_name}</TableCell>
                  <TableCell>{report.created_date.toISOString().slice(0, 10)}</TableCell> {/* Display date in yyyy-mm-dd format */}
                  <TableCell>{report.lab_assistant_id}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleViewReport(report)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteReport(report.report_id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Create Report Dialog */}
      <Dialog open={openCreateDialog} onClose={() => setOpenCreateDialog(false)}>
        <DialogTitle>Create New Lab Report</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newReportName}
            onChange={(e) => setNewReportName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Created Date"
            type="date"
            value={newReportDate}
            onChange={(e) => setNewReportDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Content"
            multiline
            rows={4}
            value={newReportContent}
            onChange={(e) => setNewReportContent(e.target.value)}
            fullWidth
          />
          <TextField
            label="Lab Assistant ID"
            value={newLabAssistantId}
            onChange={(e) => setNewLabAssistantId(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreateDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateReport} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Report Dialog */}
      <Dialog open={openReportDialog} onClose={() => setOpenReportDialog(false)}>
        <DialogTitle>Lab Report Details</DialogTitle>
        {selectedReport && (
          <DialogContent>
            <Typography variant="h6">Report ID: {selectedReport.report_id}</Typography>
            <Typography>Name: {selectedReport.report_name}</Typography>
            <Typography>Created Date: {selectedReport.created_date.toISOString().slice(0, 10)}</Typography> {/* Display date in yyyy-mm-dd format */}
            <Typography>Lab Assistant ID: {selectedReport.lab_assistant_id}</Typography>
            <Typography>Content: {selectedReport.content}</Typography>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

export default LabReportPage;
