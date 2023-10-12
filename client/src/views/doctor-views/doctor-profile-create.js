import React, { useState } from 'react';
import { Box, Grid, CssBaseline, Container, Typography, TextField, FormControl, InputLabel, MenuItem, Select, Autocomplete, Button } from '@mui/material';
import Navbar from '../../components/doctor-component/doctor-nav-bar';
import SaveIcon from '@mui/icons-material/Save';
import backgroundImage from '../../assets/img/common/home-hero-background-img.jpg';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";



const DoctorProfileCreate = () => {

    const token = Cookies.get('token');
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));

    const userId = payload.id;

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        code: '',
        specialty: '',
        licenseNumber: '',
        experience: '',
        userId, 
    });

    const { firstName, middleName, lastName, gender, addressLine1, addressLine2, code, city, specialty, licenseNumber, experience } = formData;

    console.log(formData);

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async () => {
        try {

            const response = await axios.post('http://localhost:4000/create-profile', formData);

            setFormData({
                firstName: '',
                middleName: '',
                lastName: '',
                gender: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                code: '',
                specialty: '',
                licenseNumber: '',
                experience: '',
                userId: '', 
            });

            setTimeout(() => {
                navigate("/doctor");
              }, 1000);

            console.log('Data sent successfully:', response.data);
        } catch (error) {

            console.error('Error sending data:', error);
        }
    };

    return (
        <Grid>
            <Grid>
                <Navbar />
            </Grid>

            <Grid>
                <HeroSection />
            </Grid>

            <Container maxWidth="100px">
                <Grid>
                    <Grid item xs={12} mt={5} sx={{ backgroundColor: '#1976D2' }}>
                        <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center' }}>
                            Personal Details
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="100px">
                <Grid container spacing={2} mt={2}>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            margin="normal"
                            variant="outlined"
                            value={firstName}
                            onChange={handleFieldChange}
                        />

                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="Middle Name (optional)"
                            name="middleName"
                            margin="normal"
                            variant="outlined"
                            value={middleName}
                            onChange={handleFieldChange}
                        />

                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            margin="normal"
                            variant="outlined"
                            value={lastName}
                            onChange={handleFieldChange}
                        />

                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth sx={{ marginY: 2 }}>
                            <InputLabel id="gender">Gender</InputLabel>
                            <Select
                                labelId="gender"
                                id="gender"
                                name="gender"
                                label="Gender"
                                value={gender}
                                onChange={handleFieldChange}
                            >
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
            </Container>

            <Container maxWidth="100px">
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center', backgroundColor: '#1976D2' }}>
                                    Permanent Address
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Address Line 1"
                                    name="addressLine1"
                                    margin="normal"
                                    variant="outlined"
                                    value={addressLine1}
                                    onChange={handleFieldChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Address Line 2"
                                    name="addressLine2"
                                    margin="normal"
                                    variant="outlined"
                                    value={addressLine2}
                                    onChange={handleFieldChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    id="city"
                                    options={top100Cities.map((cityObj) => cityObj.city)}
                                    sx={{ width: 315 }}
                                    value={city}
                                    onChange={(event, newValue) => {
                                        handleFieldChange({ target: { name: "city", value: newValue } });
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="City"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    )}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Postal Code"
                                    name="code"
                                    margin="normal"
                                    variant="outlined"
                                    value={code}
                                    onChange={handleFieldChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center', backgroundColor: '#1976D2' }}>
                                    Work Information
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    id="speciality"
                                    options={top100Specialties.map((specialityObj) => specialityObj.specialty)}
                                    sx={{ width: 315 }}
                                    value={specialty}
                                    onChange={(event, newValue) => {
                                        handleFieldChange({ target: { name: "specialty", value: newValue } });
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Speciality"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="License Number"
                                    name="licenseNumber"
                                    margin="normal"
                                    variant="outlined"
                                    value={licenseNumber}
                                    onChange={handleFieldChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Years of Experience"
                                    name="experience"
                                    margin="normal"
                                    variant="outlined"
                                    value={experience}
                                    onChange={handleFieldChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} container justifyContent="flex-end" alignItems="center" mt={5} spacing={2}>
                    <Grid item>
                        <Button type="submit" variant="contained" color="success" startIcon={<SaveIcon />} onClick={handleSubmit}>
                            CREATE
                        </Button>
                    </Grid>
                </Grid>

                <Grid item xs={12} container justifyContent="center" alignItems="center" mt={5} spacing={2}></Grid>
            </Container>



        </Grid>



    );


};


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
                            CREATE YOUR PROFILE
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Grid>
    );

};

const top100Cities = [
    { city: 'Colombo' },
    { city: 'Kandy' },
    { city: 'Galle' },
    { city: 'Jaffna' },
    { city: 'Negombo' },
    { city: 'Anuradhapura' },
    { city: 'Polonnaruwa' },
    { city: 'Matara' },
    { city: 'Trincomalee' },
    { city: 'Batticaloa' },
    { city: 'Ratnapura' },
    { city: 'Badulla' },
    { city: 'Hambantota' },
    { city: 'Mannar' },
    { city: 'Puttalam' },
    { city: 'Matale' },
    { city: 'Vavuniya' },
    // ... other cities in Sri Lanka
];

const top100Specialties = [
    { specialty: 'Cardiology' },
    { specialty: 'Dermatology' },
    { specialty: 'Orthopedics' },
    { specialty: 'Gastroenterology' },
    { specialty: 'Oncology' },
    { specialty: 'Pediatrics' },
    { specialty: 'Neurology' },
    { specialty: 'Obstetrics and Gynecology' },
    { specialty: 'Psychiatry' },
    { specialty: 'Radiology' },
    // Add more specialties as needed
];


export default DoctorProfileCreate;