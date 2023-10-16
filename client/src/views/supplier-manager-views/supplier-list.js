import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



const columns = [
  { field: 'supplierName', headerName: 'Supplier name', flex: 1, fontSize: 20 },
  { field: 'nic', headerName: 'NIC', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'phoneNumber', headerName: 'Phone number', flex: 1 },
  { field: 'address', headerName: 'Address', flex: 1 },
  { field: 'drugOrEquipment', headerName: 'Drug or Equipment', flex: 1 },
];

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

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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

export default function CombinedComponent() {
  const [rows, setRows] = React.useState([
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

  const handleInputChange = (id, field, value) => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleExportPDF = () => {
    const unit = 'pt';
    const size = 'A4';
    const orientation = 'portrait';

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(14);

    const title = 'Supplier List';
    const headers = columns.map(column => column.headerName);
    const data = rows.map(row => columns.map(column => row[column.field]));

    const content = {
      startY: 50,
      head: [headers],
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save('supplier_list.pdf');
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                fontSize: '20px', // Change the font size here
              }}
            >
              Supplier List
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />

            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ height: '100vh', width: '100%' }}>
        <button onClick={handleAddRow}>Add Row</button>
        <button onClick={handleExportPDF}>Export to PDF</button> {/* Added button */}
        <DataGrid
          rows={rows}
          columns={columns.map(column => ({
            ...column,
            renderCell: params => {
              const { id, field } = params;
              return (
                <TextField
                  value={params.row[field]}
                  onChange={e => handleInputChange(id, field, e.target.value)}
                />
              );
            },
          }))}
          components={{
            Toolbar: GridToolbar,
          }}
          pageSize={4}
          onEditCellChangeCommitted={({ id, field, value }) => {
            handleInputChange(id, field, value);
          }}
        />
      </div>
    </div>
  );
}
