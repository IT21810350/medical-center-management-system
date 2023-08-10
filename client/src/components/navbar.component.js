import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { LocalHospital, LocalPharmacy, Person, MonetizationOn, Flare, AccountCircle, AccountBalance, LocalShipping } from '@mui/icons-material';

export default class Navbar extends Component {

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            MCM
                        </Link>
                    </Typography>
                    <List component="nav" aria-labelledby="main navigation" sx={{ display: 'flex' }}>
                        <ListItem component={Link} to="/patient" button>
                            <Person sx={{ marginRight: 1 }} />
                            <ListItemText primary="Patient" />
                        </ListItem>
                        <ListItem component={Link} to="/doctor" button>
                            <LocalHospital sx={{ marginRight: 1 }} />
                            <ListItemText primary="Doctor" />
                        </ListItem>
                        <ListItem component={Link} to="/pharmacist" button>
                            <LocalPharmacy sx={{ marginRight: 1 }} />
                            <ListItemText primary="Pharmacist" />
                        </ListItem>
                        <ListItem component={Link} to="/hr" button>
                            <AccountCircle sx={{ marginRight: 1 }} />
                            <ListItemText primary="Human Resource" />
                        </ListItem>
                        <ListItem component={Link} to="/fm" button>
                            <MonetizationOn sx={{ marginRight: 1 }} />
                            <ListItemText primary="Financial Manager" />
                        </ListItem>
                        <ListItem component={Link} to="/la" button>
                            <Flare sx={{ marginRight: 1 }} />
                            <ListItemText primary="Lab Assistant" />
                        </ListItem>
                        <ListItem component={Link} to="/rm" button>
                            <AccountBalance sx={{ marginRight: 1 }} />
                            <ListItemText primary="Resource Manager" />
                        </ListItem>
                        <ListItem component={Link} to="/sm" button>
                            <LocalShipping sx={{ marginRight: 1 }} />
                            <ListItemText primary="Supplier Manager" />
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        );
    }
}
