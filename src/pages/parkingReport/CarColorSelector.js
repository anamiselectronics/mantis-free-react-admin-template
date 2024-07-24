import React, { useState } from 'react';

const CarColorSelector = ({ onColorsChange }) => {
  const [colors, setColors] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const colorArray = value ? value.split(',').map(color => color.trim()) : [];
    setColors(colorArray);
    console.log(colors)
    if (onColorsChange) {
      onColorsChange(colorArray); // Ensure this function is correctly passed
    }
  };

  return (
    <div>
      <h1>Car Colors (comma-separated): </h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default CarColorSelector;
