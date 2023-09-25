import React from 'react';
import { Grid, Typography} from '@mui/material';
import img1 from '../../assets/img/patient/img3.jpg';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';
import PatientList from '../../views/patient-views/all-patients';

export default function CommonPatientDashboard(){
    return(
        <>
         <PatientNavigationBar/>
         
        <Typography variant='h3' align='center' padding={2}>Medical Center</Typography>
        

        <Grid>
          <img  width='100%' alt='img' src={img1}/>
        </Grid>
        <Grid>
          <PatientList/>
        </Grid>
        <Grid>
          <Typography variant='h6' padding={10}>We are thrilled to introduce the latest addition to our medical 
            center's offerings - our brand-new web version. With this online platform, 
            we aim to make your healthcare journey more convenient and accessible than ever 
            before. Whether you're a new patient or a returning one, our website provides a 
            user-friendly interface that allows you to easily schedule appointments at your 
            convenience. Additionally, you can access your medical records securely, giving 
            you the freedom to review your health history and test results whenever you need them.
            Our commitment to quality healthcare extends to our online presence, where you can 
            explore our comprehensive range of services, get to know our dedicated team, and 
            stay updated on the latest medical advancements. We understand that modern life can 
            be hectic, and our web version is designed to fit seamlessly into your busy schedule, 
            offering a hassle-free way to engage with our medical center. We are excited to embark 
            on this digital journey with you and look forward to serving your healthcare needs 
            better through our newly launched web platform.</Typography>

        </Grid>
        </>
    );
}
