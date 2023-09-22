import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./views/Index";
import Home from "./views/Home";
import HR from './views/hr-views/hr-home'
import Patient from './views/patient-views/patient-home'
import Doctor from './views/doctor-views/doctor-home'
import FM from './views/financial-manager-views/financial-manager-home'
import LA from './views/lab-assistant-views/lab-assistant-home'
import Pharmacist from './views/pharmacist-views/parmacist-home'
import SM from "./views/supplier-manager-views/supplier-manager-home";
import RP from "./views/resource-manager-views/resource-manager-home";
import Contact from './views/ContactUs'
import Channeling from './views/doctor-views/channeling'
import Registration from './views/hr-views/hr-emp-registration';
import Profile from './views/hr-views/emp-profile';
import EditEmployee from './views/hr-views/Edit_employee'; 
import SearchDoctors from './views/patient-views/searchDoctors'
import SupplierRegistration from './views/supplier-manager-views/supplier-registration';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* actor routes */}
        
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/financial-manager" element={<FM />} />
        <Route path="/lab-assistant" element={<LA />} />
        <Route path="/pharmacist" element={<Pharmacist />} />
        <Route path="/resource-person" element={<RP />} />
        <Route path="/supplier" element={<SM />} />


        <Route path="/contact-us" element={<Contact />} />

        {/* Doctor Routes */}
        <Route path="/channeling" element={<Channeling />} />

        {/* Hr Routes */}
        <Route path="/hr" element={<HR />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/edit-employee" element={<EditEmployee/>} />
        <Route path="/profile/:id" element={<Profile/>}/>

        {/* Patient Routes */}
        <Route path="/search-doctors" element={<SearchDoctors />} />
      

        {/* Supplier Routes */}
        <Route path="/supplier/supplier-registration" element={<SupplierRegistration />} />
      </Routes>

    </div>
  );
}

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';

// import Navbar from './components/navbar.component';
// import Patient from './views/patient-views/patient-home';
// import Doctor from './views/doctor-views/doctor-home';
// import Pharmacist from './views/pharmacist-views/parmacist-home';
// import HR from './views/hr-views/hr-home';
// import FM from './views/financial-manager-views/financial-manager-home';
// import LA from './views/lab-assistant-views/lab-assistant-home';
// import RM from './views/resource-manager-views/resource-manager-home';
// import SM from './views/supplier-manager-views/supplier-manager-home';

// function App() {
//   return (
//     <Router>
//     <CssBaseline />
//       <Navbar />
//       <br/>
//       <Routes>
//         <Route path="/patient" element={<Patient/>} />
//         <Route path="/doctor" element={<Doctor/>} />
//         <Route path="/pharmacist" element={<Pharmacist/>} />
//         <Route path="/hr" element={<HR/>} />
//         <Route path="/fm" element={<FM/>} />
//         <Route path="/la" element={<LA/>} />
//         <Route path="/rm" element={<RM/>} />
//         <Route path="/sm" element={<SM/>} />
//       </Routes>
//   </Router>
//   );
// }

export default App;
