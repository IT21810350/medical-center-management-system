import React, { useEffect, useState } from 'react';
import { Box, Grid,Typography} from '@mui/material';
import Heading from '../../components/patient-components/heading.component';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from '../../components/patient-components/tab-panel';
import UpcomingChanellings from './upcomming-chanellings';
import InquiryList from './inq-handle';
import PatientDetails from './patient-details';
import PrescriptionList from './all-prescriptions';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';


export default function PatientProfile() {

    // State to store the patient data retrieved from the db
    const [patientData, setPatientData] = useState([]);

    
    //======================================================
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value2, setValue2] = React.useState(0);

    const handleChange2 = (event, newValue2) => {
        setValue2(newValue2);
    };

    //======================================================
    // const [valueInq, setValueInq] = React.useState(0);

    // const handleChangeInq = (event, newValueInq) => {
    //     setValueInq(newValueInq);
    // };



    
    return (
        <>
         <PatientNavigationBar/>
         

            <Heading title="Patient Profile" description="" />

            <Grid sx={{ margin: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    
                    <Grid>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} style={{textalign:"center"}} aria-label="basic tabs example">
                                    <Tab label="Patient Details" {...a11yProps(0)} />
                                    <Tab label="Chanellings" {...a11yProps(1)} />
                                    <Tab label="Prescriptions" {...a11yProps(2)} />
                                    <Tab label="Inquiries" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            {/** Patient Details*/}
                            <CustomTabPanel value={value} index={0}>
                                <Grid container spacing={2}>
                                    {/* <Grid item xs={12} sm={3}>
                                        <Card sx={{ height: '100%' }} >
                                            <CardMedia
                                                component="div"
                                                sx={{
                                                    // 16:9
                                                    pt: '56.25%',
                                                }}
                                                image={img1}

                                            />
                                            <CardContent >
                                                <Typography gutterBottom variant="h5" component="h2" align='center'>
                                                    Name
                                                </Typography>
                                                <Typography align='center'>
                                                    Age
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                           
                                            
                                            <Button
                                                component={Link}
                                                to="/patient-inquiries"
                                                variant="contained"
                                                // size="small"
                                                style={{ width: '100%' }}
                                               
                                                color="primary"
                                            >
                                                Inquiries
                                            </Button>
                                        
                                            </CardActions>
                                        </Card>
                                        
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        
                                    </Grid> */}
                                    <PatientDetails/>
                                   
                                </Grid>
                            </CustomTabPanel>

                             {/**  Chanellings*/}
                            <CustomTabPanel value={value} index={1}>
                                <Box>
                                    <Box alignContent={'center'}>
                                        <Tabs style={{backgroundColor:"pink"}} value={value2} onChange={handleChange2} aria-label="basic tabs example">
                                            <Tab label="Upcoming" {...a11yProps(0)} />
                                            {/* <Tab label="Past" {...a11yProps(1)} />
                                            <Tab label="Cancelled" {...a11yProps(2)} />
                                            <Tab label="Refunds" {...a11yProps(3)} /> */}
                                        </Tabs>

                                    </Box>
                                    <CustomTabPanel value={value2} index={0}>
                                        <UpcomingChanellings/>
                                    </CustomTabPanel >
                                    {/* <CustomTabPanel value={value2} index={1}>
                                        <Typography>Bla bla 2</Typography>
                                    </CustomTabPanel >
                                    <CustomTabPanel value={value2} index={2}>
                                        <Typography>Bla bla 3</Typography>
                                    </CustomTabPanel >
                                    <CustomTabPanel value={value2} index={3}>
                                        <Typography>Bla bla 4</Typography>
                                    </CustomTabPanel > */}
                                </Box>

                            </CustomTabPanel>

                            {/**  Prescriptions*/}
                            <CustomTabPanel value={value} index={2}>
                                <PrescriptionList/>
                            </CustomTabPanel>

                            {/**  Inquiries*/}
                            <CustomTabPanel value={value} index={3}>
                            {/* <Box>
                                    <Box alignContent={'center'}>
                                        <Tabs style={{backgroundColor:"lightyellow"}} value={valueInq} onChange={handleChangeInq} aria-label="basic tabs example">
                                            <Tab label="All" {...a11yProps(0)} />
                                            <Tab label="Search" {...a11yProps(1)} />
                                            {/* <Tab label="Cancelled" {...a11yProps(2)} />
                                            <Tab label="Refunds" {...a11yProps(3)} /> */}
                                      {/*  </Tabs>
                                    </Box>
                                    <CustomTabPanel value={valueInq} index={0}>
                                        
                                    </CustomTabPanel >
                                    <CustomTabPanel value={valueInq} index={1}>
                                        
                                    </CustomTabPanel >
                                    </Box> */}
                                    <InquiryList/>
                            </CustomTabPanel>
                        </Box>
                    </Grid>

                </Box>
            </Grid>

        </>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// function displayData() {
//     //=========================== Retrieve data ====================================
//     const [data, setData] = useState([]);

//     // useEffect hook - fetch data when the component mounts
//     useEffect(() => {
//         // Make a GET request to MongoDB directly http://localhost:4000/inqData/add
//         axios.get('http://localhost:4000/patient/get/:650efb90b6d7126c541b1fbe')
//             .then(response => {
//                 // When the response is successful, update the patientData state with the received data
//                 setPatientData(response.data);
//             })
//             .catch(error => {
//                 // Handle any errors that occur during the request
//                 console.error('Error fetching patient data:', error);
//             });
//     }, []); // The empty dependency array ensures this effect runs once when the component mounts

//     return (
//         <>
//             <TableContainer>
//                 {data.map((item, index) => (
//                     <Table key={index}>
//                         <TableHead>Country: {item.country}</TableHead>
//                         <TableCell>ID Type: {item.idType}</TableCell>
//                         {/* Add other fields here */}
//                     </Table>
//                 ))};

//             </TableContainer>
//             <br />

//             <Stack direction="row" spacing={4}>
//                 <Button color="success" variant="contained" style={{ width: 150, marginLeft: '350px' }} >Edit</Button>
//                 <Button color="error" variant="contained" style={{ width: 150 }}>Delete</Button>
//             </Stack>
//         </>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Import the Axios library for making HTTP requests

// function PatientProfile() {
//   // State to store the patient data retrieved from the server
//   const [patientData, setPatientData] = useState([]);

//   // useEffect hook is used to fetch data when the component mounts
//   useEffect(() => {
//     // Make a GET request to your Express API or MongoDB directly
//     axios.get('/api/patients') // Replace with your API endpoint
//       .then(response => {
//         // When the response is successful, update the patientData state with the received data
//         setPatientData(response.data);
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error fetching patient data:', error);
//       });
//   }, []); // The empty dependency array ensures this effect runs once when the component mounts

//   return (
//     <div>
//       <h1>Patient Profile</h1>
//       <ul>
//         {/* Map through the patientData array and display each patient's information */}
//  {patientData.map(patient => (
//             <li key={patient._id}>
//               <h2>{patient.name}</h2>
//               <p>Age: {patient.age}</p>
//                Display other patient details 
//    </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }















// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import InputLabel from '@mui/material/InputLabel'; 
// import Select from '@mui/material/Select'; 
// import MenuItem from '@mui/material/MenuItem';
// import Checkbox from '@mui/material/Checkbox';
// import Heading from '../../components/patient-components/heading.component';
// //import backgroundImg from '../../assets/patient/bg2.jpg';
// //import BackgroundContainer from '../../components/patient-components/background-image';

// export default function PatientCreateAccount(){// State to store selected country
//     const [country, setCountry] = useState('');
//     // State to store selected ID type (NIC or Passport)
//     const [idType, setIdType] = useState('');
//     // State to store the ID number (NIC or Passport)
//     const [idNumber, setIdNumber] = useState('');
//     // State to store the gender
//     const [gender, setGender] = useState('');

//     const [agreeToTerms, setAgreeToTerms] = useState(false);

//     // Handle country selection change
//     const handleCountryChange = (e) => {
//         setCountry(e.target.value);
//         setIdType(''); // Reset ID type when the country changes
//         setIdNumber(''); // Reset ID number when the country changes
//     };

//     // Handle ID type selection change
//     const handleIdTypeChange = (e) => {
//         setIdType(e.target.value);
//     };

//     // Handle gender selection change
//     const handleGender = (e) => {
//         setGender(e.target.value);
//     };

//     // Handle ID number change
//     const handleIdNumberChange = (e) => {
//         setIdNumber(e.target.value);
//     };

//     const handleAgreeToTermsChange = (e) => {
//         setAgreeToTerms(e.target.checked); // Update the state when the checkbox is checked or unchecked
//     };

//     // Determine if the country is selected
//     const isCountrySelected = country !== '';

//     // Disable submit if country not selected or terms not agreed
//     const isSubmitDisabled = !isCountrySelected || !agreeToTerms;

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     // Add code to submit the form data here
//     // };

//     const handleCancel = () => {
//         // Add code to handle cancel button click (e.g., clear form fields or navigate back)
//         setCountry('');
//         setIdType('');
//         setIdNumber('');
//         setAgreeToTerms(false);
//     };

//     return (
//         <>
            
//                 <Heading title="Create an account"
//                 />

//                 <form style={{ padding:"100px" , paddingTop:"0px", textDecoration:"bold"}}>

//                     <Grid container spacing={1} lg={12}>
//                         <Grid xs={12} item>
//                             {/* Country Selection */}
//                             <FormControl fullWidth variant="outlined">
//                                 <InputLabel>Select Country</InputLabel>
//                                 <Select
//                                     label="Select Country"
//                                     onChange={handleCountryChange}
//                                     value={country}
//                                 >
//                                     <MenuItem value="">
//                                         <em>Select</em>
//                                     </MenuItem>
//                                     <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
//                                     <MenuItem value="India">India</MenuItem>
//                                     <MenuItem value="Australia">Australia</MenuItem>
//                                     <MenuItem value="Canada">Canada</MenuItem>
//                                     <MenuItem value="Other Country">Other Country</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Grid>
//                         <Grid xs={12} item>
//                             {/* ID Type Selection */}
//                             <FormControl component="fieldset">
//                                 <RadioGroup
//                                     row
//                                     name="idType"
//                                     value={idType}
//                                     onChange={handleIdTypeChange}
//                                 >
//                                     <FormControlLabel
//                                         value="NIC"
//                                         control={<Radio />}
//                                         label="NIC"
//                                         disabled={!isCountrySelected || country !== 'Sri Lanka'}
//                                     />
//                                     <FormControlLabel
//                                         value="Passport"
//                                         control={<Radio />}
//                                         label="Passport"
//                                         disabled={!isCountrySelected}
//                                     />
//                                 </RadioGroup>
//                             </FormControl>
//                         </Grid>

//                         <Grid xs={12} item>
//                             {/* ID Input Field */}
//                             <TextField
//                                 fullWidth
//                                 variant="outlined"
//                                 label={idType === 'NIC' ? 'NIC Number' : 'Passport Number'}
//                                 value={idNumber}
//                                 onChange={handleIdNumberChange}
//                                 placeholder={
//                                     idType === 'NIC'
//                                         ? 'Please enter your NIC'
//                                         : 'Please enter your Passport number'
//                                 }
//                                 disabled={!isCountrySelected}
//                                 required
//                             />
//                         </Grid>

//                         <Grid xs={12} sm={6} item>
//                             <TextField label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required />
//                         </Grid>

//                         <Grid xs={12} sm={6} item>
//                             <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth required />
//                         </Grid>

//                         <Grid xs={12} sm={6} item>
//                             <FormControl component="fieldset" required>
//                                 <RadioGroup
//                                     row
//                                     name="Gender"
//                                     value={gender}
//                                     onChange={handleGender}
//                                 >
//                                     <FormControlLabel
//                                         value="Male"
//                                         control={<Radio />}
//                                         label="Male"
//                                         defaultChecked
//                                     />
//                                     <FormControlLabel
//                                         value="Female"
//                                         control={<Radio />}
//                                         label="Female"
//                                     />

//                                     <FormControlLabel
//                                         value="Other"
//                                         control={<Radio />}
//                                         label="Other"
//                                     />
//                                 </RadioGroup>
//                             </FormControl>
//                         </Grid>

//                         <Grid xs={12} item>
//                             <TextField type='number' label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required />
//                         </Grid>

//                         <Grid xs={12} item>
//                             <TextField type='email' label="Email" placeholder='Enter email' variant='outlined' fullWidth required />
//                         </Grid>

//                         <Grid xs={12} item>
//                             <TextField type='text' label="Address" placeholder='Enter address - Optional' variant='outlined' fullWidth />
//                         </Grid>

//                         <Grid xs={12} item>
//                             {/* Agree to Terms Checkbox */}
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={agreeToTerms}
//                                         onChange={handleAgreeToTermsChange}
//                                         color="primary"
//                                     />
//                                 }
//                                 label="I agree to the terms and conditions"
//                             />
//                         </Grid>

//                         <Grid item>
//                             {/* Submit and Cancel Buttons */}
//                             <Stack direction="row" spacing={2} >
//                                 <Button type='submit' variant="contained" color="error">Cancel</Button>
//                                 {/* <Button type='submit' variant="contained">Submit</Button> */}
//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     disabled={isSubmitDisabled}
//                                 >
//                                     Submit
//                                 </Button>
//                                 {/* <Button
//                                 type='submit'
//                                 variant="contained"
//                                 color="default"
//                                 onClick={handleCancel}
//                             >
//                                 Cancel
//                             </Button> */}
//                             </Stack>
//                         </Grid>


//                     </Grid>
//                 </form>


           
//         </>
//     );
// }