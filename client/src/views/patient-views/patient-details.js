// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import { Stack } from '@mui/material';

// export default function PatientDetails(){

//     const {id} = "650efb90b6d7126c541b1fbe";
//     //const {id} = useParams();
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
//     });
//     const [isEditing, setIsEditing] = useState(false);
    
//     useEffect (() => {
//         axios
//         .get(`http://localhost:4000/patientData/get/650efb90b6d7126c541b1fbe`)
//         .then((response) => {
//             console.log(response)
//             setPatient(response.data.data.patients);
//         })
//         .catch((error) => {
//             console.error('Error fetching data', error);
//         });
//     }, [id]);

//     const handleEditPatientProfile = async () =>{
//         try{
//             const response = await axios.put(`http://localhost:4000/patientData/update/${id}`, patient);
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
        
//         <input type ="text" name = "name" value={patient.fName} disabled={!isEditing} onChange ={handleInputChange}></input>

//         <button
//     onClick={isEditing ? handleEditPatientProfile : () => setIsEditing(true)}
//     >
//         {isEditing ? 'Save' : 'Edit'}
//     </button>
   
//         </>

//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField} from '@mui/material';
//import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardMedia,CardContent, CardActions,Grid,Typography} from '@mui/material';
import img1 from '../../assets/img/patient/profile.jpg';
import { Stack } from '@mui/material';

import Cookies from 'js-cookie';

