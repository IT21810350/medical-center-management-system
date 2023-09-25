import React, { useState, useEffect } from "react";
import NavBar from '../../components/doctor-component/doctor-nav-bar';
import {
    Grid,
    CssBaseline,
    Box,
    Container,
    Typography,
    Button,
    TextField,
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import backgroundImage from '../../assets/img/common/home-hero-background-img.jpg';



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
                            CHANNELING
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Grid>
    );

};

const SearchContainer = () => {

    const [searchParams, setSearchParams] = useState({
        patientName: '',
        date: '',
        channelingSeverity: '',
        fromTime: '',
    });

    const [data, setData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    const handleSearch = async () => {
        
        try {
            const response = await axios.post(
                'http://localhost:4000/search-channeling',
                {
                    ...searchParams,
                },
                {
                    withCredentials: true,
                }
            );

            setData(response);
        } catch (error) {
            console.error('Error:', error);
        }

    };

    // useEffect(() => {
    //     handleSearch();
    // }, []);

    return (
        <Container maxWidth="100px">
            <Grid container spacing={2} mt={2}>

                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Patient Name"
                        name="patientName"
                        value={searchParams.patientName}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Date"
                        name="date"
                        value={searchParams.date}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Channeling Severity"
                        name="channelingSeverity"
                        value={searchParams.channelingSeverity}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="From Time"
                        name="fromTime"
                        value={searchParams.fromTime}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12} sm={12} container justifyContent="flex-end">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <LoadData data={data} />
                </Grid>
            </Grid>
        </Container>
    );
};

const LoadData = ({ data }) => {

    return (
        <Table >
            <TableHead >
                <TableRow>
                    <TableCell>Patient Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Channeling Serverity</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.patientName}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.fromTime}</TableCell>
                        <TableCell>{item.channelingSeverity}</TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

const Channeling = () => {

    return (

        <Grid>

            <Grid>
                <NavBar />
            </Grid>

            <Grid>
                <HeroSection />
            </Grid>

            <Grid>
                <SearchContainer />
            </Grid>

        </Grid>


    )
}

export default Channeling;