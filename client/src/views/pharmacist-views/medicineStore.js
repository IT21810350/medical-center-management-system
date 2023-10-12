import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Grid, Button } from '@mui/material';
import Heading from '../../components/patient-components/heading.component';
import { Link } from 'react-router-dom';

class MedicineStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        { id: '001', col1: 'Paracetamol', col2: '50mg', col3:'Tablet', col4: '100 Packs', col5:'12/12/2023' },
        { id: '002', col1: 'Piriton', col2: '10mg', col3:'Tablet',col4: '50 Packs', col5:'02/02/2024'},
        { id: '003', col1: 'Cetrizine', col2: '10mg', col3:'Tablet',col4: '200 Packs', col5:'10/05/2024' },
        { id: '004', col1: 'Brufen', col2: '600mg', col3:'Tablet',col4: '20 Packs', col5:'20/01/2025' },
        { id: '005', col1: 'Panadol', col2: '500mg', col3:'Tablet',col4: '180 Packs', col5:'05/11/2025' },
        // Add more rows as needed
      ],
      filteredData: [],
      searchTerm: '',
    };
  }

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

  handleDelete = (id) => {
    // Implement the delete functionality here
    // You can filter the data to remove the item with the given id and update the state
    const updatedData = this.state.tableData.filter((row) => row.id !== id);
    this.setState({ tableData: updatedData });
  };

  handleUpdate = (id) => {
    // Construct the URL for the update form with the id
    const updateFormUrl = `/updateMedicine/${id}`;
  
    // Return the Link component to navigate to the update form
    return <Link to={updateFormUrl}>Update</Link>;
  };

  render() {
    const { searchTerm, filteredData } = this.state;
    const dataToDisplay = searchTerm ? filteredData : this.state.tableData;

    return (
      <div style={{ background: 'white', padding: '20px' }}>
        <Heading
          title="Medicine Store"
          description="Use filters to search for medicine"
        />

        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={this.handleSearchChange}
          fullWidth
          placeholder="Enter name of the medicine/medicine code"
        />
        <TableContainer component={Paper} style={{ position: 'relative' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Medicine Code</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Dosage</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Availability</TableCell>
                <TableCell>Expiry date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataToDisplay.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.col1}</TableCell>
                  <TableCell>{row.col2}</TableCell>
                  <TableCell>{row.col3}</TableCell>
                  <TableCell>{row.col4}</TableCell>
                  <TableCell>{row.col5}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.handleDelete(row.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.handleUpdate(row.id)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Grid container justifyContent='flex-end' style={{ marginTop: '20px' }}>
            <Button component={Link} to="/addMedicine" variant="contained">ADD</Button>
          </Grid>
        </TableContainer>
  </div>
);}
}

export default MedicineStore;

