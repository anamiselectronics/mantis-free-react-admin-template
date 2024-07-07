// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { FormControl, FormLabel, Typography } from '@mui/material';
// import MaskedInput from 'react-text-mask';
// import A from 'assets/images/pages/A.png';
// import D from 'assets/images/pages/D.png';
// import F from 'assets/images/pages/F.png';
// import S from 'assets/images/pages/S.png';
// import Sh from 'assets/images/pages/Sh.png';
// import general from 'assets/images/pages/general.png';
// import plate from '../../assets/images/pages/plate.png';

// const styleOuterBox = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginBottom: '10px'
// };

// const styleBox = {
//   height: '150px',
//   width: '350px',
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginBottom: '10px'
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
//   // caretColor: 'transparent'
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
//   C: 'ژ',
//   '[': 'ج',
//   ']': 'چ',
//   '\\': 'پ',
//   ';': 'ک',
//   "'": 'گ',
//   ',': 'و'
// };

// const shiftCharMap = {
//   C: 'ژ' // Shift+c
// };

// const persianNumbers = {
//   0: '۰',
//   1: '۱',
//   2: '۲',
//   3: '۳',
//   4: '۴',
//   5: '۵',
//   6: '۶',
//   7: '۷',
//   8: '۸',
//   9: '۹'
// };

// const convertToPersian = (input, isShiftHeld) => {
//   return input
//     .split('')
//     .map((char) => {
//       if (isShiftHeld && (char.toLowerCase() === 'd' || char.toLowerCase() === 's')) {
//         return char.toUpperCase();
//       } else if (isShiftHeld && shiftCharMap[char]) {
//         return shiftCharMap[char];
//       } else if (char === 'D' || char === 'S') {
//         return char;
//       } else if (charMap[char.toLowerCase()]) {
//         return charMap[char.toLowerCase()];
//       } else if (persianNumbers[char]) {
//         return persianNumbers[char];
//       } else {
//         return char;
//       }
//     })
//     .join('');
// };

// export default function Testt({value,onChange}) {
//   const maxInputs = 5; // Maximum number of inputs allowed
//   const [inputs, setInputs] = React.useState([{ value: value, cursorPosition: 0, backgroundImage: `url(${plate})` }]);
//   const [isShiftHeld, setIsShiftHeld] = React.useState(false);
//   const [isLastInputDisabled, setIsLastInputDisabled] = React.useState(false); // State to track if last input should be disabled
//   const inputRefs = React.useRef([]);

//   React.useEffect(() => {
//     inputRefs.current = Array(inputs.length)
//       .fill()
//       .map((_, i) => inputRefs.current[i] || React.createRef());
//   }, [inputs]);

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
//     const rawValue = e.target.value;
//     const newPosition = e.target.selectionStart;

//     console.log(`Raw Input Value: ${rawValue}`);
//     console.log(`Cursor Position Before Conversion: ${newPosition}`);

//     const convertedValue = convertToPersian(rawValue, isShiftHeld);
//     console.log(`Converted Value: ${convertedValue}`);

//     const newInputs = [...inputs];
//     newInputs[index] = {
//       ...newInputs[index],
//       value: convertedValue,
//       cursorPosition: newPosition,
//       backgroundImage: getBackgroundImage(convertedValue)
//     };
//     // Check if the limit is reached
//     if (newInputs.length === maxInputs - 1 && index === maxInputs - 1 && convertedValue.length > 0) {
//       console.log('Reached maximum inputs');
//       setIsLastInputDisabled(true); // Disable the last input
//       setInputs(newInputs); // Update state to reflect the message
//       return;
//     } else {
//       setIsLastInputDisabled(false); // Enable the last input if conditions are not met
//     }
//     // Check if a new input box needs to be added
//     if (index === newInputs.length - 1 && convertedValue.length > 0) {
//       if (newInputs.length < maxInputs) {
//         newInputs.push({ value: '', cursorPosition: 0, backgroundImage: `url(${plate})` });
//       } else {
//         console.log('Limit reached, disable input');
//         // Disable the last input
//         newInputs[index].disabled = true;
//       }
//     }

//     // Remove the input box if necessary
//     if (convertedValue === nullValue || (newInputs[1]?.value === '' && newInputs.length > 1 && index !== 0)) {
//       newInputs.splice(index, 1);
//     }

//     setInputs(newInputs);
//     // onChange(convertedValue);
//     onChange(newInputs.map((input) => input.value).join(' '));
//   };

