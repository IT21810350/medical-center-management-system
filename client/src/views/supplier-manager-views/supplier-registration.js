import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function App() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    CompanyName: '',
    NIC: '',
    Bio: '',
  });

  const { FirstName, LastName, Email, PhoneNumber, Address, CompanyName, NIC, Bio } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/supplierRegistration",
        { ...formData },
        { withCredentials: true }
      );
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        CompanyName: '',
        NIC: '',
        Bio: '',
      });
      alert("Your response is successful");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
  <AppBar position="static" sx={{ margin: '20px 0' }}>

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Supplier Registration
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ p: 3, border: '2px solid #90A4AE', borderRadius: '8px', backgroundColor: '#FFFFFF' , margin: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Supplier Registration</h1>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="outlined-required-first-name"
                label="First Name"
                value={FirstName}
                onChange={handleInputChange}
                name="FirstName"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="outlined-required-last-name"
                label="Last Name"
                value={LastName}
                onChange={handleInputChange}
                name="LastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required-email"
                label="Email Address"
                type="email"
                value={Email}
                onChange={handleInputChange}
                name="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required-address"
                label="Address"
                value={Address}
                onChange={handleInputChange}
                name="Address"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="outlined-required-phone"
                label="Phone Numbers"
                value={PhoneNumber}
                onChange={handleInputChange}
                name="PhoneNumber"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="outlined-required-nic"
                label="NIC Number"
                value={NIC}
                onChange={handleInputChange}
                name="NIC"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required-company-name"
                label="Company Name"
                value={CompanyName}
                onChange={handleInputChange}
                name="CompanyName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required-bio"
                label="Your Bio"
                multiline
                rows={4}
                value={Bio}
                onChange={handleInputChange}
                name="Bio"
              />
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>

        </Box>
      </Container>
    </div>
  );
}
