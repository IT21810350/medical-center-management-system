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
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Lightning Blue
    },
  },
});

export default function InventoryTable() {
  const [rows, setRows] = useState([
    {
      supplierName: '',
      drugOrEquipment: '',
      name: '',
      companyName: '',
      quantity: '',
      unitPrice: '',
    }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleDropdownChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, {
      supplierName: '',
      drugOrEquipment: '',
      name: '',
      companyName: '',
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
              <TableCell sx={{ fontWeight: 'bold', width: '15%', fontSize: '20px' }}>Supplier Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '15%', fontSize: '20px' }}>Drug or Equipment Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '15%', fontSize: '20px' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '15%', fontSize: '20px' }}>Company Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '15%', fontSize: '20px' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '15%', fontSize: '20px' }}>Unit Price</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    name="supplierName"
                    value={row.supplierName}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel>Drug or Equipment</InputLabel>
                    <Select
                      name="drugOrEquipment"
                      value={row.drugOrEquipment}
                      onChange={(e) => handleDropdownChange(index, e)}
                    >
                      <MenuItem value="Drug">Drug</MenuItem>
                      <MenuItem value="Equipment">Equipment</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <TextField
                    name="name"
                    value={row.name}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="companyName"
                    value={row.companyName}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="quantity"
                    value={row.quantity}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="unitPrice"
                    value={row.unitPrice}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={() => removeRow(index)}>Remove</Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={addRow}>Add Row</Button>
    </ThemeProvider>
  );
}
