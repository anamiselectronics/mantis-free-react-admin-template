import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, Typography, Checkbox, FormControlLabel } from '@mui/material';
import MaskedInput from 'react-text-mask';
import A from 'assets/images/pages/A.png';
import D from 'assets/images/pages/D.png';
import F from 'assets/images/pages/F.png';
import S from 'assets/images/pages/S.png';
import Sh from 'assets/images/pages/Sh.png';
import general from 'assets/images/pages/general.png';
import plate from '../../assets/images/pages/plate.png';

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
  backgroundImage: `url(${plate})`,
  objectFit: 'fill',
  backgroundSize: '102% 110%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '5px',
  border: '2px solid ',
  minHeight: '9vh',
  direction: 'ltr',
  textAlign: 'center',
  paddingLeft: '4vw',
  width: '16.5rem',
  caretColor: 'transparent'
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

export default function Testt() {
  const [inputs, setInputs] = React.useState([{ value: '', cursorPosition: 0, backgroundImage: `url(${plate})` }]);
  const [isShiftHeld, setIsShiftHeld] = React.useState(false);
  const inputRefs = React.useRef([]);

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
    const nullValue = '_ _  _  _ _ _    _ _   ';
    const newValue = e.target.value;
    const newPosition = e.target.selectionStart;

    const convertedValue = convertToPersian(newValue, isShiftHeld);

    const newInputs = [...inputs];
    newInputs[index] = {
      ...newInputs[index],
      value: convertedValue,
      cursorPosition: newPosition,
      backgroundImage: getBackgroundImage(convertedValue)
    };

    if (index === newInputs.length - 1 && convertedValue.length > 0) {
      newInputs.push({ value: '', cursorPosition: 0, backgroundImage: `url(${plate})` });
    }

    if (convertedValue === nullValue || (newInputs[1]?.value === '' && newInputs.length > 1 && index !== 0)) {
      newInputs.splice(index, 1);
    }
    console.log(newInputs)
    setInputs(newInputs);
  };

  const handleClickNextInput = (index) => {
    if (index < inputs.length - 1) {
      setInputs((prevInputs) =>
        prevInputs.map((input, idx) => (idx === index + 1 ? { ...input, backgroundImage: getBackgroundImage(input.value) } : input))
      );
    }
  };

  const getBackgroundImage = (value) => {
    value = value.trim();
    if (value.includes('D')) {
      return `url(${D})`;
    } else if (value.includes('ع') || value.includes('ک') || value.includes('ت')) {
      return `url(${general})`;
    } else if (value.includes('ا')) {
      return `url(${A})`;
    } else if (value.includes('ش')) {
      return `url(${Sh})`;
    } else if (value.includes('ف') || value.includes('ز')) {
      return `url(${F})`;
    } else if (value.includes('ث') || value.includes('پ')) {
      return `url(${S})`;
    }
    return `url(${plate})`; // Default background image
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleOuterBox}>
      {inputs.map((input, index) => (
        <Box key={index} sx={{ ...styleBox, height: 'auto' }}>
          <FormControl variant="outlined" style={{ width: '16rem' }}>
            <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
              پلاک ملی
            </FormLabel>

            <MaskedInput
              guide={true}
              mask={[
                /[۰-۹0-9]/,
                ' ',
                /[۰-۹0-9]/,
                ' ',
                ' ',
                /[ا-یa-zA-Z[\]\\;',]/,
                ' ',
                ' ',
                /[۰-۹0-9]/,
                ' ',
                /[۰-۹0-9]/,
                ' ',
                /[۰-۹0-9]/,
                ' ',
                ' ',
                ' ',
                ' ',
                /[۰-۹0-9]/,
                ' ',
                /[۰-۹0-9]/,
                ' ',
                ' ',
                ' '
              ]}
              style={{ ...styleMask, backgroundImage: input.backgroundImage }}
              showMask
              value={input.value}
              onChange={(e) => handleInputChange(index, e)}
              onClick={() => handleClickNextInput(index)}
              inputRef={(inputElement) => {
                inputRefs.current[index] = inputElement;
                if (index === inputs.length - 1 && inputElement) {
                  inputElement.selectionStart = input.cursorPosition;
                  inputElement.selectionEnd = input.cursorPosition;
                  inputElement.focus();
                }
              }}
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
