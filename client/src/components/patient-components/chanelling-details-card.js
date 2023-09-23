import React, {useEffect,useState} from 'react';
import { Box, Grid, FormControl, InputLabel , Select , MenuItem , Stack, RadioGroup , Typography, FormControlLabel , Radio , Checkbox , Button, TextField, Paper } from '@mui/material';
import imgProfile from '../../assets/patient/profile.jpg';
import Heading from '../../components/patient-components/heading.component';
import axios from 'axios';

export default function ChanellinDetailsCard(color){
    return(
        <>
            <Grid sm={4} lg={4} md={4} xs={12}>
                <Box style={{backgroundColor:{color}}}></Box>
                <Typography>Hi</Typography>
            </Grid>
        </>
    );
}