import * as React from 'react'; // Importing React library

import { styled, alpha } from '@mui/material/styles'; // Importing styled and alpha functions from Material-UI

import AppBar from '@mui/material/AppBar'; // Importing AppBar component from Material-UI
import Box from '@mui/material/Box'; // Importing Box component from Material-UI
import Toolbar from '@mui/material/Toolbar'; // Importing Toolbar component from Material-UI
import IconButton from '@mui/material/IconButton'; // Importing IconButton component from Material-UI
import Typography from '@mui/material/Typography'; // Importing Typography component from Material-UI
import InputBase from '@mui/material/InputBase'; // Importing InputBase component from Material-UI
import MenuIcon from '@mui/icons-material/Menu'; // Importing MenuIcon from Material-UI icons
import SearchIcon from '@mui/icons-material/Search'; // Importing SearchIcon from Material-UI icons
import Table from '@mui/material/Table'; // Importing Table component from Material-UI
import TableBody from '@mui/material/TableBody'; // Importing TableBody component from Material-UI
import TableCell from '@mui/material/TableCell'; // Importing TableCell component from Material-UI
import TableContainer from '@mui/material/TableContainer'; // Importing TableContainer component from Material-UI
import TableHead from '@mui/material/TableHead'; // Importing TableHead component from Material-UI
import TableRow from '@mui/material/TableRow'; // Importing TableRow component from Material-UI
import Paper from '@mui/material/Paper'; // Importing Paper component from Material-UI
import TextField from '@mui/material/TextField'; // Importing TextField component from Material-UI
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // Importing AddShoppingCartIcon from Material-UI icons
import Button from '@mui/material/Button'; // Importing Button component from Material-UI
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Importing createTheme and ThemeProvider from Material-UI

// Creating a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Lightning Blue
    },
  },
});

// Creating a styled Search component
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

// Creating a styled SearchIconWrapper component
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Creating a styled InputBase component
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

// Defining the CombinedComponent functional component
export default function CombinedComponent() {
  const [rows, setRows] = React.useState([ // Initializing state for table rows
    {
      no: '',
      drugCode: '',
      drugName: '',
      specificationModel: '',
      unit: '',
      expiryDate: '',
      manufacturer: '',
      quantity: '',
      unitPrice: '',
      reOrderLevel: '',
    }
  ]);

  // Function to handle input changes
  const handleInputChange = (index, name, value) => {
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  // Function to add a new row
  const addRow = () => {
    setRows([...rows, {
      no: '',
      drugCode: '',
      drugName: '',
      specificationModel: '',
      unit: '',
      expiryDate: '',
      manufacturer: '',
      quantity: '',
      unitPrice: '',
      reOrderLevel: '',
    }]);
  };

  // Function to remove a row
  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
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
              MUI
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
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: '#BBDEFB', fontWeight: 'bold' }}>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' ,fontSize:'20px'}}>Drug Code</TableCell>
              <TableCell style={{ fontWeight: 'bold',fontSize:'20px' }}>Drug Name</TableCell>
              <TableCell style={{ fontWeight: 'bold',fontSize:'20px' }}>Specification Model</TableCell>
              <TableCell style={{ fontWeight: 'bold',fontSize:'20px'}}>Unit</TableCell>
              <TableCell style={{ fontWeight: 'bold',fontSize:'20px' }}>Expiry Date</TableCell>
              <TableCell style={{ fontWeight: 'bold',fontSize:'20px' }}>Manufacturer</TableCell>
              <TableCell style={{ fontWeight: 'bold',fontSize:'20px' }}>Quantity</TableCell>
              <TableCell style={{ fontWeight: 'bold',fontSize:'20px' }}>Unit Price</TableCell>
              <TableCell style={{ fontWeight: 'bold' ,fontSize:'20px'}}>Re-Order Level</TableCell>
              <TableCell style={{ fontWeight: 'bold',fontSize:'20px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {Object.keys(row).map((key) => (
                  <TableCell key={key}>
                    <TextField
                      name={key}
                      value={row[key]}
                      onChange={(e) => handleInputChange(index, e.target.name, e.target.value)}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => removeRow(index)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="outlined" color="primary" onClick={addRow}>Add Row</Button>
    </ThemeProvider>
  );
}
//style={{ fontWeight: 'bold' }}