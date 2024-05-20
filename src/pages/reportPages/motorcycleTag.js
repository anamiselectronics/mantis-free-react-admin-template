import * as React from 'react';
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
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '8.5vh',
  direction: 'ltr',
  textAlign: 'center',
  borderRadius: '5px',
  border: '2px solid gray',
  paddingLeft: '3vw',
  width: '15.5rem',
  resize: 'none',
  overflowY: 'auto',
  textDecoration: 'underline', // Add underline for each character
  letterSpacing: '0.65em', // Adjust letter spacing to prevent overlap
  overflow: 'hidden'
};

export default function MotorcycleTag() {
  // State to hold input value
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Replace non-numeric characters with empty string

    // Limit first line to 3 characters and second line to 5 characters
    const firstLine = value.slice(0, 3);
    const secondLine = value.slice(3, 8); // To limit to 5 characters
    value = firstLine + '\n' + secondLine;

    setInputValue(value);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleBox}>
      <FormControl variant="outlined" style={{ width: '16rem' }}>
        <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
          پلاک موتور
        </FormLabel>
        <textarea style={styleTextarea} autoFocus value={inputValue} onChange={handleInputChange}  />
      </FormControl>
      <FormControlLabel
        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: 'secondary.dark' }} />}
        label={<Typography>مخالف</Typography>}
      />
    </Box>
  );
}
