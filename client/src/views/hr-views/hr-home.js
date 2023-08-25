import React from 'react';
import Box from '@mui/material/Box';
import { styled }  from '@mui/material/styles';
import ii from '../hr-views/image/hospital.jpg'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid';


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
  {field: 'position',headerName: 'position', width:130,},
  {field: 'Netsalary',headerName: 'Netsalary', width:130,},
  {field: 'Crud',headerName: 'Crud', width:150,},
  {field: 'fullName',headerName: 'Full name',description: 'This column has a value getter and is not sortable.',sortable: false, width: 80,valueGetter: (params) =>`${params.row.firstName || ''} ${params.row.lastName || ''}`,},
];

const rows = [
  { id: 1, firstName: 'Snow',lastName:'Umagliya', Email:'rgahbkajsd@gmail.com',position:'Doctor',Netsalary:'30000',  },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



// pie chart data 
const data = [
  { id: 0, value: 10 , label: '2021' },
  { id: 1, value: 15, label: '2020 '},
  { id: 2, value: 50, label: '2022' },
];

const HR = () => {
  return (
    <div>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <Item>
              <Card sx={{ maxWidth: 1400 }}>
                <CardMedia
                  sx={{ height: 340 }}
                  image={ii}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  To care for and improve the quality of human life, through the provision of ethical healthcare solutions together with professional and compassionate staff.
                  To care for aTo care for and improve the quality of human life, through the provision of ethical healthcare solutions together with professional and compassionate staff.
                  nd improve the quality of human life, through the provision of ethical healthcare solutions together with professional and compassionate staff.
                  
                  

                  </Typography>
                </CardContent>
                <CardActions>

                </CardActions>
              </Card></Item>
          </Box>

          {/* <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box> */}
          <Box gridColumn="span 6">
            <Item>
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
                    height={200}
                  /> 
             </Item>
          </Box>
        </Box>
      </Box>
     {/* new grid start  */}
     <div>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
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


    </div>






  );
};

export default HR;
