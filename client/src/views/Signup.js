import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, MenuItem, FormControl, InputLabel, Grid, Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import axios from "axios";
import signupimg from '../assets/img/doctor/doctor-profile-img.jpg'

const Item = Paper;

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    role: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username, role } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });

    // if (name === "email" || name === "username" || name === "password") {
    //   try {
    //     const response =  axios.post(
    //       `http://localhost:4000/validate-${name}`,
    //       {
    //         [name]: value,
    //       },
    //       { withCredentials: true }
    //     );
    //     const { success, message } = response.data;
    //     if (success) {
    //       setValidationMessages({ ...validationMessages, [name]: "" });
    //     } else {
    //       setValidationMessages({ ...validationMessages, [name]: message });
    //     }
    //   } catch (error) {
    //     console.error(`Error validating ${name}: ${error.message}`);
    //   }
    // }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let validationError = false;
    const newValidationMessages = {};

    if (!email) {
      newValidationMessages.email = "Email is required";
      validationError = true;
    }

    if (!username) {
      newValidationMessages.username = "Username is required";
      validationError = true;
    }

    if (!password) {
      newValidationMessages.password = "Password is required";
      validationError = true;
    }

    if (validationError) {
      setValidationMessages(newValidationMessages);
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message, user } = data;

      if (success) {
        if (user.role === "patient") {
          setTimeout(() => {
            navigate("/patient-create-account");
          }, 1000);
        } else if (user.role === "doctor") {
          setTimeout(() => {
            navigate("/doctor-create-profile");
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
            navigate("/signup");
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
      username: "",
      role: "",
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
          <Item sx={{ marginY: 10, marginX: 15 }} elevation={0}>
            <Grid container alignItems="center" justifyContent="center">
              <Typography variant="h2" gutterBottom style={{ color: 'blue', fontSize: '50px' }}>
                Signup Account
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
                    error={!!validationMessages.email}
                    helperText={validationMessages.email}
                  />
                </Grid>

                <Grid>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                    margin="normal"
                    variant="outlined"
                    error={!!validationMessages.username}
                    helperText={validationMessages.password}
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
                    error={!!validationMessages.password}
                    helperText={validationMessages.password}
                  />
                </Grid>

                <Grid>
                  <FormControl fullWidth sx={{ marginY: 2 }}>
                    <InputLabel id="user-role">Role</InputLabel>
                    <Select
                      labelId="user-role"
                      id="demo-simple-select"
                      name="role"
                      value={role}
                      label="Role"
                      onChange={handleOnChange}
                    >
                      <MenuItem value={"patient"}>Patient</MenuItem>
                      <MenuItem value={"doctor"}>Doctor</MenuItem>
                      <MenuItem value={"financialManager"}>Financial Manager</MenuItem>
                      <MenuItem value={"labAssistant"}>Lab Asistant</MenuItem>
                      <MenuItem value={"resourcePerson"}>Resource Person</MenuItem>
                      <MenuItem value={"pharmacist"}>Pharmacist</MenuItem>
                      <MenuItem value={"supplierManager"}>Supplier</MenuItem>
                      <MenuItem value={"hr"}>Human Resource manager</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid container justifyContent="space-between" alignItems="center" sx={{ marginY: 1 }}>
                  <Grid item>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" gutterBottom>
                      Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
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

export default Signup;
