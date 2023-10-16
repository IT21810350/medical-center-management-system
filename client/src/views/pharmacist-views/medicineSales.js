import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the jspdf-autotable library

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
  { id: 1, productName: 'Aspirin', quantitySold: 100, unitPrice: 10.99, totalPrice: 1099.00, description: 'Pain reliever' },
  { id: 2, productName: 'Ibuprofen', quantitySold: 50, unitPrice: 7.49, totalPrice: 874.50, description: 'Pain reliever' },
  { id: 3, productName: 'Cough Syrup', quantitySold: 18, unitPrice: 450.00, totalPrice: 8100.00, description: 'Cold remedy' },
  { id: 4, productName: 'Bandages', quantitySold: 20, unitPrice: 250.00, totalPrice: 5000.00, description: 'First aid' },
  { id: 5, productName: 'Hand Sanitizer', quantitySold: 15, unitPrice: 175.00, totalPrice: 2625.00, description: 'Hygiene' },
  { id: 6, productName: 'Prilosec', quantitySold: 10, unitPrice: 25.00, totalPrice: 250.00, description: 'Treat frequent heartburn' },
  { id: 7, productName: 'Azithromycin', quantitySold: 30, unitPrice: 55.00, totalPrice: 1650.00, description: 'Antibiotic' },
  { id: 8, productName: 'Amoxicillin', quantitySold: 15, unitPrice: 15.00, totalPrice: 225.00, description: 'Antibiotic' },
  { id: 9, productName: 'Piriton Syrup', quantitySold: 100, unitPrice: 210.00, totalPrice: 2100.00, description: 'Symptomatic controller of all allergic conditions' },
  { id: 10, productName: 'Salbutamol', quantitySold: 70, unitPrice: 1.00, totalPrice: 70.00, description: 'Comes in sn inhaler(puffer)' },
];

const RootDiv = styled('div')({
  flexGrow: 1,
  padding: theme => theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const ContentDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const Image = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const ButtonDiv = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '16px',
});

const generatePDF = () => {
  const doc = new jsPDF();
  doc.text('Medicine Sales Report', 20, 20);

  // Define the table columns and rows
  const tableColumns = columns.map(column => column.headerName);
  const tableRows = rows.map(row =>
    Object.values(row).map(value => value.toString())
  );

  // Set the position and formatting for the table
  const tableX = 10;
  const tableY = 30;

  // Add the table to the PDF document
  doc.autoTable({
    head: [tableColumns], // Column headers
    body: tableRows,      // Table rows
    startY: tableY,
    theme: 'striped',
  });

  // Save the PDF with a unique name (e.g., 'medicine_sales_report.pdf')
  doc.save('medicine_sales_report.pdf');
};

export default function MedicineSales() {
  return (
    <RootDiv>
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Medicine Sales</h1>
      <Image src={img8} alt="Medicine" />
      <ContentDiv>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            className="custom-datagrid"
          />
        </div>
        <ButtonDiv>
          <Button
            variant="outlined"
            style={{ backgroundColor: 'lightgreen', color: '#004D40' }}
            onClick={generatePDF}
          >
            Generate Report
          </Button>
        </ButtonDiv>
        <p>
          <a href="#" onClick={generatePDF}>Download PDF</a>
        </p>
      </ContentDiv>
    </RootDiv>
  );
}
