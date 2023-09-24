import React, { useState, useEffect } from 'react';
import NavBar from '../../components/LA-component/la-nav-bar';
import {
  Container,
  Paper,
  Typography,
  Avatar,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';
import axios from 'axios';

function LabAssistantProfile() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [gender, setGender] = useState('Male');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [emailAddress, setEmailAddress] = useState('john.doe@example.com');
  const [NIC, setNIC] = useState('1234567890');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Save the edited information here (e.g., make an API call).
    // For this example, we're updating the state directly.
    setOpen(false);
  };

  const containerStyle = {
    marginTop: '16px',
  };

  const paperStyle = {
    padding: '24px',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
  };

  const buttonStyle = {
    marginTop: '16px',
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an Axios GET request to your backend API endpoint for employees
    axios.get('http://localhost:4000/lab-assistant') // Replace '/api/employees' with your actual API endpoint
      .then(response => {
        if (Array.isArray(response.data.LabAsistant)) {
          setData(response.data.LabAsistant);
        } else {
          setData([]); // Set as an empty array if not an array
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

      if (loading) {
        return <p>Loading...</p>;
      }


  return (
    <div>
      <NavBar />
      <Container style={containerStyle}>
        <Paper style={paperStyle}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="Lab Assistant" src="/path-to-your-profile-image.jpg" style={avatarStyle} />
            </Grid>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Lab Assistant Profile
              </Typography>
              <Typography variant="subtitle1">
                First Name: {firstName}
              </Typography>
              <Typography variant="subtitle1">
                Last Name: {lastName}
              </Typography>
              <Typography variant="subtitle1">
                Gender: {gender}
              </Typography>
              <Typography variant="subtitle1">
                Phone Number: {phoneNumber}
              </Typography>
              <Typography variant="subtitle1">
                Email: {emailAddress}
              </Typography>
              <Typography variant="subtitle1">
                NIC: {NIC}
              </Typography>
              <Button variant="contained" color="primary" style={buttonStyle} onClick={handleOpen}>
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="First Name"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Gender"
            fullWidth
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <TextField
            label="Phone Number"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <TextField
            label="NIC"
            fullWidth
            value={NIC}
            onChange={(e) => setNIC(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LabAssistantProfile;
