import React from 'react';
import { Box, Grid, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function Direction() {
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
              bgcolor: '#007fff',
              boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
              '&:hover': {
                bgcolor: 'primary.200'
              }
            }}
          >
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="پایین به بالا" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="بالا به پایین" />
            </FormGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Direction;
