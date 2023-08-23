import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img1 from '../../assets/img/supplier/sage.jpg';


const Name = () => {

    return(
        <div>
            <h2>Hello, Santhushieeee!!!!</h2>
        </div>
    );
}

const Address = () => {

    return(
        <div>
            <h2>Mathara</h2>
        </div>
    );
}

const Uni = () => {

    return(
        <div>
            <h2>SLIIT</h2>
        </div>
    );
}


const SM = () => {
    return (
        
        <Container maxWidth="100%">

            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={2}>

                    <Grid item lg={2} sx={{backgroundColor: '#f5f5f5', padding: '10px' }}>
                        <Name/>
                    </Grid>

                    <Grid item lg={2} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
                        <Address/>
                    </Grid>

                    <Grid item lg={2} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>

                        <Uni/>
                    </Grid>

                    <Grid item lg={6} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
                        <Card sx={{ maxWidth: 1000, backgroundColor: '#fff444' }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image={img1}
                                alt="green iguana"
                                />

                                <CardContent>

                                    <Typography gutterBottom variant="h5" component="div" textAlign={"Center"}>
                                        Lizard
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            </Card>
                    </Grid>

                </Grid>

            </Box>

        </Container>
        
    );
};

export default SM;
