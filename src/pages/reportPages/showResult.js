import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function ShowResult() {
    // const theme = useTheme();
  return (
    <Stack direction="row-reverse" spacing={2}>
      <Button variant="contained" color="info" sx={{fontWeight: 'bold', fontSize: '0.9rem', borderRadius:'7px'}}>دریافت گزارش</Button>
      <span />
      <Button variant="contained" color="info" sx={{fontWeight: 'bold', fontSize: '0.9rem' , borderRadius:'7px'}}>نمایش گزارش</Button>
    </Stack>
  );
}
