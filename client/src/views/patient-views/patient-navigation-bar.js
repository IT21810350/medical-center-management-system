import React from 'react';
import {Link} from '@mui/material';

export default function PatientNavigationBar(){
    return(
        <>
        <ul>
            <li>
                <Link href="/dash">Home</Link>
            </li>

            <li>
                <Link href="/search-chanelling">Search Chanelling</Link>
            </li>

            {/**This should be visible only to the pages which has access without login */}
            <li>
                <Link href="/patient-create-account">Create account</Link>
            </li>
            

            {/** This should be directed from search chanelling page. Patients cannot access this page directly.
             * This page contains all the available time slots of a particular doctor.
            <li>
                <Link href="/make-chanelling">Make Chanelling</Link>
            </li>*/}

            <li>
                <Link href="/patient-profile">Profile</Link>
            </li>

        </ul>
        
        </>
    );

}