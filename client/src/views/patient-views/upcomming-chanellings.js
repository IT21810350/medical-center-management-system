import React from 'react';
import { Box, Grid,  Typography, } from '@mui/material';

//import ChanellinDetailsCard from '../../components/patient-components/chanelling-details-card';

export default function UpcomingChanellings(){
    return(
        <>
         {/* <PatientNavigationBar/>
         import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar'; */}
            <Grid container spacing={3}>
      
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Box border={1} p={2}>
            <Typography variant="h6">
             Hiiii
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Box border={1} p={2}>
            <Typography variant="h6">
             Hiiii
            </Typography>
          </Box>
        </Grid>
     
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Box border={1} p={2}>
            <Typography variant="h6">
             Hiiii
            </Typography>
          </Box>
        </Grid>
     
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Box border={1} p={2}>
            <Typography variant="h6">
             Hiiii
            </Typography>
          </Box>
        </Grid>
     
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Box border={1} p={2}>
            <Typography variant="h6">
             Hiiii
            </Typography>
          </Box>
        </Grid>
     
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Box border={1} p={2}>
            <Typography variant="h6">
             Hiiii
            </Typography>
          </Box>
        </Grid>
     
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Box border={1} p={2}>
            <Typography variant="h6">
             Hiiii
            </Typography>
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

