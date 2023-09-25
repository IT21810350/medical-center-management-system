import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Navbar from '../../components/HR-component/hr-nav-bar';
import pro from '../../assets/img/HR/images.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function EmployeeProfile() {
  const [openPictureDialog, setOpenPictureDialog] = useState(false);
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    nic: '',
    birthday: '',
    address: '',
    educationlevel: '',
    taxinformation: '',
    insurancedetails: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/employees/${id}`)
      .then((response) => {
        setEmployee(response.data.Employee);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleEditEmployee = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/employees/${id}`,
        employee
      );

      if (response.status === 200) {
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handlePictureDialogOpen = () => {
    setOpenPictureDialog(true);
  };

  const handlePictureDialogClose = () => {
    setOpenPictureDialog(false);
  };

  return (
    <div>
      <Box>
        <Grid container>
          <Navbar />
        </Grid>
      </Box>
     
      <div></div>
      <Box sx={{ width: '95%' }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="flex-end"
          sx={{ borderLeft: '30px solid #e0e0e0' }}
        >
          <Grid item xs={3}>
            <Item>
              <div>
                <h1>picture</h1>
                <img
                  src={pro}
                  alt="Employee Picture"
                  onClick={handlePictureDialogOpen}
                  style={{ cursor: 'pointer' }}
                />

                <h1>{employee.firstName}</h1>
                <Stack spacing={2} direction="row" justifyContent="center">
                  <Button variant="contained">Follow</Button>
                  <Button variant="outlined">Message</Button>
                </Stack>

                <h1></h1>
                <h1></h1>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                  }}
                >
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/fluency/48/gmail-new.png"
                    alt="gmail-new"
                    style={{ marginRight: '30px' }}
                  />
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/fluency/96/whatsapp.png"
                    alt="whatsapp"
                    style={{ marginRight: '30px' }}
                  />
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/fluency/96/facebook-new.png"
                    alt="facebook-new"
                  />
                </div>
                   <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar/>
                     </LocalizationProvider>

                   </div>
                  


              </div>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <h1>{employee.firstName}</h1>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={employee.firstName}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={employee.lastName}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="Email"
                    name="email"
                    value={employee.email}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="Nic"
                    name="nic"
                    value={employee.nic}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="DOB"
                    name="birthday"
                    value={employee.birthday}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="Address"
                    name="address"
                    value={employee.address}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="Education Level"
                    name="educationlevel"
                    value={employee.educationlevel}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="Tax Information"
                    name="taxinformation"
                    value={employee.taxinformation}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <TextField
                    label="Insurance Details"
                    name="insurancedetails"
                    value={employee.insurancedetails}
                    onChange={handleInputChange}
                    sx={{ width: '80%' }}
                    disabled={!isEditing}
                  />
                </div>
                <Button
                  variant="outlined"
                  style={{ backgroundColor: 'red', color: 'white' }}
                  onClick={isEditing ? handleEditEmployee : () => setIsEditing(true)}
                >
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Dialog open={openPictureDialog} onClose={handlePictureDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Employee Picture
          <IconButton
            edge="end"
            color="inherit"
            onClick={handlePictureDialogClose}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img src={pro} alt="Employee Picture" style={{ width: '50%' }} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
