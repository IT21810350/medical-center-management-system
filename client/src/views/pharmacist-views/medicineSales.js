import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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

export default function MedicineSales() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        // Apply custom CSS class to the DataGrid container
        className="custom-datagrid"
      />
    </div>
  );
}
