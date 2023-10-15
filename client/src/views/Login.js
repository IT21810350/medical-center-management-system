import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Typography, Grid, Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import signupimg from '../assets/img/doctor/doctor-profile-img.jpg'

const Item = Paper;

const Login = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message, user } = data;

      if (success) {
        if (user.role === "patient") {
          setTimeout(() => {
            navigate("/patient-profile");
          }, 1000);
        } else if (user.role === "doctor") {
          setTimeout(() => {
            navigate("/doctor");
          }, 1000);
        } else if (user.role === "hr") {
          setTimeout(() => {
            navigate("/hr");
          }, 1000);
        } else if (user.role === "financialManager") {
          setTimeout(() => {
            navigate("/financial-manager");
          }, 1000);
        } else if (user.role === "labAssistant") {
          setTimeout(() => {
            navigate("/lab-assistant");
          }, 1000);
        } else if (user.role === "resourcePerson") {
          setTimeout(() => {
            navigate("/resource-person");
          }, 1000);
        } else if (user.role === "pharmacist") {
          setTimeout(() => {
            navigate("/pharmacist");
          }, 1000);
        } else if (user.role === "supplierManager") {
          setTimeout(() => {
            navigate("/supplier");
          }, 1000);
        } else {
          setTimeout(() => {
            navigate("/login");
          }, 1000);
          console.error("values not been sent");
        }
      } else {
        console.error(message);
      }
    } catch (error) {
      console.error(error);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ height: '10%' }}>
          <Item elevation={0}>
            <img src={signupimg} alt="" style={{ maxWidth: '100%', height: '600px' }} />
          </Item>
        </Grid>
        <Grid item xs={6} sx={{ height: '10%' }}>
          <Item sx={{ marginY: 20, marginX: 15 }} elevation={0}>
            <Grid container alignItems="center" justifyContent="center">
              <Typography variant="h2" gutterBottom style={{ color: 'blue', fontSize: '50px' }}>
                Login Account
              </Typography>
            </Grid>
            <Grid>
              <form onSubmit={handleSubmit}>
                <Grid>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>

                <Grid>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>

                <Grid container justifyContent="space-between" alignItems="center" sx={{ marginY: 1 }}>
                  <Grid item>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" gutterBottom>
                      Don't have an account? <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;