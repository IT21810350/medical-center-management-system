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
