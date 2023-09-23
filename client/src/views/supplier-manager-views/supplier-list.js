import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'supplierName', headerName: 'Supplier name', flex: 1 },
  { field: 'nic', headerName: 'NIC', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'phoneNumber', headerName: 'Phone number', flex: 1 },
  { field: 'address', headerName: 'Address', flex: 1 },
  { field: 'drugOrEquipment', headerName: 'Drug or Equipment', flex: 1 },
];

export default function ExportDefaultToolbar() {
  const [rows, setRows] = useState([
    { id: 1, supplierName: '', nic: '', email: '', phoneNumber: '', address: '', drugOrEquipment: '' },
    { id: 2, supplierName: '', nic: '', email: '', phoneNumber: '', address: '', drugOrEquipment: '' },
    { id: 3, supplierName: '', nic: '', email: '', phoneNumber: '', address: '', drugOrEquipment: '' },
    { id: 4, supplierName: '', nic: '', email: '', phoneNumber: '', address: '', drugOrEquipment: '' },
  ]);

  const handleAddRow = () => {
    setRows(prevRows => [
      ...prevRows,
      { id: prevRows.length + 1, supplierName: '', nic: '', email: '', phoneNumber: '', address: '', drugOrEquipment: '' },
    ]);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <button onClick={handleAddRow}>Add Row</button>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        pageSize={4}
      />
    </div>
  );
}
