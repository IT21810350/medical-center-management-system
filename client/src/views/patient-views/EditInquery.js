import React, { useEffect, useState } from 'react';
//import { TextField, Button, Typography, Grid } from '@mui/material';
//import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
import { useParams } from 'react-router-dom';
import  {Button, TextField} from '@mui/material';

export default function EditInquiry(){
  
    const [isEditing, setIsEditing] = useState(false); 
    const {id} = useParams();
   const[inquery, setInquery] = useState({
    name : '',
    subject : '',
    message : '',
   });

   useEffect(() => {
        axios
        .get(`http://localhost:4000/inqData/get/${id}`)
        .then((response) => {
          console.log(response)
        //   {
        //     "status": "Inquiry found",
        //     "inq": {
        //         "_id": "652561205b4f2d395202cf5a",
        //         "name": "Himaya",
        //         "subject": "New Message",
        //         "message": "Message 123",
        //         "createdAt": "2023-10-10T14:35:12.066Z",
        //         "updatedAt": "2023-10-10T14:35:12.066Z",
        //         "__v": 0
        //     }
        // }
            setInquery(response.data.inq);
        })
        .catch((error) => {
            console.error('Error fetching data', error);
        });
   }, [id]);

   const handleEditInquery = async () => {
    try{
        const response = await axios.put(
            `http://localhost:4000/inqData/updateinq/${id}`, inquery
        );
        if(response.status === 200){
            setIsEditing(false);
        }
    } catch(error){
        console.error('Error in updation ', error);
    }
   };

   const handleInputChange = (e) => {
    const {name, value} = e.target;
    setInquery({
        ...inquery,
        [name]: value,
    });
   };

   
   
    return(
    <>
    <PatientNavigationBar/>

<br/><br/>
  

<TextField
              fullWidth
              label = "name"
              name = "name"
              variant="outlined"
              value= {inquery.name}
              onChange ={handleInputChange}
              disabled={!isEditing}
              required
            />

<br/><br/>

<TextField
              fullWidth
              label = "subject"
              name = "subject"
              variant="outlined"
              value= {inquery.subject}
              onChange ={handleInputChange}
              disabled={!isEditing}
              required
            />
            <br/><br/>
            <TextField
              fullWidth
              label = "message"
              name = "message"
              variant="outlined"
              value= {inquery.message}
              onChange ={handleInputChange}
              disabled={!isEditing}
              required
            />
<br/><br/>
    
    
    <Button
    type="submit"
    variant="contained"
    color="success"
    style={{width:200}}
    onClick={isEditing ? handleEditInquery : () => setIsEditing(true)}
    >
        {isEditing ? 'Save' : 'Edit'}
    </Button>
    </>
    
    );
}



































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';

// const EditInquiry = () => {
//   //const { id } = useParams();
//   const { id } = '650f3520faf0658ee3fc8199';
//   const[inquiry, setInquiry] = useState(null);
//   //const navigate = useNavigate();
//   //const location = useLocation(); // Get the location object to access state
//   //const { inquiryData } = location.state || {}; // Destructure inquiryData from state

//   // Use inquiryData to initialize the state
//   // const [inquiry, setInquiry] = useState({
//   //   name: inquiryData?.name || '', // Use the data if available, or empty string
//   //   subject: inquiryData?.subject || '',
//   //   message: inquiryData?.message || '',
//   // });

//   // const fetchInquiry = async () => {
//   //   try {
//   //     const response = await axios.get(`http://localhost:4000/inqData/650f3520faf0658ee3fc8199`);
//   //     setInquiry(response.data);
//   //   } catch (error) {
//   //     console.error('Error fetching inquiry for editing:', error);
//   //   }
//   // };

//   useEffect(() => {
//     const id  = '650f3520faf0658ee3fc8199';
//     const fetchInquiryDetails = async ()=>{
//       try{
//         if(id){
//           const response = await axios.get(`http://localhost:4000/inqData/${id}`);
//           setInquiry(response.data.inquiry);
//         }
//       }catch(error){
//         console.error('Error fetching inquiery details:', error);
//       }
//     };
//     fetchInquiryDetails();
//   }, [id]);

//   // const handleFormSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.put(`http://localhost:4000/inqData/updateinq/`, inquiry);

//   //     if (response.status === 200) {
//   //       navigate('/inquiries'); // Redirect to inquiries list on success
//   //     } else {
//   //       console.error('Error updating inquiry:', response.data.error);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error updating inquiry:', error);
//   //   }
//   // };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInquiry({ ...inquiry, [name]: value });
//   };

//   return (
//     <div>
//       <h2>Edit Inquiry</h2>
//       <form onSubmit={handleFormSubmit}>
//         {/* Name input */}
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={inquiry.name}
//             onChange={handleInputChange}
//             disabled // Optionally disable the "name" field
//           />
//         </div>

//         {/* Subject input */}
//         <div>
//           <label>Subject:</label>
//           <input
//             type="text"
//             name="subject"
//             value={inquiry.subject}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         {/* Message input */}
//         <div>
//           <label>Message:</label>
//           <textarea
//             name="message"
//             value={inquiry.message}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <button type="submit">Update Inquiry</button>
//       </form>
//     </div>
//   );
// };

