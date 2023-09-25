// // import React from 'react';
// // import {Link} from '@mui/material';
// // import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';

// // export default function ChanellingConfirmation(){
// //     return(
// //         <>
// //          <PatientNavigationBar/>
// //         <h1>ChanellingConfirmation</h1>
// //         <p>Show payment details and patient details + appointment details<br/>
// //         If the chanelling id confimed, direct to the payment pages</p>
        

// //         <Link >Confirm</Link>
// //         </>
// //     );
// // }


// import React, { useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
// import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button } from '@mui/material';

// export default function PaymentDetails({ onConfirm }) {
//     const location = useLocation();
//     const doctorId = new URLSearchParams(location.search).get('doctorId');
//     const [doctorDetails, setDoctorDetails] = useState(null);

//     useEffect(() => {
//         const fetchDoctorDetails = async () => {
//             try {
//                 if (doctorId) {
//                     const response = await axios.get(`http://localhost:4000/getD/get/${doctorId}`);
//                     setDoctorDetails(response.data.doctor);
//                 }
//             } catch (error) {
//                 console.error('Error fetching doctor details:', error);
//             }
//         };
//         fetchDoctorDetails();
//     }, [doctorId]);

//     // Check if doctorDetails is available
//     console.log('doctorDetails:', doctorDetails);
// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import { useLocation } from 'react-router-dom';
// // import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
// // import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button } from '@mui/material';

// // export default function PaymentDetails({ onConfirm }) {

// //     const location = useLocation();
// //     const doctorId = new URLSearchParams(location.search).get('doctorId');
// //     const [doctorDetails, setDoctorDetails] = useState(null);
  
   

// //   useEffect(() => {
// //     const fetchDoctorDetails = async () => {
// //         try {
// //             if (doctorId) {
// //                 const response = await axios.get(`http://localhost:4000/getD/get/${doctorId}`);
// //                 setDoctorDetails(response.data.doctor);
// //             }
// //         } catch (error) {
// //             console.error('Error fetching doctor details:', error);
// //         }
// //     };
// //     fetchDoctorDetails();
// // }, [doctorId]);


// console.log('doctorDetails:', doctorDetails);
//  // doctor payment amount
//  const doctorPaymentAmount = 5000;

//  // hannelling charges
//  const channellingCharges = {
//    consultationFee: 1000,
//    serviceFee: 300,
//  };

//  let { value } = useParams();
//   return (
//     <><PatientNavigationBar/>
//     <Paper elevation={3} style={{ padding: '20px', margin:'100px'}}>
//       <Typography variant="h5" gutterBottom>
//         Payment Details
//       </Typography>

//       {/* Doctor Payment Details */}
//       <List>
//         <ListItem>
//         {doctorDetails ? (
//           <ListItemText primary={`${doctorDetails.firstName} ${doctorDetails.lastname}`} secondary={doctorDetails.specialization} />
//           ) : (
//             <p>Loading doctor details...</p>
//         )}
//           <ListItemSecondaryAction>
//             <Typography variant="body1" color="primary">
//               {doctorPaymentAmount} Rs
//             </Typography>
//           </ListItemSecondaryAction>
//         </ListItem>
//         <Divider />
//       </List>

//       {/* Channelling Charges */}
//       <List>
     
//         <ListItem>
//         {doctorDetails ? (
//           <ListItemText primary="Consultation Fee" secondary="Service Fee" />
//           ) : (
//             <p>Loading doctor details...</p>
//         )}
//           <ListItemSecondaryAction>
         
//             <Typography variant="body1" color="primary">
            
//               {channellingCharges.consultationFee} Rs
      
      
//             </Typography>
                 
                
//           </ListItemSecondaryAction>
      
//         </ListItem>
        
//         <ListItem>
//           <ListItemText primary="Channelling Charges" secondary="Service Fee" />
//           <ListItemSecondaryAction>
//             <Typography variant="body1" color="primary">
//               {channellingCharges.serviceFee} Rs
//             </Typography>
//           </ListItemSecondaryAction>
//         </ListItem>
//         <Divider />
       
//       </List>
 
//       {/* Total Amount */}
//       <List>
//         <ListItem>
//           <ListItemText primary="Total Amount" />
//           <ListItemSecondaryAction>
//             <Typography variant="h6" color="primary">
//               {doctorPaymentAmount + channellingCharges.consultationFee + channellingCharges.serviceFee} USD
//             </Typography>
//           </ListItemSecondaryAction>
//         </ListItem>
//         <Divider />
        
//       </List>
    
//       {/* Confirm Button */}
//       <Button variant="contained" color="primary" onClick={onConfirm} style={{ marginTop: '20px' }}>
//         Confirm Payment
//       </Button>
//     </Paper>
//     </>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button, Link } from '@mui/material';

export default function PaymentDetails() {
    const location = useLocation();
    const doctorId = new URLSearchParams(location.search).get('doctorId');
    const [doctorDetails, setDoctorDetails] = useState(null);
    const [showPaymentSuccessAlert, setShowPaymentSuccessAlert] = useState(false);

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                if (doctorId) {
                    const response = await axios.get(`http://localhost:4000/getD/get/${doctorId}`);
                    setDoctorDetails(response.data.doctor);
                }
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };
        fetchDoctorDetails();
    }, [doctorId]);

    // Function to handle payment confirmation
    const handlePaymentConfirmation = () => {
        // Perform any necessary payment confirmation logic here
        alert("Payment Success");
        // For demonstration purposes, we'll simply show an alert
        setShowPaymentSuccessAlert(true);
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
                            <ListItemText primary={`${doctorDetails.firstName} ${doctorDetails.lastname}`} secondary={doctorDetails.specialization} />
                        ) : (
                            <p>Loading doctor details...</p>
                        )}
                        <ListItemSecondaryAction>
                            <Typography variant="body1" color="primary">
                                {/* Doctor payment amount */}
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
                                {/* Consultation fee */}
                                1000 Rs
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Channelling Charges" secondary="Service Fee" />
                        <ListItemSecondaryAction>
                            <Typography variant="body1" color="primary">
                                {/* Service fee */}
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
                                {/* Calculate total amount */}
                                {5000 + 1000 + 300} Rs
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                </List>

                {/* Confirm Button */}
                <Button variant="contained" color="primary" onClick={handlePaymentConfirmation} style={{ marginTop: '20px' }}>
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

