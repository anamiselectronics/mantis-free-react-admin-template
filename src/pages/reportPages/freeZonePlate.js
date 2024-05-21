import React, { useRef} from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, FormControlLabel, Typography, Checkbox } from '@mui/material';

import freeZonePlate from '../../assets/images/pages/freeZonePlate.png';

const styleBox = {
  height: '150px',
  width: '350px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px'
};

const styleContainer = {
  display: 'nline-block',
  backgroundImage: `url(${freeZonePlate})`,
  backgroundSize: '101% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16.5rem',
  height: '10vh',
  paddingBottom: '1px'
};

const styleTextarea = {
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
  backgroundColor: 'transparent', // Set background color to transparent
  outline: 'none' // Remove outline
};

export default function FreeZonePlate() {
  // State to hold input value
  const [inputValue, setInputValue] = React.useState('');
  const textareaRef = useRef(null); // Create a ref for the textarea element

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

  const handleKeyDown = (e) => {
    if (/[0-9]/.test(e.key) && inputValue.length < 8) {
      const updatedValue = inputValue + e.key;
      setInputValue(updatedValue);
      e.preventDefault(); // Prevent the default action of adding the character twice
    } else if (e.key === 'Backspace') {
      const updatedValue = inputValue.slice(0, -1);
      setInputValue(updatedValue);
      e.preventDefault(); // Prevent the default action of removing the character twice
    } else {
      e.preventDefault(); // Prevent any other key press
    }
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleBox}>
      <FormControl variant="outlined" style={{ width: '16rem' }}>
        <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
          پلاک منطقه آزاد
        </FormLabel>
        <div style={styleContainer}>
          <textarea
            autoFocus
            ref={textareaRef}
            style={styleTextarea}
            value={formatValue(inputValue)}
            onKeyDown={handleKeyDown}
            readOnly // Make it read-only to control the input manually
          />
        </div>
      </FormControl>
      <FormControlLabel
        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: 'secondary.dark' }} />}
        label={<Typography>مخالف</Typography>}
      />
    </Box>
  );
}
