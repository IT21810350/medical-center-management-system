import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography,MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    role: "",
  });

  const { email, password, username, role } = inputValue;

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
      username: "",
      role: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Signup Account
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
          label="Username"
          name="username"
          value={username}
          placeholder="Enter your username"
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

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="role"
          value={role}
          label="Role"
          onChange={handleOnChange}
        >
          <MenuItem value={"patient"}>Patient</MenuItem>
          <MenuItem value={"doctor"}>Doctor</MenuItem>
          <MenuItem value={"financial-manager"}>Financial Manager</MenuItem>
          <MenuItem value={"lab-assistant"}>Lab Asistant</MenuItem>
          <MenuItem value={"resource-person"}>Resource Person</MenuItem>
          <MenuItem value={"pharmacist"}>Pharmacist</MenuItem>
          <MenuItem value={"supplier"}>Supplier</MenuItem>
          <MenuItem value={"hr"}>Human Resource manager</MenuItem>
        </Select>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Typography variant="body1" gutterBottom>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Signup;
