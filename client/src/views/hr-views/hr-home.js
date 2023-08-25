import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CssBaseline, AppBar, Toolbar } from '@mui/material';
import img1 from '../../assets/img/HR/test.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";

// const Name = () =>{

//     return(
//         <div>
//             <h2>I am ravindu</h2>
//         </div>
//     );
// }

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const NAV = () => {

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
                        Home
                    </Button>
                    <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
                        Contact Us
                    </Button>
                    <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
                        About Us
                    </Button>
                    <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
                        Lab Facilities
                    </Button>
                    <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
                        Popular Doctors
                    </Button>
                    <Button color="inherit" href="#" variant="outlined" sx={{ mr: 2 }}>
                        HR Module
                    </Button>
                    <Link color="inherit" to="/signup">
                        <Button variant="contained" color="info">
                            Signup
                        </Button>
                    </Link>
                    {/* <Link color="inherit" href="#" onClick={handleLogout}>
          <Button variant="contained" color="warning">
            Logout
          </Button>
        </Link> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const HR = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NAV />
            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={img1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Item>
                </Grid>

                <Grid item xs={9}>
                    <Item>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
};

export default HR;
