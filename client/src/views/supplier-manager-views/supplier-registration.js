import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Supplier Registration</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <TextField
            required
            id="outlined-required-first-name"
            label="First Name"
          />
          <TextField
            required
            id="outlined-required-last-name"
            label="Last Name"
          />
          <TextField
            required
            id="outlined-required-email"
            label="Email Address"
            type="email"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required-address"
            label="Address"
          />
          <TextField
            required
            id="outlined-required-phone"
            label="Phone Numbers"
          />
          <TextField
            required
            id="outlined-required-nic"
            label="NIC Number"
          />
        </div>
      </div>
      <div>
        <TextField
          required
          id="outlined-required-bio"
          label="Your Bio"
          multiline
          rows={4}
          fullWidth
        />
      </div>
    </Box>
  );
}
