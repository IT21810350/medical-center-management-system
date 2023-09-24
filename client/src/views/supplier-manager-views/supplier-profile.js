import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button'; 
import EditIcon from '@mui/icons-material/Edit'; 
import axios from 'axios'; 

import img from '../../assets/img/supplier/supplier.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledTextField = styled(TextField)({
  marginBottom: '1rem',
  width: '100%',
});

export default function ColumnsGrid() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    CompanyName: '',
    NIC: '',
    Bio: '',
  });

  const { FirstName, LastName, Email, PhoneNumber, Address, CompanyName, NIC, Bio } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/supplierManagerProfile",
        { ...formData },
        { withCredentials: true }
      );
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        CompanyName: '',
        NIC: '',
        Bio: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={7.5}>
          <Typography variant="h4" gutterBottom component="div">
            Supplier Profile
          </Typography>
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              style={{ height: '220px' }} 
              image={img} 
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                Ms.Olivia Harris 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Supplier
                Leeds, 
                United Kingdom
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4.5}>
          <Item>
            <StyledTextField 
              label="First Name" 
              variant="outlined" 
              name="FirstName" 
              value={FirstName}
              onChange={handleInputChange}
            />
            <StyledTextField 
              label="Last Name" 
              variant="outlined" 
              name="LastName"
              value={LastName}
              onChange={handleInputChange}
            />
            <StyledTextField 
              label="Email Address" 
              variant="outlined" 
              name="Email"
              value={Email}
              onChange={handleInputChange}
            />
            <StyledTextField 
              label="Phone Number" 
              variant="outlined" 
              name="PhoneNumber"
              value={PhoneNumber}
              onChange={handleInputChange}
            />
            <StyledTextField 
              label="Address" 
              variant="outlined" 
              name="Address"
              value={Address}
              onChange={handleInputChange}
            />
            <StyledTextField 
              label="Company Name" 
              variant="outlined" 
              name="CompanyName"
              value={CompanyName}
              onChange={handleInputChange}
            />
            <StyledTextField 
              label="NIC" 
              variant="outlined" 
              name="NIC"
              value={NIC}
              onChange={handleInputChange}
            />
            <StyledTextField 
              label="Bio" 
              variant="outlined" 
              name="Bio"
              value={Bio}
              onChange={handleInputChange}
            />
            <Button variant="contained" startIcon={<EditIcon />} onClick={handleSubmit}>
              Edit
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
