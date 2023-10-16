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
