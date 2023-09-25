import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table,TableContainer, TableCell, TableHead  } from '@mui/material';

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
    



    return(
    <>
    <div>

        {prescriptions.map((prescription) => (
        <TableContainer  key={prescription._id}>
        
            <p>Medicine : {prescription.medicine}</p>

            <p>Dosage : {prescription.dosage}</p>

            <p>Quantity : {prescription.quantity}</p>

            <p>Frequency : {prescription.frequency}</p>

            <p>Hours : {prescription.hours}</p>

            <p>Duration : {prescription.duration}</p>

            <p>Take : {prescription.take}</p>


            <hr/>
        </TableContainer>
         ))}
      </div>
    
    </>);
}