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



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {
  return (
    <div>
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ maxWidth: 550 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ms.Santhushie Nallaperuma
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       Supplier Manager
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          
          
          
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            
          </Grid>
         
        </Grid>
      </Box>
    </div>
  );
}
