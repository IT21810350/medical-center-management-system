import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import NavBar from '../../components/LA-component/la-nav-bar'; // Import the NavBar component

// Sample data for lab facilities
const labFacilities = [
  {
    id: 1,
    facilityName: 'Microbiology Lab',
    description: 'Equipped for microbiological testing',
    location: 'Lab Building, Room 101',
  },
  {
    id: 2,
    facilityName: 'Chemistry Lab',
    description: 'Specialized in chemical analysis',
    location: 'Lab Building, Room 102',
  },
  // Add more lab facilities as needed
];

function LabFacilitiesPage() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <Container>
        <Typography variant="h4" gutterBottom>
          Lab Facilities
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Facility Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labFacilities.map((facility) => (
                <TableRow key={facility.id}>
                  <TableCell>{facility.id}</TableCell>
                  <TableCell>{facility.facilityName}</TableCell>
                  <TableCell>{facility.description}</TableCell>
                  <TableCell>{facility.location}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default LabFacilitiesPage;
