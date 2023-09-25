import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Lightning Blue
    },
  },
});

export default function BasicTable() {
  const [rows, setRows] = useState([
    {
      medicineCode: '',
      medicineName: '',
      dosage :  '',
      medicineType: '',
      expiryDate: '',
      quantity: '',
      unitPrice: '',
    }
  ]);

  const handleInputChange = (index, name, value) => {
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, {
      medicineCode : '',
      medicineName : '',
      dosage : '',
      medicineType : '',
      expiryDate: '',
      quantity: '',
      unitPrice: '',
    }]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: '#BBDEFB', fontWeight: 'bold' }}>
            <TableRow>
              <TableCell>Medicine Code</TableCell>
              <TableCell>Medicine Name</TableCell>
              <TableCell>Dosage</TableCell>
              <TableCell>MedicineType</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell></TableCell>
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
      <button type="button" onClick={addRow}>Add Row</button>
    </ThemeProvider>
  );
}
