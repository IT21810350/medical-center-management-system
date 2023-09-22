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



// const rows = [
//   { id: 1, firstName: 'Snow', lastName: 'malshan', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
//   { id: 2, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
//   { id: 3, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
//   { id: 4, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
//   { id: 5, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
//   { id: 6, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
//   { id: 7, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
//   { id: 8, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
//   { id: 9, firstName: 'Snow', lastName: 'Umagliya', Email: 'rgahbkajsd@gmail.com', position: 'Doctor', Netsalary: '30000', action: 'edit', delete: 'edit' },
// ];



// pie chart data 
// const data = [
//   { id: 0, value: 10, label: '2021' },
//   { id: 1, value: 15, label: '2020 ' },
//   { id: 2, value: 50, label: '2022' },
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];








const HR = () => {


  const pieChartData = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an Axios GET request to your backend API endpoint for employees
    axios.get('http://localhost:4000/employees') // Replace '/api/employees' with your actual API endpoint
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
          <Grid container spacing={28}>
            <Grid item xs={4}>
              <Item elevation={0}>
                <Card sx={{ maxWidth: 345 }}>
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
                      height="200"
                      image={tt}
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
                      height="200"
                      image={ll}
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
      <h1></h1>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={10}>
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
            <h1></h1>
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
      <h1></h1>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item elevation={0}>
                <div>
                  <h1>Employee Data Table</h1>
                  <table border={2}   style={{ width: '100%', borderCollapse: 'collapse' }} >
                    <thead>
                      <tr>

                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>action</th>
                        {/* Add more table headers as needed */}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map(employee => (
                        <tr key={employee._id}>
                          <td>{employee.firstName}</td>
                          <td>{employee.lastName}</td>
                          <td>{employee.employeeRole}</td>
                          <td>{employee.email}</td>
                          <td>{employee.address}</td>
                          <td> <Link to={`/profile/${employee._id}`}>Profile</Link></td>
                          {/* Add more table data cells as needed */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
