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
  labSamplePage: {
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

function LabSamplePage() {
  const [labSamples, setLabSamples] = useState([
    {
      sample_id: 1,
      collection_date: '2022-01-15',
      sample_type: 'Blood',
      status: 'Received',
      lab_assistant_id: 'LA101',
    },
    {
      sample_id: 2,
      collection_date: '2022-03-20',
      sample_type: 'Urine',
      status: 'In Progress',
      lab_assistant_id: 'LA102',
    },
  ]);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [newSampleCollectionDate, setNewSampleCollectionDate] = useState('');
  const [newSampleType, setNewSampleType] = useState('');
  const [newSampleStatus, setNewSampleStatus] = useState('');
  const [newLabAssistantId, setNewLabAssistantId] = useState('');
  const [openSampleDialog, setOpenSampleDialog] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null); // Store the selected sample for viewing

  const handleCreateSample = () => {
    const newSample = {
      sample_id: labSamples.length + 1,
      collection_date: newSampleCollectionDate,
      sample_type: newSampleType,
      status: newSampleStatus,
      lab_assistant_id: newLabAssistantId,
    };

    setLabSamples([...labSamples, newSample]);
    setOpenCreateDialog(false);
  };

  const handleDeleteSample = (sample_id) => {
    const updatedSamples = labSamples.filter((sample) => sample.sample_id !== sample_id);
    setLabSamples(updatedSamples);
  };

  const handleViewSample = (sample) => {
    setSelectedSample(sample);
    setOpenSampleDialog(true);
  };

  const handleUpdateSample = () => {
    // Redirect to the update page for the selected sample
    if (selectedSample) {
      window.location.href = `/lab-sample/update`;
    }
  };

  return (
    <div style={styles.labSamplePage}>
      <NavBar />
      <Container style={styles.contentContainer}>
        <Typography variant="h4" gutterBottom>
          Lab Samples
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenCreateDialog(true)}
        >
          Create New Sample
        </Button>

        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sample ID</TableCell>
                <TableCell>Collection Date</TableCell>
                <TableCell>Sample Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Lab Assistant ID</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labSamples.map((sample) => (
                <TableRow key={sample.sample_id}>
                  <TableCell>{sample.sample_id}</TableCell>
                  <TableCell>{sample.collection_date}</TableCell>
                  <TableCell>{sample.sample_type}</TableCell>
                  <TableCell>{sample.status}</TableCell>
                  <TableCell>{sample.lab_assistant_id}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleViewSample(sample)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteSample(sample.sample_id)}
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

      {/* Create Sample Dialog */}
      <Dialog open={openCreateDialog} onClose={() => setOpenCreateDialog(false)}>
        <DialogTitle>Create New Lab Sample</DialogTitle>
        <DialogContent>
          <TextField
            label="Collection Date"
            type="date"
            value={newSampleCollectionDate}
            onChange={(e) => setNewSampleCollectionDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Sample Type"
            value={newSampleType}
            onChange={(e) => setNewSampleType(e.target.value)}
            fullWidth
          />
          <TextField
            label="Status"
            value={newSampleStatus}
            onChange={(e) => setNewSampleStatus(e.target.value)}
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
          <Button onClick={handleCreateSample} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Sample Dialog */}
      <Dialog open={openSampleDialog} onClose={() => setOpenSampleDialog(false)}>
        <DialogTitle>Lab Sample Details</DialogTitle>
        {selectedSample && (
          <DialogContent>
            <Typography variant="h6">Sample ID: {selectedSample.sample_id}</Typography>
            <Typography>Collection Date: {selectedSample.collection_date}</Typography>
            <Typography>Sample Type: {selectedSample.sample_type}</Typography>
            <Typography>Status: {selectedSample.status}</Typography>
            <Typography>Lab Assistant ID: {selectedSample.lab_assistant_id}</Typography>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setOpenSampleDialog(false)} color="primary">
            Close
          </Button>
          <Button onClick={handleUpdateSample} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LabSamplePage;
