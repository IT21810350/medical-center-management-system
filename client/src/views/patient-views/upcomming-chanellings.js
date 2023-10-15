import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';

// function formatTimeSlot(timeSlot) {
//     const date = new Date(timeSlot);
//     const month = date.toLocaleString('default', { month: 'long' });
//     const day = date.getDate();
//     return `${day}, ${month}`;
// }
function formatTimeSlot(timeSlot) {
  if (timeSlot) {
      const date = new Date(timeSlot);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
  }
  return 'Time not found';
}


export default function UpcomingChanellings() {
    const token = Cookies.get('token');
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    const patientId = payload.id;

    const [channelingData, setChannelingData] = useState([]);
    const [patient, setPatient] = useState({
        country: '',
        identity: '',
        fName: '',
        lName: '',
        gender: '',
        dob: '',
        phone: '',
        email: '',
        address: '',
        gName: '',
        relation: '',
        gId: '',
        gContact: '',
    });

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // Fetch all channeling records
        axios.get('http://localhost:4000/ch')
            .then((response) => {
                const allChannelingData = response.data;

                // Filter records with a matching patient ID
                const relevantChannelingData = allChannelingData.filter(record => record.patient === patientId);

                setChannelingData(relevantChannelingData);
            })
            .catch((error) => {
                console.error('Error fetching channeling data:', error);
            });
    }, [patientId]);

    useEffect(() => {
        // Fetch patient data based on the patient ID from channelingData
        channelingData.forEach((record) => {
            axios.get(`http://localhost:4000/patientData/get/${record.patient}`)
                .then((response) => {
                    const patientProfile = response.data.user.profile;
                    setPatient(patientProfile);
                })
                .catch((error) => {
                    console.error('Error fetching patient data', error);
                });
        });
    }, [channelingData]);

    useEffect(() => {
        // Fetch all doctor details
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:4000/getD/');
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <>
            <Grid>
                <Typography variant="h6">Patient Name: {patient.fName} {patient.lName}</Typography>
            </Grid>
            {channelingData.map((record) => {
                // Find the doctor with a matching ID
                const doctor = doctors.find(d => d._id === record.doctor);
                const availableTime = doctor?.availableTime.find(time => time._id === record.booking);

                return (
                    <Grid container spacing={3} key={record._id}>
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ backgroundColor: "lightyellow", marginTop: 20, marginRight: 10, marginLeft: 10, marginBottom: 10 }}>
                            <Box p={2}>
                                <Typography variant="h6">Appointment Name: {record.booking}</Typography>
                                {doctor ? (
                                    <>
                                        <Typography variant="h6">Doctor Name: {doctor.firstName} {doctor.middleName} {doctor.lastName}</Typography>
                                        {availableTime ? (
                                            <Typography variant="h6">Time: {availableTime.startTime}</Typography>
                                        ) : (
                                            <Typography variant="h6">Time not found</Typography>
                                        )}
                                    </>
                                ) : (
                                    <Typography variant="h6">Doctor Name: Not found</Typography>
                                )}
                                {/* Add more details as needed */}
                            </Box>
                        </Grid>
                    </Grid>
                );
            })}
        </>
    );
}



