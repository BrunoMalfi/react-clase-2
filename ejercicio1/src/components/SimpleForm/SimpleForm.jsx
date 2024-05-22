import React, { useState } from 'react';
import './SimpleForm.css';
import Counter from '../Counter/Counter';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    initialization: '',
    incrementation: ''
  });

  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, send the data to a server
    console.log('Form submitted:', formData);
    setIsFormVisible(false); // Hide the form on submit
  };

  return (
    <div className="form-container">
      {isFormVisible ? (
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="initialization">Initialization:</label>
          <input
            type="number"
            id="initialization"
            name="initialization"
            value={formData.initialization}
            onChange={handleChange}
            className="input-field"
          />

          <label htmlFor="incrementation">Incrementation:</label>
          <input
            type="number"
            id="incrementation"
            name="incrementation"
            value={formData.incrementation}
            onChange={handleChange}
            className="input-field"
          />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      ) : (
        <Counter initialization={formData.initialization} incrementation={formData.incrementation}/>
      )}
    </div>
  );
};

export default SimpleForm;
