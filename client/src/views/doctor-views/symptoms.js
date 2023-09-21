import React, { useState } from 'react';
import Navbar from '../../components/doctor-component/doctor-nav-bar';
import { Box, Grid, TextField, Button } from '@mui/material';
import axios from "axios";

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

        <Box sx={{ flexGrow: 1 }}>
            <Grid>
                <Navbar />
            </Grid>
            <Grid container mt={2}>
                <form onSubmit={handleSubmit}>
                    {symptoms.map((symptom, index) => (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={12}>
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

                            <Grid item xs={3}>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => handleRemoveSymptom(index)}
                                >
                                    Remove
                                </Button>
                            </Grid>
                        </Grid>
                    ))}
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={handleAddSymptom}
                    >
                        Add Symptom
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Grid>
        </Box>
    );
};

export default Symptoms;
