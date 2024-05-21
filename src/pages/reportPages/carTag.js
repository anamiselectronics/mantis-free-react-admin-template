import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, Typography, Checkbox, FormControlLabel } from '@mui/material';

import MaskedInput from 'react-text-mask';
import plate from '../../assets/images/pages/plate.png';

const styleBox = {
  height: '150px',
  width: '350px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
};

const styleMask = {
  unicodeBidi: 'bidi-override',
  fontSize: '1.5rem',
  backgroundImage: `url(${plate})`,
  objectFit: 'fill',
  backgroundSize: '102% 110%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '5px',
  border: '2px solid',
  minHeight: '9vh',
  direction: 'ltr',
  textAlign: 'center',
  paddingLeft: '4vw',
  width: '16.5rem'
};

export default function Cartag() {
  const convertToPersian = (input, cursorPosition) => {
    // Define mappings for English characters to Farsi characters
    const charMap = {
      a: 'ش',
      b: 'ذ',
      c: 'ز',
      d: 'ی',
      q: 'ض',
      w: 'ص',
      e: 'ث',
      r: 'ق',
      t: 'ف',
      y: 'غ',
      u: 'ع',
      i: 'ه',
      o: 'خ',
      p: 'ح',
      s: 'س',
      f: 'ب',
      g: 'ل',
      h: 'ا',
      j: 'ت',
      k: 'ن',
      l: 'م',
      z: 'ظ',
      x: 'ط',
      v: 'ر',
      n: 'د',
      m: 'ئ',
      '[': 'ج',
      ']': 'چ',
      '\\': 'ژ',
      ';': 'ک',
      "'": 'گ',
      ',': 'و'
    };
    // Replace English characters with Farsi characters
    const convertedValue = input.replace(/[a-z[\]\\;',]/gi, (match) => charMap[match.toLowerCase()] || match);

    // Restore cursor position
    const newPosition = cursorPosition + (convertedValue.length - input.length);
    return { value: convertedValue, position: newPosition };
  };

  // State to hold input value and cursor position
  const [inputValue, setInputValue] = React.useState('');
  const [cursorPosition, setCursorPosition] = React.useState(0);

  const handleInputChange = (e) => {
    const newPosition = e.target.selectionStart;
    const converted = convertToPersian(e.target.value, newPosition);
    setInputValue(converted.value);
    setCursorPosition(converted.position);
  };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleBox}>
      <FormControl variant="outlined" style={{ width: '16rem' }}>
        <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
          پلاک ملی
        </FormLabel>
        <MaskedInput
          guide={true}
          mask={[
            // ' ',
            /\d/,
            ' ',
            /\d/,
            ' ',
            ' ',
            /[ا-یa-z[\]\\;',]/,
            ' ',
            ' ',
            /\d/,
            ' ',
            /\d/,
            ' ',
            /\d/,
            ' ',
            ' ',
            ' ',
            ' ',
            /\d/,
            ' ',
            /\d/,
            ' ',
            ' ',
            ' '
          ]}
          style={styleMask}
          showMask
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
          inputRef={(input) => {
            if (input && cursorPosition !== null) {
              input.selectionStart = input.selectionEnd = cursorPosition;
            }
          }}
        />
      </FormControl>
      <FormControlLabel
        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } , color: 'secondary.dark' }} />}
        label={<Typography>مخالف</Typography>}
      />
    </Box>
  );
}
