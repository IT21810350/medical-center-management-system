import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/doctor-component/doctor-nav-bar';
import { Box, Grid, TextField, Button, CssBaseline, Container, Typography, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
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
import Autocomplete from '@mui/material/Autocomplete';
import backgroundImage from '../../assets/img/common/home-hero-background-img.jpg';
import axios from "axios";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


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
    console.log("current medicines" + currentMedicine);

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
                {
                    channelingId: channelingId,
                    medicines: medicinesToSend,
                },
                { withCredentials: true }
            );

            setMedicines([{}]);
        } catch (error) {
            console.error('An error occurred while sending data to the backend:', error);
        }
    };

    const { channelingId } = useParams();

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/getChannelingById/` + channelingId);
                setUserData(response.data.channeling);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [channelingId]);


    if (userData === null) {
        return <div>Loading...</div>;
    }

    return (
        <Grid>
            <Grid>
                <NavBar />
            </Grid>

            <Grid>
                <HeroSection />
            </Grid>

            <Container maxWidth="100px">
                <Grid container spacing={2} mt={2}>

                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center', backgroundColor: '#1976D2' }}>
                                    Patient Details
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Typography variant="h5">
                                    Patient Name :  {userData.patient.profile.fName}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Typography variant="h5">
                                    Gender :  {userData.patient.profile.gender}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Typography variant="h5">
                                    Email :  {userData.patient.profile.email}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center', backgroundColor: '#1976D2' }}>
                                    Doctor Details
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Typography variant="h5">
                                    Doctor Name :  {userData.doctor.firstName}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Typography variant="h5">
                                    Speciality :  {userData.doctor.specialty}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Typography variant="h5">
                                    Licen Number :  {userData.doctor.licenseNumber}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Container>

            <Container maxWidth="100px">
                <Grid>
                    <Grid item xs={12} mt={5} sx={{ backgroundColor: '#1976D2' }}>
                        <Typography variant="h5" sx={{ marginBottom: 2, color: 'white', textAlign: 'center' }}>
                            Create Medicine Record
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <Grid>
                <Container maxWidth="100px">
                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={12} sm={2}>
                            <Autocomplete
                                id="Medicine"
                                options={top100Medicine.map((option) => option.medicine)}
                                sx={{ width: 203 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Medicine"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                    />
                                )}
                                value={currentMedicine.medicine || ''}
                                onChange={(event, newValue) => {
                                    setCurrentMedicine({
                                        ...currentMedicine,
                                        medicine: newValue,
                                    });
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <FormControl fullWidth sx={{ marginY: 2 }}>
                                <InputLabel id="dosage">Dosage</InputLabel>
                                <Select
                                    labelId="dosage"
                                    id="dosage"
                                    name="dosage"
                                    value={currentMedicine.dosage || ''}
                                    label="Dosage"
                                    onChange={(e) =>
                                        setCurrentMedicine({
                                            ...currentMedicine,
                                            dosage: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={"5mg"}>5mg</MenuItem>
                                    <MenuItem value={"10mg"}>10mg</MenuItem>
                                    <MenuItem value={"20mg"}>20mg</MenuItem>
                                    <MenuItem value={"50mg"}>50mg</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <FormControl fullWidth sx={{ marginY: 2 }}>
                                <InputLabel id="quantity">Quantity for a Take</InputLabel>
                                <Select
                                    labelId="quantity"
                                    id="quantity"
                                    name="quantity"
                                    value={currentMedicine.quantity || ''}
                                    label="Quantity"
                                    onChange={(e) =>
                                        setCurrentMedicine({
                                            ...currentMedicine,
                                            quantity: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={"1"}>1</MenuItem>
                                    <MenuItem value={"2"}>2</MenuItem>
                                    <MenuItem value={"3"}>3</MenuItem>
                                    <MenuItem value={"4"}>4</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <FormControl fullWidth sx={{ marginY: 2 }}>
                                <InputLabel id="frequency">Frequency</InputLabel>
                                <Select
                                    labelId="frequency"
                                    id="frequency"
                                    name="frequency"
                                    value={currentMedicine.frequency || ''}
                                    label="Frequency"
                                    onChange={(e) =>
                                        setCurrentMedicine({
                                            ...currentMedicine,
                                            frequency: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={"daily"}>Daily</MenuItem>
                                    <MenuItem value={"morning"}>Every Morning</MenuItem>
                                    <MenuItem value={"evening"}>Every Evening</MenuItem>
                                    <MenuItem value={"night"}>Every Night</MenuItem>
                                    <MenuItem value={"weekly"}>Weekly</MenuItem>
                                    <MenuItem value={"monthly"}>Monthly</MenuItem>
                                    <MenuItem value={"as needed"}>As Needed</MenuItem>
                                    <MenuItem value={"twice daily"}>Twice Daily</MenuItem>
                                    <MenuItem value={"three times daily"}>Three Times Daily</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <FormControl fullWidth sx={{ marginY: 2 }}>
                                <InputLabel id="hours">Hours</InputLabel>
                                <Select
                                    labelId="hours"
                                    id="hours"
                                    name="hours"
                                    value={currentMedicine.hours || ''}
                                    label="Hours"
                                    onChange={(e) =>
                                        setCurrentMedicine({
                                            ...currentMedicine,
                                            hours: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={"6 hours"}>After 6 Hours</MenuItem>
                                    <MenuItem value={"8 hours"}>After 8 Hours</MenuItem>
                                    <MenuItem value={"12 hours"}>After 12 Hours</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <FormControl fullWidth sx={{ marginY: 2 }}>
                                <InputLabel id="duration">Duration</InputLabel>
                                <Select
                                    labelId="duration"
                                    id="duration"
                                    name="duration"
                                    value={currentMedicine.duration || ''}
                                    label="Duration"
                                    onChange={(e) =>
                                        setCurrentMedicine({
                                            ...currentMedicine,
                                            duration: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={"3 days"}>3 Days</MenuItem>
                                    <MenuItem value={"7 days"}>7 Days</MenuItem>
                                    <MenuItem value={"2 weeks"}>2 Weeks</MenuItem>
                                    <MenuItem value={"1 month"}>1 Month</MenuItem>
                                </Select>
                            </FormControl>
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
                            <Link to="/doctor">
                                <Button variant="outlined" color="primary" startIcon={<CloseIcon />}>
                                    CANCEL
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/doctor">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                    startIcon={<SaveIcon />}
                                    onClick={submitData}
                                >
                                    SAVE
                                </Button>
                            </Link>
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

const top100Medicine = [
    { medicine: 'Acetaminophen' },
    { medicine: 'Ibuprofen' },
    { medicine: 'Aspirin' },
    { medicine: 'Amoxicillin' },
    { medicine: 'Penicillin' },
    { medicine: 'Ciprofloxacin' },
    { medicine: 'Lisinopril' },
    { medicine: 'Atorvastatin' },
    { medicine: 'Metformin' },
    { medicine: 'Omeprazole' },
    { medicine: 'Fluoxetine' },
    { medicine: 'Sertraline' },
    { medicine: 'Albuterol' },
    { medicine: 'Hydrochlorothiazide' },
    { medicine: 'Prednisone' },
    { medicine: 'Morphine' },
    { medicine: 'Hydromorphone' },
    // ... other medicines
];


export default Prescription;
