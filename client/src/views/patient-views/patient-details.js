// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TextField} from '@mui/material';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import { Card, CardMedia,CardContent, CardActions,Grid,Typography} from '@mui/material';
// import img1 from '../../assets/img/patient/profile.jpg';
// import { Stack } from '@mui/material';

// import Cookies from 'js-cookie';

// export default function PatientDetails(){


//   const token = Cookies.get('token');
//   const tokenParts = token.split('.');
//   const payload = JSON.parse(atob(tokenParts[1]));
//   const id = payload.id;
  
//   console.log(id)
  
//     const [patient, setPatient] = useState({
//         country : '',
//         identity : '',
//         fName : '',
//         lName : '',
//         gender : '',
//         dob : '',
//         phone : '',
//         email : '',
//         address : '',
//         gName : '',
//         relation : '',
//         gId : '',
//         gContact : '',
//         id,
        
//     });
//     const [isEditing, setIsEditing] = useState(false);
    
//     useEffect (() => {

//         axios
//         .get(`http://localhost:4000/patientData/get/${id}`)
//         .then((response) => {
//             console.log(response)
//             console.log(id)
//             setPatient(response.data.user.profile);
//             console.log(response.data.user.profile);
//         })
//         .catch((error) => {
//             console.error('Error fetching data', error);
//         });
//     }, [id]);

//     const handleEditPatientProfile = async () =>{
//         try{
//             const response = await axios.put(`http://localhost:4000/patientData/update/${id}` , patient);
//             if(response.status ===  200){
//                 setIsEditing(false);
//             }
//         }catch(error){
//             console.error('Error in updation', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const {name, value} = e.target;
//         setPatient({
//             ...patient,
//             [name]: value,
//         });
//        };

       
//     return (
//         <>
//          <Grid item xs={12} sm={3}>
   
//    <Card sx={{ height: '100%' }} >
//      <CardMedia
//        component="div"
//        sx={{
//          // 16:9
//          pt: '56.25%',
//        }}
//        image={img1}

//      />
     
//      <CardContent >
//        <Typography gutterBottom variant="h5" component="h2" align='center'>
//          {patient.fName}{patient.lName}
//        </Typography>
//      </CardContent>
//      <CardActions>


//        <Button
//          component={Link}
//          to="/patient-inquiries"
//          variant="contained"
//          // size="small"
//          style={{ width: '100%' }}

//          color="primary"
//        >
//          Inquiries
//        </Button>

//      </CardActions>
//    </Card>

//  </Grid>
//  <Grid item xs={12} sm={9}>
//       <div>
      
//           <div>
//             <h2>Patient Details</h2>
           

//       <Grid>
//       <Grid xs={12} item>
//       First Name <TextField label="First Name" type ="text" name = "fName" value={patient.fName} disabled onChange ={handleInputChange} fullWidth required></TextField>

//       </Grid>

      
//                 <Grid xs={12} item>
//                   Last Name<TextField label="Last Name" type="text" name="lName" value={patient.lName} disabled onChange={handleInputChange} fullWidth required></TextField>

//                 </Grid>
//                 <Grid xs={12} item>
//                   Country<TextField label="Country" type="text" name="country" value={patient.country} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Identity<TextField label="Identity" type="text" name="identity" value={patient.identity} disabled onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Gender<TextField label="Gender" type="text" name="gender" value={patient.gender} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Date of Birth<TextField label="Date of Birth" type="text" name="dob" value={patient.dob} disabled onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Phone Number<TextField label="Phone Number" type="text" name="phone" value={patient.phone} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Email<TextField label="Email" type="text" name="email" value={patient.email} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Address<TextField label="Address" type="text" name="address" value={patient.address} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Guardian Name<TextField label="Guardian Name" type="text" name="gName" value={patient.gName} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Relation<TextField label="Relation" type="text" name="relation" value={patient.relation} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Guardian Id<TextField label="Guardian Id" type="text" name="gId" value={patient.gId} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//                 <Grid xs={12} item>
//                   Guardian Contact<TextField label="Guardian Contact Number" type="text" name="gContact" value={patient.gContact} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
//                 </Grid>
//               <Grid xs={12} item>
//                 <br/>
//             <Stack direction="row" spacing={2}>
           
//               <Button
//                 onClick={isEditing ? handleEditPatientProfile : () => setIsEditing(true)}
//                 variant="contained"
//                 style={{ width: '25%' }}
//                 color="success">
//                 {isEditing ? 'Save' : 'Edit'}
//               </Button>
//               <Button
//                 component={Link}
//                 to="#"
//                 variant="contained"
//                 style={{ width: '25%' }}
//                 color="error">
//                 Delete
//               </Button>
//             </Stack>
//             </Grid>
//             </Grid>
//           </div>
       
