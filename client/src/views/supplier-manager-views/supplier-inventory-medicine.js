import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import {
  createTheme,
  ThemeProvider,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  InputBase,
} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
  },
});



// Create a styled search component
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

// Create a styled search icon wrapper
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Create a styled input base component
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

// Define the columns for your table
const columns = [
  { field: 'drugCode', headerName: 'Drug Code', flex: 1 },
  { field: 'drugName', headerName: 'Drug Name', flex: 1 },
  { field: 'specificationModel', headerName: 'Specification Model', flex: 1 },
  { field: 'unit', headerName: 'Unit', flex: 1 },
  { field: 'expiryDate', headerName: 'Expiry Date', flex: 1 },
  { field: 'quantity', headerName: 'Quantity', flex: 1 },
  { field: 'unitPrice', headerName: 'Unit Price', flex: 1 },
];

// Define a function to check if quantity is below reorder level
const isQuantityBelowReorderLevel = (row) => {
  const quantity = parseFloat(row.quantity);
  const reorderLevel = parseFloat(row.reOrderLevel);
  return quantity < reorderLevel;
};

const CombinedComponent = () => {
  const [rows, setRows] = useState([]);
  const [editableCell, setEditableCell] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowToRemove, setRowToRemove] = useState(null);
  const [editedRowIndex, setEditedRowIndex] = useState(null);
  const [, setSearchQuery] = useState('');
  const [fetchedRows, setFetchedRows] = useState([]);
  const [, setExpiryDateFlag] = useState(false);

  // Fetch data from API when component mounts
  useEffect(() => {
    fetch('http://localhost:4000/supplier/inventoryMedicine')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          const formattedData = data.data.map(item => ({
            _id: item._id,
            drugCode: item.drugCode,
            drugName: item.drugName,
            specificationModel: item.specificationModel,
            unit: item.unit,
            expiryDate: item.expiryDate,
            manufacturer: item.manufacturer,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            reOrderLevel: item.reOrderLevel,
          }));

          setFetchedRows(formattedData);
          setRows(formattedData);
        } else {
          // Handle error or set appropriate state based on your use case
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle click event to remove a row
  const handleRemoveClick = (index) => {
    setRowToRemove(index);
    setIsModalOpen(true);
  };

  // Handle confirmation of row removal
  const handleConfirmRemove = async () => {
    try {
      const deletedItemId = rows[rowToRemove]._id;
      const response = await axios.delete(`http://localhost:4000/supplier/inventoryMedicine/${deletedItemId}`);

      if (response.status === 200) {
        console.log('Item deleted successfully.');
      } else {
        console.error('Error deleting item:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    } finally {
      setIsModalOpen(false);
      const updatedRows = [...rows];
      updatedRows.splice(rowToRemove, 1);
      setRows(updatedRows);
      console.log('Item deleted successfully.');
    }
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle input change in a cell
  const handleInputChange = (index, name, value) => {
    const updatedRows = [...rows];
    updatedRows[index][name === '_id' ? name : name] = value;
    if (name === 'expiryDate') {
      const isExpiryDateLessThanTwoWeeks = isDateLessThanTwoWeeksAhead(value);
      setExpiryDateFlag(isExpiryDateLessThanTwoWeeks);
    }
    setRows(updatedRows);
  };

  // Handle cell click event
  const handleCellClick = (index, name) => {
    if (name !== '_id') {
      setEditableCell({ index, name });
      setEditedRowIndex(index);
    }
  };

  // Handle form submission
  const handleSubmit = async (updatedRow) => {
    try {
      const updatedDrugData = {
        drugCode: updatedRow.drugCode,
        drugName: updatedRow.drugName,
        specificationModel: updatedRow.specificationModel,
        unit: updatedRow.unit,
        expiryDate: updatedRow.expiryDate,
        manufacturer: updatedRow.manufacturer,
        quantity: updatedRow.quantity,
        unitPrice: updatedRow.unitPrice,
        reOrderLevel: updatedRow.reOrderLevel,
      };

      const updatedRows = [...rows];
      updatedRows[editedRowIndex] = updatedRow;
      setRows(updatedRows);

      if (updatedRow._id) {
        await axios.put(`http://localhost:4000/supplier/inventoryMedicine/${updatedRow._id}`, updatedDrugData);
      } else {
        const response = await axios.post(`http://localhost:4000/supplier/addInventoryMedicine`, updatedDrugData);
        if (response.status === 201) {
          console.log('Data inserted successfully:', response.data);
        } else {
          console.error('Error inserting data:', response.data.message);
        }
      }

      console.log('Data updated/inserted successfully:', updatedDrugData);
    } catch (error) {
      console.error('Error updating/inserting drug: ', error);
    }
  };

  // Handle save button click
  const handleSave = (index) => {
    const updatedRow = rows[index];

    const isRowValid = validateRow(updatedRow);

    if (isRowValid) {
      handleSubmit(updatedRow);
      const isExpiryDateLessThanTwoWeeks = isDateLessThanTwoWeeksAhead(updatedRow.expiryDate);
      setExpiryDateFlag(isExpiryDateLessThanTwoWeeks);
    } else {
      alert('Invalid data. Please fill all fields.');
    }

    setEditableCell(null);
    setEditedRowIndex(null);
  };

  // Validate a row
  const validateRow = (row) => {
    return row.drugCode && row.drugName && row.specificationModel && row.unit && row.expiryDate && row.manufacturer && row.quantity && row.unitPrice && row.reOrderLevel;
  };

  // Check if a date is less than two weeks ahead
  const isDateLessThanTwoWeeksAhead = (expiryDate) => {
    const twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);

    const expiryDateObject = new Date(expiryDate);

    return expiryDateObject < twoWeeksFromNow;
  };

  // Add a new row to the table
  const addRow = () => {
    setRows([...rows, {
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

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredRows = fetchedRows.filter(row =>
      Object.values(row).some(value =>
        value.toLowerCase().includes(query)
      )
    );

    setRows(filteredRows);
  };

  // Generate a report as a PDF
  const generateReport = async () => {
    const unit = 'pt';
    const size = 'A4';
    const orientation = 'portrait';

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(12);

    const title = 'Supplier Inventory Medicine';
    const headers = columns.map(column => column.headerName);
    const data = rows.map(row => columns.map(column => row[column.field]));

    const content = {
      startY: 50,
      head: [headers],
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save('Inventory.pdf');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Supplier Inventory Medicine
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchChange}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: '#BBDEFB', fontWeight: 'bold', fontSize: '28px' }}>
            <TableRow>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Drug Code</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Drug Name</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Specification Model</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Unit</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Expiry Date</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Manufacturer</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Unit Price</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Re-Order Level</TableCell>
              <TableCell style={{ fontSize: '20px', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} style={isQuantityBelowReorderLevel(row) ? { backgroundColor: 'yellow' } : null}>

                {Object.keys(row).map((key) => {
                  if (key !== '_id') {
                    return (
                      <TableCell
                        key={key}
                        onClick={() => handleCellClick(index, key)}
                        style={{
                          color: key === 'expiryDate' && isDateLessThanTwoWeeksAhead(row[key]) ? 'red' : 'inherit',
                        }}
                      >
                        {editableCell && editableCell.index === index && editableCell.name === key ? (
                          key === 'expiryDate' ? (
                            <input
                              type="date"
                              value={row[key]}
                              onChange={(e) => handleInputChange(index, key, e.target.value)}
                              style={{ fontSize: '20px' }}
                              min={new Date().toISOString().split('T')[0]}
                            />
                          ) : (
                            key !== 'quantity' && key !== 'unitPrice' && key !== 'reOrderLevel' ? (
                              <TextField
                                fullWidth
                                value={row[key]}
                                onChange={(e) => handleInputChange(index, key, e.target.value)}
                                style={{ fontSize: 'px' }}
                              />
                            ) : (
                              <TextField
                                fullWidth
                                value={row[key]}
                                onChange={(e) => handleInputChange(index, key, e.target.value)}
                                style={{ fontSize: '20px' }}
                                type="number" // Added type="number" for numeric input
                              />
                            )
                          )
                        ) : (
                          row[key]
                        )}
                      </TableCell>
                    );
                  }
                  return null;
                })}
                <TableCell>
                  <Button variant="outlined" style={{ backgroundColor: '#E57373', color: '#8B0000' }} onClick={() => handleRemoveClick(index)}>
                    Remove
                  </Button>
                </TableCell>
                <TableCell>
                  {editedRowIndex === index ? (
                    <Button variant="contained" style={{ backgroundColor: '#A5D6A7', color: '#004D40' }} onClick={() => handleSave(index)}>
                      Save
                    </Button>
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ConfirmModal open={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmRemove} />
      </TableContainer>

      <Button
        variant="outlined"
        style={{ backgroundColor: '#FFCDD2', color: '#8B0000' }}
        onClick={addRow}
      >
        Add Row
      </Button>

      <Button
        variant="outlined"
        style={{ backgroundColor: 'lightgreen', color: '#004D40 !important' }}
        onClick={generateReport}
      >
        Generate Report
      </Button>
    </ThemeProvider>
  );
};

const ConfirmModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', borderRadius: '20', p: 2 }}>
        <p>Are you sure you want to remove this row?</p>
        <Button style={{ color: 'red' }} onClick={onConfirm}>Yes</Button>
        <Button onClick={onClose}>No</Button>
      </Box>
    </Modal>
  );
};


export default CombinedComponent;

