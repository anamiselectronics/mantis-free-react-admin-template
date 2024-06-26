import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel} from '@mui/material';
import MaskedInput from 'react-text-mask';
// import plate from '../../assets/images/pages/plate.png';
//asset
import A from 'assets/images/pages/A.png';
import D from 'assets/images/pages/D.png';
import F from 'assets/images/pages/F.png';
import S from 'assets/images/pages/S.png';
import Sh from 'assets/images/pages/Sh.png';
import general from 'assets/images/pages/general.png';
import plate from '../../assets/images/pages/plate.png';

const styleOuterBox = {
  display: 'flex',
  flexDirection: 'column', // Stack boxes vertically
  alignItems: 'center',
  marginBottom: '10px'
};

const styleBox = {
  height: '150px',
  width: '350px',
  display: 'flex',
  flexDirection: 'row', // Align contents horizontally within each box
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px' // Space between boxes
};

const styleMask = {
  unicodeBidi: 'bidi-override',
  fontSize: '1.5rem',
  // backgroundImage: `url(${plate})`,
  backgroundColor: '#fff',
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
  width: '15.5rem',
  caretColor: 'transparent' , // disable cursor
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
  ',': 'و',
  '0': '۰',
  '1': '۱',
  '2': '۲',
  '3': '۳',
  '4': '۴',
  '5': '۵',
  '6': '۶',
  '7': '۷',
  '8': '۸',
  '9': '۹',
};

const shiftCharMap = {
  C: 'ژ' // Shift+c
};

const convertToPersian = (input, isShiftHeld) => {
  return input.replace(/[a-zA-Z0-9[\]\\;',]/gi, (match) => {
    if (isShiftHeld && (match.toLowerCase() === 'd' || match.toLowerCase() === 's')) {
      return match.toUpperCase();
    } else if (isShiftHeld && shiftCharMap[match]) {
      return shiftCharMap[match];
    } else if (match === 'D' || match === 'S') {
      return match; // Keep 'D' and 'S' as they are if previously typed with Shift
    } else if (/[0-9]/.test(match)) {
      // Convert numbers to Persian numerals
      return match;
    } else {
      return charMap[match.toLowerCase()] || match;
    }
  });
};

export default function PlatePattern({ value, onChange }) {
  const [inputs, setInputs] = React.useState([{ value: value, cursorPosition: 0 }]);
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
    // const nullValue = '_ _  _  _ _ _    _ _   ';
    const newValue = e.target.value;
    const newPosition = e.target.selectionStart;

    const convertedValue = convertToPersian(newValue, isShiftHeld);
    console.log(convertedValue);
    const newInputs = [...inputs];
    newInputs[index] = { value: convertedValue, cursorPosition: newPosition };

    setInputs(newInputs);
    console.log(convertedValue);
    onChange({ target: { value: convertedValue } });
  };

  // Determine background color based on the presence of 'D' in the input value
  const getBackgroundImage = () => {
    const currentInput = inputs[0]?.value.trim();
    if ((currentInput && currentInput.includes('D')) || currentInput.includes('S')) {
      return `url(${D})`;
    } else if ((currentInput && currentInput.includes('ع')) || currentInput.includes('ک') || currentInput.includes('ت')) {
      return `url(${general})`;
    } else if (currentInput && currentInput.includes('ا')) {
      return `url(${A})`;
    } else if (currentInput && currentInput.includes('ش')) {
      return `url(${Sh})`;
    } else if ((currentInput && currentInput.includes('ف')) || currentInput.includes('ز')) {
      return `url(${F})`;
    } else if ((currentInput && currentInput.includes('ث')) || currentInput.includes('پ')) {
      return `url(${S})`;
    }
    return `url(${plate})`; // Default background color
  };

  const styleMaskWithCondition = {
    ...styleMask,
    backgroundImage: getBackgroundImage() // Use dynamic style
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
                /\d/,
                ' ',
                /\d/,
                ' ',
                ' ',
                /[ا-یa-zA-Z[\]\\;',]/,
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
              style={styleMaskWithCondition} // Use dynamic style
              showMask
              value={inputs[index].value}
              onChange={(e) => handleInputChange(index, e)}
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
        </Box>
      ))}
    </Box>
  );
}
