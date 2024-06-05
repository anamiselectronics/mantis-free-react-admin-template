import React from 'react';
import { Box, FormGroup, Typography, Divider, Grid, Checkbox, FormControlLabel, useMediaQuery } from '@mui/material';
import AddCamera from './addCamera';
import useTheme from '../../../node_modules/@mui/system/useTheme';
import ScrollToTop from './scrollToTop';

const styleForm = {
  justifyContent: 'space-around'
};

const styleBox = {
  height: 'fit-content',
  borderRadius: '10px',
  border: '2px solid #f7f7f8',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
  padding: '16px',
  marginRight: '15px',
  width: 'min-content'
};

const style = {
  border: '2px solid secondary.lighter',
  width: '350px'
};

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

function Camera() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ flexGrow: 1 }} xs={12}>
      <Grid item xs={12}>
        <Grid item xs={12} sm={6}>
        <ScrollToTop />
          <Box
            sx={{
              minwidth: { xs: 'auto', sm: 'auto' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: isSmallScreen ? 'flex-start' : 'baseline',
              flexDirection: isSmallScreen ? 'column' : 'row',
              my: 4,
              gap: 2,
              p: 2,
              ...BoxStyle(theme)
            }}
          >
            <FormGroup variant="h2" style={{ marginTop: '-10px', textAlign: 'center', marginLeft: '5px' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                label={<Typography color="secondary.600">انتخاب تمامی لوکیشن ها</Typography>}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                label={<Typography color="secondary.600"> انتخاب تمامی دوربین ها </Typography>}
              />
            </FormGroup>
            <FormGroup spacing={5} style={styleForm}>
              {/* adjust type of plate's car selection  */}
              <Box contanier my={2} gap={2} p={0} sx={styleBox}>
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
