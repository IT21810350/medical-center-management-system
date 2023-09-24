import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';



const Pharmacist  = () => {
    return (
        <div>
            <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        //backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }}  />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(33, 150, 243)',
        }}
      />
      
      
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" align="center" gutterBottom>
              Welcome to Our Pharmacy !
            </Typography>
            <Link variant="subtitle1" href="#">
            </Link>
          </Box>
        </Grid>
      </Grid>
      </Paper>

      <Container
      maxWidth="xl"
      style={{
        height: '70vh', 
        width: '70vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255,255,255)', 
      }}
    >
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Pharmacist Profile</h1>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-first-name"
              label="First Name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-last-name"
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-email"
              label="Email Address"
              type="email"
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-phone"
              label="Contact Number"
            />
             </Grid>

          <Grid xs={12} sm={6} item>
            <FormControl required>
              <FormLabel >Gender</FormLabel>
                <RadioGroup
                  row>
                    <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                    <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                </RadioGroup>
              </FormControl>
          </Grid>
         
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="outlined-required-nic"
              label="NIC"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required-bio"
              label="Bio"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </div>
      <Grid item >
          <Stack direction="row" spacing={4} justifyContent= 'center' >
            <Button  type='submit'  variant="contained"  color="error">CANCEL</Button>
            <Button type='submit'  variant="contained" >SUBMIT</Button>
          </Stack>
      </Grid>
    </Container>

      
    
            
        </div>
    );
};

export default Pharmacist;