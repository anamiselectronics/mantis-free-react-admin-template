import * as React from 'react';
import Box from '@mui/material/Box';
// import InputAdornment from '@mui/material/InputAdornment';
import { FormControl, Grid } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';

import MaskedInput from 'react-text-mask';
import plate from '../../assets/images/pages/plate.png';

export default function PosibilitySection2() {
  const convertToPersian = (input, cursorPosition) => {
    // Define mappings for English characters to Farsi characters
    const charMap = {
      a: 'ا',
      b: 'ب',
      c: 'س',
      d: 'د'
      // Add more mappings as needed...
    }; // Replace English characters with Farsi characters
    const convertedValue = input.replace(/[a-z]/gi, (match) => charMap[match.toLowerCase()] || match);

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
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <FormControl variant="outlined" style={{width:'16rem'}}>
            <MaskedInput
              guide={true}
              mask={[
                // ' ',
                /\d/,
                ' ',
                /\d/,
                ' ',
                ' ',
                /[ا-یa-z]/,
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
              style={{
                unicodeBidi: 'bidi-override',
                fontSize: '1.5rem',
                backgroundImage: `url(${plate})`,
                objectFit: 'fill',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '9vh',
                direction: 'ltr',
                textAlign: 'center',
                paddingLeft: '4vw'
              }}
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
        </Grid>
      </Grid>
      {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          // endAdornment={
          //   <InputAdornment position="end">
          //     <AccountCircle />
          //   </InputAdornment>
          // }
          startAdornment={
            <InputAdornment position="start" sx={{ marginRight: 0 }}>
              <TextField
                label="ایران"
                id="filled-hidden-label-small"
                defaultValue="84"
                variant="standard"
                size="small"
                inputProps={{ maxLength: 2 }}
                sx={{ alignItem: 'center', width: '40%' }}
                inputComponent={MaskedInput}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
            maxLength: 6
          }}
          sx={{ backgroundImage: `url(${plate})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        />

        <FormHelperText id="outlined-weight-helper-text">پلاک ملی</FormHelperText>
      </FormControl> */}
    </Box>
  );
}
