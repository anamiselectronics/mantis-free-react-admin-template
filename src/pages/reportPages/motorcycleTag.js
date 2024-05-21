import React,{useRef} from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, FormControlLabel, Typography, Checkbox } from '@mui/material';

import motorPlate from '../../assets/images/pages/motorPlate.png';

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
  unicodeBidi: 'bidi-override',
  fontSize: '1.5rem',
  backgroundImage: `url(${motorPlate})`,
  objectFit: 'fill',
  backgroundSize: '102% 101%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '8.5vh',
  direction: 'ltr',
  textAlign: 'center',
  borderRadius: '5px',
  border: '2px solid ',
  paddingLeft: '3vw',
  width: '16.5rem',
  resize: 'none',
  letterSpacing: '0.65em', // Adjust letter spacing to prevent overlap
  overflow: 'hidden',
  whiteSpace: 'pre' // Make sure whitespace is preserved
};

export default function MotorcycleTag() {
  // State to hold input value
  const [inputValue, setInputValue] = React.useState('');
  const textareaRef = useRef(null); // Create a ref for the textarea element


  const toPersianNumber = (number) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return number.toString().replace(/[0-9]/g, (w) => persianDigits[+w]);
  };

  const handleKeyDown = (e) => {
    if (/[0-9]/.test(e.key) && inputValue.length < 8) {
      const updatedValue = inputValue + e.key;
      const persianValue = toPersianNumber(updatedValue);
      setInputValue(persianValue);
      e.preventDefault(); // Prevent the default action of adding the character twice
    } else if (e.key === 'Backspace') {
      const updatedValue = inputValue.slice(0, -1);
      setInputValue(updatedValue);
      e.preventDefault(); // Prevent the default action of removing the character twice
    } else {
      e.preventDefault(); // Prevent any other key press
    }
  };

  const formatValue = (value) => {
    const firstLine = value.slice(0, 3).padEnd(3, '_');
    const secondLine = value.slice(3, 8).padEnd(5, '_');
    const formattedValue = firstLine + (secondLine ? '\n' + secondLine : '');
    return formattedValue;
  };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleBox}>
      <FormControl variant="outlined" style={{ width: '16rem' }}>
        <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
          پلاک موتور
        </FormLabel>
        <textarea
           autoFocus
           ref={textareaRef}
          style={styleTextarea}
          value={formatValue(inputValue)}
          onKeyDown={handleKeyDown}
          readOnly // Make it read-only to control the input manually
        />
      </FormControl>
      <FormControlLabel
        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: 'secondary.dark' }} />}
        label={<Typography>مخالف</Typography>}
      />
    </Box>
  );
}
