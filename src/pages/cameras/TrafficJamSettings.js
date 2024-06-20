// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Typography, Box, Button, Checkbox, FormControlLabel, Select, MenuItem, TextField, FormControl, InputLabel } from '@mui/material';

// // const formBoxStyle = {
// //   borderRadius: '10px',
// //   border: '3px solid #69B1FF',
// //   boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
// //   marginTop: '10px',
// //   backgroundColor: '#fff',
// //   padding: '20px',
// //   fontSize: '0.70rem',
// //   height: '99%'
// // };

// // const legendStyle = {
// //   textAlign: 'right',
// //   color: '#fff',
// //   fontSize: '1rem',
// //   backgroundColor: '#1890ff',
// //   borderRadius: '5px',
// //   padding: '5px',
// //   marginRight: '5px'
// // };

// // const TrafficJamSetting = () => {
// //   const numberOfCheckboxes = 4;

// //   const initialCheckedState = Array.from({ length: numberOfCheckboxes }, (_, index) => index === 0);
// //   const initialSelectValues = Array.from({ length: numberOfCheckboxes }, () => 'option1');

// //   const [parentChecked, setParentChecked] = useState(false);
// //   const [checked, setChecked] = useState(initialCheckedState);
// //   const [selectValues, setSelectValues] = useState(initialSelectValues);

// //   const navigate = useNavigate();

// //   const handleParentChange = (event) => {
// //     const isChecked = event.target.checked;
// //     setChecked(new Array(numberOfCheckboxes).fill(isChecked));
// //     setSelectValues(new Array(numberOfCheckboxes).fill(isChecked ? 'option1' : 'option2'));
// //     setParentChecked(isChecked);
// //   };

// //   const handleChildChange = (index) => (event) => {
// //     const newChecked = [...checked];
// //     const newSelectValues = [...selectValues];

// //     newChecked[index] = event.target.checked;
// //     newSelectValues[index] = event.target.checked ? 'option1' : 'option2';

// //     setChecked(newChecked);
// //     setSelectValues(newSelectValues);
// //     setParentChecked(newChecked.every((value) => value));
// //   };

// //   const children = Array.from({ length: numberOfCheckboxes }, (_, index) => (
// //     <FormControlLabel
// //       key={index}
// //       control={
// //         <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
// //           <Checkbox checked={checked[index]} onChange={handleChildChange(index)} />
// //           <Typography size={'15px'} color={'#9B9595'}>{`رله ${index + 1}`}</Typography>
// //           <FormControl sx={{ m: 1, minWidth: 165 }} size="small">
// //             <InputLabel id={`select-label-${index}`}>وضعیت</InputLabel>
// //             <Select
// //               labelId={`select-label-${index}`}
// //               id={`select-${index}`}
// //               value={selectValues[index]}
// //               onChange={(event) => {
// //                 const newSelectValues = [...selectValues];
// //                 newSelectValues[index] = event.target.value;
// //                 setSelectValues(newSelectValues);
// //               }}
// //               label="وضعیت"
// //             >
// //               <MenuItem value="option1">مجاز</MenuItem>
// //               <MenuItem value="option2">غیرمجاز</MenuItem>
// //             </Select>
// //           </FormControl>
// //         </Box>
// //       }
// //       label=""
// //     />
// //   ));

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Handle form submission logic here
// //   };

// //   return (
// //     <fieldset style={formBoxStyle}>
// //       <legend style={legendStyle}>تنظیم کردن راهبند</legend>
// //       <form onSubmit={handleSubmit}>
// //         <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap',gap: '20px' }}>
// //           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '-40px', width: '100%' }}>
// //             <FormControlLabel
// //               sx={{ mr: -10 }}
// //               label="فعال سازی"
// //               control={
// //                 <Checkbox
// //                   checked={parentChecked}
// //                   indeterminate={checked.some((value) => value) && !checked.every((value) => value)}
// //                   onChange={handleParentChange}
// //                 />
// //               }
// //             />
// //             <Box sx={{ display: 'flex', flexDirection: 'column', ml: 0 }}>{children}</Box>
// //           </Box>
// //           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
// //             {Array.from({ length: numberOfCheckboxes }).map((_, index) => (
// //               <Box key={index} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2 }}>
// //                 <label htmlFor={`filled-hidden-label-small-${index}`}>مدت وصل : ms</label>
// //                 <TextField
// //                   hiddenLabel
// //                   id={`filled-hidden-label-small-${index}`}
// //                   defaultValue="0"
// //                   variant="outlined"
// //                   size="small"
// //                   sx={{ marginRight: '10px', minWidth: 145 }}
// //                 />
// //               </Box>
// //             ))}
// //           </Box>
// //         </Box>
// //         <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
// //           <Button type="submit" variant="contained" color="primary">
// //             ثبت
// //           </Button>
// //           <Button type="button" variant="contained" color="primary" onClick={() => navigate(-1)}>
// //             بازگشت
// //           </Button>
// //         </Box>
// //       </form>
// //     </fieldset>
// //   );
// // };

