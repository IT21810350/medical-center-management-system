import React from 'react';
import {Paper, Box, Grid, Typography} from '@mui/material';


export default function Heading({title,description}) {
    return(
        <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff', // text color
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: "https://source.unsplash.com/random?wallpapers",
                    //backgroundImage: {wallpaper}
                }} >

                {/*<img style={{ display: 'none' }} src={wallpaper} alt="img" /> */}

                <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)', }} />
                <Grid container>
                    <Grid item md={12} >
                        <Box sx={{alignItems: 'center', position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }} >
                            <Typography component="h2" variant="h2" color="inherit" gutterBottom align='center'>{title}</Typography>
                            <Typography variant="h6" color="inherit" align='center' paragraph>{description}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
    );
}