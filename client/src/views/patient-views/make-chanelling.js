import React from 'react';
import {Link} from '@mui/material';
import { useParams } from 'react-router-dom';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
         
export default function PatientMakeChanelling(){
    let { value } = useParams();
    return(
        <>
         <PatientNavigationBar/>
        
        <h1>PatientMakeChanelling</h1>
        <br/>
        <p>Received Value: {value}</p>
        <Link href="/confirm-chanelling">Confirm Chanelling</Link>
        </>
    );
}

 