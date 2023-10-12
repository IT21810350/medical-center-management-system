import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


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

export default function CombinedComponent() {
  return (
    <Box>
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
           Order for Pharmacy
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
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          backgroundColor: '#E1F5FE',
          p: 3,
          borderRadius: 8,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: 400,
          margin: 'auto',
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Order For Pharmacy</h1>
        <TextField
          id="supplier-name"
          label="Supplier Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="drug-equipment-name"
          select
          label="Drug / Equipment "
          variant="outlined"
          fullWidth
          margin="normal"
        >
          <MenuItem value="drug">Drug</MenuItem>
          <MenuItem value="equipment">Equipment</MenuItem>
        </TextField>
        <TextField
          id="drug-equipment-name" // Added new field for drug or equipment name
          label="Drug / Equipment Name" // Label for the new field
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="dosage"
          label="Dosage"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="quantity"
          label="Quantity"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="due-date"
          label="Due Date"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </Box>
    </Box>
  );
}
