import React from 'react';
import { Box, Button, Grid,  Typography, Stack,Link} from '@mui/material';

//import ChanellinDetailsCard from '../../components/patient-components/chanelling-details-card';

export default function UpcomingChanellings(){
    return(
        <>
         {/* <PatientNavigationBar/>
         import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar'; */}
            <Grid container spacing={3}>
      
        <Grid item xs={12} sm={6} md={4} lg={3} style={{backgroundColor:"lightyellow" , marginTop:20  , marginRight:10 , marginLeft:10 , marginBottom:10}} >
          <Box  p={2} >
            <Typography variant="h6">Date</Typography>
            <Typography variant="h6">Time</Typography>
            <Typography>Appointment Name</Typography>
            <Typography variant="h6">Dr. Name</Typography>
            <Typography variant="h6">Appointment number</Typography>

              <Stack direction="column" spacing={2}>
                <Button variant="contained" color="primary">
                  <Link href="/rescedule-appointment" style={{ textDecoration: 'none', color: 'white' }}>Reschedule</Link>
                </Button>
                <Button variant="contained" color="error">
                <Link href="/delete-appointment" style={{ textDecoration: 'none', color: 'white' }}>Cancel</Link>
                </Button>
              </Stack>

          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} style={{backgroundColor:"lightyellow" , marginTop:20  , marginRight:10 , marginLeft:10 , marginBottom:10}} >
          <Box  p={2} >
            <Typography variant="h6">Date</Typography>
            <Typography variant="h6">Time</Typography>
            <Typography>Appointment Name</Typography>
            <Typography variant="h6">Dr. Name</Typography>
            <Typography variant="h6">Appointment number</Typography>

              <Stack direction="column" spacing={2}>
                <Button variant="contained" color="primary">
                  <Link href="/make-chanelling" style={{ textDecoration: 'none', color: 'white' }}>Reschedule</Link>
                </Button>
                <Button variant="contained" color="error">
                <Link href="#" style={{ textDecoration: 'none', color: 'white' }}>Cancel</Link>
                </Button>
              </Stack>

          </Box>
        </Grid>
        
     
    
     
     
    </Grid>
        </>
    );
}

// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// function CardGrid() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Make an HTTP request to your API endpoint
//     fetch('/api/data') // Replace '/api/data' with your actual API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the component's state with the fetched data
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // The empty dependency array ensures this effect runs once when the component mounts

//   return (
//     <Grid container spacing={3}>
//       {data.map((item, index) => (
//         <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//           <Box border={1} p={2}>
//             <Typography variant="h6">
//               {item.content}
//             </Typography>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

