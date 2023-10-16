// import React, { useEffect, useState } from 'react';
// import { Box, Button, Grid, Typography } from '@mui/material';
// import Cookies from 'js-cookie';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';

// function formatTimeSlot(timeSlot) {
//   if (timeSlot) {
//     const date = new Date(timeSlot);
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString(undefined, options);
//   }
//   return 'Time not found';
// }

// export default function UpcomingChanellings() {
//   const token = Cookies.get('token');
//   const tokenParts = token.split('.');
//   const payload = JSON.parse(atob(tokenParts[1]));
//   const patientId = payload.id;

//   const [channelingData, setChannelingData] = useState([]);
//   const [patient, setPatient] = useState({
//     country: '',
//     identity: '',
//     fName: '',
//     lName: '',
//     gender: '',
//     dob: '',
//     phone: '',
//     email: '',
//     address: '',
//     gName: '',
//     relation: '',
//     gId: '',
//     gContact: '',
//   });

//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     // Fetch all channeling records
//     axios
//       .get('http://localhost:4000/ch')
//       .then((response) => {
//         const allChannelingData = response.data;

//         // Filter records with a matching patient ID
//         const relevantChannelingData = allChannelingData.filter(
//           (record) => record.patient === patientId
//         );

//         setChannelingData(relevantChannelingData);
//       })
//       .catch((error) => {
//         console.error('Error fetching channeling data:', error);
//       });
//   }, [patientId]);

//   useEffect(() => {
//     // Fetch patient data based on the patient ID from channelingData
//     channelingData.forEach((record) => {
//       axios
//         .get(`http://localhost:4000/patientData/get/${record.patient}`)
//         .then((response) => {
//           const patientProfile = response.data.user.profile;
//           setPatient(patientProfile);
//         })
//         .catch((error) => {
//           console.error('Error fetching patient data', error);
//         });
//     });
//   }, [channelingData]);

//   useEffect(() => {
//     // Fetch all doctor details
//     const fetchDoctors = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/getD/');
//         setDoctors(response.data);
//       } catch (error) {
//         console.error('Error fetching doctors:', error);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   const [channelings, setChannelings] = useState([]);

//   const fetchChennelings = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/ch/');
//       setChannelings(response.data);
//     } catch (error) {
//       console.error('Error fetching channelings:', error);
//     }
//   };

//   useEffect(() => {
//     fetchChennelings();
//   }, []);

//   const generateRandomNumber = () => {
//     const min = 1;
//     const max = 20;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   // Function to handle rescheduling and deletion
//   const handleRescheduleAndDelete = async (record) => {
//     try {
      

//       // Redirect the user to the create channel page
//       history.push('/make-chanelling'); // Replace with the actual route for creating a new channel
//     // Perform the deletion of the existing record using its ID
//     await axios.delete(`http://localhost:4000/ch/deletec/${record._id}`);
    
//     } catch (error) {
//       console.error('Error rescheduling and deleting:', error);
//     }
//   };

//   return (
//     <>
//       <Grid>
//         <Typography variant="h6">
//           Patient Name: {patient.fName} {patient.lName}
//         </Typography>
//       </Grid>
//       {channelingData.map((record) => {
//         const doctor = doctors.find((d) => d._id === record.doctor);
//         const availableTime = doctor?.availableTime.find(
//           (time) => time._id === record.booking
//         );
//         const findDateByBookingId = (bookingId) => {
//           for (const channeling of channelings) {
//             if (channeling.booking === bookingId) {
                
//               return channeling.date;
//             }
//           }
//           return 'Date not found';
//         };

//         const randomNumber = generateRandomNumber();

