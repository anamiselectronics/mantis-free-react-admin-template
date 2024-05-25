import React from 'react';
import { Box, FormGroup, Typography, Divider, Grid, FormControlLabel, Checkbox } from '@mui/material';

const styleForm = {
  display: 'flex',
  justifyContent: 'space-around'
};

const styleBox = {
  height: '200px',
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '10px',
  border: '2px solid #f7f7f8',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'
};

const style = {
  border: '2px solid secondary.lighter',
  width: '350px'
};

function CarsType() {
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
            <FormGroup row spacing={5} style={styleForm}>
              {/* adjust type of plate's car selection  */}
              <Box contanier my={2} gap={4} p={2} sx={styleBox}>
                <Typography variant="h5" color="secondary.600">
                  انتخاب دوربین
                </Typography>
                <Divider sx={style} />
                <FormGroup row variant="h2" color="secondary.600" style={{ marginTop: '-20px' }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                    label={<Typography>دوربین 1</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                    label={<Typography>دوربین 2</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                    label={<Typography>دوربین 3</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                    label={<Typography>دوربین 4</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                    label={<Typography>دوربین 5</Typography>}
                  />
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
