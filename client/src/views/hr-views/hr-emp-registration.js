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
    userId: '650474d11164fa8928fa72a8',
    role: 'doctor',
    firstName: '',
    lastName: '',
    email: '',
    nic: '',
    address: '',
    employeeRole: '',
    gender: '',
    birthday: '',
    phonenumber: '',
    educationlevel: '',
    certifications: '',
    medicallicense: '',
    taxinformation: '',
    bankinformation: '',
    insurancedetails: ''
  });

  const { userId, role, firstName, lastName, email, nic, address, employeeRole, gender, birthday, educationlevel, phonenumber, certifications, medicallicense, taxinformation, bankinformation, insurancedetails } = formData


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post(
        "http://localhost:4000/register-employee",
        {
          ...formData,
        },
       
        // { withCredentials: true }
      );
    } catch (error) {
      console.error(error);
    }

    setFormData({
      ...formData,
      userId: '64f4ba9b767974208f4fe06d',
      role: 'doctor',
      firstName: '',
      lastName: '',
      email: '',
      nic: '',
      address: '',
      employeeRole: '',
      gender: '',
      phonenumber: '',
      birthday: '',
      educationlevel: '',
      certifications: '',
      medicallicense: '',
      taxinformation: '',
      bankinformation: '',
      insurancedetails: ''
    });
  };

  // Function to handle input changes and update state


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
        {/* user ID */}
        <TextField
            fullWidth
            label="userID"
            name="userId"
            value={userId}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
          />
          {/* user role */}
          <TextField
            fullWidth
            label="First Name"
            role="role"
            value={role}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
          />

          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
          />
          <TextField
            fullWidth
            label="NIC"
            name="nic"
            value={nic}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
          />
          <TextField
            fullWidth
            label="Gender"
            name="gender"
            value={gender}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
          />
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'baseline' }}>
            <TextField
              fullWidth
              label="Birthday"
              name="birthday"
              value={birthday}
              onChange={handleInputChange}
              sx={{ marginRight: '20px', width: '50%', textAlign: 'left' }}
            />

            <TextField
              fullWidth
              label="Employee Role"
              name="employeeRole"
              value={employeeRole}
              onChange={handleInputChange}
            />
          </div>
          <TextField
            fullWidth
            label="PhoneNumber"
            name="phonenumber"
            value={phonenumber}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={address}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
          />
          <div>
            <h2>Education</h2>
            <TextField
              fullWidth
              label="EducationLevel"
              name="educationlevel"
              value={educationlevel}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
            <TextField
              fullWidth
              label="Certifications or Licenses"
              name="certifications"
              value={certifications}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
            <TextField
              fullWidth
              label="Medical license"
              name="medicallicense"
              value={medicallicense}
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
              value={bankinformation}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
            <TextField
              fullWidth
              label="Tax Information"
              name="taxinformation"
              value={taxinformation}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />

            <TextField
              fullWidth
              label="Insurance Details"
              name="insurancedetails"
              value={insurancedetails}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
            />
          </div>
          {/* <input
            type="file"
            id="submitDocuments"
            name="submitDocuments"
            onChange={handleFileInputChange}
            sx={{ marginTop: '10px' }}
          /> */}


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

