import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, FormControlLabel, Typography, Checkbox } from '@mui/material';
import MaskedInput from 'react-text-mask';
import oldTransit from '../../assets/images/pages/oldTransit.png';


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
  marginBottom: '10px'
};

const styleMask = {
  unicodeBidi: 'bidi-override',
  fontSize: '1.5rem',
  backgroundImage: `url(${oldTransit})`,
  objectFit: 'fill',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '9vh',
  direction: 'ltr',
  textAlign: 'center',
  borderRadius: '5px',
  border: '2px solid',
  paddingLeft: '3vw',
  width: '16.5rem'
};

const convertToPersian = (input, cursorPosition) => {
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
  const convertedValue = input.replace(/[ا-ی]/gi, (match) => charMap[match.toLowerCase()] || match);
  const newPosition = cursorPosition + (convertedValue.length - input.length);
  return { value: convertedValue, position: newPosition };
};

export default function OldTransitTag() {
  const [inputs, setInputs] = useState([{ value: '', cursorPosition: 0 }]);
  const inputRefs = useRef([]);

  const handleInputChange = (index, e) => {
    const nullValue = '_ _   _     _ _ _    _ _   ';
    const newPosition = e.target.selectionStart;
    const converted = convertToPersian(e.target.value, newPosition);
    const newInputs = [...inputs];
    newInputs[index] = { value: converted.value, cursorPosition: converted.position };

    console.log('Current inputs:', newInputs); // Log current inputs

    // Add a new input if this is the last input and it's not empty
    if (index === newInputs.length - 1 && converted.value.length > 0) {
      console.log('Before add:', newInputs);
      newInputs.push({ value: '', cursorPosition: 0 });
      console.log('After add:', newInputs);
    }
    // Remove the input if its value becomes empty and it's not the initial input
    console.log('ConvertedValue:', converted.value);
    console.log('NewInputsLenth:', newInputs.length);
    console.log('Index:', index);

    if (converted.value == nullValue || newInputs[1].value == '' && newInputs.length > 1 && index !== 0) {
      console.log('Before remove:', newInputs);
      newInputs.splice(index, 1);
      console.log('After remove:', newInputs);
      setInputs(newInputs); // Update state after removing the input
    }

    setInputs(newInputs);
  };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleOuterBox}>
      {inputs.map((input, index) => (
        <Box key={index} sx={{ ...styleBox, height: 'auto' }}>
          <FormControl variant="outlined" style={{ width: '16rem' }}>
            <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
              پلاک ترانزیت قدیمی
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
              value={input.value}
              onKeyDown={(e) => handleInputChange(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
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
