import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';


// export default function PatientInquiries(){
//     return(
//         <>
         
//         <h1>PatientInquiries</h1>
//         </>
//     );
// }



const PatientInquiries = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server or API endpoint
      const response = await axios.post('http://localhost:4000/inqData/add', formData);

      // Handle the response (e.g., show success message)
      console.log('Form submitted successfully', response.data);

      // Optionally, reset the form
      setFormData({
        name: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error submitting form', error);
    }
  };

  return (

     
    <Container maxWidth="md">
      <PatientNavigationBar/>
        
        <h2>Get patient name and id from database. Autofill and no editing</h2>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" align="center" gutterBottom>
          Patient Inquiry
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              variant="outlined"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
              required
            /><br/><br/>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default PatientInquiries;
