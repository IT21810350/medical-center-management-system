import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
export default function PrescriptionList() {
  const [prescriptions, setPrescription] = useState(null);

  const fetchPrescriptionDetails = async () => {

    try {
      const response = await axios.get(`http://localhost:4000/getD/pres/`); // Fetch all the prescriptions
      setPrescription(response.data);
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  useEffect(() => {
    fetchPrescriptionDetails(); // Fetch patient details when the component mounts
  }, []);

  if (!prescriptions) {
    return <div>Loading...</div>;
  }




  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Medicine</TableCell>
                <TableCell>Dosage</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Frequency</TableCell>
                <TableCell>Hours</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Take</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prescriptions.map((prescription) => (
                <TableRow key={prescription._id}>
                  <TableCell>{prescription.medicine}</TableCell>
                  <TableCell>{prescription.dosage}</TableCell>
                  <TableCell>{prescription.quantity}</TableCell>
                  <TableCell>{prescription.frequency}</TableCell>
                  <TableCell>{prescription.hours}</TableCell>
                  <TableCell>{prescription.duration}</TableCell>
                  <TableCell>{prescription.take}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>);
}