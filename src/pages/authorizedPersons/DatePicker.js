// import * as React from 'react';

// // DatePicker and TimePicker
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalaliV3';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker, TimePicker } from '@mui/x-date-pickers';

// // Theme
// import useTheme from '@mui/system/useTheme';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

// //----------------- DatePicker Selection ----------------------//

// export default function DatePickerComponent() {
//   const [startDate, setStartDate] = React.useState(new Date());
//   const [startTime, setStartTime] = React.useState(new Date());
//   const [endDate, setEndDate] = React.useState(new Date());
//   const [endTime, setEndTime] = React.useState(new Date());
//   const [startDateLimit, setStartDateLimit] = React.useState('limit');
//   //   const [startTimeLimit, setStartTimeLimit] = React.useState('limit');
//   //   const [endDateLimit, setEndDateLimit] = React.useState('limit');
//   //   const [endTimeLimit, setEndTimeLimit] = React.useState('limit');
//   const existingTheme = useTheme();
//   const theme = React.useMemo(() => createTheme({ direction: 'rtl' }, existingTheme), [existingTheme]);

//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//     console.log('Start Date:', date);
//   };

//   const handleStartTimeChange = (time) => {
//     setStartTime(time);
//     console.log('Start Time:', time);
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//     console.log('End Date:', date);
//   };

//   const handleEndTimeChange = (time) => {
//     setEndTime(time);
//     console.log('End Time:', time);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <div
//         dir="rtl"
//         style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}
//       >
//         <Typography>نوع مجوز</Typography>
//         <RadioGroup column value={startDateLimit} onChange={(e) => setStartDateLimit(e.target.value)}>
//           <FormControlLabel value="limit" control={<Radio />} label="نا محدود" />
//           <FormControlLabel value="withoutLimit" control={<Radio />} label="محدود" />
//         </RadioGroup>
//         <div>
//           <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
//             <DatePicker
//               label="تاریخ شروع"
//               value={startDate}
//               onChange={handleStartDateChange}
//               sx={{ border: '1px solid #f5f5f5', borderRadius: '5px', marginRight: '10px' }}
//             />
//             <DatePicker
//               label="تاریخ پایان"
//               value={endDate}
//               onChange={handleEndDateChange}
//               sx={{ border: '1px solid #f5f5f5', borderRadius: '5px', marginRight: '10px' }}
//             />

//             <Typography variant="h5" color="secondary.600" style={{ marginRight: '10px' }}>
//               از
//             </Typography>
//           </LocalizationProvider>
//         </div>
//       </div>
//       <div dir="rtl" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
//         <Typography>محدودیت روزانه</Typography>
//         <RadioGroup column value={startDateLimit} onChange={(e) => setStartDateLimit(e.target.value)}>
//           <FormControlLabel value="limit" control={<Radio />} label="ندارد" />
//           <FormControlLabel value="withoutLimit" control={<Radio />} label="دارد" />
//         </RadioGroup>
//         <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
//           <TimePicker
//             label="زمان شروع"
//             value={startTime}
//             onChange={handleStartTimeChange}
//             sx={{ border: '1px solid #f5f5f5', borderRadius: '5px' }}
//           />
//           <TimePicker
//             label="زمان پایان"
//             value={endTime}
//             onChange={handleEndTimeChange}
//             sx={{ border: '1px solid #f5f5f5', borderRadius: '5px' }}
//           />
//           <Typography variant="h5" color="secondary.600" style={{ marginRight: '10px' }}>
//             تا
//           </Typography>
//         </LocalizationProvider>
//       </div>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';

// DatePicker and TimePicker
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalaliV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

// Theme
import useTheme from '@mui/system/useTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

//----------------- DatePicker Selection ----------------------//

export default function DatePickerComponent() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());
  const [startDateLimit, setStartDateLimit] = React.useState('limit');
  const [dailyLimit, setDailyLimit] = React.useState('limit');

  const existingTheme = useTheme();
  const theme = React.useMemo(() => createTheme({ direction: 'rtl' }, existingTheme), [existingTheme]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    console.log('Start Date:', date);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
    console.log('Start Time:', time);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    console.log('End Date:', date);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
    console.log('End Time:', time);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        dir="rtl"
        sx={{
          display: 'flex',
          justifyContent: 'right',
          flexDirection: 'row',
          alignItems: 'start',
          marginBottom: '10px',
          marginRight: '5px',
          gap: 4
        }}
      >
        <Box>
          <Typography>نوع مجوز</Typography>

          <RadioGroup column value={startDateLimit} onChange={(e) => setStartDateLimit(e.target.value)}>
            <FormControlLabel value="limit" control={<Radio />} label="نا محدود" />
            <FormControlLabel value="withoutLimit" control={<Radio />} label="محدود" />
          </RadioGroup>

          {startDateLimit === 'withoutLimit' && (
            <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
              <DatePicker
                label="تاریخ شروع"
                value={startDate}
                onChange={handleStartDateChange}
                sx={{ border: '1px solid #f5f5f5', borderRadius: '5px', marginRight: '10px' }}
              />
              <DatePicker
                label="تاریخ پایان"
                value={endDate}
                onChange={handleEndDateChange}
                sx={{ border: '1px solid #f5f5f5', borderRadius: '5px', marginRight: '10px' }}
              />
            </LocalizationProvider>
          )}
        </Box>
        <Box>
          <Typography>محدودیت روزانه</Typography>

          <RadioGroup column value={dailyLimit} onChange={(e) => setDailyLimit(e.target.value)}>
            <FormControlLabel value="limit" control={<Radio />} label="ندارد" />
            <FormControlLabel value="withoutLimit" control={<Radio />} label="دارد" />
          </RadioGroup>

          {dailyLimit === 'withoutLimit' && (
            <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
              <TimePicker
                label="زمان شروع"
                value={startTime}
                onChange={handleStartTimeChange}
                sx={{ border: '1px solid #f5f5f5', borderRadius: '5px' }}
              />
              <TimePicker
                label="زمان پایان"
                value={endTime}
                onChange={handleEndTimeChange}
                sx={{ border: '1px solid #f5f5f5', borderRadius: '5px' }}
              />
            </LocalizationProvider>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
