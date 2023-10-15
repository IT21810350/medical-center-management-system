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
import { FaFlask, FaList, FaBook, FaToolbox } from 'react-icons/fa';
import backgroundImage from '../../assets/img/lab-assistant/home.png';

function LabAssistantHomePage() {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: 'Arial, Helvetica, sans-serif', // Use web-safe fonts
      }}
    >
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
          padding: '20px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom style={{ fontSize: '3.5rem' , fontWeight:'bold'}}>
          Welcome, Lab Assistant!
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" style={{ fontSize: '2rem' }}>
                  Quick Links
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/lab-sample"
                  startIcon={<FaFlask />}
                  style={{ margin: '10px 0', fontSize: '1.5rem' }}
                >
                  Lab Samples
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/lab-inventory"
                  startIcon={<FaToolbox />}
                  style={{ margin: '10px 0', fontSize: '1.5rem' }}
                >
                  Lab Inventory
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/lab-report"
                  startIcon={<FaBook />}
                  style={{ margin: '10px 0', fontSize: '1.5rem' }}
                >
                  Lab Reports
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/lab-test"
                  startIcon={<FaList />}
                  style={{ margin: '10px 0', fontSize: '1.5rem' }}
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
