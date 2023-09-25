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
      sample_id: '1', // Use String data type
      collection_date: new Date('2022-01-15'), // Use Date objects
      sample_type: 'Blood', // Use String data type
      status: 'Received', // Use String data type
      lab_assistant_name: 'Wathma Silva', // Use String data type
    },
    {
      sample_id: '2', // Use String data type
      collection_date: new Date('2022-03-20'), // Use Date objects
      sample_type: 'Urine', // Use String data type
      status: 'In Progress', // Use String data type
      lab_assistant_name: 'John Smith', // Use String data type
    },
  ]);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [newSampleCollectionDate, setNewSampleCollectionDate] = useState('');
  const [newSampleType, setNewSampleType] = useState('');
  const [newSampleStatus, setNewSampleStatus] = useState('');
  const [newLabAssistantName, setNewLabAssistantName] = useState('');
  const [openSampleDialog, setOpenSampleDialog] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null); // Store the selected sample for viewing

  const handleCreateSample = () => {
    const newSample = {
      sample_id: labSamples.length + 1, // Convert to String
      collection_date: new Date(newSampleCollectionDate), // Convert to Date
      sample_type: newSampleType, // Use String data type
      status: newSampleStatus, // Use String data type
      lab_assistant_name: newLabAssistantName, // Use String data type
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
        <Typography variant="h2" gutterBottom>
          Lab Samples
        </Typography>

        <Button
          style={{fontSize: 18}}
          variant="outlined"
          color="primary"
          onClick={() => setOpenCreateDialog(true)}
        >
          Create New Sample
        </Button>

        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow style={{fontSize: 34}}>
                <TableCell style={{fontSize: 22, fontWeight:'bold'}}>Sample ID</TableCell>
                <TableCell style={{fontSize: 22, fontWeight:'bold'}}>Collection Date</TableCell>
                <TableCell style={{fontSize: 22, fontWeight:'bold'}}>Sample Type</TableCell>
                <TableCell style={{fontSize: 22, fontWeight:'bold'}}>Status</TableCell>
                <TableCell style={{fontSize: 22, fontWeight:'bold'}}>Lab Assistant Name</TableCell>
                <TableCell style={{fontSize: 22, fontWeight:'bold'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{fontSize: 32}}>
              {labSamples.map((sample) => (
                <TableRow key={sample.sample_id} style={{fontSize: 34}}>
                  <TableCell style={{fontSize: 22}}>{sample.sample_id}</TableCell>
                  <TableCell style={{fontSize: 22}}>{sample.collection_date.toISOString().slice(0, 10)}</TableCell> {/* Display date in yyyy-mm-dd format */}
                  <TableCell style={{fontSize: 22}}>{sample.sample_type}</TableCell>
                  <TableCell style={{fontSize: 22}}>{sample.status}</TableCell>
                  <TableCell style={{fontSize: 22}}>{sample.lab_assistant_name}</TableCell>
                  <TableCell>
                    <Button
                      style={{fontSize: 16}}
                      variant="outlined"
                      color="primary"
                      onClick={() => handleViewSample(sample)}
                    >
                      View
                    </Button>
                    <Button
                      style={{fontSize: 16}}
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteSample(sample.sample_id)}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{fontSize: 16}}
                      variant="outlined"
                      color="primary"
                      onClick={handleUpdateSample}
                    >
                      Update
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
        style={{fontSize: 32}}
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
        style={{fontSize: 32}}
        label="Sample Type"
        value={newSampleType}
        onChange={(e) => setNewSampleType(e.target.value)}
        fullWidth
      />
      <TextField
        style={{fontSize: 32}}
        label="Status"
        value={newSampleStatus}
        onChange={(e) => setNewSampleStatus(e.target.value)}
        fullWidth
      />
      <TextField
        style={{fontSize: 32}}
        label="Lab Assistant Name"
        value={newLabAssistantName}
        onChange={(e) => setNewLabAssistantName(e.target.value)}
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
          <DialogContent style={{fontSize: 32}}>
            <Typography variant="h6" style={{fontSize: 32}}>Sample ID: {selectedSample.sample_id}</Typography>
            <Typography style={{fontSize: 32}}>Collection Date: {selectedSample.collection_date.toISOString().slice(0, 10)}</Typography> {/* Display date in yyyy-mm-dd format */}
            <Typography style={{fontSize: 32}}>Sample Type: {selectedSample.sample_type}</Typography>
            <Typography style={{fontSize: 32}}>Status: {selectedSample.status}</Typography>
            <Typography style={{fontSize: 32}}>Lab Assistant Name: {selectedSample.lab_assistant_name}</Typography>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setOpenSampleDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LabSamplePage;
