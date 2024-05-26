import React from 'react';
import { Box, FormGroup, Typography, Divider, Grid, FormControlLabel, Checkbox } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//Child
import Carcolor from './carsColor';
import CarsModel from './carsModel';

//Style
const styleForm = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%'
};

const styleBox = {
  height: 'fit-content',
  width: '420px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '10px',
  border: '2px solid #f7f7f8',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
  padding: '16px', // Add padding to give some space inside the box
  boxSizing: 'border-box'
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

function CarsType() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }} xs={12}>
      <Grid xs={12} spacing={2} justifyContent="space-around" alignItems="center" disableEqualOverflow="true">
        <Grid item xs={12} sm={6} disableEqualOverflow="true">
          <Box
            my={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            p={2}
            sx={{
              ...BoxStyle(theme)
            }}
          >
            <FormGroup row spacing={5} style={styleForm}>
              {/* adjust type of plate's car selection  */}
              <Box contanier my={2} gap={4} p={2} sx={styleBox}>
                <Typography variant="h5" color="secondary.600">
                  مدل خودرو
                </Typography>
                <Divider sx={style} />
                <FormGroup row variant="h2" color="secondary.600" style={{ marginTop: '-20px' }}>
                  <CarsModel />
                </FormGroup>
              </Box>
              <Box contanier gap={4}>
                <FormGroup style={styleForm}>
                  {/* Car Color Section */}
                  <Box my={2} gap={4} p={2} sx={styleBox}>
                    <Typography variant="h5" color="secondary.600">
                      رنگ خودرو
                    </Typography>
                    <Divider sx={style} />
                    <FormGroup variant="h2" color="secondary.600" style={{ marginTop: '-20px' }}>
                      <Carcolor />
                    </FormGroup>
                  </Box>
                  {/* Car Type Section */}
                  <Box my={2} gap={4} p={2} sx={styleBox}>
                    <Typography variant="h5" color="secondary.600">
                      نوع خودرو
                    </Typography>
                    <Divider sx={style} />
                    <FormGroup variant="h2" color="secondary.600" sx={{ textAlign:"right"}}>
                      <FormControlLabel
                        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                        label={<Typography>سبک</Typography>}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                        label={<Typography>سنگین</Typography>}
                      />
                    </FormGroup>
                  </Box>
                </FormGroup>
              </Box>
            </FormGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CarsType;
