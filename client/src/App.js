// global imports
import { Route, Routes } from "react-router-dom";


// pages <- common for every actor type
import Home from "./views/Home";
import { Login, Signup } from "./views/Index";
import Contact from './views/ContactUs';

// doctor imports
import Doctor from './views/doctor-views/doctor-home';
import Channeling from './views/doctor-views/channeling';
import Symptoms from "./views/doctor-views/symptoms";
import Prescription from "./views/doctor-views/prescription";
import DoctorProfileCreate from "./views/doctor-views/doctor-profile-create";
import DoctorProfile from "./views/doctor-views/profile"

// patient imports
import Patient from './views/patient-views/patient-home';
import SearchDoctors from './views/patient-views/searchDoctors';
import CommonPatientDashboard from './views/patient-views/common-patient-dashboard';
//import PatientNavigationBar from './views/patient-views/patient-navigation-bar';
import SearchChanelling from './views/patient-views/search-chanelling';
import PatientCreateAccount from './views/patient-views/patient-create-account';
import PatientMakeChanelling from './views/patient-views/make-chanelling';
import ChanellingConfirmation from './views/patient-views/chanelling-confirmation';
import PatientProfile from './views/patient-views/patient-profile';
import PatientInquiries from './views/patient-views/inquiries';
import PatientAdditionalFiles from './views/patient-views/patient-additional-files';
import InquiryList from './views/patient-views/inq-handle';
import EditInquiry from "./views/patient-views/EditInquery";
import Reschedule from './views/patient-views/reschedule';
import Delete from './views/patient-views/delete';

// pharmacist imports
import Pharmacist from './views/pharmacist-views/parmacist-home';
import UpdateMedicine from './views/pharmacist-views/updateMedicine';
import PharmacistProfile from './views/pharmacist-views/pharmacistProfile';
import UpdateProfile from './views/pharmacist-views/updateProfile';
import MedicineStore from './views/pharmacist-views/medicineStore';
import MedicineOrder from './views/pharmacist-views/medicineOrders';
import MedicineSales from './views/pharmacist-views/medicineSales';
import FormPage from "./views/pharmacist-views/addMedicine";

// hr imports 
import HR from './views/hr-views/hr-home';
import Registration from './views/hr-views/hr-emp-registration';
import Profile from './views/hr-views/emp-profile';
import EditEmployee from './views/hr-views/Edit_employee';
import Payrollsystem from './views/hr-views/Payroll-Management';

// lab assistant imports
import LA from './views/lab-assistant-views/lab-assistant-home';
import LabFacilities from './views/lab-assistant-views/lab-facilities';
import LabAssistantProfile from './views/lab-assistant-views/lab-assistant-profile';

// Lab Assistant <- Test
import Test from './views/lab-assistant-views/test/viewTest';

// Lab Assistant <- Inventory{Equipment}
import Equipment from './views/lab-assistant-views/equipment/viewInventory';
import UpdateEquipment from "./views/lab-assistant-views/equipment/updateInventory";

// Lab Assistant <- Report
import LabReport from './views/lab-assistant-views/report/viewReport';
import UpdateReport from "./views/lab-assistant-views/report/updateReport";

// Lab Assistant <- Sample
import UpdateSample from "./views/lab-assistant-views/sample/updateSample";
import ViewSample from "./views/lab-assistant-views/sample/viewSample";

// supplier manager imports
import SM from "./views/supplier-manager-views/supplier-manager-home";
//import SearchDoctors from './views/patient-views/searchDoctors';
import SupplierRegistration from './views/supplier-manager-views/supplier-registration';
import SupplierProfile from './views/supplier-manager-views/supplier-profile';
import SupplierList from './views/supplier-manager-views/supplier-list';
import SupplierPayment from './views/supplier-manager-views/supplier-payment';
import SupplierInventoryEquipment from './views/supplier-manager-views/supplier-inventory-equipment';
import SupplierInventoryMedicine from './views/supplier-manager-views/supplier-inventory-medicine';
import SupplierOrderRequest from './views/supplier-manager-views/supplier-order-request';
import SupplierOrderConfirmation from './views/supplier-manager-views/supplier-order-confirmation';
import SupplierOrderPharmacy from './views/supplier-manager-views/supplier-order-pharmacy';


// resource person imports
import RP from "./views/resource-manager-views/resource-manager-home";
import RoomType from './views/resource-manager-views/roomType';
import Room from './views/resource-manager-views/room';
import EditRoom from './views/resource-manager-views/editRoom';


// financial manager imports
import FM from './views/financial-manager-views/financial-manager-home';
import Invoice from './views/financial-manager-views/invoice';

