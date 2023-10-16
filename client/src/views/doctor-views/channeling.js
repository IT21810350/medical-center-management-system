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
import Swal from 'sweetalert2';
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
    const [isLoading, setIsLoading] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value,
        });
    };

    const handleSearch = async () => {
        setIsLoading(true);
        Swal.fire({
            title: 'Loading...',
            allowOutsideClick: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const response = await axios.post('http://localhost:4000/search-channeling', {
                ...searchParams,
            });

            setData(response.data.Channelings);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
            Swal.close(); // Close the loading popup
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

    if (isLoading) {
        return null; // Render nothing while loading
    }

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
                    <TableCell><strong>Patient Name</strong></TableCell>
                    <TableCell><strong>Date</strong></TableCell>
                    <TableCell><strong>Time</strong></TableCell>
                    <TableCell><strong>Action</strong></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.patient.profile && item.patient.profile.fName ? item.patient.profile.fName : 'Name N/A'}</TableCell>
                        <TableCell>{item.date ? new Date(item.date).toLocaleDateString('en-US') : 'Date N/A'}</TableCell>
                        <TableCell>{item.date ? new Date(item.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : 'Date N/A'}</TableCell>
                        <TableCell>
                            <Link to={`/symptoms/${item._id}`}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                >
                                    View
                                </Button>
                            </Link>
                        </TableCell>
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