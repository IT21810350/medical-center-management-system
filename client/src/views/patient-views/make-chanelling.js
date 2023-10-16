import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Card, CardMedia, CardActions } from '@mui/material';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
import axios from 'axios';
import img1 from '../../assets/img/patient/profile.jpg';
import { useLocation } from 'react-router-dom';

export default function PatientMakeChanelling() {
    const location = useLocation();
    const doctorId = new URLSearchParams(location.search).get('doctorId');
    const [doctorDetails, setDoctorDetails] = useState({
        addressLine1: ' ',
        addressLine2: ' ',
        availableTime: [
            { day: ' ', startTime: ' ', endTime: ' ', _id: ' ' },
            { day: ' ', startTime: ' ', endTime: ' ', _id: ' ' },
        ],
        city: ' ',
        code: ' ',
        experience: '',
        firstName: '',
        gender: ' ',
        lastName: ' ',
        licenseNumber: ' ',
        middleName: ' ',
        specialty: ' ',
    });

    const generateDateRows = (day) => {
        const currentDate = new Date();
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);

        const dateRows = [];
        while (currentDate < nextMonth) {
            if (currentDate.getDay() === getDayNumber(day)) {
                dateRows.push(new Date(currentDate));
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dateRows;
    };

    const getDayNumber = (day) => {
        switch (day) {
            case 'Sunday':
                return 0;
            case 'Monday':
                return 1;
            case 'Tuesday':
                return 2;
            case 'Wednesday':
                return 3;
            case 'Thursday':
                return 4;
            case 'Friday':
                return 5;
            case 'Saturday':
                return 6;
            default:
                return -1;
        }
    };

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                // Fetch doctor details based on the doctor ID
                const response = await axios.get(`http://localhost:4000/getD/get/${doctorId}`);
                setDoctorDetails(response.data.doctor);
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };
        fetchDoctorDetails();
    }, []);

    const handleBookAppointment = (date, timeSlotId) => {
        // Construct the channelDate as an ISO string
        const channelDate = date.toISOString();
        // Construct the link with parameters
        const confirmChanellingLink = `/confirm-chanelling?bookingId=${timeSlotId}&channelDate=${channelDate}`;
        window.location.href = confirmChanellingLink;
    };

    return (
        <>
            <PatientNavigationBar />
            <br />
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardMedia
                            component="div"
                            sx={{
                                pt: '56.25%',
                            }}
                            image={img1}
                        />
                        <CardActions>
                            <Button
                                component={Link}
                                to="/"
                                variant="contained"
                                style={{ width: '100%' }}
                                color="primary"
                            >
                                View Profile (Still not available)
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ backgroundColor: 'lightyellow', margin: 10 }}>
                        <Box p={2}>
                            {doctorDetails ? (
                                <>
                                    <Typography variant="h5">
                                        Name: Dr.{`${doctorDetails.firstName} ${doctorDetails.middleName} ${doctorDetails.lastName}`}
                                    </Typography>
                                    <Typography variant="h6">Specialization: {doctorDetails.specialization || doctorDetails.specialty}</Typography>
                                </>
                            ) : (
                                <p>Loading doctor details...</p>
                            )}
                            <br />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} style={{ backgroundColor: 'pink', margin: 10 }}>
                    <Typography>Available Time Slots</Typography>
                    {doctorDetails.availableTime.map(time => (
                        <div key={time._id}>
                            <Typography>{time.day} from {time.startTime} to {time.endTime}</Typography>
                            {generateDateRows(time.day).map(date => (
                                <Box key={date.toISOString()} p={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleBookAppointment(date, time._id)}
                                        disabled={new Date() > new Date(date)}
                                    >
                                        {new Date() > new Date(date) ? 'Time Passed' : `Channel ${date.toDateString()}`}
                                    </Button>
                                </Box>
                            ))}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}
