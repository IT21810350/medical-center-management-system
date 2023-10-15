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
                                    
                                    <PatientDetails/>
                                   
                                </Grid>
                            </CustomTabPanel>

                             {/**  Chanellings*/}
                            <CustomTabPanel value={value} index={1}>
                                <Box>
                                    <Box alignContent={'center'}>
                                        <Tabs style={{backgroundColor:"pink"}} value={value2} onChange={handleChange2} aria-label="basic tabs example">
                                            <Tab label="Upcoming" {...a11yProps(0)} />
                                            <Tab label="Past" {...a11yProps(1)} />
                                            <Tab label="Cancelled" {...a11yProps(2)} />
                                            <Tab label="Refunds" {...a11yProps(3)} /> 
                                        </Tabs>

                                    </Box>
                                    <CustomTabPanel value={value2} index={0}>
                                        <UpcomingChanellings/>
                                    </CustomTabPanel >
                                    <CustomTabPanel value={value2} index={1}>
                                        <Typography>Bla bla 2</Typography>
                                    </CustomTabPanel >
                                    <CustomTabPanel value={value2} index={2}>
                                        <Typography>Bla bla 3</Typography>
                                    </CustomTabPanel >
                                    <CustomTabPanel value={value2} index={3}>
                                        <Typography>Bla bla 4</Typography>
                                    </CustomTabPanel > 
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
