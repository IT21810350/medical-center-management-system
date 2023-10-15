// Invoices.js
import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Invoice = () => {
  const [invoices, setInvoices] = useState([]); // Rename to 'invoices'
  const [newInvoice, setNewInvoice] = useState({
    invoiceNumber: '', // Adjust field names to match the Mongoose model
    patientName: '',
    invoiceDate: '',
    status: '',
  });

  // New state variables for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredInvoices, setFilteredInvoices] = useState([]); // Rename to 'filteredInvoices'

  useEffect(() => {
    Axios.get('http://localhost:4000/invoices') // Update the API endpoint
      .then((response) => {
        setInvoices(response.data.invoices); // Rename to 'invoices'
        setFilteredInvoices(response.data.invoices); // Initialize filtered invoices with all invoices
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCreateInvoice = () => {
    Axios.post('http://localhost:4000/invoices', newInvoice) // Update the API endpoint
      .then((response) => {
        setInvoices([...invoices, response.data]); // Rename to 'invoices'
        setNewInvoice({
          invoiceNumber: '', // Adjust field names to match the Mongoose model
          patientName: '',
          invoiceDate: '',
          status: '',
        });

        // After creating a new invoice, update filtered invoices to include the new invoice
        setFilteredInvoices([...filteredInvoices, response.data]); // Rename to 'filteredInvoices'
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteInvoice = (id) => {
    Axios.delete(`http://localhost:4000/invoices/${id}`) // Update the API endpoint
      .then(() => {
        setInvoices(invoices.filter((invoice) => invoice._id !== id)); // Rename to 'invoices'

        // After deleting an invoice, update filtered invoices to exclude the deleted invoice
        setFilteredInvoices(filteredInvoices.filter((invoice) => invoice._id !== id)); // Rename to 'filteredInvoices'
      })
      .catch((error) => console.error(error));
  };

  // Update filtered invoices based on the search term
  useEffect(() => {
    const filtered = invoices.filter(
      (invoice) =>
        invoice.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInvoices(filtered); // Rename to 'filteredInvoices'
  }, [searchTerm, invoices]);

  return (
    <div>
      <h1 style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Invoices</h1> 

      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', fontSize: '39px' }}
      />

      {/* Create Invoice Form */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label="Invoice Number" // Adjust field name
          variant="outlined"
          value={newInvoice.invoiceNumber}
          onChange={(e) => setNewInvoice({ ...newInvoice, invoiceNumber: e.target.value })} // Adjust field name
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Patient Name" // Adjust field name
          variant="outlined"
          value={newInvoice.patientName}
          onChange={(e) => setNewInvoice({ ...newInvoice, patientName: e.target.value })} // Adjust field name
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Invoice Date" // Adjust field name
          type="date"
          variant="outlined"
          value={newInvoice.invoiceDate}
          onChange={(e) => setNewInvoice({ ...newInvoice, invoiceDate: e.target.value })} // Adjust field name
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <TextField
          label="Status" // Adjust field name
          variant="outlined"
          value={newInvoice.status}
          onChange={(e) => setNewInvoice({ ...newInvoice, status: e.target.value })} // Adjust field name
          style={{ marginRight: '10px', fontSize: '28px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCreateInvoice} style={{ fontSize: '21px' }}>
          Create Invoice
        </Button>
      </Paper>

      {/* Invoices Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Invoice Number</TableCell> {/* Adjust field name */}
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Patient Name</TableCell> {/* Adjust field name */}
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Invoice Date</TableCell> 
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Status</TableCell> 
              <TableCell style={{ fontSize: '30px', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoices.map((invoice) => (
              <TableRow key={invoice._id}>
                <TableCell style={{ fontSize: '27px' }}>{invoice.invoiceNumber}</TableCell> 
                <TableCell style={{ fontSize: '27px' }}>{invoice.patientName}</TableCell> 
                <TableCell style={{ fontSize: '27px' }}>{new Date(invoice.invoiceDate).toLocaleDateString()}</TableCell>
                <TableCell style={{ fontSize: '27px' }}>{invoice.status}</TableCell> 
                <TableCell>
                  <Button variant="contained" color="primary" component={Link} to={`/lab-invoice/update/${invoice._id}`} style={{ fontSize: '21px' }}>
                    Update
                  </Button>
                  {' '}
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteInvoice(invoice._id)} style={{ fontSize: '21px' }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Invoice;
