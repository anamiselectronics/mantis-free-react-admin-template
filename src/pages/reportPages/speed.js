import React from 'react';
import { Box, Grid, Slider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Style
const BoxStyle = (theme) => ({
  border: '2px solid',
  borderColor: theme.palette.primary[200],
  borderRadius: '10px',
  bgcolor: theme.palette.primary[200],
  boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
  '&:hover': {
    bgcolor: 'primary.200'
  }
});

// add array of value for the slider
const MAX = 250;
const MIN = 0;
const marks = [
  {
    value: MAX,
    label: 'km/h 250'
  },
  {
    value: 200,
    label: 'km/h 200'
  },
  {
    value: 150,
    label: 'km/h 150'
  },
  {
    value: 120,
    label: 'km/h 120'
  },
  {
    value: 60,
    label: 'km/h 60'
  },
  {
    value: 20,
    label: 'km/h 20'
  },
  {
    value: MIN,
    label: 'km/h 0'
  }
];

function valuetext(value) {
  return `${value}km/h`;
}

function Speed() {
  const theme = useTheme();
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
              ...BoxStyle(theme)
            }}
          >
            {/* use slider to select the speed */}
            <Typography varient="h5">
              حداقل سرعت : 0 <hr style={{ border: 'none' }} />
              حداکثر سرعت : 250
            </Typography>
            <Box sx={{ width: 850 }}>
              <Slider
                aria-label="Restricted values"
                defaultValue={20}
                getAriaValueText={valuetext}
                step={10}
                min={MIN}
                max={MAX}
                marks={marks}
                valueLabelDisplay="on"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Speed;