// export default EditInquiry;

// import React, { useEffect, useState } from 'react';
// import PatientInquiries from './inquiries'; // Import your form component

// function EditInquiry({ match }) {
//   const [inquiry, setInquiry] = useState({});

//   useEffect(() => {
//     // Fetch the inquiry data by ID and set it in the state
//     const fetchInquiry = async () => {
//       try {
//         // const response = await fetch(`http://localhost:4000/inqData/updateinq/${match.params.id}`);
//         const response = await fetch(`http://localhost:4000/inqData/updateinq/650f3520faf0658ee3fc8199`);
//         if (response.ok) {
//           const data = await response.json();
//           setInquiry(data.inquiry);
//         } else {
//           console.error('Failed to fetch inquiry data');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchInquiry();
//   }, [match.params.id]);

//   const handleUpdate = async (formData) => {
//     try {
//       // const response = await fetch(`/api/updateinq/${match.params.id}`, {
//         const response = await fetch(`http://localhost:4000/inqData/updateinq/650f3520faf0658ee3fc8199`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Inquiry updated successfully
//         // You can handle the success case as needed (e.g., show a success message)
//       } else {
//         console.error('Failed to update inquiry');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Inquiry</h1>
//       <PatientInquiries inquiry={inquiry} onSubmit={handleUpdate} />
//     </div>
//   );
// }

// export default EditInquiry;

// import React, { Component, createRef } from 'react';
// import axios from 'axios';

// export default class EditInquiry extends Component {

//     // The constructor is a method used to initialize an object's state in a class.
//     constructor(props) {
//         // super() is used to call the constructor of parent class.
//         super(props);

//         // In JavaScript, class methods are not bound by default. 
//         this.onChangeUsername = this.onChangeUsername.bind(this); 
//         this.onChangeSubject = this.onChangeSubject.bind(this);
//         this.onChangeMessage = this.onChangeMessage.bind(this);

//         this.onSubmit = this.onSubmit.bind(this);

//         this.userInputRef = createRef();

//         // In React, component properties should be kept in an object called state.
//         this.state = {
//             username: '',
//             subject: '',
//             message: 0,
//             inquiries: []
//         }

//     }
    

//     componentDidMount(){

//         const url = window.location.href;
//         const parts = url.split('/');
//         // const id = parts[parts.length - 1];       
//         const id = "650f3520faf0658ee3fc8199";        

//         axios.get('http://localhost:4000/updateinq/updateinq/' + id)
//             .then(Response => {
//                 this.setState({
//                     username: Response.data.username,
//                     subject: Response.data.subject,
//                     message: Response.data.message
//                 })
//             })
//             .catch(function(error){
//                 console.log(error);
//             })

//         axios.get('http://localhost:4000/updateinq')
//             .then(Response => {
//                 if(Response.data.length > 0){
//                     this.setState({
//                         users: Response.data.map(user => user.username),
//                     })
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }

//     onChangeUsername(e) {
//         this.setState({
//             username: e.target.value
//         });
//     }

//     onChangeSubject(e) {
//         this.setState({
//             subject: e.target.value
//         });
//     }

//     onChangeMessage(e) {
//         this.setState({
//             message: e.target.value
//         });
//     }


//     onSubmit = async (e) => {
//         e.preventDefault();

//         const patientData = {
//             username: this.state.username,
//             subject: this.state.subject,
//             message: this.state.message
//         }

//         console.log(patientData);

//         const url = window.location.href;
//         const parts = url.split('/');
//         const id = parts[parts.length - 1];    

//         await axios.post('http://localhost:4000/updateinq/update/' + id, patientData)
//             .then(res => console.log(res.data));
        
//         window.location = '/'
//     }
    
//     render() {
//         return (
//           <div>
//             <form onSubmit={handleSubmit}>
//               <Typography variant="h4" align="center" gutterBottom>
//                 Patient Inquiry
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Name"
//                     name="name"
//                     variant="outlined"
//                     value={patientData.username}
//                     onChange={onChangeUsername}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Subject"
//                     name="subject"
//                     variant="outlined"
//                     value={patientData.subject}
//                     onChange={onChangeSubject}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Message"
//                     name="message"
//                     multiline
//                     rows={4}
//                     variant="outlined"
//                     value={patientData.message}
//                     onChange={onChangeMessage}
//                     required
//                   /><br /><br />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 startIcon={<SendIcon />}
//               >
//                 Submit
//               </Button>
//             </form>
//           </div>
//         )
//     }

// }




//===========================================
//===========================================
//===========================================
//===========================================
//===========================================
//===========================================


// import React, { useState } from 'react';

// function InquiryForm({ inquiry, onSubmit }) {
//   const [formData, setFormData] = useState({
//     name: inquiry.name,
//     subject: inquiry.subject,
//     message: inquiry.message,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Subject:</label>
//         <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Message:</label>
//         <textarea name="message" value={formData.message} onChange={handleChange} />
//       </div>
//       <button type="submit">Update Inquiry</button>
//     </form>
//   );
// }

// export default InquiryForm;

//===========================================
//===========================================
//===========================================
//===========================================
//===========================================
//===========================================
