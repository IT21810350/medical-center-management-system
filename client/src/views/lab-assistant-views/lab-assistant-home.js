// global imports
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../../assets/img/lab-assistant/home_background.png';
//import {Link} from "react-router-dom";

// imports for navbar
import Navbar from '../../components/LA-component/la-nav-bar'

// Lab Assistant Interface Page
function LabHome() {
  return ( 
    <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat"}}>
      <Box>
        <Grid>
          <Navbar/>
        </Grid>
      </Box>
    </div>
  );
}

// Anon Function LA Calls the LabHome function
// LabHome function loads lab-assistant home page content
const LA = () => {
  return (
    LabHome()
  );
};

export default LA;