//         return (
//           <Grid
//             container
//             spacing={3}
//             key={record._id}
//           >
//             <Grid
//               item
//               style={{
//                 backgroundColor: 'lightyellow',
//                 marginTop: 20,
//                 marginRight: 10,
//                 marginLeft: 10,
//                 marginBottom: 10,
//               }}
//             >
//               <Box p={2}>
//                 <Typography variant="h6">
//                   Appointment Number: {randomNumber}
//                 </Typography>
//                 {doctor ? (
//                   <>
//                     <Typography variant="h6">
//                       Doctor Name: {doctor.firstName} {doctor.middleName}{' '}
//                       {doctor.lastName}
//                     </Typography>
//                     {availableTime ? (
//                       <Typography variant="h6">
//                         Time: {availableTime.startTime}
//                       </Typography>
//                     ) : (
//                       <Typography variant="h6">Time not found</Typography>
//                     )}
//                   </>
//                 ) : (
//                   <Typography variant="h6">Doctor Name: Not found</Typography>
//                 )}
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleRescheduleAndDelete(record)}
//               >
//                 Reschedule
//               </Button>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => handleCancelAppointment(record._id)}
//               >
//                 Cancel
//               </Button>
//             </Grid>
//           </Grid>
//         );
//       })}
//     </>
//   );
// }


import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function UpcomingChanellings() {
  const [redirectToCreateChannel, setRedirectToCreateChannel] = useState(false);
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
    axios
      .get('http://localhost:4000/ch')
      .then((response) => {
        const allChannelingData = response.data;
        const relevantChannelingData = allChannelingData.filter(
          (record) => record.patient === patientId
        );
        setChannelingData(relevantChannelingData);
      })
      .catch((error) => {
        console.error('Error fetching channeling data:', error);
      });
  }, [patientId]);

  useEffect(() => {
    channelingData.forEach((record) => {
      axios
        .get(`http://localhost:4000/patientData/get/${record.patient}`)
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

  const generateRandomNumber = () => {
    const min = 1;
    const max = 20;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


const handleRescheduleAndDelete = async (record,record_doctor) => {
    try {

        window.location.href = "/make-chanelling?doctorId="+ record_doctor;
        console.log(record._id)
    

      // Perform the deletion of the existing record using its ID
      await axios.delete(`http://localhost:4000/ch/deletec/${record}`);
    } catch (error) {
      console.error('Error rescheduling and deleting:', error);
    }
  }

  const handleCancelAppointment = async (record) => {
    try {
        console.log(record._id)
      // Perform the deletion of the existing record using its ID
      await axios.delete(`http://localhost:4000/ch/deletec/${record}`);

    } catch (error) {
      console.error('Error rescheduling and deleting:', error);
    }
  };
  
  return (
    <>
      {redirectToCreateChannel ? (
        <RedirectToCreateChannelComponent doctorId={doctorId} />
      ) : (
        <div>
          <Grid>
            <Typography variant="h6">
              Patient Name: {patient.fName} {patient.lName}
            </Typography>
          </Grid>
          {channelingData.map((record) => {
            const doctor = doctors.find((d) => d._id === record.doctor);
            const availableTime = doctor?.availableTime.find(
              (time) => time._id === record.booking
            );
            const findDateByBookingId = (bookingId) => {
              for (const channeling of channelings) {
                if (channeling.booking === bookingId) {
                  return channeling.date;
                }
              }
              return 'Date not found';
            };

            const randomNumber = generateRandomNumber();

            return (
              <Grid
                container
                spacing={3}
                key={record._id}
              >
                <Grid
                  item
                  style={{
                    backgroundColor: 'lightyellow',
                    marginTop: 20,
                    marginRight: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                  }}
                >
                  <Box p={2}>
                    <Typography variant="h6">
                      Appointment Number: {randomNumber} 
                    </Typography>
                    {doctor ? (
                      <>
                        <Typography variant="h6">
                          Doctor Name: {doctor.firstName} {doctor.middleName}{' '}
                          {doctor.lastName} 
                        </Typography>
                        {availableTime ? (
                          <Typography variant="h6">
                            Time: {availableTime.startTime}
                          </Typography>
                        ) : (
                          <Typography variant="h6">Time not found</Typography>
                        )}
                      </>
                    ) : (
                      <Typography variant="h6">Doctor Name: Not found</Typography>
                      
                    )}
                    
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleRescheduleAndDelete(record._id,record.doctor)}
                  >
                    Reschedule
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleCancelAppointment(record._id)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </div>
      )}
    </>
  );
}
