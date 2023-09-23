import React from 'react';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,

} from '@mui/material';


const editemployee=()=>{
   
    return(

       <div>

<TableContainer component={Paper}  >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Report ID</TableCell>
                <TableCell>Report Name</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Lab Assistant ID</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
                <TableRow>
                  <TableCell>ttttt</TableCell>
                  <TableCell>ttttt</TableCell>
                  <TableCell>ttttt</TableCell>
                  <TableCell>ttttt</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary">
                      View Report
                    </Button>
                    <Button> view </Button>
                  </TableCell>
                </TableRow>
         
            </TableBody>
          </Table>
        </TableContainer>
       </div>
    );
   
};
export default editemployee