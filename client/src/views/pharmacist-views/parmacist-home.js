import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

// Corrected file paths for image imports
import img1 from '../../assets/img/pharmacist/PharmacistProfile.jpeg';
import img2 from '../../assets/img/pharmacist/MedicineStore.jpeg';
import img3 from '../../assets/img/pharmacist/MedicineOrder.jpeg';
import img4 from '../../assets/img/pharmacist/MedicineSales.jpeg';

const cardStyle = {
  maxWidth: 345,
  height: '100%', // Fixed height for all cards
};

const cardImageStyle = {
  height: 260, // Fixed height for all card images
};

const PharmacistProfile = () => {
  return (
    <Grid item xs={3}>
      <Card sx={cardStyle}>
        <Link to="/pharmacistProfile" style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={cardImageStyle}
              image={img1}
              alt="Pharmacist Profile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pharmacist Profile
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A highly trained healthcare professional responsible for ensuring the safe and effective use of medications.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

const MedicineStore = () => {
  return (
    <Grid item xs={3}>
      <Card sx={cardStyle}>
        <Link to="/medicineStore" style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={cardImageStyle}
              image={img2}
              alt="Medicine Store"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Medicine Store
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A medicine store is a retail establishment where medications and healthcare-related products are dispensed and sold to the public.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

const MedicineOrder = () => {
  return (
    <Grid item xs={3}>
      <Card sx={cardStyle}>
        <Link to="/medicineOrder" style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={cardImageStyle}
              image={img3}
              alt="Medicine Order"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Medicine Order
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The process of requesting and purchasing medications and submitting a prescription or selecting healthcare products.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

const MedicineSales = () => {
  return (
    <Grid item xs={3}>
      <Card sx={cardStyle}>
        <Link to="/medicineSales" style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={cardImageStyle}
              image={img4}
              alt="Medicine Sales"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Medicine Sales
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Encompass the activities related to the distribution and selling of medications, pharmaceutical products, and healthcare supplies.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

const Pharmacist = () => {
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
        }}
      >
        {<img style={{ display: 'none' }} alt="" />}

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(33, 150, 243)',
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
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                align="center"
                gutterBottom
              >
                Welcome to Our Pharmacy!
              </Typography>
              <Link variant="subtitle1" href="#">
                {/* Link content goes here */}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container>
        <Grid container spacing={2}>
          <PharmacistProfile />
          <MedicineStore />
          <MedicineOrder />
          <MedicineSales />
        </Grid>
      </Container>
    </div>
  );
};

export default Pharmacist;
