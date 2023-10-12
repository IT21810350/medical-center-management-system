import React, { useState, useEffect } from 'react';
import { Link } from '@mui/material';

import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Typography, Stack } from '@mui/material';
import { Card, CardMedia,CardContent, CardActions} from '@mui/material';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import img1 from '../../assets/img/patient/profile.jpg';

export default function PatientMakeChanelling() {

    const location = useLocation();
    const doctorId = new URLSearchParams(location.search).get('doctorId');
    //const [doctorDetails, setDoctorDetails] = useState(null);
    const [doctorDetails, setDoctorDetails] = useState({
    //     addressLine1: "123 Main Street",
    // addressLine2: "Apt 4B",
    // availableTime: [
    //   { day: 'Monday', startTime: '08:00 AM', endTime: '12:00 PM', _id: '652751764a208fad4cd63abc' },
    //   { day: 'Wednesday', startTime: '01:00 PM', endTime: '05:00 PM', _id: '652751764a208fad4cd63abd' },
    // ],
    // city: "Example City",
    // code: "12345",
    // createdAt: "2023-10-12T01:52:54.567Z",
    // experience: 5,
    // firstName: "John",
    // gender: "male",
    // lastName: "Smith",
    // licenseNumber: "123456789",
    // middleName: "Doe",
    // specialty: "Cardiology",
    // updatedAt: "2023-10-12T01:52:54.567Z",
    // __v: 0,
    // _id: "652751764a208fad4cd63abb"



    addressLine1: " ",
    addressLine2: " ",
    availableTime: [
      { day: ' ', startTime: ' ', endTime: ' ', _id: ' ' },
      { day: ' ', startTime: ' ', endTime: ' ', _id: ' ' },
    ],
    city: " ",
    code: " ",
    // createdAt: " ",
    experience: '',
    firstName: "",
    gender: " ",
    lastName: " ",
    licenseNumber: " ",
    middleName: " ",
    specialty: " ",
    // updatedAt: " ",
    // __v: 0,
    // _id: " "
    });


    const [formData, setFormData] = useState({
        date: '',
        time: '',
        patient: '',
        doctor: '',
    });


    // useEffect(() => {
    //     // Fetch the doctor's details using the doctorId
    //     const fetchDoctorDetails = async () => {
    //       try {
    //         const response = await axios.get(`http://localhost:4000/getD/get/${doctorId}`);
    //         setDoctorDetails(response.data);
    //         console.log('API Response:', response.data); // Log the response
    //       } catch (error) {
    //         console.error('Error fetching doctor details:', error);
    //       }
    //     };

    //     if (doctorId) {
    //       fetchDoctorDetails();
    //     }
    //   }, [doctorId]);
    //   console.log('doctorDetails:', doctorDetails); // Log doctorDetails

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                if (doctorId) {
                    const response = await axios.get(`http://localhost:4000/getD/get/${doctorId}`);
                    setDoctorDetails(response.data.doctor);
                }
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };
        fetchDoctorDetails();
    }, [doctorId]);
    console.log('doctorDetails:', doctorDetails);

    const handleBookAppointment = async (Id) => {
        // Redirect to the desired page with doctorId
        window.location.href = `/confirm-chanelling?bookingId=${Id}`;
        try {
            // Make a POST request to your server or API endpoint
            const response = await axios.post('http://localhost:4000/ch/add', formData);

            // Handle the response (e.g., show success message)
            console.log('Form submitted successfully', response.data);

            // Optionally, reset the form
            setFormData({
                date: '',
                time: '',
                patient: '',
                doctor: '',

            });
        } catch (error) {
            // Handle errors (e.g., show error message)
            console.error('Error submitting form', error);
        }

    };

    let { value } = useParams();
    return (
        <>
            <PatientNavigationBar />
            <br />

            <Grid container spacing={3} justifyContent="center" alignItems="center" >
                <Grid item xs={12} sm={3}>

                    <Card sx={{ height: '100%' }} >
                        <CardMedia
                            component="div"
                            sx={{
                                // 16:9
                                pt: '56.25%',
                            }}
                            image={img1}

                        />

                        {/* <CardContent >
       <Typography gutterBottom variant="h5" component="h2" align='center'>
         {patient.fName}{patient.lName}
       </Typography>
     </CardContent> */}
                        <CardActions>


                            <Button
                                component={Link}
                                to="/"
                                variant="contained"
                                // size="small"
                                style={{ width: '100%' }}

                                color="primary"
                            >
                                View Profile (Still not available)
                            </Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={9}>
                <Grid item xs={12} sm={12} md={12} lg={12} style={{ backgroundColor: "lightyellow", margin: 10 }} >

                    <Box p={2} >
                        {doctorDetails ? (<>
                            <Typography variant="h5">Name: Dr.{`${doctorDetails.firstName} ${doctorDetails.middleName} ${doctorDetails.lastName}`}</Typography>
                            <Typography variant="h6">Specialization: {doctorDetails.specialization || doctorDetails.specialty}</Typography>
                            {/* <Typography variant="h4">{doctorDetails.availableTime[startTime]}</Typography> */}
                            {/* <Typography> Time slots <ul>
                                {doctorDetails.availableTime.map(time => (
                                    <li key={time._id}>{time.day} from {time.startTime} to {time.endTime}</li>
                                ))}
                            </ul></Typography>
                            <Typography variant="h4">4.30 p.m - 10.30 p.m</Typography> */}
                            </>
                        ) : (
                            <p>Loading doctor details...</p>
                        )}
                        <br />
                        {/* <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleBookAppointment()}
                        >
                            Channel
                        </Button> */}
                    </Box>
                   
                    
                    
                    
                </Grid></Grid>
                
                <Grid item xs={12} sm={6} md={6} lg={4} style={{ backgroundColor: "pink", margin: 10 }} >
                    <Typography> Time slots <ul>
                                {doctorDetails.availableTime.map(time => (
                                    <Box p={2}><li key={time._id}> {time.day} from {time.startTime} to {time.endTime} 
                                    
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleBookAppointment(time._id)}
                                >
                                    Channel
                                </Button></li></Box>
                                ))}
                            </ul></Typography>
                    </Grid>
{/* 
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ backgroundColor: "lightyellow", margin: 10 }}  >

                    <Box p={2} >
                        {doctorDetails ? (<>
                            <Typography variant="h5">Name: Dr.{`${doctorDetails.firstName} ${doctorDetails.lastname}`}</Typography>
                            <Typography variant="h6">Specialization: {doctorDetails.specialization}</Typography>
                            <Typography variant="h4">Tues</Typography>
                            <Typography variant="h4">4.30 p.m - 10.30 p.m</Typography></>
                        ) : (
                            <p>Loading doctor details...</p>
                        )}

                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleBookAppointment()}
                        >
                            Channel
                        </Button>


                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} style={{ backgroundColor: "lightyellow", margin: 10 }}  >

                    <Box p={2} >
                        {doctorDetails ? (<>
                            <Typography variant="h5">Name: Dr.{`${doctorDetails.firstName} ${doctorDetails.lastname}`}</Typography>
                            <Typography variant="h6">Specialization: {doctorDetails.specialization}</Typography>
                            <Typography variant="h4">Wednesday</Typography>
                            <Typography variant="h4">4.30 p.m - 10.30 p.m</Typography></>
                        ) : (
                            <p>Loading doctor details...</p>
                        )}
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleBookAppointment()}
                        >
                            Channel
                        </Button>

                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} style={{ backgroundColor: "lightyellow", margin: 10 }}  >

                    <Box p={2} >
                        {doctorDetails ? (<>
                            <Typography variant="h5">Name: Dr.{`${doctorDetails.firstName} ${doctorDetails.lastname}`}</Typography>
                            <Typography variant="h6">Specialization: {doctorDetails.specialization}</Typography>
                            <Typography variant="h4">Friday</Typography>
                            <Typography variant="h4">4.30 p.m - 10.30 p.m</Typography></>
                        ) : (
                            <p>Loading doctor details...</p>
                        )}

                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleBookAppointment()}
                        >
                            Channel
                        </Button>

                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} style={{ backgroundColor: "lightyellow", margin: 10 }}  >

                    <Box p={2} >
                        {doctorDetails ? (<>
                            <Typography variant="h5">Name: Dr.{`${doctorDetails.firstName} ${doctorDetails.lastname}`}</Typography>
                            <Typography variant="h6">Specialization: {doctorDetails.specialization}</Typography>
                            <Typography variant="h4">Sunday</Typography>
                            <Typography variant="h4">4.30 p.m - 10.30 p.m</Typography></>
                        ) : (
                            <p>Loading doctor details...</p>
                        )}
                        <br />
                        {/* <Button variant="contained" color="primary" style={{ width: "100%" }}>
                            <Link href="/confirm-chanelling" style={{ textDecoration: 'none', color: 'white' }}>Book</Link>
                        </Button> */}

                        {/* <Button
                            variant="contained"
                            color="primary"
                            style={{ width: '100%' }}
                            component={Link}
                            to={`/confirm-chanelling/${doctorId}`}
                        >
                            Book
                        </Button> */}

                        {/* <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleBookAppointment()}
                        >
                            Channel
                        </Button>
                    </Box> */}
                {/* </Grid> */} 

            </Grid>

        </>
    );
}


// {doctorDetails ? (
//     <div>
//       <h2>Doctor Details</h2>
//       <p>Name: {`${doctorDetails.firstName} ${doctorDetails.lastname}`}</p>
//       <p>Specialization: {doctorDetails.specialization}</p>
//       {/* Add more doctor details here */}
//     </div>
//   ) : (
//     <p>Loading doctor details...</p>
//   )}
