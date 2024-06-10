import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, FormControlLabel, Typography, Checkbox } from '@mui/material';

import freeZonePlate from '../../assets/images/pages/freeZonePlate.png';

const styleOuterBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '10px'
};

const styleBox = {
  height: '150px',
  width: '350px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px'
};

const styleTextarea = {
  backgroundImage: `url(${freeZonePlate})`,
  backgroundSize: '101% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  unicodeBidi: 'bidi-override',
  fontSize: '1.5rem',
  direction: 'ltr',
  textAlign: 'center',
  borderRadius: '5px',
  border: '2px solid',
  paddingLeft: '6vw',
  width: '100%',
  resize: 'none',
  letterSpacing: '0.65em', // Adjust letter spacing to prevent overlap
  overflow: 'hidden',
  whiteSpace: 'pre', // Make sure whitespace is preserved
  outline: 'none' // Remove outline
};

export default function FreeZonePlate() {
  // State to hold input value
  const [inputValue, setInputValue] = React.useState(['']);
  const textareaRef = useRef([]); // Create a ref for the textarea element

  const toPersianNumber = (number) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return number.toString().replace(/[0-9]/g, (w) => persianDigits[+w]);
  };

  const formatValue = (value) => {
    const persianValue = toPersianNumber(value).slice(0, 5).padEnd(5, '_');
    const englishValue = value.slice(0, 5).padEnd(5, '_');
    const formattedValue = persianValue + '\n' + englishValue;
    return formattedValue;
  };

  const handleKeyDown = (index, e) => {
    if (/[0-9]/.test(e.key) && inputValue.length < 8) {
      const updatedValue = inputValue[index] + e.key;
      updateInput(index, updatedValue);
      e.preventDefault(); // Prevent the default action of adding the character twice
    } else if (e.key === 'Backspace') {
      const updatedValue = inputValue[index].slice(0, -1);
      updateInput(index, updatedValue);
      e.preventDefault(); // Prevent the default action of removing the character twice
    } else {
      e.preventDefault(); // Prevent any other key press
    }
  };

  const updateInput = (index, value) => {
    const newInputs = [...inputValue];
    newInputs[index] = value;

    // Remove input if it becomes empty and it's not the first input
    if (value === '' && newInputs.length > 1 && index !== 0) {
      newInputs.splice(index, 1);
      textareaRef.current.splice(index, 1);
    }

    // Add a new input if this is the last input and it's not empty
    if (index === newInputs.length - 1 && value.length > 0) {
      newInputs.push('');
      textareaRef.current.push(React.createRef());
    }
    setInputValue(newInputs);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleOuterBox}>
      {inputValue.map((input, index) => (
        <Box key={index} sx={{ ...styleBox, height: 'auto' }}>
          <FormControl key={index} variant="outlined" style={{ width: '16rem' }}>
            <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
              پلاک منطقه آزاد
            </FormLabel>

            <textarea
              autoFocus
              ref={(el) => (textareaRef.current[index] = el)}
              style={styleTextarea}
              value={formatValue(input)}
              onKeyDown={(e) => handleKeyDown(index, e)} // Pass index to handleKeyDown
              readOnly // Make it read-only to control the input manually
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: 'secondary.dark' }} />}
            label={<Typography>مخالف</Typography>}
          />
        </Box>
      ))}
    </Box>
  );
}
