import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, FormControlLabel, Typography, Checkbox } from '@mui/material';

import MaskedInput from 'react-text-mask';
import newTransitplate from '../../assets/images/pages/newTransitPlate.png';

const styleBox = {
  height: '150px',
  width: '350px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px'
};

const styleMask = {
  unicodeBidi: 'bidi-override',
  fontSize: '1.5rem',
  backgroundImage: `url(${newTransitplate})`,
  objectFit: 'fill',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '9vh',
  direction: 'ltr',
  textAlign: 'center',
  borderRadius: '5px',
  border: '2px solid gray',
  paddingLeft: '3vw',
  width: '16.5rem',
};

export default function NewTransitTag() {
  const convertToPersian = (input, cursorPosition) => {
    // Define mappings for English characters to Farsi characters
    const charMap = {
      ض: 'q',
      ص: 'w',
      ث: 'e',
      ق: 'r',
      ف: 't',
      غ: 'y',
      ع: 'u',
      ه: 'i',
      خ: 'o',
      ح: 'p',
      ش: 'a',
      س: 's',
      ی: 'd',
      ب: 'f',
      ل: 'g',
      ا: 'h',
      ت: 'j',
      ن: 'k',
      م: 'l',
      ظ: 'z',
      ط: 'x',
      ز: 'c',
      ر: 'v',
      ذ: 'b',
      د: 'n',
      ئ: 'm'
    };
    // Replace English characters with Farsi characters
    const convertedValue = input.replace(/[ا-ی]/gi, (match) => charMap[match.toLowerCase()] || match);

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
          پلاک ترانزیت جدید
        </FormLabel>
        <MaskedInput
          guide={true}
          mask={[
            /\d/,
            ' ',
            /\d/,
            ' ',
            ' ',
            ' ',
            /[ا-یa-z]/,
            ' ',
            /[ا-یa-z]/,
            ' ',
            ' ',
            ' ',
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
