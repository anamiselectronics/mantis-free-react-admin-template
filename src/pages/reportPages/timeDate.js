import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//IMPORT DATEPIKER
import DatePicker from './datePicker';

function TimeDate() {
  return (
    <Box sx={{ flexGrow: 1 }} xs={12}>
      <Grid xs={12} spacing={2} justifyContent="space-around" alignItems="center" disableEqualOverflow="true">
        <Grid item xs={12} sm={6} disableEqualOverflow="true">
          <Box
            item
            xs={12}
            sm={6}
            height={250}
            my={4}
            display="grid"
            alignItems="center"
            gap={2}
            p={2}
            sx={{
              border: '2px solid',
              borderColor: 'primary.200',
              borderRadius: '10px',
              bgcolor: 'primary.200',
              boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
              '&:hover': {
                bgcolor: 'primary.200'
              }
            }}
          >
            <DatePicker />
          </Box>
        </Grid>
        {/* <Grid item xs={12} sm={6} disableEqualOverflow="true">
          <Box
            item
            xs={12}
            sm={6}
            height={250}
            my={4}
            display="grid"
            alignItems="center"
            gap={2}
            p={2}
            sx={{
              border: '2px solid',
              borderColor: 'primary.200',
              borderRadius: '10px',
              bgcolor: 'primary.200',
              boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
              '&:hover': {
                bgcolor: 'primary.200'
              }
            }}
          ></Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default TimeDate;
