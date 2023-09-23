import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Box,Grid,Link,Typography,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import Heading from '../../components/patient-components/heading.component';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import PatientNavigationBar from '../../views/patient-views/patient-navigation-bar';


class SearchChanelling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        { id: 1, col1: 'Dr.(Mrs.) Chalukya Gunasekara', col2: 'Dermatologist'},
        { id: 2, col1: 'Dr.Hansanie Neththasinghe', col2: 'Surgeon'},
        { id: 3, col1: 'Dr.Hiranya Neththasinghe', col2: 'Neurologist'},
        // Add more rows as needed
      ],
      filteredData: [],
      searchTerm: '',
    };
  }

  handleButtonClick = (id) => {
    //const history = useHistory();
    // Handle button click action here
    console.log(`Button clicked for ID ${id}`);
    //const [{id}, setcurrentId] = useState('');
    
    //<Link href="/make-chanelling/${id}"></Link>
    // try {
    //     const { useHistory } = require('react-router-dom');
    //     const history = useHistory();
      
    //     // Now you can safely use history for navigation
    //     history.push('/make-chanelling/${id}');
    //   } catch (error) {
    //     console.error('react-router-dom is not installed.');
    //   }
      
  };

  handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    const { tableData } = this.state;

    // Filter the data based on the search term
    const filteredData = tableData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    this.setState({
      searchTerm,
      filteredData,
    });
  };

  render() {
    const { searchTerm, filteredData } = this.state;
    const dataToDisplay = searchTerm ? filteredData : this.state.tableData;

    return (
      <div>
         <PatientNavigationBar/>
         

        <Heading title="Doctor Channeling"
                description="Use filters to select your preferred doctor"/>
        
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={this.handleSearchChange}
          fullWidth
          placeholder='Enter name of the doctor/ specialization'
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Specialzation</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataToDisplay.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.col1}</TableCell>
                  <TableCell>{row.col2}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.handleButtonClick(row.id)}
                      
                    ><Link href="/make-chanelling" style={{ color: 'white' }}>Chanel</Link>
                      
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default SearchChanelling;