// // export default TrafficJamSetting;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Typography, Box, Button, Checkbox, FormControlLabel, Select, MenuItem, TextField, FormControl, InputLabel } from '@mui/material';

// const formBoxStyle = {
//   borderRadius: '10px',
//   border: '1px solid #d3d3d3',
//   boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
//   marginTop: '10px',
//   backgroundColor: '#fff',
//   padding: '20px',
//   fontSize: '0.70rem',
//   height: '99%'
// };

// const legendStyle = {
//   textAlign: 'right',
//   color: '#fff',
//   fontSize: '0.9rem',
//   backgroundColor: '#1890ff',
//   borderRadius: '5px',
//   padding: '5px',
//   marginRight: '5px'
// };

// const TrafficJamSetting = () => {
//   const numberOfCheckboxes = 4;

//   const initialCheckedState = Array.from({ length: numberOfCheckboxes }, (_, index) => index === 0);
//   const initialSelectValues = Array.from({ length: numberOfCheckboxes }, () => 'option1');

//   const [parentChecked, setParentChecked] = useState(false);
//   const [checked, setChecked] = useState(initialCheckedState);
//   const [selectValues, setSelectValues] = useState(initialSelectValues);

//   const navigate = useNavigate();

//   const handleParentChange = (event) => {
//     const isChecked = event.target.checked;
//     setChecked(new Array(numberOfCheckboxes).fill(isChecked));
//     setSelectValues(new Array(numberOfCheckboxes).fill(isChecked ? 'option1' : 'option2'));
//     setParentChecked(isChecked);
//   };

//   const handleChildChange = (index) => (event) => {
//     const newChecked = [...checked];
//     const newSelectValues = [...selectValues];

//     newChecked[index] = event.target.checked;
//     newSelectValues[index] = event.target.checked ? 'option1' : 'option2';

//     setChecked(newChecked);
//     setSelectValues(newSelectValues);
//     setParentChecked(newChecked.every((value) => value));
//   };

//   const children = Array.from({ length: numberOfCheckboxes }, (_, index) => (
//     <FormControlLabel
//       key={index}
//       control={
//         <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
//           <Checkbox checked={checked[index]} onChange={handleChildChange(index)} />
//           <Typography size={'15px'} color={'#9B9595'}>{`رله ${index + 1}`}</Typography>
//           <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
//             <InputLabel id={`select-label-${index}`}>وضعیت</InputLabel>
//             <Select
//               labelId={`select-label-${index}`}
//               id={`select-${index}`}
//               value={selectValues[index]}
//               onChange={(event) => {
//                 const newSelectValues = [...selectValues];
//                 newSelectValues[index] = event.target.value;
//                 setSelectValues(newSelectValues);
//               }}
//               label="وضعیت"
//             >
//               <MenuItem value="option1">مجاز</MenuItem>
//               <MenuItem value="option2">غیرمجاز</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//       }
//       label=""
//     />
//   ));

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <fieldset style={formBoxStyle}>
//       <legend style={legendStyle}>تنظیم کردن راهبند</legend>
//       <form onSubmit={handleSubmit}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItem:'center'}}>
//           <Box sx={{mb:2}}>
//             <FormControlLabel
//               label="فعال سازی"
//               control={
//                 <Checkbox
//                 sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 3 }}
//                   checked={parentChecked}
//                   indeterminate={checked.some((value) => value) && !checked.every((value) => value)}
//                   onChange={handleParentChange}
//                 />
//               }
//             />
//             <Box sx={{ display: 'flex', flexDirection: 'column', ml: 0 }}>{children}</Box>
//           </Box>
//           <Box>
//             {Array.from({ length: numberOfCheckboxes }).map((_, index) => (
//               <Box key={index} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 3 }}>
//                 <label htmlFor={`filled-hidden-label-small-${index}`}>مدت وصل : ms</label>
//                 <TextField
//                   hiddenLabel
//                   id={`filled-hidden-label-small-${index}`}
//                   defaultValue="0"
//                   variant="outlined"
//                   size="small"
//                   sx={{ mr: 2, minWidth: 150 }}
//                 />
//               </Box>
//             ))}
//           </Box>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:24 }}>
//             <Button type="submit" variant="contained" color="primary">
//               ثبت
//             </Button>
//             <Button type="button" variant="contained" color="primary" onClick={() => navigate(-1)}>
//               بازگشت
//             </Button>
//           </Box>
       
