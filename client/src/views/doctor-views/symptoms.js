import React, { useState } from 'react';
import Navbar from '../../components/doctor-component/doctor-nav-bar';
import { Box, Grid, TextField, Button, CssBaseline, Container, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import backgroundImage from '../../assets/img/common/home-hero-background-img.jpg';
import axios from "axios";
import { Link } from 'react-router-dom';

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

    return (

        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Grid>
                <Navbar />
            </Grid>

            <Grid>
                <HeroSection />
            </Grid>
            <Container maxWidth="100px">
                <form onSubmit={handleSubmit}>
                    {symptoms.map((symptom, index) => (

                        <Grid container spacing={2} mt={2} key={index} >
                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    label="Symptom"
                                    name="symptom"
                                    value={symptom.symptom || ''}
                                    placeholder="Enter patient symptom"
                                    onChange={(e) => handleOnChange(e, index)}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    label="Since"
                                    name="since"
                                    value={symptom.since || ''}
                                    placeholder="Since when?"
                                    onChange={(e) => handleOnChange(e, index)}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    label="Body Part"
                                    name="bodyPart"
                                    value={symptom.bodyPart || ''}
                                    placeholder="Body Part"
                                    onChange={(e) => handleOnChange(e, index)}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    label="Severity Level"
                                    name="severityLevel"
                                    value={symptom.severityLevel || ''}
                                    placeholder="Severity Level"
                                    onChange={(e) => handleOnChange(e, index)}
                                    margin="normal"
                                    variant="outlined"
                                />
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
                            <Button variant="outlined" color="primary" startIcon={<CloseIcon />}>
                                CANCEL
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />}>
                                SAVE
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" alignItems="center" mt={5} spacing={2}></Grid>
                </form>
            </Container>
        </Box>
    );
};

export default Symptoms;
