import React from 'react';
import {
  AppBar,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import NavBar from '../../components/LA-component/la-nav-bar';
import { Link } from 'react-router-dom';
import { FaFlask, FaList, FaBook, FaToolbox } from 'react-icons/fa'; // Import icons

// Import your background image
import backgroundImage from '../../assets/img/lab-assistant/home.png';

function LabAssistantHomePage() {
  return (
    <div
    style={{
      background: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${backgroundImage})`, // Use the imported image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '10px',
    }}>
      <AppBar position="static">
        <Box>
          <Grid>
            <NavBar />
          </Grid>
        </Box>
      </AppBar>
      <Container
        maxWidth="md"
        style={{
          marginTop: '20px',
          padding: '20px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome, Lab Assistant!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Quick Links</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/lab-sample"
                  startIcon={<FaFlask />}
                  style={{ margin: '10px 0' }}
                >
                  Manage Samples
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/lab-inventory"
                  startIcon={<FaToolbox />}
                  style={{ margin: '10px 0' }}
                >
                  Lab Inventory
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/lab-report"
                  startIcon={<FaBook />}
                  style={{ margin: '10px 0' }}
                >
                  Lab Reports
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/lab-test"
                  startIcon={<FaList />}
                  style={{ margin: '10px 0' }}
                >
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
