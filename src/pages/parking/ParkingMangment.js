import React from 'react';
import { Box, Grid, Typography, Button, TextField } from '@mui/material';
import MainCameraCard from './MainCameraCard';
import PlateTable from './PlateTable';

const ParkingManagment = () => {
  const [manualPlate, setManualPlate] = React.useState('');
  return (
    <Grid container spacing={0} style={{ height: '100vh', width: '100%' }}>
      {/* Right Section */}
      <Grid item spacing={0} xs={12} sm={8} md={8} style={{ width: '60%' }}>
        {/* Top larger section divided into two equal columns */}
        <Box
          sx={{
            height: 'fit-content',
            width: '110%',
            display: 'flex',
            flexDirection: 'row',
            mb: 1
          }}
        >
          <Box
            sx={{
              flexBasis: '46%',
              mr: -2,
              boxSizing: 'border-box'
            }}
          >
            <MainCameraCard />
          </Box>
          <Box
            sx={{
              flexBasis: '46%',
              boxSizing: 'border-box'
            }}
          >
            <MainCameraCard />
          </Box>
        </Box>
        <Box
          sx={{
            height: '30%',
            pb: 2,
            pt: 2    
          }}
        >
          <Typography variant="h5" sx={{ pb: 2, mr: 2 }}>
            کنترل راهبند
          </Typography>
          <Button variant="contained" color="error" sx={{ pr: 2, mr: 2 }}>
            بسته
          </Button>
          <Button variant="contained" color="error" sx={{ pr: 2, mr: 2 }}>
            باز
          </Button>
          <Button variant="contained" color="error" sx={{ pr: 2, mr: 2 }}>
            اتوماتیک
          </Button>
        </Box>
      </Grid>

      {/* Left Section */}
      <Grid item xs={12} sm={4} md={4} style={{ width: '45%', height: 'fit-content' }}>
        <Box
          sx={{
            height: '100%'
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              height: '60%',
              border: '1px solid #ddd', // Adding a border
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding a box shadow
              borderRadius: '8px' // Optional: Adding border radius for rounded corners
            }}
          >
            <Typography variant="h6" sx={{ p: 2, color: 'red', mb: 1 }}>
              نمایش پلاک های اخیر
            </Typography>
            <PlateTable />
          </Box>
        </Box>
      </Grid>

      {/* Footer Section */}
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: '#91caff',
            height: 'fit-content', // Adjust the height as needed
            p: 2,
            borderRadius: '4px'
          }}
        >
          <Typography variant="h5" sx={{ pb: 2 }}>
            پرداخت هزینه
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1"> میزان توقف: {}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1"> هزینه پارکینگ: {}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                // fullWidth
                placeholder="ورود دستی پلاک"
                value={manualPlate}
                onChange={(e) => setManualPlate(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
            <Button variant="contained" color="primary">
              ثبت
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ParkingManagment;
