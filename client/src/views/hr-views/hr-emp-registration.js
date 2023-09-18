import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../../components/HR-component/hr-nav-bar'
import axios from "axios";

export default function RegistrationForm() {

  // State to store form values
  const [formData, setFormData] = useState({
    userId:'',
    role:'doctor',
    firstName: '',
    lastName: '',
    email: '',
    nic: '', // New field
    address: '', // New field
    employeeRole: '',
    gender: '',
    birthday: '',
    educationlevel: '',
    certifications: '',
    medicallicense: '',
    taxinformation: '',
    bankinformation: '',
    insurancedetails: '', // New field
  });

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setFormData({
      ...formData,
      submitDocuments: file, // Store the selected file in your form data
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const {data } = await axios.Post(
        "http://localhost:4000/register-employee",
        {
          ...formData,
        },
        {withCredentials: true }
      );
      }catch(error){
        console.error(error);
      }

      setFormData({
        ...formData,
        userId:'64f4ba9b767974208f4fe06d',
        role:'doctor',
        firstName: '',
        lastName: '',
        email: '',
        nic: '', 
        address: '',
        employeeRole: '',
        gender: '',
        birthday: '',
        educationlevel: '',
        certifications: '',
        medicallicense: '',
        taxinformation: '',
        bankinformation: '',
        insurancedetails: '', 
      });
  }

  // Function to handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
   <div>
    <Box >
    <Grid container>
      <Navbar />
    </Grid>
  </Box>
     
  <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
          />
          <TextField
            fullWidth
            label="NIC"
            name="nic"
            value={formData.nic}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
          />
          <TextField
            fullWidth
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
          />
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'baseline' }}>
            <TextField
              fullWidth
              label="Birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
              sx={{ marginRight: '20px', width: '50%', textAlign: 'left' }}
            />

            <TextField
              fullWidth
              label="Employee Role"
              name="employeeRole"
              value={formData.employeeRole}
              onChange={handleInputChange}
            />
          </div>
          <TextField
            fullWidth
            label="PhoneNumber"
            name="phonenumbe"
            value={formData.phonenumbe}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
          />
          <div>
            <h2>Education</h2>
            <TextField
              fullWidth
              label="EducationLevel"
              name="educationlevel"
              value={formData.educationlevel}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
            <TextField
              fullWidth
              label="Certifications or Licenses"
              name="certifications"
              value={formData.certifications}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
            <TextField
              fullWidth
              label="Medical license"
              name="medicallicense"
              value={formData.medicallicense}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
          </div>

          <div>
            <h2>Other Details</h2>
            <TextField
              fullWidth
              label="Bank Account Information "
              name="bankinformation"
              value={formData.bankinformation}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
            <TextField
              fullWidth
              label="Tax Information"
              name="taxinformation"
              value={formData.taxinformation}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />

            <TextField
              fullWidth
              label="Insurance Details"
              name="insurancedetails"
              value={formData.insurancedetails}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
          </div>
          <input
            type="file"
            id="submitDocuments"
            name="submitDocuments"
            onChange={handleFileInputChange}
            sx={{ marginTop: '10px' }}
          />


          <div style={{ marginTop: '10px' }} className=''>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </Box>



  </div>
 
   
 


  );
}

