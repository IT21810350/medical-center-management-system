import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Container, TextField, Typography } from "@mui/material";

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
            navigate("/patient");
          }, 1000);
        } else if (user.role === "doctor") {
          setTimeout(() => {
            navigate("/doctor");
          }, 1000);
        } else if (user.role === "hr") {
          setTimeout(() => {
            navigate("/hr");
          }, 1000);
        } else if (user.role === "financial-manager") {
          setTimeout(() => {
            navigate("/financial-manager");
          }, 1000);
        } else if (user.role === "lab-assistant") {
          setTimeout(() => {
            navigate("/lab-assistant");
          }, 1000);
        } else if (user.role === "resource-person") {
          setTimeout(() => {
            navigate("/resource-person");
          }, 1000);
        } else if (user.role === "pharmacist") {
          setTimeout(() => {
            navigate("/pharmacist");
          }, 1000);
        } else if (user.role === "supplier") {
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
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Login Account
      </Typography>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Typography variant="body1" gutterBottom>
          Don't have an account? <Link to="/signup">Signup</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
