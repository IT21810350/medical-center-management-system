import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Heading from '../../components/patient-components/heading.component';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
import axios from 'axios';

export default function PatientCreateAccount() {
  //Create a state variable to store all the values with an initial value of an array containing an empty object {}.
  //The setpatientDetails function is used to update the state.
  const [patientDetails, setpatientDetails] = useState({
    country: '', idType: '', idNumber: '', fName: '', lName: '', gender: '', dob: '', phone: '', email: '', address: '',gName:'', relation:'', gId:'',gContact:'',
  });



  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setpatientDetails({
      ...patientDetails,
      [name]: value,
    });
  };



  const handleAgreeToTermsChange = (e) => {
    setAgreeToTerms(e.target.checked); // Update the state when the checkbox is checked or unchecked
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server or API endpoint
      const response = await axios.post('http://localhost:4000/patientData/add', patientDetails);

      // Handle the response 
     // console.log('Form submitted successfully', response.data);

      // Optionally, reset the form
      // setFormData({
      //   country: '',
      //   idType: '', 
      //   idNumber: '', 
      //   fName: '', 
      //   lName: '', 
      //   gender: '', 
      //   dob: '', 
      //   phone: '', 
      //   email: '', 
      //   address: '',
      //   gName:'', 
      //   relation:'', 
      //   gId:'',
      //   gContact:'',
      // });
    } catch (error) {
      // Handle errors 
     // console.error('Error submitting form', error.response.data);
    }

  };


  // Determine if the country is selected
  const isCountrySelected = patientDetails.countrycountry !== '';

  // Disable submit if country not selected or terms not agreed
  const isSubmitDisabled = !isCountrySelected || !agreeToTerms;


  return (
    <>
      <PatientNavigationBar/>

      <Heading title="Create an account"
      />

      <form onSubmit={handleSubmit} style={{ padding: "100px", paddingTop: "0px", textDecoration: "bold" }}>

        <Grid container spacing={1} lg={12}>
          <Grid xs={12} item>
            {/* Country Selection */}
            <FormControl fullWidth variant="outlined">
              <h3>Select Country</h3>
              <Select
                label="Select Country"
                name="country"
                onChange={(e) => handleOnChange(e)}
                value={patientDetails.country}
              >
                <MenuItem value="Not selected">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Other Country">Other Country</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} item>
            {/* ID Type Selection */}
            <h3>Select Identity type</h3>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="idType"
                value={patientDetails.idType}
                onChange={(e) => handleOnChange(e)}
              >
                <FormControlLabel

                  value="NIC"
                  control={<Radio />}
                  label="NIC"
                  disabled={patientDetails.country === '' || patientDetails.country !== 'Sri Lanka'}
                />
                <FormControlLabel
                  value="Passport"
                  control={<Radio />}
                  label="Passport"
                  disabled={!isCountrySelected}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid xs={12} item>
            {/* ID Input Field */}
            <h3>Select Identity number</h3>
            <TextField
              fullWidth
              variant="outlined"
              label={patientDetails.idType === 'NIC' ? 'NIC Number' : 'Passport Number'}
              value={patientDetails.idNumber}
              name='idNumber'
              onChange={(e) => handleOnChange(e)}
              placeholder={
                patientDetails.idType === 'NIC'
                  ? 'Please enter your NIC'
                  : 'Please enter your Passport number'
              }
              disabled={!isCountrySelected}
              required
            />
          </Grid>

          <Grid xs={12} sm={6} item>
            <h3>Enter first name</h3>
            <TextField label="First Name" style={{fontSize:"1000px"}} value={patientDetails.fName} name='fName' onChange={(e) => handleOnChange(e)} placeholder='Enter first name' variant='outlined' fullWidth required />
          </Grid>

          <Grid xs={12} sm={6} item>
          <h3>Enter last name</h3>
            <TextField label="Last Name" style={{fontSize:"100px"}}  value={patientDetails.lName} name='lName' onChange={(e) => handleOnChange(e)} placeholder='Enter last name' variant='outlined' fullWidth required />
          </Grid>

          <Grid xs={12} sm={6} item>
          <h3>Select Gender</h3>
            <FormControl component="fieldset" required>
              <RadioGroup
                row
                name="gender"
                value={patientDetails.gender}
                onChange={(e) => handleOnChange(e)}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                  defaultChecked
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />

                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid xs={12} item>
            <h3>Enter Phone number</h3>
            <TextField type='number' style={{fontSize:"100px"}}  value={patientDetails.phone} label="Phone" name='phone' onChange={(e) => handleOnChange(e)} placeholder='Enter phone number' variant='outlined' fullWidth required />
          </Grid>

          <Grid xs={12} item>
          <h3>Enter birth date</h3>
            <TextField type='date' style={{fontSize:"100px"}} value={patientDetails.dob} label="Date of Birth" name='dob' onChange={(e) => handleOnChange(e)} placeholder='Enter date of birth' variant='outlined' fullWidth required />
          </Grid>

          <Grid xs={12} item>
          <h3>Enter email</h3>
            <TextField type='email' style={{fontSize:"100px"}} value={patientDetails.email} label="Email" name='email' onChange={(e) => handleOnChange(e)} placeholder='Enter email' variant='outlined' fullWidth required />
          </Grid>

          <Grid xs={12} item>
          <h3>Enter address</h3>
            <TextField type='text' style={{fontSize:"100px"}} value={patientDetails.address} label="Address" name='address' onChange={(e) => handleOnChange(e)} placeholder='Enter address - Optional' variant='outlined' fullWidth />
          </Grid>

          <Grid xs={12} item>
          <h3>Enter Guardian's Name</h3>
            <TextField type='text'style={{fontSize:"100px"}}  value={patientDetails.gName} label="Guardian's Name" name='gName' onChange={(e) => handleOnChange(e)} placeholder='Enter name of the guardian - Optional' variant='outlined' fullWidth />
          </Grid>

          <Grid xs={12} item>
            {/* Country Selection */}
            <h3>Select Relationship</h3>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select Relationship</InputLabel>
              <Select
                label="Select Relationship"
                name='relation'
                onChange={(e) => handleOnChange(e)}
                value={patientDetails.relation}
              >
                <MenuItem value="Not selected">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="Mother">Mother</MenuItem>
                <MenuItem value="Father">Father</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
                <MenuItem value="-">-</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={12} item>
          <h3>Select Guardian's Identity Number</h3>
            <TextField type='text' style={{fontSize:"100px"}} value={patientDetails.gId} label="Guardian's Identity No" name='gId' onChange={(e) => handleOnChange(e)} placeholder='Enter Identity no of the guardian - Optional' variant='outlined' fullWidth />
          </Grid>

          <Grid xs={12} item>
          <h3>Select Guardian's contact no</h3>
            <TextField type='text' style={{fontSize:"100px"}} value={patientDetails.gContact} label="Guardian's contact no" name='gContact' onChange={(e) => handleOnChange(e)} placeholder='Enter contact no of the guardian - Optional' variant='outlined' fullWidth />
          </Grid>

          <Grid xs={12} item>
            {/* Agree to Terms Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreeToTerms}
                  onChange={handleAgreeToTermsChange}
                  color="primary"
                />
              }
              label="I agree to the terms and conditions"
            />
          </Grid>

          <Grid item>

            <Stack direction="row" spacing={2} >

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitDisabled}
              >
                Submit
              </Button>

            </Stack>
          </Grid>


        </Grid>
        {/* Enter First Name
        <Input type='text'label="First Name"  fontSize="200px">First Name</Input> */}
      </form>
      {/* <form>
      <h3 fontSize="200px" >Enter Country</h3>
        <input type='text' fontSize="200px"  />

        <h3 fontSize="200px" >Enter first name</h3>
        <input type='text' fontSize="200px"  />

        <h3 fontSize="200px" >Enter last name</h3>
        <input type='text' fontSize="200px"  />
        <h3 fontSize="200px" >Enter name</h3>
        <input type='text' fontSize="200px"  />
        <h3 fontSize="200px" >Enter name</h3>
        
      </form> */}



    </>
  );
}