export default function PatientDetails(){


  const token = Cookies.get('token');
  const tokenParts = token.split('.');
  const payload = JSON.parse(atob(tokenParts[1]));
  const id = payload.id;
  
  console.log(id)
    //const {id} = "650efb90b6d7126c541b1fbe"; //Defining an id in this way is incorrect, (string)
    //const id = "650f2459b408726a48155646";
    

   // const id = useParams();
    const [patient, setPatient] = useState({
        country : '',
        identity : '',
        fName : '',
        lName : '',
        gender : '',
        dob : '',
        phone : '',
        email : '',
        address : '',
        gName : '',
        relation : '',
        gId : '',
        gContact : '',
        id,
        
    });
    const [isEditing, setIsEditing] = useState(false);
    
    useEffect (() => {

        axios
        .get(`http://localhost:4000/patientData/get/${id}`)
        .then((response) => {
            console.log(response)
            console.log(id)
            setPatient(response.data.user.profile);
            console.log(response.data.user.profile);
        })
        .catch((error) => {
            console.error('Error fetching data', error);
        });
    }, [id]);

    const handleEditPatientProfile = async () =>{
        try{
            const response = await axios.put("http://localhost:4000/patientData/update/" + id, patient);
            if(response.status ===  200){
                setIsEditing(false);
            }
        }catch(error){
            console.error('Error in updation', error);
        }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setPatient({
            ...patient,
            [name]: value,
        });
       };

       
    return (
        <>
         <Grid item xs={12} sm={3}>
   
   <Card sx={{ height: '100%' }} >
     <CardMedia
       component="div"
       sx={{
         // 16:9
         pt: '56.25%',
       }}
       image={img1}

     />
     
     <CardContent >
       <Typography gutterBottom variant="h5" component="h2" align='center'>
         {patient.fName}{patient.lName}
       </Typography>
     </CardContent>
     <CardActions>


       <Button
         component={Link}
         to="/patient-inquiries"
         variant="contained"
         // size="small"
         style={{ width: '100%' }}

         color="primary"
       >
         Inquiries
       </Button>

     </CardActions>
   </Card>

 </Grid>
 <Grid item xs={12} sm={9}>
      <div>
      
          <div>
            <h2>Patient Details</h2>
            {/* <p>Id {patient.idNumber}</p>
            {/* <TextField  
                  label="country"
                  name="name"
                  value={patient.country}
                  onChange={handleInputChange}
                  disabled={!isEditing} /> */}
            
            {/* <p>Relation: {patient.relation}</p> */}
            
                {/* <p>fname : {patient.fName}</p>
                <TextField  
                  label="country"
                  name="country"
                  value={patient.country}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

                <TextField  
                  label="ID Type"
                  name="idType"
                  onChange={handleInputChange}
                  value={patient.idType}
                  disabled={!isEditing} />

                <TextField  
                  label="ID Number"
                  name="idNumber"
                  value={patient.idNumber}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

                <TextField  
                  label="First Name"
                  name="fName"
                  value={patient.fName}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <TextField  
                  label="Last Name"
                  name="lName"
                  value={patient.lName}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <TextField  
                  label="Gender"
                  name="gender"
                  value={patient.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <TextField  
                  label="Date of Birth"
                  name="dob"
                  type='date'
                  value={patient.dob}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <TextField  
                  label="Contact Number"
                  name="phone"
                  value={patient.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <TextField  
                  label="Email"
                  name="email"
                  value={patient.email}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <TextField  
                  label="Address"
                  name="address"
                  value={patient.address}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <TextField  
                  label="Guardian's Name"
                  name="gName"
                  value={patient.gName}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <p>Relation: {patient.relation}</p>

            <TextField  
                  label="Relation"
                  name="relation"
                  value={patient.relation}
                  onChange={handleInputChange}
                  disabled={!isEditing} />

            <TextField  
                  label="Guardian ID"
                  name="gId"
                  value={patient.gId}
                  onChange={handleInputChange}
                  disabled={!isEditing} /> */}

            {/* <TextField  
                  label="Guardian Contact"
                  name="gContact"
                  value={patient.gContact}
                  onChange={handleInputChange}
                  disabled={!isEditing} /> */} 

                {/* <button
                  onClick={isEditing ? handleEditProfile : () => setIsEditing(true)}
                >
                  {isEditing ? 'Save' : 'Edit'}
                </button> */}

      <Grid>
      <Grid xs={12} item>
      First Name <TextField label="First Name" type ="text" name = "fName" value={patient.fName} disabled onChange ={handleInputChange} fullWidth required></TextField>

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
              <Grid xs={12} item>
                <br/>
            <Stack direction="row" spacing={2}>
            {/* <button
    onClick={isEditing ? handleEditPatientProfile : () => setIsEditing(true)}
    >
        {isEditing ? 'Save' : 'Edit'}
    </button>
    */}
              <Button
                onClick={isEditing ? handleEditPatientProfile : () => setIsEditing(true)}
                variant="contained"
                style={{ width: '25%' }}
                color="success">
                {isEditing ? 'Save' : 'Edit'}
              </Button>
              <Button
                component={Link}
                to="#"
                variant="contained"
                style={{ width: '25%' }}
                color="error">
                Delete
              </Button>
            </Stack>
            </Grid>
            </Grid>
          </div>
       
      </div>
    </Grid>
        
       
        




      
        </>

    );
}

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams} from 'react-router-dom';

// export default function EditPatient() {
//   const { id } = useParams();
//   const [patient, setPatient] = useState({});
//   const [loading, setLoading] = useState(true);
//   //const history = useHistory();

//   useEffect(() => {
//     const fetchPatientData = async () => {
//       try {
//         if (id) {
//           const response = await axios.get(`http://localhost:4000/patientData/get/${id}`);
//           setPatient(response.data.patient);
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Error fetching patient details:', error);
//         setLoading(false);
//       }
//     };

//     fetchPatientData();
//   }, [id]);

  // const handleUpdate = async () => {
  //   try {
  //     // Send a PUT request to update the patient record
  //     await axios.put(`http://localhost:4000/patientData/update/${id}`, patient);
  //     alert('Patient updated successfully.');
  //     history.push(`/patient-details/${id}`);
  //   } catch (error) {
  //     console.error('Error updating patient:', error);
  //   }
  // };
//   const handleUpdate = async () => {
//     try {
//       // Send a PUT request to update the patient record
//       await axios.put(`http://localhost:4000/patientData/update/${id}`, patient);
//       alert('Patient updated successfully.');
      
