import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, Typography, Checkbox, FormControlLabel } from '@mui/material';
import MaskedInput from 'react-text-mask';
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
  width: '16.5rem'
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

const convertToPersian = (input, cursorPosition) => {
  const convertedValue = input.replace(/[a-z[\]\\;',]/gi, (match) => charMap[match.toLowerCase()] || match);
  const newPosition = cursorPosition + (convertedValue.length - input.length);
  return { value: convertedValue, position: newPosition };
};

export default function Cartag() {
  const [inputs, setInputs] = React.useState([{ value: '', cursorPosition: 0 }]);
  const [isShiftHeld, setIsShiftHeld] = React.useState(false);
  const [shiftHeldAtStart, setShiftHeldAtStart] = React.useState(false);
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

  // const handleInputChange = (index, e) => {
  //   const nullValue = '_ _  _  _ _ _    _ _   ';
  //   const newPosition = e.target.selectionStart;
  //   // const inputChar = e.nativeEvent.data;

  //   // let converted;
  //   // if (isShiftHeld && (inputChar.toUpperCase() == 'S' || inputChar.toUpperCase() == 'D')) {
  //   //   // Leave 'S' and 'D' as they are
  //   //   console.log('S D Case');
  //   //   converted = { value: e.target.value, position: newPosition };
  //   //   // setInputs ([...inputs])
  //   //   console.log('Converted: ', converted);
  //   //   console.log('Data: ', e.nativeEvent.data);
  //   //   console.log('position', newPosition)
  //   // } else if (!isShiftHeld) {
  //   //   // Convert to Persian
  //   //   console.log('position', newPosition)
  //   //   console.log('S D Case persian');
  //   //   converted = convertToPersian(e.target.value, newPosition);
  //   // }
  //   let converted;
  //   if (isShiftHeld) {
  //     // Stay in shift mode, don't convert to Persian
  //     converted = { value: e.target.value, position: newPosition };
  //   } else {
  //     // Convert to Persian
  //     converted = convertToPersian(e.target.value, newPosition);
  //   }

  //   const newInputs = [...inputs];
  //   newInputs[index] = { value: converted.value, cursorPosition: converted.position };

  //   // Add a new input if this is the last input and it's not empty
  //   if (index === newInputs.length - 1 && converted.value.length > 0) {
  //     newInputs.push({ value: '', cursorPosition: 0 });
  //   }

  //   // Remove the input if its value becomes empty and it's not the initial input
  //   if (converted.value === nullValue || (newInputs[1]?.value === '' && newInputs.length > 1 && index !== 0)) {
  //     newInputs.splice(index, 1);
  //   }

  //   setInputs(newInputs);
  //   console.log('NewInput: ', newInputs);
  // };
  const handleInputChange = (index, e) => {
    const nullValue = '_ _  _  _ _ _    _ _   ';
    const newPosition = e.target.selectionStart;
    let converted;

    // Check if Shift was held at the start of the input
    if (!shiftHeldAtStart) {
      setShiftHeldAtStart(isShiftHeld);
    }

    if (shiftHeldAtStart || isShiftHeld) {
      // Stay in shift mode, don't convert to Persian
      converted = { value: e.target.value, position: newPosition };
    } else {
      // Convert to Persian
      converted = convertToPersian(e.target.value, newPosition);
    }

    const newInputs = [...inputs];
    newInputs[index] = { value: converted.value, cursorPosition: converted.position };

    // Add a new input if this is the last input and it's not empty
    if (index === newInputs.length - 1 && converted.value.length > 0) {
      newInputs.push({ value: '', cursorPosition: 0 });
      setShiftHeldAtStart(false); // Reset shiftHeldAtStart when a new input is added
    }

    // Remove the input if its value becomes empty and it's not the initial input
    if (converted.value === nullValue || (newInputs[1]?.value === '' && newInputs.length > 1 && index !== 0)) {
      newInputs.splice(index, 1);
    }

    setInputs(newInputs);
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
              style={styleMask}
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
//   width: '16.5rem'
// };

// const convertToPersian = (input, cursorPosition) => {
//   const charMap = {
//     a: 'ش',
//     b: 'ذ',
//     c: 'ز',
//     d: 'ی',
//     q: 'ض',
//     w: 'ص',
//     e: 'ث',
//     r: 'ق',
//     t: 'ف',
//     y: 'غ',
//     u: 'ع',
//     i: 'ه',
//     o: 'خ',
//     p: 'ح',
//     s: 'س',
//     f: 'ب',
//     g: 'ل',
//     h: 'ا',
//     j: 'ت',
//     k: 'ن',
//     l: 'م',
//     z: 'ظ',
//     x: 'ط',
//     v: 'ر',
//     n: 'د',
//     m: 'ئ',
//     '[': 'ج',
//     ']': 'چ',
//     '\\': 'ژ',
//     ';': 'ک',
//     "'": 'گ',
//     ',': 'و'
//   };
//   const convertedValue = input.replace(/[a-z[\]\\;',]/gi, (match) => charMap[match.toLowerCase()] || match);
//   const newPosition = cursorPosition + (convertedValue.length - input.length);
//   return { value: convertedValue, position: newPosition };
// };

// export default function Cartag() {
//   const [inputs, setInputs] = React.useState([{ value: '', cursorPosition: 0 }]);
//   const inputRefs = React.useRef([]);

//   const handleInputChange = (index, e) => {
//     const nullValue = '_ _  _  _ _ _    _ _   ';
//     const newPosition = e.target.selectionStart;
//     const converted = convertToPersian(e.target.value, newPosition);
//     const newInputs = [...inputs];
//     newInputs[index] = { value: converted.value, cursorPosition: converted.position };
//     console.log('Current inputs:', newInputs); // Log current inputs

//     // Add a new input if this is the last input and it's not empty
//     if (index === newInputs.length - 1 && converted.value.length > 0) {
//       console.log('Before add:', newInputs);
//       newInputs.push({ value: '', cursorPosition: 0 });
//       console.log('After add:', newInputs);
//     }
//     // Remove the input if its value becomes empty and it's not the initial input
//     console.log('ConvertedValue:', converted.value);
//     console.log('NewInputsLenth:', newInputs.length);
//     console.log('Index:', index);

//     if (converted.value == nullValue || (newInputs[1].value == '' && newInputs.length > 1 && index !== 0)) {
//       console.log('Before remove:', newInputs);
//       newInputs.splice(index, 1);
//       console.log('After remove:', newInputs);
//       setInputs(newInputs); // Update state after removing the input
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
//                 /[ا-یa-z[\]\\;',]/,
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
