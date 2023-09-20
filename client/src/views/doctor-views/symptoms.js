import React, { useState } from 'react';
import Navbar from '../../components/doctor-component/doctor-nav-bar';
import { Box, Grid, TextField, Paper, Button } from '@mui/material';
import axios from "axios";

const Item = Paper;

const Symptoms = () => {

    const [inputValue, setInputValue] = useState({
        symptom: "",
        since: "",
        bodyPart: "",
        serverityLevel: "",
    });

    const { symptom, since, bodyPart, serverityLevel } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:4000/symptoms",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );


        } catch (error) {
            console.error(error);
        }

        setInputValue({
            ...inputValue,
            symptom: "",
            since: "",
            bodyPart: "",
            serverityLevel: "",
        });
    };

    return (

        <Box sx={{ flexGrow: 1, backgroundColor: '#f2f2f2' }}>

            <Grid>
                <Navbar />
            </Grid>

            <Grid container mt={2}>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Item>
                                <TextField
                                    fullWidth
                                    label="symptom"
                                    name="symptom"
                                    value={symptom}
                                    placeholder="Enter patient symptom"
                                    onChange={handleOnChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Item>
                        </Grid>

                        <Grid item xs={3}>
                            <Item>
                                <TextField
                                    fullWidth
                                    label="since"
                                    name="since"
                                    value={since}
                                    placeholder="Since when?"
                                    onChange={handleOnChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Item>
                        </Grid>

                        <Grid item xs={3}>
                            <Item>
                                <TextField
                                    fullWidth
                                    label="body part"
                                    name="bodyPart"
                                    value={bodyPart}
                                    placeholder="Body Part"
                                    onChange={handleOnChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Item>
                        </Grid>

                        <Grid item xs={3}>
                            <Item>
                                <TextField
                                    fullWidth
                                    label="serverity level"
                                    name="serverityLevel"
                                    value={serverityLevel}
                                    placeholder="serverity level"
                                    onChange={handleOnChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Item>
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Box>
    );
};

export default Symptoms;