//       // Manually navigate to the patient details page
//       window.location.href = `/patient-details/${id}`;
//     } catch (error) {
//       console.error('Error updating patient:', error);
//     }
//   };
  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPatient({
//       ...patient,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <h1>Edit Patient</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <form>
//           <div>
//             <label htmlFor="fName">First Name</label>
//             <input
//               type="text"
//               id="fName"
//               name="fName"
//               value={patient.fName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="lName">Last Name</label>
//             <input
//               type="text"
//               id="lName"
//               name="lName"
//               value={patient.lName}
//               onChange={handleInputChange}
//             />
//           </div>
//           {/* Add more input fields for other patient attributes */}
//           <button type="button" onClick={handleUpdate}>
//             Update Patient
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, Link } from "react-router-dom";

// export default function UniqueSupplier() {
//   const { id } = useParams();
//   const [supplier, setSupplier] = useState(null);
//   // const [searchQ, setSearchQ] = useState("");

//   useEffect(() => {
//     const fetchSupplierData = async () => {
//       try {
//         if (id) {
//           const response = await axios.get(`http://localhost:8411/supplier/get/${id}`);
//           setSupplier(response.data.supplier);
//         }
//       } catch (error) {
//         alert('Error fetching supplier:', error.message);
//       }
//     };

//     fetchSupplierData();
//   }, [id]);

//   // const handleSearchQ = (e) => {
//   //   setSearchQ(e.target.value);
//   // };

//   // const fetchSupplierDataBySearch = async () => {
//   //   try {
//   //     if (searchQ) {
//   //       const response = await axios.get(`http://localhost:8411/supplier/get/${searchQ}`);
//   //       setSupplier(response.data.supplier);
//   //     }
//   //   } catch (error) {
//   //     alert('Error fetching supplier:', error.message);
//   //   }
//   // };

//   const handleDelete = async (supplierId) => {
//     try {
//       await axios.delete(`http://localhost:8411/supplier/delete/${supplierId}`);
//       alert('Supplier deleted successfully.');
//       // Navigate to All Suppliers page
//       window.location.href = "/supplier/allSuppliers";
//     } catch (error) {
//       alert('Error deleting supplier:', error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchSupplierDataBySearch();
//   };

//   return (
//     <div className="container">
//       <h1>Unique Supplier</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={searchQ}
//           onChange={handleSearchQ}
//           placeholder="Enter Supplier ID"
//         />
//         <button type="submit">Fetch Supplier Data</button>
//         <Link to="/supplier/allSuppliers">
//           <button type="button">Cancel</button>
//         </Link>
//       </form>

//       {supplier ? (
//         <ul>
//           <li key={supplier.id}>
//             Supplier ID: {supplier.supplier_id}<br />
//             Supplier Name: {supplier.supplier_name}<br />
//             Supplier NIC: {supplier.supplier_NIC}<br />
//             Phone Number: {supplier.phone_number}<br />
//             Supplier Position: {supplier.supplier_possition}<br />
//             Email: {supplier.email}<br />
//             Company Name: {supplier.company_name}<br />
//             Item Type: {supplier.item_type}<br />
//             Item Size: {supplier.item_size}<br />
//             Item Code: {supplier.item_code}<br />
//             Brand: {supplier.brand}<br />
//             Quantity: {supplier.quntity}<br />
//             Unit Price: {supplier.unit_price}<br />
//             Total Price: {supplier.total_price}<br />
//             Ordered Date: {supplier.orderd_date}<br />
//             Manufactured Date: {supplier.manufatured_date}<br />
//             Invoice Number: {supplier.invoice_number}<br />
//             <button onClick={() => handleDelete(supplier.supplier_id)}>Delete Supplier</button>
//           </li>
//         </ul>
//       ) : (
//         <p>No supplier found with the specified ID.</p>
//       )}

//       {/* Link to All Suppliers page */}
//      <Link to="/supplier/allSuppliers">All Suppliers</Link>
//     </div>
//   );
// }
