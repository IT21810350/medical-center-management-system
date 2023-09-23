import React from 'react';
import {Link} from '@mui/material';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';

export default function ChanellingConfirmation(){
    return(
        <>
         <PatientNavigationBar/>
        <h1>ChanellingConfirmation</h1>
        <p>Show payment details and patient details + appointment details<br/>
        If the chanelling id confimed, direct to the payment pages</p>
        

        <Link >Confirm</Link>
        </>
    );
}