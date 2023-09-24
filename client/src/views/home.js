import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
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
                Your wellness is our aim {username}
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