function App() {
  return (
    <div className="App">
      <Routes>

        {/* common routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* Doctor Routes */}
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/channeling" element={<Channeling />} />
        <Route path="/symptoms/:channelingId" element={<Symptoms />} />
        <Route path="/prescription/:channelingId" element={<Prescription />} />
        <Route path="/doctor-create-profile" element={<DoctorProfileCreate />} />
        <Route path="/your-profile" element={<DoctorProfile/>}/>

        {/* Hr Routes */}
        <Route path="/hr" element={<HR />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/edit-employee" element={<EditEmployee />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/payroll" element={<Payrollsystem />} />

        {/*Pharmacist Routes */}
        <Route path="/pharmacist" element={<Pharmacist />} />
        <Route path="/pharmacistProfile" element={<PharmacistProfile />} />
        <Route path="/addMedicine" element={<FormPage />} />
        <Route path="/updateProfile" element={<updateProfile />} />
        <Route path="/updateMedicine" element={<UpdateMedicine/>}/>
        <Route path="/medicineStore" element={<MedicineStore />} />
        <Route path="/medicineOrder" element={<MedicineOrder />} />
        <Route path="/medicineSales" element={<MedicineSales />} />

        {/* Patient Routes */}
        <Route path="/searchDoctors" element={<SearchDoctors />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/search-doctors" element={<SearchDoctors />} />
        <Route path="/dash" exact Component={CommonPatientDashboard} />
        <Route path="/search-chanelling" exact Component={SearchChanelling} />
        <Route path="/patient-create-account" exact Component={PatientCreateAccount} />
        <Route path="/make-chanelling" exact Component={PatientMakeChanelling} />
        <Route path="/confirm-chanelling" exact Component={ChanellingConfirmation} />
        <Route path="/patient-profile" exact Component={PatientProfile} />
        <Route path="/patient-inquiries" exact Component={PatientInquiries} />
        <Route path="/inq-handle" exact Component={InquiryList} />
        <Route path="/patient-additional" exact Component={PatientAdditionalFiles} />
        <Route path="/rescedule-appointment" exact Component={Reschedule} />
        <Route path="/delete-appointment" exact Component={Delete} />
        <Route path="/editinq/:id" element={<EditInquiry/>} />


        {/*Pharmacist Routes */}
        <Route path="/pharmacistProfile" element={<PharmacistProfile/>} />
        <Route path="/updateProfile" element={<updateProfile />} />
        <Route path="/addMedicine" element={<addMedicine/>} />
        <Route path="/medicineStore" element={<MedicineStore/>} />
        <Route path="/medicineOrder" element={<MedicineOrder/>} />
        <Route path="/medicineSales" element={<MedicineSales/>} />
        <Route path="/pharmacist/*" element={<Pharmacist />} />    


        {/* Resource person Routes */}
        <Route path="/resource-person" element={<RP />} />
        <Route path="/room-types" element={<RoomType />} />
        <Route path="/room" element={<Room/>}/>
        <Route path="/editRoom" element={<EditRoom/>}/>


        {/* Supplier Routes */}
        <Route path="/supplier" element={<SM />} />
        <Route path="/supplier/supplier-registration" element={<SupplierRegistration />} />
        <Route path="/supplier/supplier-profile" element={<SupplierProfile />} />
        <Route path="/supplier/supplier-list" element={<SupplierList />} />
        <Route path="/supplier/supplier-payment" element={<SupplierPayment />} />
        <Route path="/supplier/supplier-inventory-equipment" element={<SupplierInventoryEquipment />} />
        <Route path="/supplier/supplier-inventory-medicine" element={<SupplierInventoryMedicine />} />
        <Route path="/supplier/supplier-order-request" element={<SupplierOrderRequest />} />
        <Route path="/supplier/supplier-order-confirmation" element={<SupplierOrderConfirmation />} />
        <Route path="/supplier/supplier-order-pharmacy" element={<SupplierOrderPharmacy />} />


        {/*Lab Assistant Routes */}
        <Route path="/lab-assistant" element={<LA />} />
        <Route path="/lab-facilities" element={<LabFacilities />} />
        <Route path="/labAssistant-profile" element={<LabAssistantProfile />} />
        
        <Route path="/lab-test" element={<Test />} />
        <Route path="/lab-test/update/:id" element={<Test />} />

        
        <Route path="/lab-inventory" element={<Equipment />} />
        <Route path="/lab-inventory/update/:id" element={<UpdateEquipment />} />
        
        
        <Route path="/lab-report" element={<LabReport />} />
        <Route path="/lab-report/update/:id" element={<UpdateReport />} />
        
        
        <Route path="/lab-sample" element={<ViewSample/>}/>
        <Route path="/lab-sample/update/:id" element={<UpdateSample/>}/>
        

        
        {/*Financial Manager Routes */}
        <Route path="/financial-manager" element={<FM />} />
        <Route path="/invoice" element={<Invoice />} />


      </Routes>

    </div>
  );
}

export default App;




