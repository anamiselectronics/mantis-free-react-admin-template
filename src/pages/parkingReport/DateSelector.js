import React, { useState } from 'react';

const DateSelector = ({ onDateChange }) => {
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    setDate(e.target.value);
    onDateChange(e.target.value);
  };

  return (
    <div>
      <p>Date: </p>
      <input type="date" value={date} onChange={handleChange} />
    </div>
  );
};

export default DateSelector;
