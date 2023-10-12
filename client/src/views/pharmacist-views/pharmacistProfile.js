import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';

const Pharmacist = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [parmacistDetails, setparmacistDetails] = useState({
            firstName: '', 
            lastName: '', 
            emailAddress: '', 
            contactNumber: '', 
            gender: '', 
            nic: '', 
            bio: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setparmacistDetails({
      ...parmacistDetails,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/pharmacistProfile/add', parmacistDetails);

    } catch (error) {
      
    }

  };


  // Function to validate email using a regular expression
  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setIsEmailValid(false);
    } else { 
      setIsEmailValid(true);
    }
  };

  return (
    <div>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <img style={{ display: 'none' }} alt="Background" />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(33, 150, 243)',
          }}
        />
        <Grid container>
          <Grid item md={12}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" align="center" gutterBottom>
                Welcome to Our Pharmacy!
              </Typography>
              <Link variant="subtitle1" href="#">
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Container
        maxWidth="xl"
        style={{
          height: '30vh',
          width: '70vw',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255)',
        }}
      >
        <div style={{ padding: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Pharmacist Profile</h1>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name='firstName'
                value={parmacistDetails.firstName}
                onChange={(e) => handleOnChange(e)}
                id="outlined-required-first-name"
                label="First Name"
                
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name='lastName'
                value={parmacistDetails.lastName}
                onChange={(e) => handleOnChange(e)}
                id="outlined-required-last-name"
                label="Last Name"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='emailAddress'
                id="outlined-required-email"
                label="Email Address"
                type="email"
                value={parmacistDetails.emailAddress}
                //error={!isEmailValid}
                onChange={(e) => handleOnChange(e)}
                //onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                helperText={!isEmailValid ? 'Invalid email address' : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name='contactNumber'
                value={parmacistDetails.contactNumber}
                onChange={(e) => handleOnChange(e)}
                id="outlined-required-phone"
                label="Contact Number"
                
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <FormControl 
              
              required>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                 row
                 name='gender'
                 value={parmacistDetails.gender}
                 onChange={(e) => handleOnChange(e)}>
                  <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                  <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name='nic'
                id="outlined-required-nic"
                label="NIC"
                value={parmacistDetails.NIC}
                onChange={(e) => handleOnChange(e)}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='bio'
                id="outlined-required-bio"
                label="Bio"
                multiline
                rows={4}
                value={parmacistDetails.bio}
                onChange={(e) => handleOnChange(e)}
              />
            </Grid>
          </Grid>
        </div>
        <Grid item>
          <Stack direction="row" spacing={4} justifyContent='center'>
            <Button type='submit' variant="contained" color="error">
              UPDATE
            </Button>
            <button type='submit' variant="contained" onClick={handleSubmit}>Add</button>
            <Button type='submit' variant="contained" onClick={handleSubmit}>ADD</Button>
          </Stack>
        </Grid>
      </Container>
    </div>
  );
};

export default Pharmacist;
