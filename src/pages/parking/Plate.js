import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl } from '@mui/material';
import MaskedInput from 'react-text-mask';
import style from './StylePlate.module.css';
import plate from 'assets/images/pages/plate.png';

const styleMask = {
  unicodeBidi: 'bidi-override',
  fontSize: '0.90rem', // Adjust font size to match TextField
  fontFamily: 'Vazirmatn',
  objectFit: 'fill',
  backgroundImage:`url(${plate})`,
  backgroundSize: '102% 110%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '5px',
  border: 'none', // Adjust border to match TextField
  direction: 'ltr !important',
  textAlign: 'center',
  width: 'calc(100% - 0px)', // Adjust width to match TextField
  letterSpacing: '0.55rem',
  marginRight: '-8px',
  marginTop: '-10px'
};

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
  C: 'ژ',
  '[': 'ج',
  ']': 'چ',
  '\\': 'پ',
  ';': 'ک',
  "'": 'گ',
  ',': 'و'
};

const shiftCharMap = {
  C: 'ژ' // Shift+c
};

const persianNumbers = {
  0: '۰',
  1: '۱',
  2: '۲',
  3: '۳',
  4: '۴',
  5: '۵',
  6: '۶',
  7: '۷',
  8: '۸',
  9: '۹'
};

const convertToPersian = (input, isShiftHeld) => {
  return input
    .split('')
    .map((char) => {
      if (isShiftHeld && (char.toLowerCase() === 'd' || char.toLowerCase() === 's')) {
        return char.toUpperCase();
      } else if (isShiftHeld && shiftCharMap[char]) {
        return shiftCharMap[char];
      } else if (char === 'D' || char === 'S') {
        return char;
      } else if (charMap[char.toLowerCase()]) {
        return charMap[char.toLowerCase()];
      } else if (persianNumbers[char]) {
        return persianNumbers[char];
      } else {
        return char;
      }
    })
    .join('');
};

export default function Plate({ value='', onChange }) {
  const [plateNumbers, setPlateNumbers] = React.useState(value.split('*').length > 0 ? value.split('*') : ['']);
  const [isShiftHeld, setIsShiftHeld] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Shift') {
        setIsShiftHeld(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Shift') {
        setIsShiftHeld(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleInputChange = (index, e) => {
    const rawValue = e.target.value;
    const convertedValue = convertToPersian(rawValue, isShiftHeld);
    const newPlateNumbers = [...plateNumbers];
    newPlateNumbers[index] = convertedValue;
    setPlateNumbers(newPlateNumbers);
    onChange(newPlateNumbers.join('*'));
  };

  // const handleKeyPress = (e) => {
  //   if (!isShiftHeld && (e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'c')) {
  //     e.preventDefault();
  //   }
  // };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, width: '100%' }}>
      {plateNumbers.map((plateNumber, index) => (
        <FormControl variant="outlined" fullWidth key={index}>
          <fieldset  className={style.inputFieldset}>
            <legend className={style.inputLegend}>
              {/* <span className={style.required}>*</span>  */}
              شماره پلاک
            </legend>
            <MaskedInput
              required
              className={style.maskedInput}
              placeholder="شماره پلاک را وارد کنید"
              guide={true}
              mask={[/[۰-۹0-9]/, /[۰-۹0-9]/, /[ا-یa-zA-Z[\]\\;',]/, /[۰-۹0-9]/, /[۰-۹0-9]/, /[۰-۹0-9]/, /[۰-۹0-9]/, /[۰-۹0-9]/]}
              style={styleMask}
              // showMask
              value={plateNumber}
              onChange={(e) => handleInputChange(index, e)}
              // onKeyPress={handleKeyPress}
            />
          </fieldset>
        </FormControl>
      ))}
    </Box>
  );
}
