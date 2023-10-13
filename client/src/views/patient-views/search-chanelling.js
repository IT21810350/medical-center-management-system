import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from '@mui/material';
import Heading from '../../components/patient-components/heading.component';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';

const SearchChanelling = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getD/');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    const filtered = doctors.filter((doctor) => {
      // Check for undefined or null values before calling toLowerCase
      const firstName = doctor.firstName || '';
      const lastName = doctor.lastName || '';
      const specialization = doctor.specialization || '';

      return (
        firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredDoctors(filtered);
  }, [searchTerm, doctors]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = (id) => {
    // Redirect to the "make-chanelling" page with the doctor's ID as a query parameter
    window.location.href = `/make-chanelling?doctorId=${id}`;
  };

  return (
    <div >
      <PatientNavigationBar />
      <Heading
        title="Doctor Channeling"
        description="Use filters to select your preferred doctor"
      />
      <div className='container'> 
      <TextField
        label="Search"
        
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        placeholder="Enter name of the doctor/specialization"
      />
      
      </div>
      <br/><br/>
      <TableContainer className='container' component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDoctors.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{`${row.firstName || ''} ${row.middleName || ''} ${row.lastName || ''}`}</TableCell>
                <TableCell>{row.specialization || row.specialty || ''}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleButtonClick(row._id)}
                  >
                    Channel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchChanelling;

//=============================================================================
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
// } from '@mui/material';
// import Heading from '../../components/patient-components/heading.component';
// import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';

// const SearchChanelling = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredDoctors, setFilteredDoctors] = useState([]);

//   const fetchDoctors = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/getD/');
//       setDoctors(response.data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   useEffect(() => {
//     fetchDoctors();
//   }, []); // Run this effect once when the component mounts

//   useEffect(() => {
//     // Filter doctors based on search term
//     const filtered = doctors.filter((doctor) => {
      
//       return (
//         doctor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         doctor.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     });
//     setFilteredDoctors(filtered);
//   }, [searchTerm, doctors]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   // const handleButtonClick = (id) => {
//   //   // Handle button click action here
//   //   console.log(`Button clicked for ID ${id}`);
//   // };

//   const handleButtonClick = (id) => {
//     // Redirect to the "make-chanelling" page with the doctor's ID as a query parameter
//     window.location.href = `/make-chanelling?doctorId=${id}`;
//   };

//   return (
//     <div>
//       <PatientNavigationBar />
//       <Heading
//         title="Doctor Channeling"
//         description="Use filters to select your preferred doctor"
//       />
//       <TextField
//         label="Search"
//         variant="outlined"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         fullWidth
//         placeholder="Enter name of the doctor/specialization"
//       />
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
              
//               <TableCell>Doctor</TableCell>
//               <TableCell>Specialization</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredDoctors.map((row) => (
//               <TableRow key={row._id}>
               
//                 <TableCell>{`${row.firstName} ${row.lastname}`}</TableCell>
//                 <TableCell>{row.specialization}</TableCell>
//                 <TableCell>
                  
//                     {/* <Link to={`/make-chanelling/${row._id}`} style={{ color: 'white' }}><Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleButtonClick(row._id)}
//                   >Chanel</Button></Link> */}

//                   {/* <Button
//                     variant="contained"
//                     color="primary"
//                     // onClick={() => this.handleButtonClick(row.id)}

//                   ><Link href="/make-chanelling" style={{ color: 'white' }}>Chanel</Link>

//                   </Button> */}
//                   {/* <Button
//                     component={Link}
//                     to="/make-chanelling"
//                     variant="contained"
//                     onClick={() => handleButtonClick(row._id)}


//                     color="primary"
//                   >
//                     Channel
//                   </Button> */}

//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleButtonClick(row._id)}
//                   >
//                     Channel
//                   </Button>

//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default SearchChanelling;

//==========================================================================================
////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { useState } from 'react';
// import { Link,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
// import Heading from '../../components/patient-components/heading.component';
// import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';


// class SearchChanelling extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableData: [
//         { id: 1, col1: 'Dr.(Mrs.) Chalukya Gunasekara', col2: 'Dermatologist'},
//         { id: 2, col1: 'Dr.Hansanie Neththasinghe', col2: 'Surgeon'},
//         { id: 3, col1: 'Dr.Hiranya Neththasinghe', col2: 'Neurologist'},
//         // Add more rows as needed
//       ],
//       filteredData: [],
//       searchTerm: '',
//     };
//   }

//   handleButtonClick = (id) => {
//     //const history = useHistory();
//     // Handle button click action here
//     console.log(`Button clicked for ID ${id}`);
//     //const [{id}, setcurrentId] = useState('');
    
//     //<Link href="/make-chanelling/${id}"></Link>
//     // try {
//     //     const { useHistory } = require('react-router-dom');
//     //     const history = useHistory();
      
//     //     // Now you can safely use history for navigation
//     //     history.push('/make-chanelling/${id}');
//     //   } catch (error) {
//     //     console.error('react-router-dom is not installed.');
//     //   }
      
//   };

//   handleSearchChange = (event) => {
//     const searchTerm = event.target.value;
//     const { tableData } = this.state;

//     // Filter the data based on the search term
//     const filteredData = tableData.filter((row) =>
//       Object.values(row).some((value) =>
//         String(value).toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );

//     this.setState({
//       searchTerm,
//       filteredData,
//     });
//   };

//   render() {
//     const { searchTerm, filteredData } = this.state;
//     const dataToDisplay = searchTerm ? filteredData : this.state.tableData;

//     return (
//       <div>
//          <PatientNavigationBar/>
         

//         <Heading title="Doctor Channeling"
//                 description="Use filters to select your preferred doctor"/>
        
//         <TextField
//           label="Search"
//           variant="outlined"
//           value={searchTerm}
//           onChange={this.handleSearchChange}
//           fullWidth
//           placeholder='Enter name of the doctor/ specialization'
//         />
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Number</TableCell>
//                 <TableCell>Doctor</TableCell>
//                 <TableCell>Specialzation</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {dataToDisplay.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.col1}</TableCell>
//                   <TableCell>{row.col2}</TableCell>
//                   <TableCell>
                    // <Button
                    //   variant="contained"
                    //   color="primary"
                    //   onClick={() => this.handleButtonClick(row.id)}
                      
                    // ><Link href="/make-chanelling" style={{ color: 'white' }}>Chanel</Link>
                      
                    // </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     );
//   }
// }

// export default SearchChanelling;
