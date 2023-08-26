import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button  } from '@mui/material';
import premiumRoom from '../../assets/img/resource-Manager/premiumRoom.jpg';
import royalSuit from '../../assets/img/resource-Manager/royalSuit.jpg';
import orchidSuit from '../../assets/img/resource-Manager/orchidSuit.jpg';

// const RecentPatientsCard = () => {
//     const recentPatients = [
//       { id: 1, name: 'Royal Suite', diagnostic: 'Royal Suite comes with the luxuries of royalty', avatarUrl: '/assets/img/avatar1.jpg' },
//       { id: 2, name: 'Orchid Suite', diagnostic: 'If you are staying at our Orchid Suite, you might just think you are on holiday', avatarUrl: '/assets/img/avatar2.jpg' },
//       { id: 3, name: 'Premium Room', diagnostic: 'Designed with ample space for you and your loved ones', avatarUrl: '/assets/img/avatar2.jpg' },
//       { id: 4, name: 'Super Deluxe Room', diagnostic: 'With all the luxuries you enjoy at home', avatarUrl: '/assets/img/avatar2.jpg' }
//     ];
  
//     return (
//       <Card sx={{ backgroundColor: '#F0FFFF' }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Recent Patients
//           </Typography>
//           <List>
//             {recentPatients.map((patient) => (
//               <ListItem key={patient.id}>
//                 <ListItemAvatar>
//                   <Avatar alt={patient.name} src={patient.avatarUrl} />
//                 </ListItemAvatar>
//                 <ListItemText primary={patient.name} secondary={patient.diagnostic} />
//                 <Button variant="outlined" size="small">
//                     View
//               </Button>
//               </ListItem>
//             ))}
//           </List>
//         </CardContent>
//       </Card>
//     );
// };

const RM = () => {
    return (
        <React.Fragment>

            <CssBaseline />

            <Container maxWidth="100%">

                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={2}>

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
                                title="doctor"
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
                                title="doctor"
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
                                title="doctor"
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
