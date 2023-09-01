import React, { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import {
  Button,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
} from "@mui/material";
import backgroundImage from '../assets/img/common/home-hero-background-img.jpg'

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }

      try {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);

        if (status) {
          console.log(`Hello ${user}`);
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // const handleLogout = () => {
  //   removeCookie("token");
  //   navigate("/signup");
  // };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
            Home
          </Button>
          <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
            Contact Us
          </Button>
          <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
            About Us
          </Button>
          <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
            Lab Facilities
          </Button>
          <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
            Popular Doctors
          </Button>
          <Link color="inherit" to="/signup">
            <Button variant="contained" color="info">
              Signup
            </Button>
          </Link>
          {/* <Link color="inherit" href="#" onClick={handleLogout}>
            <Button variant="contained" color="warning">
              Logout
            </Button>
          </Link> */}
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
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
              Your wellness is our aim {username}
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Services
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
