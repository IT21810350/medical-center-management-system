import * as React from 'react'; // Importing React
import { useState } from 'react'; // Importing useState hook
import Grid from '@mui/material/Grid'; // Importing Grid component from Material-UI
import TextField from '@mui/material/TextField'; // Importing TextField component from Material-UI
import Box from '@mui/material/Box'; // Importing Box component from Material-UI
import Button from '@mui/material/Button'; // Importing Button component from Material-UI
import Container from '@mui/material/Container'; // Importing Container component from Material-UI
import axios from 'axios'; // Importing axios for making HTTP requests

export default function RegistrationForm() { // Creating a functional component named RegistrationForm
  const [formData, setFormData] = useState({ // Creating state variables for form data
    FirstName: '', // Initialize FirstName field with an empty string
    LastName: '', // Initialize LastName field with an empty string
    Email: '', // Initialize Email field with an empty string
    PhoneNumber: '', // Initialize PhoneNumber field with an empty string
    Address: '', // Initialize Address field with an empty string
    CompanyName: '', // Initialize CompanyName field with an empty string
    NIC: '', // Initialize NIC field with an empty string
    Bio: '', // Initialize Bio field with an empty string
  });

  const { FirstName, LastName, Email, PhoneNumber, Address, CompanyName, NIC, Bio } = formData; // Destructuring values from formData for convenience

  const handleInputChange = (e) => { // Define a function to handle input changes
    const { name, value } = e.target; // Destructure the name and value properties from the target of the event
    setFormData({ // Update the formData state
      ...formData, // Spread the existing formData
      [name]: value, // Update the property with the name from the event with the provided value
    });
  };

  const handleSubmit = async (e) => { // Define a function to handle form submission
    e.preventDefault(); // Prevent the default behavior of form submission
    try {
      await axios.post( // Send a POST request using axios
        "http://localhost:4000/supplierRegistration", // URL for the request
        { ...formData }, // Data to be sent in the request body (spread the formData)
        { withCredentials: true } // Additional configuration options for the request
      );
      setFormData({ // Reset the form data after successful submission
        FirstName: '', // Reset FirstName field
        LastName: '', // Reset LastName field
        Email: '', // Reset Email field
        PhoneNumber: '', // Reset PhoneNumber field
        Address: '', // Reset Address field
        CompanyName: '', // Reset CompanyName field
        NIC: '', // Reset NIC field
        Bio: '', // Reset Bio field
      });
      alert("Your response is successful"); // Show an alert for successful submission
    } catch (error) {
      console.error(error); // Log any errors that occur during the submission process
    }
  };

  return (
    <Container maxWidth="sm"> {/* Render a Container component with a maximum width of 'sm' */}
      <Box sx={{ p: 3, border: '2px solid #90A4AE', borderRadius: '8px', backgroundColor: '#FFFFFF' }}> {/* Render a Box component with custom styles */}
        <h1 style={{ textAlign: 'center' }}>Supplier Registration</h1> {/* Render a heading element with centered text */}

        <Grid container spacing={2}> {/* Render a Grid component with specified spacing */}
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-first-name"
              label="First Name"
              value={FirstName}
              onChange={handleInputChange}
              name="FirstName"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-last-name"
              label="Last Name"
              value={LastName}
              onChange={handleInputChange}
              name="LastName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-email"
              label="Email Address"
              type="email"
              value={Email}
              onChange={handleInputChange}
              name="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-address"
              label="Address"
              value={Address}
              onChange={handleInputChange}
              name="Address"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-phone"
              label="Phone Numbers"
              value={PhoneNumber}
              onChange={handleInputChange}
              name="PhoneNumber"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-nic"
              label="NIC Number"
              value={NIC}
              onChange={handleInputChange}
              name="NIC"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-company-name"
              label="Company Name"
              value={CompanyName}
              onChange={handleInputChange}
              name="CompanyName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-bio"
              label="Your Bio"
              multiline
              rows={4}
              value={Bio}
              onChange={handleInputChange}
              name="Bio"
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}> {/* Render a Box component with custom styles */}
          <Button variant="contained" color="primary" onClick={handleSubmit}> {/* Render a Button component with specified variant, color, and click event handler */}
            Submit {/* Button text */}
          </Button>
        </Box>

      </Box>
    </Container>
  );
}
