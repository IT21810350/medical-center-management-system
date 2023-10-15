import NavBar from '../../components/doctor-component/doctor-nav-bar';
import { Grid, CssBaseline, Box, Container, Typography, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import backgroundImage from '../../assets/img/common/home-hero-background-img.jpg';
import Cookies from 'js-cookie';
import axios from "axios";
import React, { useState, useEffect } from 'react';

const HeroSection = () => {

    return (

        <Grid sx={{ display: "flex" }}>
            <CssBaseline />
            <Box component="main" sx={{ flexGrow: 1 }} mt={2}>
                <Container maxWidth="100%">
                    <Box
                        sx={{
                            backgroundImage: `url(${backgroundImage})`, // Set the background image
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: "100px 0",
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="h2" sx={{ marginBottom: 2 }}>
                            YOUR PROFILE
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Grid>
    );

};

const Details = () => {

    const token = Cookies.get('token');
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.id;

    const [doctorDetails, setDoctorDetails] = useState({

        firstName: "",
        lastName: "",
        city: "",
        specialty: ""

    });

    const { firstName, lastName, city, specialty } = doctorDetails;

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setDoctorDetails({
            ...doctorDetails,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/getDoctorProfile/` + userId);
                setDoctorDetails(response.data.user.profile);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [userId]);

    if (doctorDetails === null) {
        return <div>Loading...</div>;
    }


    return (

        <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center', backgroundColor: '#1976D2' }}>
                        Personal Details
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        name="firstname"
                        margin="normal"
                        variant="outlined"
                        value={firstName}
                        onChange={handleFieldChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        name="lastname"
                        margin="normal"
                        variant="outlined"
                        value={lastName}
                        onChange={handleFieldChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="City"
                        name="city"
                        margin="normal"
                        variant="outlined"
                        value={city}
                        onChange={handleFieldChange}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Speciality"
                        name="speciality"
                        margin="normal"
                        variant="outlined"
                        value={specialty}
                        onChange={handleFieldChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Speciality"
                        name="speciality"
                        margin="normal"
                        variant="outlined"
                        value={specialty}
                        onChange={handleFieldChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Speciality"
                        name="speciality"
                        margin="normal"
                        variant="outlined"
                        value={specialty}
                        onChange={handleFieldChange}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} container justifyContent="flex-end" alignItems="center" mt={5} spacing={2}>
                <Grid item>
                    <Button type="submit" variant="contained" color="success" startIcon={<SaveIcon />}>
                        UPDATE PERSONAL DETAILS
                    </Button>
                </Grid>
            </Grid>
        </Grid>

    )


}

const AvailableTime = () => {

    const [availableTimes, setAvailableTimes] = useState([
        {
            day: 'Monday',
            startTime: '',
            endTime: '',
            checked: false,
        },
        {
            day: 'Tuesday',
            startTime: '',
            endTime: '',
            checked: false,
        },
        {
            day: 'Wednessday',
            startTime: '',
            endTime: '',
            checked: false,
        },
        {
            day: 'Thursday',
            startTime: '',
            endTime: '',
            checked: false,
        },
        {
            day: 'Friday',
            startTime: '',
            endTime: '',
            checked: false,
        },
        {
            day: 'Saturday',
            startTime: '',
            endTime: '',
            checked: false,
        },
        {
            day: 'Sunday',
            startTime: '',
            endTime: '',
            checked: false,
        },

    ]);

    const handleTimeChange = (index, field, value) => {
        const updatedTimes = [...availableTimes];
        updatedTimes[index][field] = value;
        setAvailableTimes(updatedTimes);
    };

    const handleCheckboxChange = (index, checked) => {
        const updatedTimes = [...availableTimes];
        updatedTimes[index].checked = checked;
        setAvailableTimes(updatedTimes);
    };

    const handleSave = () => {
                
        const token = Cookies.get('token');
        const tokenParts = token.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        const userId = payload.id;

        const payloadToSend = {
            userId: userId,
            availableTimes: availableTimes,
        };

        console.log(payloadToSend);

        axios.post('http://localhost:4000/save-available-times', payloadToSend)
            .then((response) => {
                console.log('Data saved successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
    };

    return (
        <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center', backgroundColor: '#1976D2' }}>
                        Update Available Times
                    </Typography>
                </Grid>
                {availableTimes.map((time, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={time.checked}
                                    onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                                />
                            }
                            label={time.day}
                        />
                        {time.checked && (
                            <div>
                                <TextField
                                    fullWidth
                                    label="From Time"
                                    name={`startTime_${index}`}
                                    margin="normal"
                                    variant="outlined"
                                    value={time.startTime}
                                    onChange={(e) => handleTimeChange(index, 'startTime', e.target.value)}
                                />
                                <TextField
                                    fullWidth
                                    label="To Time"
                                    name={`endTime_${index}`}
                                    margin="normal"
                                    variant="outlined"
                                    value={time.endTime}
                                    onChange={(e) => handleTimeChange(index, 'endTime', e.target.value)}
                                />
                            </div>
                        )}
                    </Grid>
                ))}

            </Grid>
            <Grid item xs={12} container justifyContent="flex-end" alignItems="center" mt={12} spacing={2}>
                <Grid item>
                    <Button type="submit" variant="contained" color="success" startIcon={<SaveIcon />} onClick={handleSave}>
                        UPDATE AVAILABLE TIME
                    </Button>
                </Grid>
            </Grid>

        </Grid>
    );
};

const DoctorProfile = () => {

    return (

        <Grid>

            <Grid>
                <NavBar />
            </Grid>

            <Grid>
                <HeroSection />
            </Grid>

            {/* details */}
            <Container maxWidth="100px">
                <Grid container spacing={2} mt={2}>
                    <Details />
                    <AvailableTime />
                </Grid>
            </Container>

        </Grid>


    )

}

export default DoctorProfile;