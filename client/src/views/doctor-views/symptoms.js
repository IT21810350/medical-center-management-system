import React, { useState, useEffect } from 'react';
import Navbar from '../../components/doctor-component/doctor-nav-bar';
import { Box, Grid, TextField, Button, CssBaseline, Container, Typography, MenuItem, FormControl, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete';

// datepicker
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import backgroundImage from '../../assets/img/common/home-hero-background-img.jpg';
import axios from "axios";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

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
                            SYMPTOMS
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Grid>
    );

};

const Symptoms = () => {

    const [symptoms, setSymptoms] = useState([{}]);

    console.log(symptoms);

    const handleOnChange = (e, index) => {
        const { name, value } = e.target;

        setSymptoms((prevSymptoms) => {
            const updatedSymptoms = [...prevSymptoms];
            updatedSymptoms[index] = {
                ...updatedSymptoms[index],
                [name]: value,
            };
            return updatedSymptoms;
        });
    };

    const handleAddSymptom = () => {
        setSymptoms([...symptoms, {}]);
    };

    const handleRemoveSymptom = (index) => {
        setSymptoms((prevSymptoms) => {
            const updatedSymptoms = [...prevSymptoms];
            updatedSymptoms.splice(index, 1);
            return updatedSymptoms;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Sending data to the backend:', symptoms);

        try {
            await axios.post(
                "http://localhost:4000/symptoms",
                symptoms,
                { withCredentials: true }
            );

            setSymptoms([{}]);
        } catch (error) {
            console.error(error);
        }
    };

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

        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Grid>
                <Navbar />
            </Grid>

            <Grid>
                <HeroSection />
            </Grid>

            <Container maxWidth="100px">
                <Grid>

                    <Grid>
                        <Grid item xs={6} mt={5} sx={{ backgroundColor: '#1976D2' }}>
                            <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center' }}>
                                Details Of Patient
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={6} mt={5}>

                        <Typography variant="h5">
                            Patient Name :  {userData.profile.firstName}
                        </Typography>

                        <Typography variant="h5">
                            Gender :  {userData.profile.gender}
                        </Typography>

                        <Typography variant="h5">
                            Email :  {userData.email}
                        </Typography>

                    </Grid>
                </Grid>

            </Container>

            <Container maxWidth="100px">
                <Grid>

                    <Grid item xs={12} mt={5} sx={{ backgroundColor: '#1976D2' }}>
                        <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center' }}>
                            Details Of Symptoms
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="100px">
                <form onSubmit={handleSubmit}>
                    {symptoms.map((symptom, index) => (

                        <Grid container spacing={2} mt={2} key={index} >
                            <Grid item xs={3}>
                                <Autocomplete
                                    id="Symptom"
                                    options={top100Symptoms.map((option) => option.symptom)}
                                    sx={{ width: 315 }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Symptom"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    )}
                                    value={symptoms[index]?.symptom || ''}
                                    onChange={(event, newValue) => {
                                        handleOnChange({ target: { name: 'symptom', value: newValue } }, index);
                                    }}
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    label="Since"
                                    name="since"
                                    type="date"
                                    value={symptom.since || ''}
                                    placeholder="Since when?"
                                    onChange={(e) => handleOnChange(e, index)}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <Autocomplete
                                    id="body-part"
                                    options={top100BodyParts.map((option) => option.bodyPart)}
                                    sx={{ width: 315 }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Body Part"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    )}
                                    value={symptoms[index]?.bodyPart || ''}
                                    onChange={(event, newValue) => {
                                        handleOnChange({ target: { name: 'bodyPart', value: newValue } }, index);
                                    }}
                                />
                            </Grid>

                            <Grid item xs={3}>

                                <FormControl fullWidth sx={{ marginY: 2 }}>
                                    <InputLabel id="severity-level">Severity Level</InputLabel>
                                    <Select
                                        labelId="severity-level"
                                        id="severityLevel"
                                        name="severityLevel"
                                        value={symptom.severityLevel || ''}
                                        label="Severity Level"
                                        onChange={(e) => handleOnChange(e, index)}
                                    >
                                        <MenuItem value={"low"}>Low</MenuItem>
                                        <MenuItem value={"medium"}>Medium</MenuItem>
                                        <MenuItem value={"high"}>High</MenuItem>
                                        <MenuItem value={"critical"}>Critical</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
                                <Grid item>
                                    <Button
                                        type="button"
                                        variant="contained"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleRemoveSymptom(index)}
                                    >
                                        Remove Symptom Record
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="button"
                                        variant="contained"
                                        color="primary"
                                        startIcon={<AddCircleIcon />}
                                        onClick={handleAddSymptom}
                                    >
                                        Add More Symptom
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    ))}

                    <Grid item xs={12} container justifyContent="center" alignItems="center" mt={5} spacing={2}>
                        <Grid item>
                            <Link to="/doctor">
                                <Button variant="outlined" color="primary" startIcon={<CloseIcon />}>
                                    CANCEL
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/prescription" style={{ textDecoration: 'none' }}>
                                <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />}>
                                    CONTINUE
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" alignItems="center" mt={5} spacing={2}></Grid>
                </form>
            </Container>
        </Box>
    );
};

const top100Symptoms = [
    { symptom: 'Headache' },
    { symptom: 'Fever' },
    { symptom: 'Cough' },
    { symptom: 'Shortness of breath' },
    { symptom: 'Fatigue' },
    { symptom: 'Loss of taste or smell' },
    { symptom: 'Difficulty breathing' },
    { symptom: 'Muscle or body aches' },
    // Add more symptoms here
];

const top100BodyParts = [
    { bodyPart: 'Head' },
    { bodyPart: 'Neck' },
    { bodyPart: 'Shoulder' },
    { bodyPart: 'Chest' },
    { bodyPart: 'Back' },
    { bodyPart: 'Arm' },
    { bodyPart: 'Elbow' },
    { bodyPart: 'Wrist' },
    { bodyPart: 'Hand' },
    { bodyPart: 'Finger' },
    { bodyPart: 'Thumb' },
    { bodyPart: 'Hip' },
    { bodyPart: 'Leg' },
    { bodyPart: 'Knee' },
    { bodyPart: 'Ankle' },
    { bodyPart: 'Foot' },
    { bodyPart: 'Toe' },
    // ... other body parts
];

export default Symptoms;
