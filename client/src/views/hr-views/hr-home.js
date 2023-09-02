import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ii from './New folder/cc.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { LineChart } from '@mui/x-charts/LineChart';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';


// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Link from '@mui/material/Link';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'Email', headerName: 'Email', width: 130 },
  { field: 'position', headerName: 'position', width: 130, },
  { field: 'Netsalary', headerName: 'Netsalary', width: 130, },
  { filed: 'action', headerName: 'Action', width: 150 },

  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => (
      <div>
        <IconButton onClick={() => console.log("edited")}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton onClick={() => console.log("delete")}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </div>
    ),
  },

  { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 80, valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`, },
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  { id: 1, firstName: 'Snow', lastName: 'malshan', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
  { id: 2, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
  { id: 3, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
  { id: 4, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
  { id: 5, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
  { id: 6, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
  { id: 7, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
  { id: 8, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
  { id: 9, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
];



// pie chart data 
const data = [
  { id: 0, value: 10, label: '2021' },
  { id: 1, value: 15, label: '2020 ' },
  { id: 2, value: 50, label: '2022' },
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const HR = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item elevation={0}>
              <Card sx={{ maxWidth: 1400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="450"
                    image={ii}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* Second grid */}
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item elevation={0}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={ii}
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
            <Grid item xs={4}>
              <Item elevation={0}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={ii}
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
            <Grid item xs={4}>
              <Item elevation={0}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={ii}
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

          </Grid>
        </Box>

      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item elevation={0}>
                <PieChart
                  series={[
                    {
                      data,
                      highlightScope: { faded: 'global', highlighted: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30 },
                    },
                  ]}
                  sx={{
                    [`& .${pieArcClasses.faded}`]: {
                      fill: 'gray',
                    },
                  }}
                  height={300}
                />

              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={0}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      area: true,
                    },
                  ]}
                  width={500}
                  height={300}
                />

              </Item>
            </Grid>

          </Grid>
        </Box>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item elevation={0}>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                </div>

              </Item>
            </Grid>
          </Grid>
        </Box>


      </div>
      <div>
       
    </div>
    </div>
  );

};

export default HR;
