import React, { useState } from 'react';
import NavBar from '../../components/doctor-component/doctor-nav-bar';
import { Box, Grid, TextField, Button, CssBaseline, Container, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import backgroundImage from '../../assets/img/common/home-hero-background-img.jpg';
import axios from "axios";


const MedicineTable = ({ medicines, onEdit, onDelete }) => {

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Medicine</TableCell>
                    <TableCell>Dosage</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Frequency</TableCell>
                    <TableCell>Hours</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Food</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {medicines.map((medicine) => (
                    <TableRow key={medicine.id}>
                        <TableCell>{medicine.medicine}</TableCell>
                        <TableCell>{medicine.dosage}</TableCell>
                        <TableCell>{medicine.quantity}</TableCell>
                        <TableCell>{medicine.frequency}</TableCell>
                        <TableCell>{medicine.hours}</TableCell>
                        <TableCell>{medicine.duration}</TableCell>
                        <TableCell>{medicine.food}</TableCell>
                        <TableCell>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => onEdit(medicine)}
                            >
                                Edit
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => onDelete(medicine.id)}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

const Prescription = () => {
    const [medicines, setMedicines] = useState([{}]);
    const [currentMedicine, setCurrentMedicine] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);

    console.log(medicines);

    const handleAddMedicine = () => {
        if (!currentMedicine.medicine) {
            return;
        }

        if (isEditMode) {
            const updatedMedicines = medicines.map((medicine) =>
                medicine.id === currentMedicine.id ? currentMedicine : medicine
            );
            setMedicines(updatedMedicines);
            setIsEditMode(false);
        } else {
            const newMedicine = { ...currentMedicine, id: Date.now() };
            setMedicines([...medicines, newMedicine]);
        }

        setCurrentMedicine({});
    };

    const handleEditMedicine = (medicine) => {
        setCurrentMedicine(medicine);
        setIsEditMode(true);
    };

    const handleDeleteMedicine = (id) => {
        const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
        setMedicines(updatedMedicines);
    };

    const handleClearData = () => {
        setCurrentMedicine({});
        setIsEditMode(false);
    };

    
    const submitData = async () => {

        const medicinesToSend = medicines.map(({ id, ...rest }) => rest);

        console.log('Sending data to the backend:', medicinesToSend);

        try {
            await axios.post(
                "http://localhost:4000/prescription", 
                medicinesToSend, 
                { withCredentials: true }
            );

            setMedicines([{}]);
        } catch (error) {
            console.error('An error occurred while sending data to the backend:', error);
        }
    };

    return (
        <Grid>
            <Grid>
                <NavBar />
            </Grid>

            <Grid>
                <HeroSection />
            </Grid>

            <Grid>
                <Container maxWidth="100px">
                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                fullWidth
                                label="Medicine"
                                name="medicine"
                                value={currentMedicine.medicine || ''}
                                onChange={(e) =>
                                    setCurrentMedicine({
                                        ...currentMedicine,
                                        medicine: e.target.value,
                                    })
                                }
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <TextField
                                fullWidth
                                label="Dosage"
                                name="dosage"
                                value={currentMedicine.dosage || ''}
                                onChange={(e) =>
                                    setCurrentMedicine({
                                        ...currentMedicine,
                                        dosage: e.target.value,
                                    })
                                }
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <TextField
                                fullWidth
                                label="Quantity"
                                name="quantity"
                                value={currentMedicine.quantity || ''}
                                onChange={(e) =>
                                    setCurrentMedicine({
                                        ...currentMedicine,
                                        quantity: e.target.value,
                                    })
                                }
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <TextField
                                fullWidth
                                label="Frequency"
                                name="frequency"
                                value={currentMedicine.frequency || ''}
                                onChange={(e) =>
                                    setCurrentMedicine({
                                        ...currentMedicine,
                                        frequency: e.target.value,
                                    })
                                }
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <TextField
                                fullWidth
                                label="Hours"
                                name="hours"
                                value={currentMedicine.hours || ''}
                                onChange={(e) =>
                                    setCurrentMedicine({
                                        ...currentMedicine,
                                        hours: e.target.value,
                                    })
                                }
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <TextField
                                fullWidth
                                label="Duration"
                                name="duration"
                                value={currentMedicine.duration || ''}
                                onChange={(e) =>
                                    setCurrentMedicine({
                                        ...currentMedicine,
                                        duration: e.target.value,
                                    })
                                }
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={currentMedicine.food || ''}
                                    onChange={(e) =>
                                        setCurrentMedicine({
                                            ...currentMedicine,
                                            food: e.target.value,
                                        })
                                    }
                                >
                                    <FormControlLabel
                                        value="before-food"
                                        control={<Radio />}
                                        label="Before Food"
                                    />
                                    <FormControlLabel
                                        value="after-food"
                                        control={<Radio />}
                                        label="After Food"
                                    />
                                    <FormControlLabel
                                        value="with-food"
                                        control={<Radio />}
                                        label="With Food"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} container justifyContent="flex-end" spacing={2}>
                            <Grid item>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={handleClearData}
                                >
                                    Clear Data
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<AddCircleIcon />}
                                    onClick={handleAddMedicine}
                                >
                                    {isEditMode ? 'Update Medicine' : 'Add More Medicines'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} mt={5} sx={{ backgroundColor: '#1976D2' }}>
                        <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center' }}>
                            Details Of Prescription
                        </Typography>
                    </Grid>

                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <MedicineTable
                                medicines={medicines}
                                onEdit={handleEditMedicine}
                                onDelete={handleDeleteMedicine}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" alignItems="center" mt={5} spacing={2}>
                        <Grid item>
                            <Button variant="outlined" color="primary" startIcon={<CloseIcon />}>
                                CANCEL
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                color="success" 
                                startIcon={<SaveIcon />}
                                onClick={submitData}
                                >
                                    SAVE
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" alignItems="center" mt={5} spacing={2}></Grid>
                </Container>
            </Grid>
        </Grid>
    );
};

const HeroSection = () => {
    return (
        <Grid sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="main" sx={{ flexGrow: 1 }} mt={2}>
                <Container maxWidth="100%">
                    <Box
                        sx={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '100px 0',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h2" sx={{ marginBottom: 2 }}>
                            PRESCRIPTION
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Grid>
    );
};

export default Prescription;
