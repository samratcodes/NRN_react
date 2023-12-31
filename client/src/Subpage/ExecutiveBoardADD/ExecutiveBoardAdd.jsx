import React, { useState } from 'react';
import './ExecutiveBoardAdd.css';

const   ExecutiveBoardAdd = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
  });

  const toggleIcons = () => {
    setIsFormVisible((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7000/api/v1/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error('Error:', response);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data sent to the backend:', data);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  return (
    <div>
      <div className="addMembers" onClick={toggleIcons}>
        <i className={`fa-solid fa-plus ${isFormVisible ? '' : 'activemem'}`} id="plus"></i>
        <i className={`fa-solid fa-minus ${isFormVisible ? 'activemem' : ''}`} id="minus"></i>
      </div>
      <h1 className="EBA_title">Add members</h1>
      <form className={isFormVisible ? 'hidden' : 'visible'} onSubmit={handleSubmit}>
        <label htmlFor="EBA_name">Name:</label>
        <input
          type="text"
          placeholder="..."
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="EBA_email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="..."
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="EBA_position">Position:</label>
        <input
          type="text"
          name="position"
          placeholder="..."
          required
          id="position"
          value={formData.position}
          onChange={handleInputChange}
        />
        <button className="EBA_button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default ExecutiveBoardAdd;
