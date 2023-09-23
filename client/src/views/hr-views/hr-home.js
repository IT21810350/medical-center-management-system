import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ii from '../../assets/img/HR/066.jpg';
import yy from '../../assets/img/HR/small.webp';
import tt from '../../assets/img/HR/images 3.png';
import ll from '../../assets/img/HR/surgery.jpg'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Paper from '@mui/material/Paper';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid';
import { LineChart } from '@mui/x-charts/LineChart';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import Navbar from '../../components/HR-component/hr-nav-bar'
import axios from 'axios';
import { Link } from 'react-router-dom';

import {Table,TableContainer,TableHead, TableRow,TableCell,TableBody} from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First Name', width: 130 },
//   { field: 'lastName', headerName: 'Last Name', width: 130 },
//   { field: 'age', headerName: 'Age', type: 'number', width: 200 },

//   {
//     field: 'fullName',
//     headerName: 'Full Name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 150,
//     valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },

//   {
//     field: 'action',
//     headerName: 'Action',
//     width: 150,
//     renderCell: (params) => (
//       <div>
//         <IconButton onClick={() => console.log("edited")}>
//           <EditIcon color="primary" />
//         </IconButton>
//         <IconButton onClick={() => console.log("Delete")}>
//           <DeleteIcon color="secondary" />
//         </IconButton>
//       </div>
//     ),
//   },
// ];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}









const HR = () => {

  const pieChartData = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];



  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/employees') 
      .then(response => {
        if (Array.isArray(response.data.Employee)) {
          setData(response.data.Employee);
        } else {
          setData([]); // Set as an empty array if not an array
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  //// delete employee

  const handleDeleteEmployee = (employeeId) => {
    console.log("Delete button clicked for employeeId:", employeeId);
    // const url = window.location.href;
    // const parts = url.split('/')
    // const id = parts[parts.length - 1];
    
    axios
      .delete('http://localhost:4000/employees/'+employeeId)
      .then(() => {
       
        setData((prevData) => prevData.filter((employee) => employee._id !== employeeId));
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }
 

  return (




    <div>
      <Box >
        <Grid container>
          <Navbar />
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item elevation={0}>
              <Card sx={{ maxWidth: 2000 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="450"
                    image={ii}
                    alt="green iguana"
                    style={{
                      width: '100%',
                      height: '650px',
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      OUR VISION
                    </Typography>
                    <Typography  color="text.secondary" gutterBottom variant="h6">
                    We take health care personally at Sinai Chicago. Because excellence in health care is about more than just medicine, technology, tests and treatments. It is about really caring for people with dignity and respect. That’s what we do. We are dedicated to providing the best care to meet the needs of people – 
                    for our community, for our patients -- for you.We take health care personally at Sinai Chicago. Because excellence in health care is 
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* Second grid */}

      <Box sx={{ marginTop: '70px' }} />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={28}>
            <Grid item xs={4}>
              <Item elevation={0}>
                <Card sx={{ maxWidth: 445 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={yy}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      We bridge innovation science with state-of-the-art clinical medicine
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
                <Card sx={{ maxWidth: 445 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={tt}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Discover the ways we're training the next generation of doctors and researchers
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

                <Card sx={{ maxWidth: 445 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={ll}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Learn about Mass General's service within greater Boston and around the world.
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
      <Box sx={{ marginTop: '40px' }} />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={20}>
            <Grid item xs={6}>
              <Item elevation={0}>
                <PieChart
                  series={[
                    {
                      data: pieChartData,
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
      <Box sx={{ marginTop: '50px' }} />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item elevation={0}>
                <div>
                  
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ fontWeight: 'bold', fontSize: '22px' }}>First Name</TableCell>
                          <TableCell style={{ fontWeight: 'bold', fontSize: '22px' }}>Last name</TableCell>
                          <TableCell style={{ fontWeight: 'bold', fontSize: '22px' }}>Role</TableCell>
                          <TableCell style={{ fontWeight: 'bold', fontSize: '22px' }}>Email</TableCell>
                          <TableCell style={{ fontWeight: 'bold', fontSize: '22px' }}>address</TableCell>
                          <TableCell style={{ fontWeight: 'bold', fontSize: '22px' }}>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map(employee => (
                          <TableRow key={employee._id}>
                            <TableCell style={{  fontSize: '20px' }}>{employee.firstName}</TableCell>
                            <TableCell style={{  fontSize: '20px' }}>{employee.lastName}</TableCell>
                            <TableCell style={{  fontSize: '20px' }}>{employee.employeeRole}</TableCell>
                            <TableCell style={{  fontSize: '20px' }}>{employee.email}</TableCell>
                            <TableCell style={{  fontSize: '20px' }}>{employee.address}</TableCell>
                            <TableCell>
                              <Button variant="outlined" style={{ backgroundColor: 'lightgreen', color: 'white' }}> <Link to={`/profile/${employee._id}`}>Profile</Link></Button>
                              
                             
                              <Button onClick={() => handleDeleteEmployee(employee._id)} style={{ backgroundColor: 'red', color: 'white' }} >Delete</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

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
