import React from 'react';
import { Link } from 'react-router-dom';
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
import img2 from '../../assets/img/supplier/profile.jpg';
import img3 from '../../assets/img/supplier/list.jpeg';
import img4 from '../../assets/img/supplier/inven_item.jpeg';
import img5 from '../../assets/img/supplier/inven_medicine.jpeg';
import img6 from '../../assets/img/supplier/request.jpeg';
import img7 from '../../assets/img/supplier/confirm.jpeg';
import img8 from '../../assets/img/supplier/pharmacy.jpeg';
import img9 from '../../assets/img/supplier/pay.jpeg';

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

const SupplierRegistration = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <Link to="/supplier/supplier-registration" style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={img1}
                alt="Supplier Registration"
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
                    Supplier Registration
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Item>
    </Grid>

  );
};

const SupplierProfile = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <Link to="/supplier/supplier-profile" style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={img2}
                alt="Supplier Profile"
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
                    Supplier Profile
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description for Supplier Profile
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Item>
    </Grid>
  );
};

const SupplierList = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
        <Link to="/supplier/supplier-list" style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={img3}
              alt="Supplier List"
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
                  Supplier List
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Supplier List
              </Typography>
            </CardContent>
          </CardActionArea>
          </Link>
        </Card>
      </Item>
    </Grid>
  );
};

const InventoryItems = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={img4}
              alt="Inventory Items"
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
                  Inventory Items
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Inventory Items
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
};

const InventoryMedicine = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={img5}
              alt="Inventory Medicine"
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
                  Inventory Medicine
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Inventory Medicine
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
};

const OrderRequest = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={img6}
              alt="Order Request"
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
                  Order Request
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Order Request
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
};

const OrderConfirmation = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={img7}
              alt="Order Confirmation"
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
                  Order Confirmation
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Order Confirmation
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
};

const OrderForPharmacy = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={img8}
              alt="Order for Pharmacy"
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
                  Order for Pharmacy
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Order for Pharmacy
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
};

const SupplierPayment = () => {
  return (
    <Grid item xs={4}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={img9}
              alt="Supplier Payment"
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
                  Supplier Payment
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Supplier Payment
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
};

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
                        backgroundColor: 'darkblue',
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

          {/* Additional Grid (xs=8) */}
          <Grid item xs={8}>
            <Grid container spacing={2}>
              {/* Render the SupplierRegistration component here */}
              <SupplierRegistration />
              {/* Render the SupplierProfile component here */}
              <SupplierProfile />
              {/* Render other components/cards here */}
              <SupplierList />
              <InventoryItems />
              <InventoryMedicine />
              <OrderRequest />
              <OrderConfirmation />
              <OrderForPharmacy />
              <SupplierPayment />
              {/* Add more components/cards as needed */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
