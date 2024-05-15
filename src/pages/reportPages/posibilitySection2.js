import * as React from 'react';
import Box from '@mui/material/Box';
// import InputAdornment from '@mui/material/InputAdornment';
import { FormControl, Grid } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';

import MaskedInput from 'react-text-mask';
import plate from '../../assets/images/pages/plate.png';

export default function PosibilitySection2() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Grid item xs={6} sm={6}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <MaskedInput
            guide={true}
            mask={[
              ' ',
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
              /\d/,
              ' ',
              ' ',
              /[ا-یA-Z]/,
              ' ',
              ' ',
              /\d/,
              ' ',
              /\d/,
              ' ',
              ' '
            ]}
            style={{
              fontSize: '1.5rem',
              backgroundImage: `url(${plate})`,
              objectFit: 'fill',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              minHeight: '9vh',
              minWidth: '20vw',
              direction: 'rtl',
              textAlign: 'right',
              paddingRight: '6px',
              marginRight: '8vw'
            }}
            showMask
            autoFocus
          />
        </FormControl>
      </Grid>
      {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          // endAdornment={
          //   <InputAdornment position="end">
          //     <AccountCircle />
          //   </InputAdornment>
          // }
          startAdornment={
            <InputAdornment position="start" sx={{ marginRight: 0 }}>
              <TextField
                label="ایران"
                id="filled-hidden-label-small"
                defaultValue="84"
                variant="standard"
                size="small"
                inputProps={{ maxLength: 2 }}
                sx={{ alignItem: 'center', width: '40%' }}
                inputComponent={MaskedInput}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
            maxLength: 6
          }}
          sx={{ backgroundImage: `url(${plate})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        />

        <FormHelperText id="outlined-weight-helper-text">پلاک ملی</FormHelperText>
      </FormControl> */}
    </Box>
  );
}
