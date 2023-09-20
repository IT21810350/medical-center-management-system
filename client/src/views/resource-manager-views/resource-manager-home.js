import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import premiumRoom from '../../assets/img/resource-Manager/premiumRoom.jpg';
import royalSuit from '../../assets/img/resource-Manager/royalSuit.jpg';
import orchidSuit from '../../assets/img/resource-Manager/orchidSuit.jpg';
import NavBar from '../../components/resource-person-component/resource-person-nav-bar';

const RM = () => {
    return (
        <React.Fragment>

            <CssBaseline />

            <Container maxWidth="100%">

                <Box sx={{ flexGrow: 1 }}>

                    <Grid>
                        <NavBar/>
                        
                    </Grid>

                    <Grid container spacing={2} sx={{ marginTop: '10px' }}>

                        {/* <Grid item lg={4} sx={{backgroundColor: '#f5f5f5', padding: '10px' }}>
                            <RecentPatientsCard />
                        </Grid> */}

                        {/* <Grid item lg={4} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
                            <UpcomingAppointmentsCard />
                        </Grid> */}

                        {/* room type 1 */}
                        <Grid item lg={4} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>

                        <Card sx={{ backgroundColor: '#F0FFFF' }}>
                            <CardMedia 
                                sx={{ height: 300 }}
                                image= {premiumRoom}
                                title="Premium room"
                            />

                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    PREMIUM ROOM
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Designed with ample space for you and your loved ones, the 480sq ft Premium Room provides the 
                                facilities you need to make your visit as comfortable and relaxed as possible. The room is fully 
                                air conditioned with an attached toilet, individual TV and phone line. A unique facet of this suite 
                                is that there is a private corridor with seating facility that also has a separate WC. Inside the 
                                suite, a separate attendant’s area is furnished with a divan bed and a refrigerator.
                                </Typography>
                            </CardContent>

                        </Card>

                        </Grid>
                        
                        {/* room type 2 */}
                        <Grid item lg={4} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>

                        <Card sx={{ backgroundColor: '#F0FFFF' }}>
                            <CardMedia 
                                sx={{ height: 300 }}
                                image= {royalSuit}
                                title="Royal suite"
                            />

                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    ROYAL SUITE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                As the name suggests, the Royal Suite comes with the luxuries of royalty. It is fully served with 
                                air-conditioning, television and phone lines, an attached toilet and refrigerator. The patients 
                                also have the additional benefit of a visitor’s room with a sofa and attached toilet facilities for 
                                visitors.
                                </Typography>
                            </CardContent>

                        </Card>

                        </Grid>

                        {/* room type 3 */}
                        <Grid item lg={4} sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>

                        <Card sx={{ backgroundColor: '#F0FFFF' }}>
                            <CardMedia 
                                sx={{ height: 300 }}
                                image= {orchidSuit}
                                title="Orchid suite"
                            />

                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    ORCHID SUITE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                If you are staying at our Orchid Suite, you might just think you are on holiday. This Suite has all 
                                the amenities of a hotel, with space and facilities for the patient and their visitors. Fully served 
                                with air conditioning, television and phone, attached toilet and refrigerator, the Orchid Suite also 
                                has an adjoining visitor’s room with a sofa. Royal Suite
                                </Typography>
                            </CardContent>

                        </Card>

                        </Grid>

                    </Grid>

                </Box>

            </Container>
            
      </React.Fragment>
    );
};

export default RM;
