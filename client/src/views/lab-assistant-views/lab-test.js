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
  labTestPage: {
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

function LabTestPage() {
  const [labTestResults, setLabTestResults] = useState([
    {
      result_id: 1,
      sample_id: 1,
      test_name: 'Blood Count',
      test_date: '2022-01-15',
      lab_assistant_id: 101,
      result_data: 'Hemoglobin: 12 g/dL, White Blood Cells: 6000/μL',
    },
    {
      result_id: 2,
      sample_id: 2,
      test_name: 'Urinalysis',
      test_date: '2022-03-20',
      lab_assistant_id: 102,
      result_data: 'pH: 6.5, Protein: Negative, Glucose: Negative',
    },
  ]);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [newResultSampleId, setNewResultSampleId] = useState('');
  const [newResultTestName, setNewResultTestName] = useState('');
  const [newResultTestDate, setNewResultTestDate] = useState('');
  const [newResultLabAssistantId, setNewResultLabAssistantId] = useState('');
  const [newResultData, setNewResultData] = useState('');
  const [openResultDialog, setOpenResultDialog] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null); // Store the selected result for viewing

  const handleCreateResult = () => {
    const newResult = {
      result_id: labTestResults.length + 1,
      sample_id: newResultSampleId,
      test_name: newResultTestName,
      test_date: newResultTestDate,
      lab_assistant_id: newResultLabAssistantId,
      result_data: newResultData,
    };

    setLabTestResults([...labTestResults, newResult]);
    setOpenCreateDialog(false);
  };

  const handleDeleteResult = (result_id) => {
    const updatedResults = labTestResults.filter((result) => result.result_id !== result_id);
    setLabTestResults(updatedResults);
  };

  const handleViewResult = (result) => {
    setSelectedResult(result);
    setOpenResultDialog(true);
  };

  return (
    <div style={styles.labTestPage}>
      <NavBar />
      <Container style={styles.contentContainer}>
        <Typography variant="h4" gutterBottom>
          Lab Test Results
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenCreateDialog(true)}
        >
          Create New Result
        </Button>

        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Result ID</TableCell>
                <TableCell>Sample ID</TableCell>
                <TableCell>Test Name</TableCell>
                <TableCell>Test Date</TableCell>
                <TableCell>Lab Assistant ID</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labTestResults.map((result) => (
                <TableRow key={result.result_id}>
                  <TableCell>{result.result_id}</TableCell>
                  <TableCell>{result.sample_id}</TableCell>
                  <TableCell>{result.test_name}</TableCell>
                  <TableCell>{result.test_date}</TableCell>
                  <TableCell>{result.lab_assistant_id}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleViewResult(result)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteResult(result.result_id)}
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

      {/* Create Result Dialog */}
      <Dialog open={openCreateDialog} onClose={() => setOpenCreateDialog(false)}>
        <DialogTitle>Create New Lab Test Result</DialogTitle>
        <DialogContent>
          <TextField
            label="Sample ID"
            value={newResultSampleId}
            onChange={(e) => setNewResultSampleId(e.target.value)}
            fullWidth
          />
          <TextField
            label="Test Name"
            value={newResultTestName}
            onChange={(e) => setNewResultTestName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Test Date"
            type="date"
            value={newResultTestDate}
            onChange={(e) => setNewResultTestDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Lab Assistant ID"
            value={newResultLabAssistantId}
            onChange={(e) => setNewResultLabAssistantId(e.target.value)}
            fullWidth
          />
          <TextField
            label="Result Data"
            multiline
            rows={4}
            value={newResultData}
            onChange={(e) => setNewResultData(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreateDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateResult} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Result Dialog */}
      <Dialog open={openResultDialog} onClose={() => setOpenResultDialog(false)}>
        <DialogTitle>Lab Test Result Details</DialogTitle>
        {selectedResult && (
          <DialogContent>
            <Typography variant="h6">Result ID: {selectedResult.result_id}</Typography>
            <Typography>Sample ID: {selectedResult.sample_id}</Typography>
            <Typography>Test Name: {selectedResult.test_name}</Typography>
            <Typography>Test Date: {selectedResult.test_date}</Typography>
            <Typography>Lab Assistant ID: {selectedResult.lab_assistant_id}</Typography>
            <Typography>Result Data: {selectedResult.result_data}</Typography>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setOpenResultDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LabTestPage;
