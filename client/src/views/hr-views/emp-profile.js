import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Navbar from '../../components/HR-component/hr-nav-bar';
import pro from '../../assets/img/HR/images.png';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog'; // Import Dialog
import DialogContent from '@mui/material/DialogContent'; // Import DialogContent
import DialogTitle from '@mui/material/DialogTitle'; // Import DialogTitle
import IconButton from '@mui/material/IconButton'; // Import IconButton
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import axios from 'axios';

import { useParams } from 'react-router-dom';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function EmployeeProfile() {


  const [openPictureDialog, setOpenPictureDialog] = useState(false);
  // const [employeeData, setEmployeeData] = useState({});
  //const employeeId = 'employee_id';

  const handlePictureDialogOpen = () => {
    setOpenPictureDialog(true);
  };

  const handlePictureDialogClose = () => {
    setOpenPictureDialog(false);
  };

  //new added section 
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const url = window.location.href;
    const parts = url.split('/')
    const id = parts[parts.length - 1];
    // Fetch data from your backend API using Axios
    axios.get('http://localhost:4000/employees/' + id) // Replace with the actual API route
      .then((response) => {
        setEmployees(response.data.Employee);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <Box>
        <Grid container>
          <Navbar />
        </Grid>
      </Box>
      <div>

      </div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Item>
              <div>
                <h1>picture</h1>
                <img src={pro} alt="Employee Picture" onClick={handlePictureDialogOpen} style={{ cursor: 'pointer' }} />

                <h1>lathaaaa</h1>
                <Stack spacing={2} direction="row" justifyContent="center">

                  <Button variant="contained">Follow</Button>
                  <Button variant="outlined">Message</Button>
                </Stack>

                <h1></h1>
                <h1></h1>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                  <img width="50" height="50" src="https://img.icons8.com/fluency/48/gmail-new.png" alt="gmail-new" style={{ marginRight: '30px' }} />
                  <img width="50" height="50" src="https://img.icons8.com/fluency/96/whatsapp.png" alt="whatsapp" style={{ marginRight: '30px' }} />
                  <img width="50" height="50" src="https://img.icons8.com/fluency/96/facebook-new.png" alt="facebook-new" />
                </div>


              </div>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <h1>{employees.firstName}</h1>
              <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                   }}
                noValidate
                autoComplete="off"

              >
                
                <TextField
                   label={employees.firstName} 
                   value={employees.firstName} 
                   sx={{ width: '80%' }}
                />

                <TextField
                   label={employees.lastName}  
                   value={employees.lastName}  
                   sx={{ width: '80%' }}
                />

                <TextField  
                   label={employees.email} 
                   value={employees.email}  
                   sx={{ width: '80%' }}
                />

                <TextField
                   label={employees.nic} 
                   value={employees.nic} 
                   sx={{ width: '80%' }}
                />
                
                <TextField
                  label={employees.employeeRole}
                  value={employees.employeeRole}
                  sx={{ width: '80%' }}
                />

                <TextField
                  label={employees.educationlevel}
                  value={employees.educationlevel}
                  sx={{ width: '80%' }}
                />
                   

                <TextField
                   label={employees.taxinformation}
                   value={employees.taxinformation}
                   sx={{ width: '80%' }}
                />
                    

                <TextField
                  label={employees.insurancedetails}
                  value={employees.insurancedetails}
                  sx={{ width: '80%' }}
                />

                <h1></h1>
                <Link to="/edit-employee">
                  <Button variant="outlined" style={{ marginTop: '20px', alignSelf: 'flex-start' }}>Edit</Button>
                </Link>
                {/* /// add to thise section */}

              </Box>
            </Item>
          </Grid>

        </Grid>
      </Box>































      {/* Picture Dialog */}
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
