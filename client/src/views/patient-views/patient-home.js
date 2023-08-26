import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const Patient = () => {
    return (
        <div>
            <Typography container>
                Enter Patient Details..
            </Typography>
            
            <Card>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required/>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth required/>
                            </Grid>

                            <Grid xs={12} item>
                                <TextField type='email' label="Email" placeholder='Enter email' variant='outlined' fullWidth required/>
                            </Grid>

                            <Grid xs={12} item>
                                <TextField type='number' label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required/>
                            </Grid>

                            <Grid xs={12} item>
                                <Button type='submit' variant='contained' fullWidth color="primary">Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Patient;
