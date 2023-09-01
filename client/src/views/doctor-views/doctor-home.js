import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, Container } from '@mui/material';
import Navbar from '../../components/doctor-component/doctor-nav-bar';
import img1 from '../../assets/img/doctor/doctor-profile-img.jpg';

const RecentPatientsCard = () => {
  const recentPatients = [
    { id: 1, name: 'Malshan Rathnayake', diagnostic: 'Fever', avatarUrl: '/assets/img/avatar1.jpg' },
    { id: 2, name: 'Ravindu Kavishka', diagnostic: 'Back Pain', avatarUrl: '/assets/img/avatar2.jpg' },
    { id: 3, name: 'Inupa Tharindu', diagnostic: 'Headache', avatarUrl: '/assets/img/avatar2.jpg' },
    { id: 4, name: 'Pathum Nishajith', diagnostic: 'Running Nose', avatarUrl: '/assets/img/avatar2.jpg' }
  ];

  return (
    <Card sx={{ backgroundColor: '#F0FFFF' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Patients
        </Typography>
        <List>
          {recentPatients.map((patient) => (
            <ListItem key={patient.id}>
              <ListItemAvatar>
                <Avatar alt={patient.name} src={patient.avatarUrl} />
              </ListItemAvatar>
              <ListItemText primary={patient.name} secondary={patient.diagnostic} />
              <Button variant="outlined" size="small">
                View
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const UpcomingAppointmentsCard = () => {

  const upcomingAppointments = [
    { id: 1, name: 'Amalsha rathnayake', date: '2023-10-11', time: '10:00 AM' },
    { id: 2, name: 'Shehan Dilisha', date: '2023-09-10', time: '11:00 AM' },
    { id: 3, name: 'Tharindu Shehan', date: '2023-11-11', time: '12:00 PM' },
    { id: 4, name: 'Nadun Thennakoon', date: '2023-08-17', time: '01:00 PM' },
  ];

  return (
    <Card sx={{ backgroundColor: '#F0FFFF' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Upcomming Appointments
        </Typography>
        <List>
          {upcomingAppointments.map((upcomingAppointments) => (
            <ListItem key={upcomingAppointments.id}>
              <ListItemAvatar>
                <Avatar alt={upcomingAppointments.name} />
              </ListItemAvatar>
              <ListItemText primary={upcomingAppointments.name} secondary={`${upcomingAppointments.date} at ${upcomingAppointments.time}`} />
              <Button variant="outlined" size="small">
                View
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const Doctor = () => {
  return (
    <React.Fragment>

      <CssBaseline />

      <Container maxWidth="100%">

        <Box>
          <Grid container>
            <Navbar />
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1, marginTop: '20px' }}>

          <Grid container spacing={2}>

            <Grid item lg={4} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
              <RecentPatientsCard />
            </Grid>

            <Grid item lg={4} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
              <UpcomingAppointmentsCard />
            </Grid>

            <Grid item lg={4} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>

              <Card sx={{ backgroundColor: '#F0FFFF' }}>
                <CardMedia
                  sx={{ height: 500 }}
                  image={img1}
                  title="doctor"
                />

                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Welcome Doctor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dr. Emily Johnson is a dedicated and compassionate doctor with a strong commitment to patient well-being. With extensive experience in internal medicine, she focuses on delivering personalized care and promoting preventive health practices.
                  </Typography>
                </CardContent>

              </Card>

            </Grid>

          </Grid>

        </Box>
      </Container>

    </React.Fragment>
  );
};

export default Doctor;
