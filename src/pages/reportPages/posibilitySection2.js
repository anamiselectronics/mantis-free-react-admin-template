import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { FormControl, FormHelperText, OutlinedInput, TextField, Divider } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import MaskedInput from 'react-text-mask';

export default function PosibilitySection2() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start" sx={{ marginRight: 0 }}>
              <TextField
                label="ایران"
                id="filled-hidden-label-small"
                defaultValue="84"
                variant="standard"
                size="small"
                inputProps={{ maxLength: 2 }}
                sx={{ alignItem: 'left', width: '40%' }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
            maxLength: 6
          }}
        />
        <MaskedInput
          guide={true}
          mask={[ ' ', /\d/, ' ', /\d/, ' ', ' ', /[ا-ی]/, ' ', ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ']}
          style={{ fontSize: '1.5rem' }}
          showMask
          autoFocus
          dir=""
        />
        <FormHelperText id="outlined-weight-helper-text">پلاک ملی</FormHelperText>
      </FormControl>
    </Box>
  );
}