//       </div>
//     </Grid>
        
//         </>

//     );
// }


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { TextField, Button, Card, CardMedia, CardContent, CardActions, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/patient/profile.jpg';
import { Stack } from '@mui/material';
import Cookies from 'js-cookie';
import ReactToPrint from 'react-to-print';
import { jsPDF } from 'jspdf';

export default function PatientDetails() {
  const token = Cookies.get('token');
  const tokenParts = token.split('.');
  const payload = JSON.parse(atob(tokenParts[1]));
  const id = payload.id;

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
    id,
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/patientData/get/${id}`)
      .then((response) => {
        setPatient(response.data.user.profile);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, [id]);

  const handleEditPatientProfile = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/patientData/update/${id}`, patient);
      if (response.status === 200) {
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error in updation', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const PrintablePatientDetails = () => {
    return (
      <Grid>
        <Typography variant="h5">Patient Details</Typography>
        <Card>
          {/* <CardMedia component="img" alt="Patient Profile" height="300" image={img1} /> */}
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
              {patient.fName} {patient.lName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {patient.email} 
            </Typography>*/}
          </CardContent>
          <CardContent>
            {/* <Typography variant="h6">First Name: {patient.fName}</Typography>
            <Typography variant="h6">Last Name: {patient.lName}</Typography>
            <Typography variant="h6">Country: {patient.country}</Typography>
            <Typography variant="h6">Identity: {patient.identity}</Typography>
            <Typography variant="h6">Gender: {patient.gender}</Typography>
            <Typography variant="h6">Date of Birth: {patient.dob}</Typography>
            <Typography variant="h6">Phone Number: {patient.phone}</Typography>
            <Typography variant="h6">Email: {patient.email}</Typography>
            <Typography variant="h6">Address: {patient.address}</Typography>
            <Typography variant="h6">Guardian Name: {patient.gName}</Typography>
            <Typography variant="h6">Relation: {patient.relation}</Typography>
            <Typography variant="h6">Guardian Id: {patient.gId}</Typography>
            <Typography variant="h6">Guardian Contact: {patient.gContact}</Typography> */}

            {/*================================================ */}
            <Grid>
              <Grid xs={12} item>
                First Name <TextField label="First Name" type="text" name="fName" value={patient.fName} disabled onChange={handleInputChange} fullWidth required></TextField>

              </Grid>


              <Grid xs={12} item>
                Last Name<TextField label="Last Name" type="text" name="lName" value={patient.lName} disabled onChange={handleInputChange} fullWidth required></TextField>

              </Grid>
              <Grid xs={12} item>
                Country<TextField label="Country" type="text" name="country" value={patient.country} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Identity<TextField label="Identity" type="text" name="identity" value={patient.identity} disabled onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Gender<TextField label="Gender" type="text" name="gender" value={patient.gender} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Date of Birth<TextField label="Date of Birth" type="text" name="dob" value={patient.dob} disabled onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Phone Number<TextField label="Phone Number" type="text" name="phone" value={patient.phone} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Email<TextField label="Email" type="text" name="email" value={patient.email} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Address<TextField label="Address" type="text" name="address" value={patient.address} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Guardian Name<TextField label="Guardian Name" type="text" name="gName" value={patient.gName} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Relation<TextField label="Relation" type="text" name="relation" value={patient.relation} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Guardian Id<TextField label="Guardian Id" type="text" name="gId" value={patient.gId} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                Guardian Contact<TextField label="Guardian Contact Number" type="text" name="gContact" value={patient.gContact} disabled={!isEditing} onChange={handleInputChange} fullWidth required></TextField>
              </Grid>
            </Grid>


            {/*================================================ */}
          </CardContent>
          <CardActions>
            <Button
              onClick={isEditing ? handleEditPatientProfile : () => setIsEditing(true)}
              variant="contained"
              style={{ width: '25%' }}
              color="success"
            >
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  const printableRef = useRef();

  const downloadAsPDF = () => {
    const pdf = new jsPDF();
    pdf.html(printableRef.current, {
      callback: function (doc) {
        doc.save('patient-details.pdf');
      },
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              sx={{
                pt: '56.25%',
              }}
              image={img1}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {patient.fName} {patient.lName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to="/patient-inquiries"
                variant="contained"
                style={{ width: '100%' }}
                color="primary"
              >
                Inquiries
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={9} ref={printableRef}>
          <PrintablePatientDetails />
          <ReactToPrint
            trigger={() => (
              <Button variant="contained" style={{ width: '25%' }}>
                Print
              </Button>
            )}
            content={() => printableRef.current}
          />
          <Button
            variant="contained"
            style={{ width: '25%' }}
            onClick={downloadAsPDF}
          >
            Download as PDF
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
