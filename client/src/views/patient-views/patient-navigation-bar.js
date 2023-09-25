// import React from 'react';
// import {Link} from '@mui/material';

// export default function PatientNavigationBar(){
//     return(
//         <>
//         <ul>
//             <li>
//                 <Link href="/dash">Home</Link>
//             </li>

//             <li>
//                 <Link href="/search-chanelling">Search Chanelling</Link>
//             </li>

//             {/**This should be visible only to the pages which has access without login */}
//             <li>
//                 <Link href="/patient-create-account">Create account</Link>
//             </li>
            

//             {/** This should be directed from search chanelling page. Patients cannot access this page directly.
//              * This page contains all the available time slots of a particular doctor.
//             <li>
//                 <Link href="/make-chanelling">Make Chanelling</Link>
//             </li>*/}

//             <li>
//                 <Link href="/patient-profile">Profile</Link>
//             </li>

//             {/* <li>
//                 <Link href="/search-p">Search Profile</Link>
//             </li> */}
            

//         </ul>
        
//         </>
//     );

// }

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';

export default function PatientNavigationBar() {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MC
                    </Typography>
                    <Button color="inherit" component={Link} to="/dash">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/search-chanelling">
                        Search Chanelling
                    </Button>
                    {/**This should be visible only to the pages which has access without login */}
                    <Button color="inherit" component={Link} to="/patient-create-account">
                        Create Account
                    </Button>
                    <Button color="inherit" component={Link} to="/patient-profile">
                        Profile
                    </Button>
                    {/* <Button color="inherit" component={Link} to="/search-p">
                        Search Profile
                    </Button> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
