import React from 'react';
import { Box, FormGroup, Typography, Divider, Grid, Checkbox, FormControlLabel, useMediaQuery } from '@mui/material';
import AddCamera from './addCamera';
import useTheme from '../../../node_modules/@mui/system/useTheme';

const styleForm = {
  justifyContent: 'space-around'
};

const styleBox = {
  height: 'fit-content',
  borderRadius: '10px',
  border: '2px solid #f7f7f8',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
  padding: '16px',
  boxSizing: 'border-box'
};

const style = {
  border: '2px solid secondary.lighter',
  width: '350px'
};

const BoxStyle = (theme) => ({
  // display: 'flex',
  // flexDirection: 'row',
  border: '2px solid',
  borderColor: theme.palette.primary[200],
  borderRadius: '10px',
  bgcolor: theme.palette.primary[200],
  boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
  '&:hover': {
    bgcolor: 'primary.200'
  }
});

function Camera() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ flexGrow: 1 }} xs={12}>
      <Grid xs={12} spacing={2} j>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              minwidth: { xs: 'auto', sm: 'auto' },
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'baseline',
              flexDirection: isSmallScreen ? 'column' : 'row',
              my: 4,
              gap: 2,
              p: 2,
              ...BoxStyle(theme)
            }}
          >
            <FormGroup row variant="h2" color="secondary.600" style={{ marginTop: '-20px' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                label={<Typography>انتخاب تمامی لوکیشن ها</Typography>}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                label={<Typography> انتخاب تمامی دوربین ها </Typography>}
              />
            </FormGroup>
            <FormGroup row spacing={5} style={styleForm}>
              {/* adjust type of plate's car selection  */}
              <Box contanier my={2} gap={4} p={2} sx={styleBox}>
                <Typography variant="h5" color="secondary.600">
                  نام محل
                </Typography>
                <Divider sx={style} />
                <FormGroup row variant="h2" color="secondary.600" style={{ marginTop: '-20px' }}>
                  <AddCamera />
                </FormGroup>
              </Box>
            </FormGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Camera;
