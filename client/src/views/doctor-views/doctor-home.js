import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Paper, CssBaseline } from '@mui/material';
// for calender
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import Navbar from '../../components/doctor-component/doctor-nav-bar';
import { useCurrentTime } from '../../utils/getCurrentTime'

import docImg from '../../assets/img/doctor/doctor-profile-img.jpg';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const Item = Paper;

const ProfileCard = () => {

  const time = useCurrentTime();
  return (
    <Box sx={{ p: 2, height: '200x', backgroundColor: '#1E90FF' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar
            src={docImg}
            sx={{ width: 80, height: 80 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ color: 'white' }}>Dr. Malshan</Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>Time: {time}</Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>Address: 123 Main St</Typography>
        </Grid>
      </Grid>

      <Grid container mt={2}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: 'white' }}>Center Name: XYZ Hospital</Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>Branch: Malabe Branch</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const SummaryCard = () => {
  return (
    <Card variant="outlined" sx={{ height: '200px', backgroundColor: '#4169E1' }}>
      <CardContent sx={{ color: 'white' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 5 }}>SUMMARY</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1" align="center">Active Patients</Typography>
            <Typography variant="h4" align="center">12</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" align="center">Ongoing Channelings</Typography>
            <Typography variant="h4" align="center">3</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const NextAppointmentCard = () => {
  return (
    <Card variant="outlined" sx={{ height: '200px', backgroundColor: '#F33A6A', color: 'white' }}>
      <CardContent>
        <Typography variant="h4" align="center" sx={{ marginBottom: 5 }}>NEXT APPOINTMENT</Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={3}>
            <Typography variant="body1">Patient</Typography>
            <Typography variant="body1">Time</Typography>
            <Typography variant="body1">Room</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body1" >:</Typography>
            <Typography variant="body1" >:</Typography>
            <Typography variant="body1" >:</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Malshan Rathnayake</Typography>
            <Typography variant="body1">9.00 AM</Typography>
            <Typography variant="body1">#45</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const columns = [
  { id: 'name', label: 'Patient Name', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'time', label: 'Time', minWidth: 100 },
  { id: 'severity', label: 'Severity Level', minWidth: 170 },
  { id: 'view', label: 'View', minWidth: 100 },
];

function createData(name, date, time, severity, view) {
  return { name, date, time, severity, view };
}

const rows = [
  createData('John Doe', '2023-09-05', '09:30 AM', 'High', 'View'),
  createData('Jane Smith', '2023-09-06', '02:15 PM', 'Medium', 'View'),
  // Add more rows 
];

const UpcommingChanneling = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft: '100px' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center" 
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          {column.id === 'view' ? (
                            <button>{value}</button>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper >
  );
}

const Doctor = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f2f2f2' }}>
      <CssBaseline />
      <Grid>
        <Navbar />
      </Grid>

      <Grid container mt={2}>
        <Grid Item xs={3}>
          <Item>
            <ProfileCard />
          </Item>
        </Grid>

        <Grid Item xs={4} sx={{ marginLeft: 'auto' }}>
          <Item sx={{ marginX: 2 }}>
            <SummaryCard />
          </Item>
        </Grid>

        <Grid Item xs={4} sx={{ marginLeft: 'auto' }}>
          <Item>
            <NextAppointmentCard />
          </Item>
        </Grid>
      </Grid>

      <Grid container mt={5}>
        <Grid Item xs={3}>
          <Item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Item>
        </Grid>
        <Grid Item xs={9}>
          <Typography variant="h4" align="center" style={{ marginBottom: '30px'}}>Upcomming Channeling</Typography>

          <UpcommingChanneling />
        </Grid>

      </Grid>

    </Box>

  );
};

export default Doctor;
