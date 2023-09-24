import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, TextField, Box } from '@mui/material';
import Navbar from '../../components/HR-component/hr-nav-bar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import payrollmanagement from '../../assets/img/HR/payrollmanagement.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const PayrollManagement = () => {
    const [payrollData, setPayrollData] = useState([
        { id: 1, employeeName: 'John Doe', salary: 5000, epf: 600, etf: 150 },
        { id: 2, employeeName: 'Jane Smith', salary: 6000, epf: 720, etf: 180 },
    ]);

    const [newRecord, setNewRecord] = useState({ employeeName: '', salary: '' });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleAddRecord = () => {
        const basicSalary = parseFloat(newRecord.salary);
        const epfPercentage = 0.12; // Example EPF percentage
        const etfPercentage = 0.03; // Example ETF percentage
        const epf = basicSalary * epfPercentage;
        const etf = basicSalary * etfPercentage;

        setPayrollData([...payrollData, {
            id: payrollData.length + 1,
            employeeName: newRecord.employeeName,
            salary: basicSalary,
            epf: epf,
            etf: etf
        }]);

        setNewRecord({ employeeName: '', salary: '' });
        if (newRecord.employeeName && newRecord.salary) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
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
            <h1>Payroll Management</h1>
            <Card sx={{ maxWidth: 2000 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="450"
                        image={payrollmanagement}
                        alt="Payroll Management"
                        style={{
                            width: '100%',
                            height: '650px',
                        }}
                    />
                    <CardContent>
                        {/* Add content for the card */}
                    </CardContent>
                </CardActionArea>
            </Card>

            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box display="flex" flexDirection="row" alignItems="center">
                    <TextField
                        label="Employee Name"
                        value={newRecord.employeeName}
                        onChange={(e) => setNewRecord({ ...newRecord, employeeName: e.target.value })}
                        style={{ marginRight: '16px' }}
                    />
                    <TextField
                        label="Salary"
                        type="number"
                        value={newRecord.salary}
                        onChange={(e) => setNewRecord({ ...newRecord, salary: e.target.value })}
                        style={{ marginRight: '16px' }}
                        required
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddRecord}
                        
                    >
                        Add Record
                    </Button>
                </Box>
            </Box>

            <TableContainer component={Paper} sx={{ width: '90%', margin: '0 auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Employee Name</TableCell>
                            <TableCell>Salary</TableCell>
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