//   const handleClickNextInput = (index) => {
//     if (index < inputs.length - 1) {
//       setInputs((prevInputs) =>
//         prevInputs.map((input, idx) => (idx === index + 1 ? { ...input, backgroundImage: getBackgroundImage(input.value) } : input))
//       );
//     }
//   };
// //dynamic backgroundImage according each char alphabet
//   const getBackgroundImage = (value) => {
//     value = value.trim();
//     if (value.includes('D')) {
//       return `url(${D})`;
//     } else if (value.includes('ع') || value.includes('ک') || value.includes('ت')) {
//       return `url(${general})`;
//     } else if (value.includes('ا')) {
//       return `url(${A})`;
//     } else if (value.includes('ش')) {
//       return `url(${Sh})`;
//     } else if (value.includes('ف') || value.includes('ز')) {
//       return `url(${F})`;
//     } else if (value.includes('ث') || value.includes('پ')) {
//       return `url(${S})`;
//     }
//     return `url(${plate})`; // Default background image
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
//                 /[۰-۹0-9]/,
//                 ' ',
//                 /[۰-۹0-9]/,
//                 ' ',
//                 ' ',
//                 /[ا-یa-zA-Z[\]\\;',]/,
//                 ' ',
//                 ' ',
//                 /[۰-۹0-9]/,
//                 ' ',
//                 /[۰-۹0-9]/,
//                 ' ',
//                 /[۰-۹0-9]/,
//                 ' ',
//                 ' ',
//                 ' ',
//                 ' ',
//                 /[۰-۹0-9]/,
//                 ' ',
//                 /[۰-۹0-9]/,
//                 ' ',
//                 ' ',
//                 ' '
//               ]}
//               style={{ ...styleMask, backgroundImage: input.backgroundImage, direction: 'ltr' }}
//               showMask
//               value={input.value}
//               onChange={(e) => handleInputChange(index, e)}
//               onClick={() => handleClickNextInput(index)}
//               inputRef={(inputElement) => {
//                 inputRefs.current[index] = inputElement;
//                 if (index === inputs.length - 1 && inputElement) {
//                   inputElement.selectionStart = input.cursorPosition;
//                   inputElement.selectionEnd = input.cursorPosition;
//                   inputElement.focus();
//                 }
//               }}
//               disabled={isLastInputDisabled && index === inputs.length - 1} //disable after create 5 input
//             />
//           </FormControl>
//         </Box>
//       ))}
//       {inputs.length === maxInputs && (
//         <Typography style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>Maximum inputs reached</Typography>
//       )}

//       {/* <Box>
//         {inputs.map((input, index) => (
//           <div key={index} style={{ direction: 'ltr' }}>
//             <p style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>{`Value: ${input.value}`}</p>
//             <Typography>{`Cursor Position: ${input.cursorPosition}`}</Typography>
//           </div>
//         ))}
//       </Box> */}
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, Typography } from '@mui/material';
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
  width: '16.5rem'
  // caretColor: 'transparent'
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

export default function Testt({ value, onChange }) {
  const maxInputs = 5; // Maximum number of inputs allowed
  const [plateNumbers, setPlateNumbers] = React.useState(value.split(' '));
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
    const nullValue = '_ _  _  _ _ _    _ _   ';
    const rawValue = e.target.value;
    const convertedValue = convertToPersian(rawValue, isShiftHeld);

    const newPlateNumbers = [...plateNumbers];
    newPlateNumbers[index] = convertedValue;

    // Remove empty plate numbers
    const filteredPlateNumbers = newPlateNumbers.filter((plate) => plate.trim() !== '');

    setPlateNumbers(filteredPlateNumbers);

    if (filteredPlateNumbers.length < maxInputs && !filteredPlateNumbers.includes('')) {
      filteredPlateNumbers.push('');
    }

    if (convertedValue === nullValue || (filteredPlateNumbers[1]?.value === '' && filteredPlateNumbers.length > 1 && index !== 0)) {
      filteredPlateNumbers.splice(index, 1);
    }
   
    onChange(filteredPlateNumbers.join('*'));
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
      {plateNumbers.map((plateNumber, index) => (
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
              style={{ ...styleMask, backgroundImage: getBackgroundImage(plateNumber), direction: 'ltr' }}
              showMask
              value={plateNumber}
              onChange={(e) => handleInputChange(index, e)}
            />
          </FormControl>
        </Box>
      ))}
      {plateNumbers.length === maxInputs && (
        <Typography style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>Reached maximum inputs</Typography>
      )}
    </Box>
  );
}
