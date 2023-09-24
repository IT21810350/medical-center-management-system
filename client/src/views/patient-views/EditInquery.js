import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditInquiry = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const fetchInquiry = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/inqData/${id}`);
      setInquiry(response.data);
    } catch (error) {
      console.error('Error fetching inquiry for editing:', error);
    }
  };

  useEffect(() => {
    fetchInquiry();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/update/${id}`, inquiry);

      if (response.status === 200) {
        navigate('/inquiries'); // Redirect to inquiries list on success
      } else {
        console.error('Error updating inquiry:', response.data.error);
      }
    } catch (error) {
      console.error('Error updating inquiry:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  return (
    <div>
      <h2>Edit Inquiry</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Name input */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={inquiry.name}
            onChange={handleInputChange}
            disabled // Optionally disable the "name" field
          />
        </div>

        {/* Subject input */}
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={inquiry.subject}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Message input */}
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={inquiry.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Update Inquiry</button>
      </form>
    </div>
  );
};

export default EditInquiry;
