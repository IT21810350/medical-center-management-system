import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import img1 from '../../assets/img/supplier/sage.jpg';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';



const Pharmacist  = () => {
    return (
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
        //backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }}  />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(201, 76, 76, 0.3)',
        }}
      />
      
      
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" align="center" gutterBottom>
              Welcome to Our Pharmacy !
            </Typography>
            <Typography variant="h5" color="inherit" align="center" paragraph>
              We'll always make time for you..
            </Typography>
            <Link variant="subtitle1" href="#">
              
              
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
            
        </div>
    );
};

export default Pharmacist;


