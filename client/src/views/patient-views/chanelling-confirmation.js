// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
// import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button, Link } from '@mui/material';
// import Cookies from 'js-cookie';




// export default function PaymentDetails() {

//     const token = Cookies.get('token');
//     const tokenParts = token.split('.');
//     const payload = JSON.parse(atob(tokenParts[1]));
//     const id = payload.id;

//     const location = useLocation();
//     const bookingId = new URLSearchParams(location.search).get('bookingId');
//     const patientId = id; // Actual patient ID

//     const [upcoming, setUpcoming] = useState(null);
//     const [doctorDetails, setDoctorDetails] = useState(null);
//     const [showPaymentSuccessAlert, setShowPaymentSuccessAlert] = useState(false);

//     // Fetch the doctor details based on the booking ID
//     useEffect(() => {
//         // Make an Axios GET request to fetch the list of doctors
//         axios.get('http://localhost:4000/getD/')
//             .then((response) => {
//                 const doctors = response.data;

//                 // Iterate through the list of doctors
//                 let relevantDoctor = null;
//                 doctors.forEach((doctor) => {
//                     const foundTime = doctor.availableTime.find((time) => time._id === bookingId);
//                     if (foundTime) {
//                         relevantDoctor = doctor;

//                         setDoctorDetails(relevantDoctor);
//                     }
//                 });

//                 if (relevantDoctor) {
//                     console.log("Relevant Doctor:", relevantDoctor);
//                 } else {
//                     console.log("Doctor not found");
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching doctor details:', error);
//             });
//     }, [bookingId]);

//     // Function to handle payment confirmation
//     const handlePaymentConfirmation = async (doctorId) => {
//         // Create the payment data object
//         const upcoming = {
//             patientId,
//             bookingId,
//             doctorId,
//             // Add other payment details as needed
//         };

//         try {
//             // Make a POST request to your server or API endpoint to store payment details
//             const response = await axios.post('http://localhost:4000/ch/add', upcoming);

//             // Handle the response
//             if (response.status === 201) {
//                 // Payment successfully stored
//                 setShowPaymentSuccessAlert(true);
//             }
//         } catch (error) {
//             console.error('Error submitting payment', error.response.data);
//         }
//     };

//     return (
//         <>
//             <PatientNavigationBar />
//             <Paper elevation={3} style={{ padding: '20px', margin: '100px' }}>
//                 <Typography variant="h5" gutterBottom>
//                     Payment Details
//                 </Typography>

//                 {/* Doctor Payment Details */}
//                 <List>
//                     <ListItem>
//                         {doctorDetails ? (
//                             <ListItemText primary={`${doctorDetails.firstName} ${doctorDetails.middleName} ${doctorDetails.lastName}`} secondary={doctorDetails.specialization} />
//                         ) : (
//                             <p>Loading doctor details...</p>
//                         )}
//                         <ListItemSecondaryAction>
//                             <Typography variant="body1" color="primary">
//                                 5000 Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>
//                     <Divider />
//                 </List>

//                 {/* Channelling Charges */}
//                 <List>
//                     <ListItem>
//                         {doctorDetails ? (
//                             <ListItemText primary="Consultation Fee" secondary="Service Fee" />
//                         ) : (
//                             <p>Loading doctor details...</p>
//                         )}
//                         <ListItemSecondaryAction>
//                             <Typography variant="body1" color="primary">
//                                 1000 Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>

//                     <ListItem>
//                         <ListItemText primary="Channelling Charges" secondary="Service Fee" />
//                         <ListItemSecondaryAction>
//                             <Typography variant="body1" color="primary">
//                                 300 Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>
//                     <Divider />
//                 </List>

//                 {/* Total Amount */}
//                 <List>
//                     <ListItem>
//                         <ListItemText primary="Total Amount" />
//                         <ListItemSecondaryAction>
//                             <Typography variant="h6" color="primary">
//                                 {5000 + 1000 + 300} Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>
//                     <Divider />
//                 </List>

//                 {/* Confirm Button */}
//                 <Button variant="contained" color="primary" onClick={() => handlePaymentConfirmation(doctorDetails._id)} style={{ marginTop: '20px' }}>
//                     Confirm Payment
//                 </Button>

//                 {/* Display payment success alert */}
//                 {showPaymentSuccessAlert && (
//                     <div style={{ marginTop: '20px' }}>
//                         <p>
//                             Payment is successful.{' '}
//                             <Button variant="contained" color="primary">
//                                 <Link href="/patient-profile" style={{ textDecoration: 'none', color: 'white' }}>Success</Link>
//                             </Button>
//                         </p>
//                     </div>
//                 )}
//             </Paper>
//         </>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
// import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button, Link } from '@mui/material';
// import Cookies from 'js-cookie';




// export default function PaymentDetails() {

