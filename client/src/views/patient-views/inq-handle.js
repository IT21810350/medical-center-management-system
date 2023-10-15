import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Stack,Table, TableBody, TableCell, TableRow ,TableHead,TableContainer,Paper} from '@mui/material';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);

  
  const fetchInquiries = async () => {
    try {
      const response = await axios.get('http://localhost:4000/inqData/');
      setInquiries(response.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };


  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/deleteinq/${id}`);
      fetchInquiries();
    } catch (error) {
      console.error('Error deleting inquiry:', error);
    }
  };

  const handleDeleteInq = (id) => {
    console.log("Delete button clicked for id:", id)
    
    axios
      .delete(`http://localhost:4000/inqData/deleteinq/${id}`)
      .then(() => {
       
        setInquiries((prevData) => prevData.filter((inquery) => inquery._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting inquery:', error);
      });
  };
   

  return (
    <div>
      <h2>All Inquiries</h2>
    
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Subject&nbsp;</TableCell>
            <TableCell align="center">Messgae&nbsp;</TableCell>
            <TableCell align="center">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {inquiries.map((inquiry) => (
            <TableRow
            key={inquiry._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                
              </TableCell> */}
              <TableCell align="center">{inquiry.name}</TableCell>
              <TableCell align="center">{inquiry.subject}</TableCell>
              <TableCell align="center">{inquiry.message}</TableCell>
              <TableCell align="center">
              <Stack direction={'row'} spacing={2}>
                <Button
                  component={Link}
                  to={`/editinq/${inquiry._id}`}
                  variant="contained"
                  // size="small"
                  

                  color="primary"
                >
                  Edit
                </Button>
                
                
                <Button onClick={() => handleDeleteInq(inquiry._id)} style={{ backgroundColor: 'red', color: 'white' }} >Delete</Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default InquiryList;
