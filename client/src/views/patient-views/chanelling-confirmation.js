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

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
////old

// import React, { useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
// import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button, Link } from '@mui/material';

// export default function PaymentDetails() {
//     const location = useLocation();
//     const bookingId = new URLSearchParams(location.search).get('bookingId');
//     const [doctorDetails, setDoctorDetails] = useState(null);
//     const [showPaymentSuccessAlert, setShowPaymentSuccessAlert] = useState(false);
//     const patient = "650f2459b408726a48155646";
//     const [upcoming, setUpcoming] = useState({
//         booking: '',
//         patient: '',
//         doctor: '',
  
//   });

  
//     // useEffect(() => {
//     //     const fetchDoctorDetails = async () => {






            
//     //         try {
//     //             if (bookingId) {
//     //                 const response = await axios.get(`http://localhost:4000/getD/get/${bookingId}`);
//     //                 setDoctorDetails(response.data.doctor);
//     //             }
//     //         } catch (error) {
//     //             console.error('Error fetching doctor details:', error);
//     //         }
//     //     };
//     //     fetchDoctorDetails();
//     // }, [bookingId]);


// //const urlDoctorId = "652751764a208fad4cd63abc"; // Replace with the actual ID from the URL

// // Make an Axios GET request to fetch the list of doctors
// axios.get('http://localhost:4000/getD/')
//   .then((response) => {
//     const doctors = response.data;

//     // Iterate through the list of doctors
//     let relevantDoctor = null;
//     doctors.forEach((doctor) => {
//       const foundTime = doctor.availableTime.find((time) => time._id === bookingId);
//       if (foundTime) {
//         relevantDoctor = doctor;
//         setDoctorDetails(relevantDoctor);
//         //setUpcoming(patient);
//         setUpcoming(relevantDoctor);
//         setUpcoming(bookingId);
//       }
//     });

//     if (relevantDoctor) {
//       console.log("Relevant Doctor:", relevantDoctor);
//     } else {
//       console.log("Doctor not found");
//     }
//   })
//   .catch((error) => {
//     console.error('Error fetching doctor details:', error);
//   });
 

//     // Function to handle payment confirmation
//     const handlePaymentConfirmation = async (e) => {
//         e.preventDefault();
//         //==========================================================
//         // if (!userAuthenticated) {
//         //     history.push('/login'); // Redirect to the login page
//         //   } else{
//         //==========================================================

//             // Perform any necessary payment confirmation logic here
//         alert("Payment Success");
//         // For demonstration purposes, we'll simply show an alert
//         setShowPaymentSuccessAlert(true);
        
//         useEffect (() => {

//             axios
//             .get("http://localhost:4000/patientData/get/" + id)
//             .then((response) => {
//                 console.log(response)
//                 console.log(id)
               
//                 setUpcoming(response.data.patient);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data', error);
//             });
//         }, [id]);
//          }
        


//          //================================
//          try {
//             // Make a POST request to your server or API endpoint
//             const response = await axios.post('http://localhost:4000/patientData/add', upcoming);
      
//             // Handle the response 
//            // console.log('Form submitted successfully', response.data);
      
//             // Optionally, reset the form
//             setUpcoming({
//               booking: '', 
//               patient: '',
//               doctor: '', 
              
//             });
      
//             setTimeout(() => {
//               navigate(`/patient-profile`);
//             }, 1000);
      
      
//           } catch (error) {
//             // Handle errors 
//            // console.error('Error submitting form', error.response.data);
//           }
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
//                                 {/* Doctor payment amount */}
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
//                                 {/* Consultation fee */}
//                                 1000 Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>

//                     <ListItem>
//                         <ListItemText primary="Channelling Charges" secondary="Service Fee" />
//                         <ListItemSecondaryAction>
//                             <Typography variant="body1" color="primary">
//                                 {/* Service fee */}
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
//                                 {/* Calculate total amount */}
//                                 {5000 + 1000 + 300} Rs
//                             </Typography>
//                         </ListItemSecondaryAction>
//                     </ListItem>
//                     <Divider />
//                 </List>

//                 {/* Confirm Button */}
//                 <Button variant="contained" color="primary" onClick={handlePaymentConfirmation} style={{ marginTop: '20px' }}>
//                     Confirm Payment
//                 </Button>

//                 {/* Display payment success alert */}
//                 {showPaymentSuccessAlert && (
//                     <div style={{ marginTop: '20px' }}>
//                         <p>
//                             Payment is successful.{' '}
                            
//                             <Button variant="contained" color="primary">
//                   <Link href="/patient-profile" style={{ textDecoration: 'none', color: 'white' }}>Success</Link>
//                 </Button>
//                         </p>
//                     </div>
//                 )}
//             </Paper>
//         </>
//     );
// }

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//new
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
// import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button, Link } from '@mui/material';

// export default function PaymentDetails() {
//     const location = useLocation();
//     const bookingId = new URLSearchParams(location.search).get('bookingId');
//     const patientId = "650f2459b408726a48155646"; // Replace with the actual patient ID

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

//                         // Move payment confirmation logic here to ensure doctorId is set
//                         const doctorId = relevantDoctor._id;
//                         handlePaymentConfirmation(doctorId);
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
//         const paymentData = {
//             patientId,
//             bookingId,
//             doctorId,
//             // Add other payment details as needed
//         };
//         setUpcoming(paymentData);

//         try {
//             // Make a POST request to your server or API endpoint to store payment details
//             const response = await axios.post('http://localhost:4000/ch/add', paymentData);

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

/////////////////////////////////////////////////////////////////////////
//////////////////////////////////new 2
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
    const date = new URLSearchParams(location.search).get('date')
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
                <Button variant="contained" color="primary" onClick={() => handlePaymentConfirmation(doctorDetails._id)} style={{ marginTop: '20px' }}>
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
