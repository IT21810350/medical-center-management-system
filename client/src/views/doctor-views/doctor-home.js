import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Paper, CssBaseline, Container, Button } from '@mui/material';
// for calender
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import Navbar from '../../components/doctor-component/doctor-nav-bar';
import { useCurrentTime } from '../../utils/getCurrentTime'

import docImg from '../../assets/img/doctor/doctor-profile-img.jpg';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';


const Item = Paper;

const ProfileCard = ({ userData }) => {

  const time = useCurrentTime();

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }

  // const { profile } = userData.user;

  return (
    <Box sx={{ p: 2, height: '190x', backgroundColor: '#1E90FF' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar
            src={docImg}
            sx={{ width: 80, height: 80 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ color: 'white' }}>Dr. {userData.profile.firstName}</Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>Specialization: {userData.profile.specialty}</Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>Time: {time}</Typography>
        </Grid>
      </Grid>

      <Grid container mt={2}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: 'white' }}>Center Name: XYZ Hospital</Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>Branch: Malabe Branch</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const SummaryCard = () => {
  return (
    <Card variant="outlined" sx={{ height: '180px', backgroundColor: '#4169E1' }}>
      <CardContent sx={{ color: 'white' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>SUMMARY</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1" align="center">Active Patients</Typography>
            <Typography variant="h4" align="center">0</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" align="center">Ongoing Channelings</Typography>
            <Typography variant="h4" align="center">0</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const NextAppointmentCard = () => {
  return (
    <Card variant="outlined" sx={{ height: '180px', backgroundColor: '#F33A6A', color: 'white' }}>
      <CardContent>
        <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>NEXT APPOINTMENT</Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={3}>
            <Typography variant="body1">Patient</Typography>
            <Typography variant="body1">Time</Typography>
            <Typography variant="body1">Room</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body1" >:</Typography>
            <Typography variant="body1" >:</Typography>
            <Typography variant="body1" >:</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">null</Typography>
            <Typography variant="body1">null</Typography>
            <Typography variant="body1">null</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const UpcomingChanneling = () => {
  const [channelingData, setChannelingData] = useState([]);

  useEffect(() => {
    // Use Axios to fetch data from the API
    axios.get('http://localhost:4000/get-channelings')
      .then((response) => {
        // Update the state with the fetched data
        setChannelingData(response.data.channelings);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><strong>Patient Name</strong></TableCell>
          <TableCell><strong>Date</strong></TableCell>
          <TableCell><strong>Time</strong></TableCell>
          <TableCell><strong>View</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {channelingData.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.patient.profile && item.patient.profile.fName ? item.patient.profile.fName : 'Name N/A'}</TableCell>
            <TableCell>{item.date ? new Date(item.date).toLocaleDateString('en-US') : 'Date N/A'}</TableCell>
            <TableCell>{item.date ? new Date(item.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : 'Date N/A'}</TableCell>
            <TableCell>
              <Link to={`/symptoms/${item._id}`}>
                <Button
                  variant="outlined"
                  color="primary"
                >
                  View
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};




const Doctor = () => {

  const token = Cookies.get('token');
  const tokenParts = token.split('.');
  const payload = JSON.parse(atob(tokenParts[1]));
  const userId = payload.id;

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/getDoctorProfile/` + userId);
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]);

  console.log("User Id: " + userId);
  console.log("User Data: ", userData);

  if (userData === null) {
    return <div>Loading...</div>;
  }

  console.log("First Name: " + userData.profile.firstName);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f2f2f2' }}>
      <CssBaseline />
      <Grid>
        <Navbar />
      </Grid>

      <Container maxWidth="100px">
        <Grid container mt={2}>
          <Grid Item xs={3}>
            <Item>
              <ProfileCard userData={userData} />
            </Item>
          </Grid>

          <Grid Item xs={4} sx={{ marginLeft: 'auto' }}>
            <Item sx={{ marginX: 2 }}>
              <SummaryCard />
            </Item>
          </Grid>

          <Grid Item xs={4} sx={{ marginLeft: 'auto' }}>
            <Item>
              <NextAppointmentCard />
            </Item>
          </Grid>
        </Grid>
      </Container>

      <Grid item xs={12} mt={5} sx={{ backgroundColor: '#1976D2' }}>
        <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center' }}>
          Upcoming Channeling
        </Typography>
      </Grid>

      <Container maxWidth="100px">
        <Grid container mt={5} >
          <Grid Item xs={3} style={{ marginRight: '90px' }}>
            <Item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </Item>
          </Grid>
          <Grid Item xs={8}>

            <Item>
              <UpcomingChanneling />
            </Item>
          </Grid>

        </Grid>
      </Container>

    </Box>

  );
};

export default Doctor;
