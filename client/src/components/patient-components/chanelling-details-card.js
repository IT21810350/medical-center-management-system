import React from 'react';
import { Box, Grid, Typography,  } from '@mui/material';


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