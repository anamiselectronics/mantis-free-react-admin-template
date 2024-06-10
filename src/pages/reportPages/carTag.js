// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { FormControl, FormLabel, Typography, Checkbox, FormControlLabel } from '@mui/material';
// import MaskedInput from 'react-text-mask';
// import plate from '../../assets/images/pages/plate.png';

// const styleOuterBox = {
//   display: 'flex',
//   flexDirection: 'column', // Stack boxes vertically
//   alignItems: 'center',
//   marginBottom: '10px'
// };

// const styleBox = {
//   height: '150px',
//   width: '350px',
//   display: 'flex',
//   flexDirection: 'row', // Align contents horizontally within each box
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginBottom: '10px' // Space between boxes
// };

// const styleMask = {
//   unicodeBidi: 'bidi-override',
//   fontSize: '1.5rem',
//   backgroundImage: `url(${plate})`,
//   objectFit: 'fill',
//   backgroundSize: '102% 110%',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   borderRadius: '5px',
//   border: '2px solid ',
//   minHeight: '9vh',
//   direction: 'ltr',
//   textAlign: 'center',
//   paddingLeft: '4vw',
//   width: '16.5rem',
//   caretColor: 'transparent' // disable cursor
// };

// const charMap = {
//   a: 'ش',
//   b: 'ذ',
//   c: 'ز',
//   d: 'ی',
//   q: 'ض',
//   w: 'ص',
//   e: 'ث',
//   r: 'ق',
//   t: 'ف',
//   y: 'غ',
//   u: 'ع',
//   i: 'ه',
//   o: 'خ',
//   p: 'ح',
//   s: 'س',
//   f: 'ب',
//   g: 'ل',
//   h: 'ا',
//   j: 'ت',
//   k: 'ن',
//   l: 'م',
//   z: 'ظ',
//   x: 'ط',
//   v: 'ر',
//   n: 'د',
//   m: 'ئ',
//   '[': 'ج',
//   ']': 'چ',
//   '\\': 'ژ',
//   ';': 'ک',
//   "'": 'گ',
//   ',': 'و'
// };

// const convertToPersian = (input, isShiftHeld) => {
//   return input.replace(/[a-z[\]\\;',]/gi, (match) => {
//     if (isShiftHeld && (match.toLowerCase() === 'd' || match.toLowerCase() === 's')) {
//       return match.toUpperCase();
//     } else if (match === 'D' || match === 'S') {
//       return match; // Keep 'D' and 'S' as they are if previously typed with Shift
//     } else {
//       return charMap[match.toLowerCase()] || match;
//     }
//   });
// };

// export default function Cartag() {
//   const [inputs, setInputs] = React.useState([{ value: '', cursorPosition: 0 }]);
//   const [isShiftHeld, setIsShiftHeld] = React.useState(false);
//   const inputRefs = React.useRef([]);

//   React.useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Shift') {
//         setIsShiftHeld(true);
//       }
//     };

//     const handleKeyUp = (e) => {
//       if (e.key === 'Shift') {
//         setIsShiftHeld(false);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   const handleInputChange = (index, e) => {
//     const nullValue = '_ _  _  _ _ _    _ _   ';
//     const newValue = e.target.value;
//     const newPosition = e.target.selectionStart;

//     const convertedValue = convertToPersian(newValue, isShiftHeld);

//     const newInputs = [...inputs];
//     newInputs[index] = { value: convertedValue, cursorPosition: newPosition };

//     if (index === newInputs.length - 1 && convertedValue.length > 0) {
//       newInputs.push({ value: '', cursorPosition: 0 });
//     }

//     if (convertedValue === nullValue || (newInputs[1]?.value === '' && newInputs.length > 1 && index !== 0)) {
//       newInputs.splice(index, 1);
//     }

//     setInputs(newInputs);
//   };

//   return (
//     <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleOuterBox}>
//       {inputs.map((input, index) => (
//         <Box key={index} sx={{ ...styleBox, height: 'auto' }}>
//           <FormControl variant="outlined" style={{ width: '16rem' }}>
//             <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
//               پلاک ملی
//             </FormLabel>

//             <MaskedInput
//               guide={true}
//               mask={[
//                 /\d/,
//                 ' ',
//                 /\d/,
//                 ' ',
//                 ' ',
//                 /[ا-یa-zA-Z[\]\\;',]/,
//                 ' ',
//                 ' ',
//                 /\d/,
//                 ' ',
//                 /\d/,
//                 ' ',
//                 /\d/,
//                 ' ',
//                 ' ',
//                 ' ',
//                 ' ',
//                 /\d/,
//                 ' ',
//                 /\d/,
//                 ' ',
//                 ' ',
//                 ' '
//               ]}
//               style={styleMask}
//               showMask
//               value={input.value}
//               onChange={(e) => handleInputChange(index, e)}
//               inputRef={(inputElement) => {
//                 inputRefs.current[index] = inputElement;
//                 if (index === inputs.length - 1 && inputElement) {
//                   inputElement.selectionStart = input.cursorPosition;
//                   inputElement.selectionEnd = input.cursorPosition;
//                   inputElement.focus();
//                 }
//               }}
//             />

//           </FormControl>
//           <FormControlLabel
//             control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: 'secondary.dark' }} />}
//             label={<Typography>مخالف</Typography>}
//           />
//         </Box>
//       ))}
//     </Box>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, Typography, Checkbox, FormControlLabel } from '@mui/material';
import MaskedInput from 'react-text-mask';
// import plate from '../../assets/images/pages/plate.png';

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
  width: '16.5rem',
  caretColor: 'transparent' // disable cursor
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
  '[': 'ج',
  ']': 'چ',
  '\\': 'ژ',
  ';': 'ک',
  "'": 'گ',
  ',': 'و'
};

const convertToPersian = (input, isShiftHeld) => {
  return input.replace(/[a-z[\]\\;',]/gi, (match) => {
    if (isShiftHeld && (match.toLowerCase() === 'd' || match.toLowerCase() === 's')) {
      return match.toUpperCase();
    } else if (match === 'D' || match === 'S') {
      return match; // Keep 'D' and 'S' as they are if previously typed with Shift
    } else {
      return charMap[match.toLowerCase()] || match;
    }
  });
};

export default function Cartag() {
  const [inputs, setInputs] = React.useState([{ value: '', cursorPosition: 0 }]);
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
    newInputs[index] = { value: convertedValue, cursorPosition: newPosition };

    if (index === newInputs.length - 1 && convertedValue.length > 0) {
      newInputs.push({ value: '', cursorPosition: 0 });
    }

    if (convertedValue === nullValue || (newInputs[1]?.value === '' && newInputs.length > 1 && index !== 0)) {
      newInputs.splice(index, 1);
    }

    setInputs(newInputs);
  };

  // Determine background color based on the presence of 'D' in the input value
  const getBackgroundColor = () => {
    const currentInput = inputs[0]?.value.trim();
    if ((currentInput && currentInput.includes('D')) || currentInput.includes('S')) {
      return 'skyblue';
    } else if (currentInput && currentInput.includes('ع')) {
      return 'yellow';
    }
    return 'white'; // Default background color
  };

  const styleMaskWithCondition = {
    ...styleMask,
    backgroundColor: getBackgroundColor() // Use dynamic style
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
              value={input.value}
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
          <FormControlLabel
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: 'secondary.dark' }} />}
            label={<Typography>مخالف</Typography>}
          />
        </Box>
      ))}
    </Box>
  );
}
