import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PatientDetails() {
    const [patient, setPatient] = useState({});
    const [loading, setLoading] = useState(true);
  
    const id = '650f256bb408726a4815564a';
    useEffect(() => {
      const fetchPatientDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/patients/` + id);
          setPatient(response.data.patient);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching patient details:', error);
          setLoading(false);
        }
      };
  
      fetchPatientDetails();
    }, []);
    return (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2>Patient Details</h2>
              <p>Country: {patient.country}</p>
              <p>ID Type: {patient.idType}</p>
              <p>ID Number: {patient.idNumber}</p>
              <p>First Name: {patient.fName}</p>
              <p>Last Name: {patient.lName}</p>
              <p>Gender: {patient.gender}</p>
              <p>Date of Birth: {patient.dob}</p>
              <p>Contact Number: {patient.phone}</p>
              <p>Email: {patient.email}</p>
              <p>Address: {patient.address}</p>
              <p>Guardian's Name: {patient.gName}</p>
              <p>Relation: {patient.relation}</p>
              <p>Guardian ID: {patient.gId}</p>
              <p>Guardian Contact: {patient.gContact}</p>
            </div>
          )}
        </div>
      );
    }