import * as React from 'react';
//import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import NavBar from '../../components/pharmacist-component/pharmacist-nav-bar';
import {useState} from 'react';
import axios from 'axios';


export default function OrderForm() {

  const [medicineDetails, setMedicineDetails] = useState({
    name: '',
      dosage: '',
      type: '',
      quantity: '',
      due: '',
      order: '',
      reorder: '',
      more: '',
});

const handleOnChange = (e) => {
  const { name, value } = e.target;

  setMedicineDetails({
    ...medicineDetails,
    [name]: value,
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:4000/pharmacistProfile/moadd', medicineDetails);
    setMedicineDetails({
      name: '',
      dosage: '',
      type: '',
      quantity: '',
      due: '',
      order: '',
      reorder: '',
      more: '',
    });

  } catch (error) {
    
  }

};


  return (
    <div>
      <NavBar />
      <Container
        maxWidth="xl"
        style={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Center both horizontally and vertically
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'white',
        }}
      >
        <div style={{ padding: '20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Supplier Manager</h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              required
              fullWidth
              name='name'
              value={medicineDetails.name}
              id="outlined-required-medicine-name"
              label="Medicine Name"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleOnChange(e)}
            />
            <TextField
              required
              fullWidth
              name='dosage'
              value={medicineDetails.dosage}
              id="outlined-required-dosage"
              label="Dosage"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleOnChange(e)}
            />
            <TextField
              required
              fullWidth
              name='type'
              value={medicineDetails.type}
              id="outlined-required-medicine-type"
              label="Medicine Type"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleOnChange(e)}
            />
            <TextField
              required
              fullWidth
              name='quantity'
              value={medicineDetails.quantity}
              id="outlined-required-quantity"
              label="Quantity"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleOnChange(e)}
            />
            <TextField
              required
              fullWidth
              name='due'
              value={medicineDetails.due}
              id="outlined-required-due-date"
              label="Due Date"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleOnChange(e)}
            />
            <TextField
              required
              fullWidth
              name='order'
              value={medicineDetails.order}
              id="outlined-required-order-no"
              label="Order No"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleOnChange(e)}
            />
            <TextField
              required
              fullWidth
              name='reorder'
              value={medicineDetails.reorder}
              id="outlined-required-order-no"
              label="Medicine Reorder"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleOnChange(e)}
            />
            <TextField
              required
              fullWidth
              name='more'
              value={medicineDetails.more}
              id="outlined-required-order-no"
              label="More Details"
              InputProps={{ style: { textAlign: 'center' } }}
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Cancel
          </Button>
          <Button
            type='submit'
            variant="contained"
            color="error"
            onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
}