//     const token = Cookies.get('token');
//     const tokenParts = token.split('.');
//     const payload = JSON.parse(atob(tokenParts[1]));
//     const id = payload.id;

//     const location = useLocation();
//     const bookingId = new URLSearchParams(location.search).get('bookingId');
//     const patientId = id; // Actual patient ID

//     const [upcoming, setUpcoming] = useState(null);
//     const [doctorDetails, setDoctorDetails] = useState(null);
//     const [showPaymentSuccessAlert, setShowPaymentSuccessAlert] = useState(false);

//     // Fetch the doctor details based on the booking ID
//     useEffect(() => {
//         // Make an Axios GET request to fetch the list of doctors
//         axios.get('http://localhost:4000/getD/')
//             .then((response) => {
//                 const doctors = response.data;

//                 // Iterate through the list of doctors
//                 let relevantDoctor = null;
//                 doctors.forEach((doctor) => {
//                     const foundTime = doctor.availableTime.find((time) => time._id === bookingId);
//                     if (foundTime) {
//                         relevantDoctor = doctor;

//                         setDoctorDetails(relevantDoctor);
//                     }
//                 });

//                 if (relevantDoctor) {
//                     console.log("Relevant Doctor:", relevantDoctor);
//                 } else {
//                     console.log("Doctor not found");
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching doctor details:', error);
//             });
//     }, [bookingId]);

//     // Function to handle payment confirmation
//     // const handlePaymentConfirmation = async (doctorId) => {
//     //     // Create the payment data object
//     //     const upcoming = {
//     //         patientId,
//     //         bookingId,
//     //         doctorId,
//     //         // Add other payment details as needed
//     //     };

//     //     try {
//     //         // Make a POST request to your server or API endpoint to store payment details
//     //         const response = await axios.post('http://localhost:4000/ch/add', upcoming);

//     //         // Handle the response
//     //         if (response.status === 201) {
//     //             // Payment successfully stored
//     //             setShowPaymentSuccessAlert(true);
//     //         }
//     //     } catch (error) {
//     //         console.error('Error submitting payment', error.response.data);
//     //     }
//     // };

//     const handlePaymentConfirmation = async (doctorId) => {
//         if (!doctorDetails) {
//             console.error('Doctor details are not available.');
//             return;
//         }
    
//         // Create the payment data object
//         const upcoming = {
//             patientId,
//             bookingId,
//             doctorId,
//             // Add other payment details as needed
//         };
    
//         try {
//             // Make a POST request to your server or API endpoint to store payment details
//             const response = await axios.post('http://localhost:4000/ch/add', upcoming);
    
//             // Handle the response
//             if (response.status === 201) {
//                 // Payment successfully stored
//                 setShowPaymentSuccessAlert(true);
//             } else {
//                 console.error('Payment not successful:', response.data);
//             }
//         } catch (error) {
//             console.error('Error submitting payment', error);
//         }
//     };
    

//     return (
//         <>
//             <PatientNavigationBar />
//             <Paper elevation={3} style={{ padding: '20px', margin: '100px' }}>
//                 <Typography variant="h5" gutterBottom>
//                     Payment Details
//                 </Typography>

//                 {/* Doctor Payment Details */}
//                 <List>
//                     <ListItem>
//                         {doctorDetails ? (
//                             <ListItemText primary={`${doctorDetails.firstName} ${doctorDetails.middleName} ${doctorDetails.lastName}`} secondary={doctorDetails.specialization} />
//                         ) : (
//                             <p>Loading doctor details...</p>
//                         )}
//                         <ListItemSecondaryAction>
//                             <Typography variant="body1" color="primary">
//                                 5000 Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>
//                     <Divider />
//                 </List>

//                 {/* Channelling Charges */}
//                 <List>
//                     <ListItem>
//                         {doctorDetails ? (
//                             <ListItemText primary="Consultation Fee" secondary="Service Fee" />
//                         ) : (
//                             <p>Loading doctor details...</p>
//                         )}
//                         <ListItemSecondaryAction>
//                             <Typography variant="body1" color="primary">
//                                 1000 Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>

//                     <ListItem>
//                         <ListItemText primary="Channelling Charges" secondary="Service Fee" />
//                         <ListItemSecondaryAction>
//                             <Typography variant="body1" color="primary">
//                                 300 Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>
//                     <Divider />
//                 </List>

//                 {/* Total Amount */}
//                 <List>
//                     <ListItem>
//                         <ListItemText primary="Total Amount" />
//                         <ListItemSecondaryAction>
//                             <Typography variant="h6" color="primary">
//                                 {5000 + 1000 + 300} Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>
//                     <Divider />
//                 </List>

//                 {/* Confirm Button */}
//                 <Button variant="contained" color="primary" onClick={() => handlePaymentConfirmation(doctorDetails._id)} style={{ marginTop: '20px' }}>
//                     Confirm Payment
//                 </Button>

