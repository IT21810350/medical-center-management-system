import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table,TableContainer, TableCell, TableHead  } from '@mui/material';

export default function PatientList() {
    const [patients, setPatient] = useState(null);
  
    const fetchPatientDetails = async () => {
  
      try {
        const response = await axios.get(`http://localhost:4000/patientData/`); // Fetch a single patient by ID
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };
  
    useEffect(() => {
      fetchPatientDetails(); // Fetch patient details when the component mounts
    }, []);
  
    if (!patients) {
      return <div>Loading...</div>;
    }
  

    return (
        <div>
        <h1>List of All Patients</h1>

        {patients.map((patient) => (
        <TableContainer  key={patient._id}>
        
            <p>ID : {patient._id}</p>

            <p>Country : {patient.country}</p>

            <p>ID Type : {patient.idType}</p>

            <p>ID Number : {patient.idNumber}</p>

            <p>First Name : {patient.fName}</p>

            <p>Last Name : {patient.lName}</p>

            <p>Gender : {patient.gender}</p>

            <p>Date of Birth : {patient.dob}</p>

            <p>Phone : {patient.phone}</p>

            <p>Email : {patient.email}</p>

            <p>Address : {patient.address}</p>

            <p>Guardian Name : {patient.gName}</p>

            <p>Relation : {patient.relation}</p>

            <p>Guardian ID : {patient.gId}</p>

            <p>Guardian Contact : {patient.gContact}</p>

            <hr/>
        </TableContainer>
         ))}
      </div>
    );}