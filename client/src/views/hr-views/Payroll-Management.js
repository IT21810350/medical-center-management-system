import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, TextField, Box } from '@mui/material';
import Navbar from '../../components/HR-component/hr-nav-bar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import tt from '../../assets/img/HR/Healthcare.jpg'


const PayrollManagement = () => {
    // Sample data for demonstration purposes
    const [payrollData, setPayrollData] = useState([
        { id: 1, employeeName: 'John Doe', salary: 5000 },
        { id: 2, employeeName: 'Jane Smith', salary: 6000 },
        // Add more data here
    ]);

    // State for adding new payroll records
    const [newRecord, setNewRecord] = useState({ employeeName: '', salary: '' });

    // Function to handle adding a new payroll record
    const handleAddRecord = () => {
        // Perform validation here if needed
        // Add the new record to the state
        setPayrollData([...payrollData, { id: payrollData.length + 1, ...newRecord }]);
        // Clear the input fields
        setNewRecord({ employeeName: '', salary: '' });
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    return (
        <div>

            <Box>
                <Grid container>
                    <Navbar />
                </Grid>
            </Box>
            <h1>Helooo</h1>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh', // You can adjust the height as needed
                    marginBottom: '40px',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Paper elevation={3}>

                            <img
                                src={tt} // Use the imported image
                                alt="Healthcare Image"
                                style={{ width: '100%', height: 'auto'  }}
                            />

                        </Paper>
                    </Grid>
                </Grid>
            </Box>


            {/* Centered container for input fields and button */}
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                {/* Input fields for adding a new payroll record */}
                <Box display="flex" flexDirection="row" alignItems="center">
                    <TextField
                        label="Employee Name"
                        value={newRecord.employeeName}
                        onChange={(e) => setNewRecord({ ...newRecord, employeeName: e.target.value })}
                        style={{ marginRight: '16px' }}
                    />
                    <TextField
                        label="Salary"
                        value={newRecord.salary}
                        onChange={(e) => setNewRecord({ ...newRecord, salary: e.target.value })}
                        style={{ marginRight: '16px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddRecord}>
                        Add Record
                    </Button>
                </Box>
            </Box>

            {/* Table to display payroll data */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Employee Name</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Net Salary</TableCell>
                            <TableCell>Working Hours</TableCell>
                            <TableCell>EPF</TableCell>
                            <TableCell>ETF</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payrollData.map((record) => (
                            <TableRow key={record.id}>
                                <TableCell>{record.id}</TableCell>
                                <TableCell>{record.employeeName}</TableCell>
                                <TableCell>{record.salary}</TableCell>
                                <TableCell>{record.netSalary}</TableCell>
                                <TableCell>{record.workingHours}</TableCell>
                                <TableCell>{record.epf}</TableCell>
                                <TableCell>{record.etf}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PayrollManagement;
