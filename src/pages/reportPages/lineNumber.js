import React from 'react';
import { Box, Grid, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Typography } from '@mui/material';

function LineNumber() {
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
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                label={
                  <Typography variant="h5" color="secondary.600">
                    1
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                label={
                  <Typography variant="h5" color="secondary.600">
                    2
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                label={
                  <Typography variant="h5" color="secondary.600">
                    3
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                label={
                  <Typography variant="h5" color="secondary.600">
                    4
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                label={
                  <Typography variant="h5" color="secondary.600">
                    5
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                label={
                  <Typography variant="h5" color="secondary.600">
                    6
                  </Typography>
                }
              />
            </FormGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LineNumber;
