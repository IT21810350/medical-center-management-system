import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const CreateSampleForm = () => {
  const [formData, setFormData] = useState({
    sample_id: '',
    sample_type: '',
    collection_date: '',
    status: '',
    lab_assistant_name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await axios.post('http://localhost:4000/samples', formData);
    console.log('Sample created:', response.data);

    // Reset the form fields
    setFormData({
      sample_id: '',
      sample_type: '',
      collection_date: '',
      status: '',
      lab_assistant_name: '',
    });

    // Handle success or navigate to another page
    } catch (error) {
        console.error('Error creating sample:', error);
        // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Sample ID"
        name="sample_id"
        value={formData.sample_id}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Sample Type"
        name="sample_type"
        value={formData.sample_type}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Collection Date"
        name="collection_date"
        type="datetime-local"
        InputLabelProps={{ shrink: true }}
        value={formData.collection_date}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Lab Assistant Name"
        name="lab_assistant_name"
        value={formData.lab_assistant_name}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Create Sample
      </Button>
    </form>
  );
};

export default CreateSampleForm;
