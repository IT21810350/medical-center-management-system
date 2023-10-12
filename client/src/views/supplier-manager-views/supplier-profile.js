import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

import img from '../../assets/img/supplier/supplier2.webp';

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
      width: '10ch',
      '&:focus': {
        width: '10ch',
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledTextField = styled(TextField)({
  marginBottom: '1rem',
  width: '100%',
});

export default function CombinedComponent() {
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
        "http://localhost:4000/supplierManagerProfile",
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
      <AppBar position="static">
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
            Supplier Profile
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
      <Grid container spacing={2}>
        <Grid item xs={7.5}>
          <Typography variant="h4" gutterBottom component="div">
            Supplier Profile
          </Typography>
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              style={{ height: '220px' }}
              image={img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                Ms.Olivia Harris
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Supplier
                Leeds,
                United Kingdom
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4.5}>
          <Item>
            <StyledTextField
              label="First Name"
              variant="outlined"
              name="FirstName"
              value={FirstName}
              onChange={handleInputChange}
            />
            <StyledTextField
              label="Last Name"
              variant="outlined"
              name="LastName"
              value={LastName}
              onChange={handleInputChange}
            />
            <StyledTextField
              label="Email Address"
              variant="outlined"
              name="Email"
              value={Email}
              onChange={handleInputChange}
            />
            <StyledTextField
              label="Phone Number"
              variant="outlined"
              name="PhoneNumber"
              value={PhoneNumber}
              onChange={handleInputChange}
            />
            <StyledTextField
              label="Address"
              variant="outlined"
              name="Address"
              value={Address}
              onChange={handleInputChange}
            />
            <StyledTextField
              label="Company Name"
              variant="outlined"
              name="CompanyName"
              value={CompanyName}
              onChange={handleInputChange}
            />
            <StyledTextField
              label="NIC"
              variant="outlined"
              name="NIC"
              value={NIC}
              onChange={handleInputChange}
            />
            <StyledTextField
              label="Bio"
              variant="outlined"
              name="Bio"
              value={Bio}
              onChange={handleInputChange}
            />
            <Button variant="contained" startIcon={<EditIcon />} onClick={handleSubmit}>
              Edit
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
