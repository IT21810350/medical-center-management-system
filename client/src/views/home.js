import React from "react";

import NavBar from "../components/NavBar";
import {
  Button,
  Container,
  Typography,
  Box,
  CssBaseline,
  Grid,
} from "@mui/material";
import backgroundImage from '../assets/img/common/home-hero-background-img.jpg'

const Home = () => {

  return (
    <Grid>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
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
                Medical Center Management System
              </Typography>
              <Typography variant="h5" color="textSecondary" sx={{ marginBottom: 4 }}>
                Your wellness is our aim 
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Services
              </Button>
            </Box>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
