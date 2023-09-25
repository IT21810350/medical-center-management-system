import React, { useState, useEffect } from 'react';
import { Link } from '@mui/material';

import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Typography, Stack } from '@mui/material';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function PatientMakeChanelling() {

    const location = useLocation();
    const doctorId = new URLSearchParams(location.search).get('doctorId');
    const [doctorDetails, setDoctorDetails] = useState(null);
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




    const handleBookAppointment = async (doctorId) => {
        // Redirect to the desired page with doctorId
        window.location.href = `/confirm-chanelling?doctorId=${doctorId}`;
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

                <Grid item xs={12} sm={6} md={4} lg={3} style={{ backgroundColor: "lightyellow", margin: 10 }} >

                    <Box p={2} >
                        {doctorDetails ? (<>
                            <Typography variant="h5">Name: Dr.{`${doctorDetails.firstName} ${doctorDetails.lastname}`}</Typography>
                            <Typography variant="h6">Specialization: {doctorDetails.specialization}</Typography>
                            <Typography variant="h4">Monday</Typography>
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
                            <Typography variant="h4">Tuesday</Typography>
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

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleBookAppointment()}
                        >
                            Channel
                        </Button>
                    </Box>
                </Grid>

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
