import React, { useState } from 'react';

import Heading from '../../components/patient-components/heading.component';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';

export default function PatientCreateAccount() {
  //  this.state1 = {     country:'', idNumber:'',idNumber:'',gender:'',fName:'',lName:'',dob:'',phone:'',email:'',address:'',};

    // const handleInputChange = (e) => {
    //     const { name, value,type,checked } = e.target;
    //     this.setState({
          
    //       [name]: type === 'checkbox' ? checked : value,
    //     });
    //   };

  //     const  handleSubmit = (e) => {
  //       e.preventDefault();
    
  //       const data = {
  //         country: this.state.country,
  //         idType: this.state.idType,
  //         idNumber: this.state.idNumber,
  //         gender: this.state.gender,
  //         fName: this.state.fName,
  //         lName: this.state.lName,
  //         dob: this.state.dob,
  //         phone:this.state.phone,
  //         email : this.state.email,
  //         address : this.state.address,
  //       };

  //       axios
  //     .post('PatientInquiries', data)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  //const [formData, setFormData] = useState({ });
//   const [idType, setIdType] = useState('Passport');
//   const [idNumber, setIdNumber] = useState('');
//   const [gender, setGender] = useState('Male');
//   const [fName, setFName] = useState('');
//   const [lName, setLName] = useState('');
//   const [dob, setDob] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
  // const [agreeToTerms, setAgreeToTerms] = useState(false);

//   const handleCountryChange = (e) => {
//     setCountry(e.target.value);
//     // Reset ID type and ID number when the country changes
//     setIdType('Passport');
//     setIdNumber('');
//   };

// const handleFileInputChange = (e) => {
//     const file = e.target.files[0]; // Get the first selected file
//     setFormData({
//       ...formData,
//       submitDocuments: file, // Store the selected file in your form data
//     });
//   };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         'http://localhost:5000/patient/add',
//         {
//           ...formData,
//         },
//         { withCredentials: true }
//       );
    //   console.log('Response from server:', data);
    //   // Clear form fields after successful submission
    //   setCountry('');
    //   setIdType('Passport');
    //   setIdNumber('');
    //   setGender('Male');
    //   setFName('');
    //   setLName('');
    //   setDob('');
    //   setPhone('');
    //   setEmail('');
    //   setAddress('');
    //   setAgreeToTerms(false);
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

//   setFormData({
//     ...formData,
//     country:'', idNumber:'',idNumber:'',gender:'',fName:'',lName:'',dob:'',phone:'',email:'',address:'',
//   });
  // setAgreeToTerms(false);

//   const handleInputChange = (e) => {
//     const { name, value,type,checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
  
  return (
    <>
     <PatientNavigationBar/>
    
      <Heading title="Create an account" />

     
    </>
  );
}
