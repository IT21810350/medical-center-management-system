import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import img from '../../assets/img/supplier/supplier.jpg';
import img1 from '../../assets/img/supplier/Registration.jpg';
// import img2 from '../../assets/img/supplier/profile.jpg';
// import img3 from '../../assets/img/supplier/list.jpeg';
// import img4 from '../../assets/img/supplier/inven_item.jpeg'
// import img5 from '../../assets/img/supplier/inven_medicine.jpeg';
// import img6 from '../../assets/img/supplier/request.jpeg'
// import img7 from '../../assets/img/supplier/confirm.jpeg'
// import img8 from '../../assets/img/supplier/pharmacy.jpeg'
// import img9 from '../../assets/img/supplier/pay.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const mainCardData = {
  image: img,
  title: 'Ms.Santhushie Nallaperuma',
  description: 'Supplier Manager',
};

const SuppilerRegister = () => {

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={img1}
            alt="Suppiler Registreaion"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                backgroundColor: 'darkblue',
                padding: '8px',
              }}
            >
              <Typography
                component="span"
                variant="inherit"
                sx={{ color: 'lightblue' }}
              >
                Supplier Registraion
              </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descriptions
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* Main Card (xs=4) */}
          <Grid item xs={4}>
            <Item>
              <Card sx={{ maxWidth: 550 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={mainCardData.image}
                    alt=""
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        backgroundColor: 'dark blue',
                        padding: '8px',
                      }}
                    >
                      <Typography
                        component="span"
                        variant="inherit"
                        sx={{ color: 'lightblue' }}
                      >
                        {mainCardData.title}
                      </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {mainCardData.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>

          {/* Additional Cards (xs=4 each) */}
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <SuppilerRegister/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
