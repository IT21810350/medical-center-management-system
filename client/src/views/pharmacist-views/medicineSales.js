import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

// Import your image source
import img8 from '../../assets/img/pharmacist/sales.jpeg';
import NavBar from '../../components/pharmacist-component/pharmacist-nav-bar';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 120 },
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'quantitySold', headerName: 'Quantity Sold', type: 'number', width: 150 },
  { field: 'unitPrice', headerName: 'Unit Price (Rs)', type: 'number', width: 150 },
  { field: 'totalPrice', headerName: 'Total Price (Rs)', type: 'number', width: 150 },
  { field: 'description', headerName: 'Description', width: 150 },
];

const rows = [
  { id: 1, productName: 'Aspirin', quantitySold: 100, unitPrice: 10.99,totalPrice: 1099.00, description: 'Pain reliever' },
  { id: 2, productName: 'Ibuprofen', quantitySold: 50, unitPrice: 7.49,totalPrice: 874.50, description: 'Pain reliever' },
  { id: 3, productName: 'Cough Syrup', quantitySold: 18, unitPrice: 450.00, totalPrice: 8100.00, description: 'Cold remedy' },
  { id: 4, productName: 'Bandages', quantitySold: 20, unitPrice: 250.00, totalPrice: 5000.00, description: 'First aid' },
  { id: 5, productName: 'Hand Sanitizer', quantitySold: 15, unitPrice: 175.00,totalPrice: 2625.00, description: 'Hygiene' },
];

const RootDiv = styled('div')({
  flexGrow: 1,
  padding: theme => theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
  justifyContent: 'center', // Center vertically
});

const Image = styled('img')({
  maxWidth: '100%', // Ensure the image scales within its container
  height: 'auto', // Maintain aspect ratio
});

export default function MedicineSales() {
  return (
    <RootDiv>
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Medicine Sales</h1>
      <Image src={img8} alt="Medicine" />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          className="custom-datagrid"
        />
      </div>
    </RootDiv>
  );
}