//                 {/* Display payment success alert */}
//                 {showPaymentSuccessAlert && (
//                     <div style={{ marginTop: '20px' }}>
//                         <p>
//                             Payment is successful.{' '}
//                             <Button variant="contained" color="primary">
//                                 <Link href="/patient-profile" style={{ textDecoration: 'none', color: 'white' }}>Success</Link>
//                             </Button>
//                         </p>
//                     </div>
//                 )}
//             </Paper>
//         </>
//     );
// }


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button, Link } from '@mui/material';
import Cookies from 'js-cookie';




export default function PaymentDetails() {

    const token = Cookies.get('token');
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    const id = payload.id;

    const location = useLocation();
    const bookingId = new URLSearchParams(location.search).get('bookingId');
    const date = new URLSearchParams(location.search).get('channelDate')
    const patientId = id; // Actual patient ID

    const [upcoming, setUpcoming] = useState(null);
    const [doctorDetails, setDoctorDetails] = useState(null);
    const [showPaymentSuccessAlert, setShowPaymentSuccessAlert] = useState(false);

    // Fetch the doctor details based on the booking ID
    useEffect(() => {
        // Make an Axios GET request to fetch the list of doctors
        axios.get('http://localhost:4000/getD/')
            .then((response) => {
                const doctors = response.data;

                // Iterate through the list of doctors
                let relevantDoctor = null;
                doctors.forEach((doctor) => {
                    const foundTime = doctor.availableTime.find((time) => time._id === bookingId);
                    if (foundTime) {
                        relevantDoctor = doctor;

                        setDoctorDetails(relevantDoctor);
                    }
                });

                if (relevantDoctor) {
                    console.log("Relevant Doctor:", relevantDoctor);
                } else {
                    console.log("Doctor not found");
                }
            })
            .catch((error) => {
                console.error('Error fetching doctor details:', error);
            });
    }, [bookingId]);

    

    // Function to handle payment confirmation
    const handlePaymentConfirmation = async (doctorId) => {
        // Create the payment data object
        const upcoming = {
            patient:id,
            booking:bookingId,
            doctor:doctorDetails._id,
            date:date,
            // Add other payment details as needed
        };
        console.log(upcoming);


        try {
            // Make a POST request to your server or API endpoint to store payment details
            const response = await axios.post('http://localhost:4000/ch/add', upcoming);

            // Handle the response
            if (response.status === 201) {
                // Payment successfully stored
                setShowPaymentSuccessAlert(true);
            }
        } catch (error) {
            console.error('Error submitting payment', error.response.data);
        }
    };

    return (
        <>
            <PatientNavigationBar />
            <Paper elevation={3} style={{ padding: '20px', margin: '100px' }}>
                <Typography variant="h5" gutterBottom>
                    Payment Details
                </Typography>

                {/* Doctor Payment Details */}
                <List>
                    <ListItem>
                        {doctorDetails ? (
                            <ListItemText primary={`${doctorDetails.firstName} ${doctorDetails.middleName} ${doctorDetails.lastName}`} secondary={doctorDetails.specialization} />
                        ) : (
                            <p>Loading doctor details...</p>
                        )}
                        <ListItemSecondaryAction>
                            <Typography variant="body1" color="primary">
                                5000 Rs
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                </List>

                {/* Channelling Charges */}
                <List>
                    <ListItem>
                        {doctorDetails ? (
                            <ListItemText primary="Consultation Fee" secondary="Service Fee" />
                        ) : (
                            <p>Loading doctor details...</p>
                        )}
                        <ListItemSecondaryAction>
                            <Typography variant="body1" color="primary">
                                1000 Rs
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Channelling Charges" secondary="Service Fee" />
                        <ListItemSecondaryAction>
                            <Typography variant="body1" color="primary">
                                300 Rs
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                </List>

                {/* Total Amount */}
                <List>
                    <ListItem>
                        <ListItemText primary="Total Amount" />
                        <ListItemSecondaryAction>
                            <Typography variant="h6" color="primary">
                                {5000 + 1000 + 300} Rs
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                </List>

                {/* Confirm Button */}
                <Button variant="contained" color="primary" onClick={() => handlePaymentConfirmation(doctorDetails.id)} style={{ marginTop: '20px' }}>
                    Confirm Payment
                </Button>

                {/* Display payment success alert */}
                {showPaymentSuccessAlert && (
                    <div style={{ marginTop: '20px' }}>
                        <p>
                            Payment is successful.{' '}
                            <Button variant="contained" color="primary">
                                <Link href="/patient-profile" style={{ textDecoration: 'none', color: 'white' }}>Success</Link>
                            </Button>
                        </p>
                    </div>
                )}
            </Paper>
        </>
    );
}