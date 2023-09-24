import React from 'react';
import {
  AppBar,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import NavBar from '../../components/LA-component/la-nav-bar'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function LabAssistantHomePage() {
  return (
    <div>
      <AppBar position="static">
        <Box>
          <Grid>
            <NavBar/>
          </Grid>
        </Box>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome, Lab Assistant!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Card>
              <CardContent>
                <Typography variant="h5">Quick Links</Typography>
                <Button variant="contained" color="primary" component={Link} to="/lab-sample">
                  Manage Samples
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/lab-inventory">
                  Lab Inventory
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/lab-report">
                  Lab Reports
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/lab-test">
                  Lab Test
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LabAssistantHomePage;