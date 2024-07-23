import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import MainCameraCard from './MainCameraCard';
import PlateTable from './PlateTable';
import RoadBlock from './RoadBlock';
import PlateAccounting from './PlateInaccounting';

const ParkingManagment = () => {
  // const [manualPlate, setManualPlate] = React.useState('');
  const [formData, setFormData] = React.useState({
    source: '',
    plate: '',
    model: '',
    color: '',
    description: '',
    phone: ['']
  });
  const handlePlateChange = (newPlate) => {
    setFormData({
      ...formData,
      plate: newPlate
    });
  };
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
        <RoadBlock />
      </Grid>

      {/* Left Section */}
      <Grid item xs={12} sm={4} md={4} style={{ width: '45%' }}>
        <Box
          sx={{
            height: '80%'
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              height: '100%',
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
      <Grid item xs={12} spacing={2}>
        <Box
          sx={{
            height: 'fit-content', // Adjust the height as needed
            p: 2,
            mt: 2,
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          {/* Automatic Payment Column */}
          <Grid
            item
            xs={6}
            sm={12}
            md={12}
            sx={{
              backgroundColor: '#91caff',
              border: '1px solid #ddd',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              p: 2,
              borderRadius: '4px'
            }}
          >
            <Typography variant="h5" sx={{ pb: 2, color: '#a8071a' }}>
              پرداخت اتوماتیک
            </Typography>

            <Grid item xs={12}>
              <Typography variant="subtitle1">میزان توقف: {}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">هزینه پارکینگ: {}</Typography>
            </Grid>
          </Grid>

          {/* Manual Payment Column */}
          <Grid
            item
            xs={6}
            sm={12}
            md={12}
            sx={{
              backgroundColor: '#91caff',
              border: '1px solid #ddd',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              p: 2,
              borderRadius: '4px'
            }}
          >
            <Typography variant="h5" sx={{ pb: 2, color: '#a8071a' }}>
              پرداخت دستی
            </Typography>
            <Box item xs={12}>
              <PlateAccounting onChange={handlePlateChange} />
            </Box>
            <Box item xs={12}>
              <Button variant="contained" color="primary">
                ثبت
              </Button>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ParkingManagment;
