import React, { useEffect, useState } from 'react';
import InquiryForm from './InquiryForm'; // Import your form component

function UpdateInquiry({ match }) {
  const [inquiry, setInquiry] = useState({});

  useEffect(() => {
    // Fetch the inquiry data by ID and set it in the state
    const fetchInquiry = async () => {
      try {
        const response = await fetch(`/api/updateinq/${match.params.id}`);
        if (response.ok) {
          const data = await response.json();
          setInquiry(data.inquiry);
        } else {
          console.error('Failed to fetch inquiry data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchInquiry();
  }, [match.params.id]);

  const handleUpdate = async (formData) => {
    try {
      const response = await fetch(`/api/updateinq/${match.params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Inquiry updated successfully
        // You can handle the success case as needed (e.g., show a success message)
      } else {
        console.error('Failed to update inquiry');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Inquiry</h1>
      <InquiryForm inquiry={inquiry} onSubmit={handleUpdate} />
    </div>
  );
}

export default UpdateInquiry;
