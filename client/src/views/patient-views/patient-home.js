import React from 'react';

import {Grid,
        Card,
        CardActions,
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
       // Container,
       // Avatar,
        Box } from '@mui/material';
import img1 from '../../assets/img/patient/profile.jpg';
        
const Patient = () => {
    return (
        <div>
           <Box sx={{ flexGrow: 1 }}>
             {/*<Container sx={{ py: 5 }} maxWidth="lg">*/}
                {/* Heading Section */}
                <Grid >
                    <Typography component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom>
                        Enter Patient Details
                    </Typography>
                </Grid>

                <Grid container spacing={4}>

                    {/* Doctor's Profile Card*/}
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <Card sx={{ height: '100%' }} >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image={img1}
                                
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dr Abc......
                                </Typography>
                                <Typography>
                                    Specialization and Special notes
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Stack spacing={3}>
                                    <Button type='submit' variant="contained" size="small" >View Doctor's Profile</Button>
                                    <Button type='submit' variant="contained" size="small">Feedback / Contact</Button>
                                </Stack>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* Appointment Details Cards*/}
                    <Grid item xs={12} sm={9} md={9} lg={9} mt={4} sx={{backgroundColor: "lightblue", height: 210}}>
                        <Grid item container spacing={4} > {/* Wrapping smaller cards related to appointment details*/}

                            {/* Date and Time card*/}
                            <Grid item xs={12} sm={4} md={4} lg={4} >
                                <Grid item xs={6} >
                                    <Card style={{ border: "none", boxShadow: "none" }} sx={{ height: '150px',backgroundColor: "lightblue", display: 'flex', flexDirection: 'column' }} >
                                    <CardContent  >
                                        <Typography gutterBottom variant="h6" component="h2">Date : 20/09/2023</Typography>
                                        <Typography gutterBottom variant="h6" component="h2">Time : 01.30 p.m.</Typography>
                                    </CardContent>
                                    </Card>
                                </Grid>
                                {/*}
                                <Grid item xs={6} >
                                    <Card style={{ border: "none", boxShadow: "none" }} sx={{ height: '100px',backgroundColor: "lightblue", display: 'flex', flexDirection: 'column' }} >
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2">20/09/2023</Typography>
                                        <Typography gutterBottom variant="h6" component="h2">01.30 p.m.</Typography>
                                    </CardContent>
                                    </Card>
                                </Grid>
                            */}
                            </Grid>

                            {/* Appointment Number card*/}
                            <Grid item xs={12} sm={4} md={4} lg={4} >
                                <Card style={{ border: "none", boxShadow: "none" }} sx={{ height: '100%',backgroundColor: "lightblue", display: 'flex', flexDirection: 'column' }} >
                                    <CardContent sx={{ flexGrow: 1 }} align='center'>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Appointment Number
                                        </Typography>
                                        <Typography gutterBottom variant="h3" component="h2">
                                            04
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Availability card*/}
                            <Grid item xs={12} sm={4} md={4} lg={4} >
                                <Card style={{ border: "none", boxShadow: "none" }} sx={{ height: '100%',backgroundColor: "lightblue", display: 'flex', flexDirection: 'column' }} >
                                    <CardContent sx={{ flexGrow: 1 }} align='center'>
                                        <Typography gutterBottom variant="h5" component="h2">Availability</Typography>
                                        <Typography gutterBottom variant="h5" color={'red'} component="h2">Available</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                
                {/* Patient Details Form Section */}
                <Grid spacing={3} container md={12} mt={-20}> {/* This is limiting the width of the form */}
                    <Grid lg={3} item></Grid>
                    <Grid lg={9} item> {/* This is wrapping whole form */}
                        <form>
                            <Grid container spacing={1} lg={12}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type='number' label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    <FormControl required>
                                        <RadioGroup row>
                                            <FormControlLabel
                                                value="nic"
                                                control={<Radio size="small" />}
                                                label="NIC"
                                                labelPlacement="start"
                                            />
                                            <FormControlLabel
                                                value="passport"
                                                control={<Radio />}
                                                label="Passport"
                                                labelPlacement="start"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    <FormControl required>
                                        <FormLabel >Gender</FormLabel>
                                        <RadioGroup
                                            row

                                        >
                                            <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                                            <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type='text' label="Identity" variant='outlined' fullWidth required />
                                </Grid>



                                <Grid xs={12} item>
                                    <TextField type='email' label="Email" placeholder='Enter email' variant='outlined' fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type='text' label="Address" placeholder='Enter address - Optional' variant='outlined' fullWidth />
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack direction="row" spacing={2} >
                                        <Button  type='submit' variant="contained" color="error">Cancel</Button>
                                        <Button type='submit' variant="contained">Submit</Button>
                                    </Stack>
                                </Grid>


                            </Grid>

                        </form>
                    </Grid>
                </Grid>


            </Box> 
           {/*</Container>*/}
        </div>
       
    );
};

export default Patient;
