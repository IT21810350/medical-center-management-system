import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../../components/HR-component/hr-nav-bar';

export default function EmployeeProfile() { 
  return (
    <div>
      <Box>
        <Grid container>
          <Navbar />
        </Grid>
      </Box>
    </div>
  );
}
