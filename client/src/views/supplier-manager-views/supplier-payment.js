import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    InvoiceNo: '',
    Date: '',
    NoOfItems: '',
    PaidAmount: '',
    SupplierID: '',
    Company: '',
    TotalAmount: '',
  });

  const { 
    InvoiceNo, 
    Date, 
    NoOfItems, 
    PaidAmount, 
    SupplierID, 
    Company, 
    TotalAmount 
  } = formData;

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
        "http://localhost:4000/supplierPayment",
        { ...formData },
        { withCredentials: true }
      );
      setFormData({
        InvoiceNo: '',
        Date: '',
        NoOfItems: '',
        PaidAmount: '',
        SupplierID: '',
        Company: '',
        TotalAmount: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#E1F5FE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          p: 3,
          border: '2px solid #90A4AE',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Supplier Payment</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-invoice-no"
              label="Invoice No"
              value={InvoiceNo}
              onChange={handleInputChange}
              name="InvoiceNo"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-date"
              label="Date"
              value={Date}
              onChange={handleInputChange}
              name="Date"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-no-of-items"
              label="No of Items"
              value={NoOfItems}
              onChange={handleInputChange}
              name="NoOfItems"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-paid-amount"
              label="Paid Amount"
              value={PaidAmount}
              onChange={handleInputChange}
              name="PaidAmount"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-supplier-id"
              label="Supplier ID"
              value={SupplierID}
              onChange={handleInputChange}
              name="SupplierID"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-company"
              label="Company"
              value={Company}
              onChange={handleInputChange}
              name="Company"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-total-amount"
              label="Total Amount"
              value={TotalAmount}
              onChange={handleInputChange}
              name="TotalAmount"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" style={{ backgroundColor: 'red', color: '#ffffff' }} onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
