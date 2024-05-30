// import React,{useRef} from 'react';
// import Box from '@mui/material/Box';
// import { FormControl, FormLabel, FormControlLabel, Typography, Checkbox } from '@mui/material';

// import motorPlate from '../../assets/images/pages/motorPlate.png';

// const styleBox = {
//   height: '150px',
//   width: '350px',
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderRadius: '10px'
// };

// const styleTextarea = {
//   unicodeBidi: 'bidi-override',
//   fontSize: '1.5rem',
//   backgroundImage: `url(${motorPlate})`,
//   objectFit: 'fill',
//   backgroundSize: '102% 101%',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   minHeight: '8.5vh',
//   direction: 'ltr',
//   textAlign: 'center',
//   borderRadius: '5px',
//   border: '2px solid ',
//   paddingLeft: '3vw',
//   width: '16.5rem',
//   resize: 'none',
//   letterSpacing: '0.65em', // Adjust letter spacing to prevent overlap
//   overflow: 'hidden',
//   whiteSpace: 'pre' // Make sure whitespace is preserved
// };

// export default function MotorcycleTag() {
//   // State to hold input value
//   const [inputValue, setInputValue] = React.useState('');
//   const textareaRef = useRef(null); // Create a ref for the textarea element


//   const toPersianNumber = (number) => {
//     const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
//     return number.toString().replace(/[0-9]/g, (w) => persianDigits[+w]);
//   };

//   const handleKeyDown = (e) => {
//     if (/[0-9]/.test(e.key) && inputValue.length < 8) {
//       const updatedValue = inputValue + e.key;
//       const persianValue = toPersianNumber(updatedValue);
//       setInputValue(persianValue);
//       e.preventDefault(); // Prevent the default action of adding the character twice
//     } else if (e.key === 'Backspace') {
//       const updatedValue = inputValue.slice(0, -1);
//       setInputValue(updatedValue);
//       e.preventDefault(); // Prevent the default action of removing the character twice
//     } else {
//       e.preventDefault(); // Prevent any other key press
//     }
//   };

//   const formatValue = (value) => {
//     const firstLine = value.slice(0, 3).padEnd(3, '_');
//     const secondLine = value.slice(3, 8).padEnd(5, '_');
//     const formattedValue = firstLine + (secondLine ? '\n' + secondLine : '');
//     return formattedValue;
//   };
//   return (
//     <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleBox}>
//       <FormControl variant="outlined" style={{ width: '16rem' }}>
//         <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
//           پلاک موتور
//         </FormLabel>
//         <textarea
//            autoFocus
//            ref={textareaRef}
//           style={styleTextarea}
//           value={formatValue(inputValue)}
//           onKeyDown={handleKeyDown}
//           readOnly // Make it read-only to control the input manually
//         />
//       </FormControl>
//       <FormControlLabel
//         control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: 'secondary.dark' }} />}
//         label={<Typography>مخالف</Typography>}
//       />
//     </Box>
//   );
// }

import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, FormControlLabel, Typography, Checkbox } from '@mui/material';
import motorPlate from '../../assets/images/pages/motorPlate.png';

const styleBox = {
  height: '150px',
  width: '350px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  flexDirection: 'column',
  marginBottom: '10px'
};

const styleTextarea = {
  unicodeBidi: 'bidi-override',
  fontSize: '1.5rem',
  backgroundImage: `url(${motorPlate})`,
  objectFit: 'fill',
  backgroundSize: '102% 101%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '8.5vh',
  direction: 'ltr',
  textAlign: 'center',
  borderRadius: '5px',
  border: '2px solid ',
  paddingLeft: '3vw',
  width: '16.5rem',
  resize: 'none',
  letterSpacing: '0.65em', // Adjust letter spacing to prevent overlap
  overflow: 'hidden',
  whiteSpace: 'pre' // Make sure whitespace is preserved
};

export default function MotorcycleTag() {
  // State to hold input values
  const [inputs, setInputs] = React.useState(['']);
  const textareaRefs = useRef([]);

  const toPersianNumber = (number) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return number.toString().replace(/[0-9]/g, (w) => persianDigits[+w]);
  };

  const handleKeyDown = (index, e) => {
    if (/[0-9]/.test(e.key) && inputs[index].length < 8) {
      const updatedValue = inputs[index] + e.key;
      const persianValue = toPersianNumber(updatedValue);
      updateInput(index, persianValue);
      e.preventDefault(); // Prevent the default action of adding the character twice
    } else if (e.key === 'Backspace') {
      const updatedValue = inputs[index].slice(0, -1);
      updateInput(index, updatedValue);
      e.preventDefault(); // Prevent the default action of removing the character twice
    } else {
      e.preventDefault(); // Prevent any other key press
    }
  };

  const updateInput = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;

    // Remove input if it becomes empty and it's not the first input
    if (value === '' && newInputs.length > 1 && index !== 0) {
      newInputs.splice(index, 1);
      textareaRefs.current.splice(index, 1);
    }

    // Add a new input if this is the last input and it's not empty
    if (index === newInputs.length - 1 && value.length > 0) {
      newInputs.push('');
      textareaRefs.current.push(React.createRef());
    }

    setInputs(newInputs);
  };

  const formatValue = (value) => {
    const firstLine = value.slice(0, 3).padEnd(3, '_');
    const secondLine = value.slice(3, 8).padEnd(5, '_');
    const formattedValue = firstLine + (secondLine ? '\n' + secondLine : '');
    return formattedValue;
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={styleBox}>
      {inputs.map((input, index) => (
        <FormControl key={index} variant="outlined" style={{ width: '16rem' }}>
          <FormLabel component="legend" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
            پلاک موتور
          </FormLabel>
          <textarea
            ref={el => textareaRefs.current[index] = el}
            style={styleTextarea}
            value={formatValue(input)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            readOnly // Make it read-only to control the input manually
          />
          <FormControlLabel
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, color: 'secondary.dark' }} />}
            label={<Typography>مخالف</Typography>}
          />
        </FormControl>
      ))}
    </Box>
  );
}