//       </form>
//     </fieldset>
//   );
// };

// export default TrafficJamSetting;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Checkbox, FormControlLabel, Select, MenuItem, TextField, FormControl, InputLabel } from '@mui/material';

const formBoxStyle = {
  borderRadius: '10px',
  border: '1px solid #d3d3d3',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
  marginTop: '10px',
  backgroundColor: '#fff',
  padding: '20px',
  fontSize: '0.70rem',
  display: 'flex',
  flexDirection: 'column',
  height: '120vh'
};

const legendStyle = {
  textAlign: 'right',
  color: '#fff',
  fontSize: '0.9rem',
  backgroundColor: '#1890ff',
  borderRadius: '5px',
  padding: '5px',
  marginRight: '5px'
};

const TrafficJamSetting = () => {
  const numberOfCheckboxes = 4;

  const initialCheckedState = Array.from({ length: numberOfCheckboxes }, (_, index) => index === 0);
  const initialSelectValues = Array.from({ length: numberOfCheckboxes }, () => 'option1');

  const [parentChecked, setParentChecked] = useState(false);
  const [checked, setChecked] = useState(initialCheckedState);
  const [selectValues, setSelectValues] = useState(initialSelectValues);

  const navigate = useNavigate();

  const handleParentChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(new Array(numberOfCheckboxes).fill(isChecked));
    setSelectValues(new Array(numberOfCheckboxes).fill(isChecked ? 'option1' : 'option2'));
    setParentChecked(isChecked);
  };

  const handleChildChange = (index) => (event) => {
    const newChecked = [...checked];
    const newSelectValues = [...selectValues];

    newChecked[index] = event.target.checked;
    newSelectValues[index] = event.target.checked ? 'option1' : 'option2';

    setChecked(newChecked);
    setSelectValues(newSelectValues);
    setParentChecked(newChecked.every((value) => value));
  };

  const children = Array.from({ length: numberOfCheckboxes }, (_, index) => (
    <FormControlLabel
      key={index}
      control={
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Checkbox checked={checked[index]} onChange={handleChildChange(index)} />
          <Typography size={'15px'} color={'#9B9595'}>{`رله ${index + 1}`}</Typography>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id={`select-label-${index}`}>وضعیت</InputLabel>
            <Select
              labelId={`select-label-${index}`}
              id={`select-${index}`}
              value={selectValues[index]}
              onChange={(event) => {
                const newSelectValues = [...selectValues];
                newSelectValues[index] = event.target.value;
                setSelectValues(newSelectValues);
              }}
              label="وضعیت"
            >
              <MenuItem value="option1">مجاز</MenuItem>
              <MenuItem value="option2">غیرمجاز</MenuItem>
            </Select>
          </FormControl>
        </Box>
      }
      label=""
    />
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <fieldset style={formBoxStyle}>
      <legend style={legendStyle}>تنظیم کردن راهبند</legend>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{mb:2}}>
            <FormControlLabel
              label="فعال سازی"
              control={
                <Checkbox
                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 3 }}
                  checked={parentChecked}
                  indeterminate={checked.some((value) => value) && !checked.every((value) => value)}
                  onChange={handleParentChange}
                />
              }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 0 }}>{children}</Box>
          </Box>
          <Box>
            {Array.from({ length: numberOfCheckboxes }).map((_, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 3 }}>
                <label htmlFor={`filled-hidden-label-small-${index}`}>مدت وصل : ms</label>
                <TextField
                  hiddenLabel
                  id={`filled-hidden-label-small-${index}`}
                  defaultValue="0"
                  variant="outlined"
                  size="small"
                  sx={{ mr: 2, minWidth: 150 }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
          <Button type="submit" variant="contained" color="primary">
            ثبت
          </Button>
          <Button type="button" variant="contained" color="primary" onClick={() => navigate(-1)}>
            بازگشت
          </Button>
        </Box>
      </form>
    </fieldset>
  );
};

export default TrafficJamSetting;
