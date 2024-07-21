import React from 'react';
import { Box, Grid } from '@mui/material';
import MainCameraCard from './MainCameraCard';

const ParkingManagment = () => {
  return (
    <Grid container spacing={2} style={{ height: '100vh' }}>
      {/* Right Section */}
      <Grid item xs={12} sm={8} md={9}>
        {/* Top larger section divided into two equal columns */}
        <Box
          sx={{
            backgroundColor: 'lightcoral',
            height: 'fit-content',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            mb: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: 'lightpink',
              flexBasis: '50%',
              p: 2,
              boxSizing: 'border-box',
            }}
          >
            <MainCameraCard />
          </Box>
          <Box
            sx={{
              backgroundColor: 'lightseagreen',
              flexBasis: '50%',
              p: 2,
              boxSizing: 'border-box',
            }}
          >
            <MainCameraCard />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: 'lightgoldenrodyellow',
            height: '30%',
          }}
        >
          {/* Bottom smaller section */}
          Bottom Smaller Section
        </Box>
      </Grid>

      {/* Left Section */}
      <Grid item xs={12} sm={4} md={3}>
        <Box
          sx={{
            backgroundColor: 'lightblue',
            height: '100%',
            p: 2,
          }}
        >
          {/* Small table or content */}
          <Box
            sx={{
              backgroundColor: 'lightgreen',
              height: '50%',
            }}
          >
            Small Table
          </Box>
        </Box>
      </Grid>

      {/* Footer Section */}
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: 'lightgray',
            height: '150px', // Adjust the height as needed
            p: 2,
          }}
        >
          Footer Section
        </Box>
      </Grid>
    </Grid>
  );
};

export default ParkingManagment;
