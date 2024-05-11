import * as React from 'react';

//DatePicker
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalaliV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

//Theme
import useTheme from '@mui/system/useTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

//----------------- DatePicker Selection ----------------------//

export default function DatePicker() {
  const existingTheme = useTheme();
  const theme = React.useMemo(() => createTheme({ direction: 'rtl' }, existingTheme), [existingTheme]);

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DateTimePicker label="" defaultValue={new Date(2022, 1, 1)} sx={{border:'1px solid #f5f5f5' , borderRadius:'5px'}} />
          <span style={{ marginLeft: '10px' }} />
          <Typography variant="h5" color="secondary.600">انتخاب تاریخ و زمان شروع</Typography>
        </LocalizationProvider>
      </div>
      <div dir="rtl" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DateTimePicker label="" defaultValue={new Date(2022, 1, 1)} sx={{border:'1px solid #f5f5f5' , borderRadius:'5px'}}/>
          <span style={{ marginLeft: '10px' }} />
          <Typography variant="h5" color="secondary.600">انتخاب تاریخ و زمان پایان</Typography>
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
