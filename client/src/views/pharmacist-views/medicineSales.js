import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

// Import your image source
import img8 from '../../assets/img/pharmacist/sales.jpeg';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 120 },
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'quantitySold', headerName: 'Quantity Sold', type: 'number', width: 150 },
  { field: 'totalPrice', headerName: 'Total Price (Rs)', type: 'number', width: 150 },
  { field: 'description', headerName: 'Description', width: 150 },
];

const rows = [
  { id: 1, productName: 'Aspirin', quantitySold: 10, totalPrice: 59.90, description: 'Pain reliever' },
  { id: 2, productName: 'Ibuprofen', quantitySold: 5, totalPrice: 37.45, description: 'Pain reliever' },
  { id: 3, productName: 'Cough Syrup', quantitySold: 8, totalPrice: 79.92, description: 'Cold remedy' },
  { id: 4, productName: 'Bandages', quantitySold: 20, totalPrice: 49.80, description: 'First aid' },
  { id: 5, productName: 'Hand Sanitizer', quantitySold: 15, totalPrice: 74.85, description: 'Hygiene' },
];

const RootDiv = styled('div')({
  flexGrow: 1,
  padding: theme => theme.spacing(2),
});

const Image = styled('img8')({
  maxWidth: '100%', // Ensure the image scales within its container
  height: 'auto', // Maintain aspect ratio
});

export default function MedicineSales() {
  return (
    <RootDiv>
      <h1>Medicine Sales</h1>
      <Image src={img8} alt="Medicine" />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          className="custom-datagrid"
        />
      </div>
    </RootDiv>
  );
}
