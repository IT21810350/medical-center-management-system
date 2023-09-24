import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../../components/HR-component/hr-nav-bar';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';

export default function RegistrationForm() {
  // State to store form values and errors
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
    insurancedetails: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const {
    userId,
    role,
    firstName,
    lastName,
    email,
    nic,
    address,
    employeeRole,
    gender,
    birthday,
    phonenumber,
    educationlevel,
    certifications,
    medicallicense,
    taxinformation,
    bankinformation,
    insurancedetails,
  } = formData;

  const validateForm = () => {
    const errors = {};

    // Required field validation
    if (!firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!nic) {
      errors.nic = 'NIC is required';
    }else if (!/^\d{12}$/.test(nic)){
      errors.nic = 'Phone Number must have exactly 10 digits';
    }
    if (!phonenumber) {
      errors.phonenumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(phonenumber)) {
      errors.phonenumber = 'Phone Number must have exactly 10 digits';
    }
    if (!birthday) {
      errors.birthday = 'Birthday is required';
    }
    if (!educationlevel) {
      errors.educationlevel = 'Education Level is required';
    }
    if (!certifications) {
      errors.certifications = 'Certifications or Licenses are required';
    }
    if (!medicallicense) {
      errors.medicallicense = 'Medical License is required';
    }
    if (!taxinformation) {
      errors.taxinformation = 'Tax Information is required';
    }
    if (!bankinformation) {
      errors.bankinformation = 'Bank Account Information is required';
    }
    if (!insurancedetails) {
      errors.insurancedetails = 'Insurance Details are required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

    if (validateForm()) {
      try {
        await axios.post('http://localhost:4000/register-employee', {
          ...formData,
        });
      } catch (error) {
        console.error(error);
      }

      // Reset form data after submission
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
        insurancedetails: '',
      });
    }
  };

  return (
    <div>
      <Box>
        <Grid container>
          <Navbar />
        </Grid>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          {/* userID */}
          <TextField
            fullWidth
            label="UserID"
            name="userId"
            value={userId}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            disabled
          />
          {/* user role */}
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={role}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            disabled
          />

          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
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
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            fullWidth
            label="NIC"
            name="nic"
            value={nic}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
            error={!!formErrors.nic}
            helperText={formErrors.nic}
          />
          <TextField
            fullWidth
            label="Gender"
            name="gender"
            select
            value={gender}
            onChange={handleInputChange}
            sx={{ marginTop: '10px' }}
            required
            error={!!formErrors.gender}
            helperText={formErrors.gender}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'baseline' }}>
            <TextField
              fullWidth
              label="Birthday"
              name="birthday"
              value={birthday}
              onChange={handleInputChange}
              sx={{ marginRight: '20px', width: '50%', textAlign: 'left' }}
              required
              error={!!formErrors.birthday}
              helperText={formErrors.birthday}
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
            required
            error={!!formErrors.phonenumber}
            helperText={formErrors.phonenumber}
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
              required
              error={!!formErrors.educationlevel}
              helperText={formErrors.educationlevel}
            />
            <TextField
              fullWidth
              label="Certifications or Licenses"
              name="certifications"
              value={certifications}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
              required
              error={!!formErrors.certifications}
              helperText={formErrors.certifications}
            />
            <TextField
              fullWidth
              label="Medical license"
              name="medicallicense"
              value={medicallicense}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
              required
              error={!!formErrors.medicallicense}
              helperText={formErrors.medicallicense}
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
              required
              error={!!formErrors.bankinformation}
              helperText={formErrors.bankinformation}
            />
            <TextField
              fullWidth
              label="Tax Information"
              name="taxinformation"
              value={taxinformation}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
              required
              error={!!formErrors.taxinformation}
              helperText={formErrors.taxinformation}
            />

            <TextField
              fullWidth
              label="Insurance Details"
              name="insurancedetails"
              value={insurancedetails}
              onChange={handleInputChange}
              sx={{ marginTop: '10px' }}
              required
              error={!!formErrors.insurancedetails}
              helperText={formErrors.insurancedetails}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}
