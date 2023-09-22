// global imports
import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./views/Index";

// pages <- common for every actor type
import Home from "./views/Home";
import Contact from './views/ContactUs';

// doctor imports
import Doctor from './views/doctor-views/doctor-home';
import Channeling from './views/doctor-views/channeling';
import Symptoms from "./views/doctor-views/symptoms";

// patient imports
import Patient from './views/patient-views/patient-home';
import SearchDoctors from './views/patient-views/searchDoctors';

// pharmacist imports
import Pharmacist from './views/pharmacist-views/parmacist-home';

// hr imports
import HR from './views/hr-views/hr-home';
import Registration from './views/hr-views/hr-emp-registration';
import Profile from './views/hr-views/emp-profile';

// lab assistant imports
import LA from './views/lab-assistant-views/lab-assistant-home';
import LabTest from './views/lab-assistant-views/lab-test';
import LabInventory from './views/lab-assistant-views/lab-inventory';
import LabReport from './views/lab-assistant-views/lab-report';
import LabSample from './views/lab-assistant-views/lab-sample';


// supplier manager imports
import SM from "./views/supplier-manager-views/supplier-manager-home";
import SupplierRegistration from './views/supplier-manager-views/supplier-registration';
import SupplierProfile from './views/supplier-manager-views/supplier-profile';
import SupplierList from './views/supplier-manager-views/supplier-list';

// resource person imports
import RP from "./views/resource-manager-views/resource-manager-home";

// financial manager imports
import FM from './views/financial-manager-views/financial-manager-home';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* actor routes */}
        <Route path="/hr" element={<HR />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/financial-manager" element={<FM />} />
        <Route path="/lab-assistant" element={<LA />} />
        <Route path="/pharmacist" element={<Pharmacist />} />
        <Route path="/resource-person" element={<RP />} />
        <Route path="/supplier" element={<SM />} />

        {/* Doctor Routes */}
        <Route path="/channeling" element={<Channeling />} />
        <Route path="/symptoms" element={<Symptoms />} />

        {/* Hr Routes */}
        <Route path="/registration" element={<Registration/>}/>

        <Route path="/profile" element={<Profile/>}/>

        {/* Patient Routes */}
        <Route path="/search-doctors" element={<SearchDoctors />} />
      

        {/* Supplier Routes */}
        <Route path="/supplier/supplier-registration" element={<SupplierRegistration />} />
        <Route path="/supplier/supplier-profile" element={<SupplierProfile/>} />
        <Route path="/supplier/supplier-list" element={<SupplierList/>} />


        {/*Lab Assistant Routes */}
        <Route path="/lab-test" element={<LabTest/>}/>
        <Route path="/lab-inventory" element={<LabInventory/>}/>
        <Route path="/lab-report" element={<LabReport/>}/>
        <Route path="/lab-sample" element={<LabSample/>}/>
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
