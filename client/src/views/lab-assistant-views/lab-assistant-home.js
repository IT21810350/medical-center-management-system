// global imports
import * as React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";

// imports for navbar
import Navbar from '../../components/LA-component/la-nav-bar'

// Lab Assistant Interface Page
function LabPage() {
  return (
  <div>
    <Box>
      <Grid container>
        <Navbar />
      </Grid>
    </Box>
    <Link to={"./labTest"}>lab Test</Link>
  </div>
  );
}

// Const LA(Lab Assistant) defined
// This is used to load all functions into one place
// Just like main function in C
const LA = () => {
  return (
    LabPage()
  );
};

export default LA;
