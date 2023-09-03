import React from 'react';

import {Grid,
    Card,
    CardActions,
    CardActionArea,
    CardMedia,
    TextField,
    CardContent,
    Typography,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Stack,
    Container,
    Avatar,
    Box,
    Paper,
    Link } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import img1 from '../../assets/img/patient/profile.jpg';

const columns = [
    { field: 'no', headerName: 'Number', width: 200 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 200,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 200,
        editable: false,
    },
    {
        field: 'specialization',
        headerName: 'Specialization',
        width: 300,
        editable: false,
    },
    {
        field: 'channellingBtn',
        headerName: 'Channel',
        sortable: false,
        width: 200,
        //valueGetter: (params) =>
           // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', specialization: 'Dermatologist' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', specialization: 'Physiotherapist' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', specialization: 'Dentist' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', specialization: 'Dermatologist' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', specialization: 'Physiotherapist' },
    { id: 6, lastName: 'Melisandre', firstName: 'Jaime', specialization: 'Cardiologist' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', specialization: 'Dermatologist' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', specialization: 'Radiologist' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', specialization: 'ENT' },
];

const SearchDoctors = () =>{

    return(
        <div>
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    //backgroundImage: "https://source.unsplash.com/random?wallpapers",
                    backgroundImage: {img1}
                }} >

                {<img style={{ display: 'none' }} src={img1} alt="img" />}
                
                <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)', }} />
                <Grid container>
                    <Grid item md={12} >
                        <Box sx={{ alignItems:'center' , position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }} >
                            <Typography component="h1" variant="h2" color="inherit" gutterBottom >Doctor Channeling</Typography>
                            <Typography variant="h6" color="inherit" paragraph>Use filters to select your preferred doctors</Typography>
                            <Link variant="subtitle1" href="#">LinkText</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Container>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>

            </Container>
        </div>
    )
}

export default SearchDoctors;
