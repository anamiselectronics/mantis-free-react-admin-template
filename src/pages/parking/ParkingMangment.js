import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import MainCameraCard from './MainCameraCard';
import PlateTable from './PlateTable';
import RoadBlock from './RoadBlock';
import PlateAccounting from './PlateInaccounting';

const styleBox = {
  height: '220px',
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '10px',
  border: '2px solid #f7f7f8',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
  backgroundColor: '#e6f4ff'
};

const ParkingManagment = () => {
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
      <Grid item xs={12} sm={8} md={8} style={{ width: '60%' }}>
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
        <Box sx={{ height: '80%' }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              height: '100%',
              border: '1px solid #ddd',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px'
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
      <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Box my={2} gap={4} p={2} sx={styleBox}>
            <Typography variant="h5" sx={{ pb: 2, color: '#a8071a' }}>
              پرداخت اتوماتیک
            </Typography>
            <Grid item xs={12}>
              <Typography variant="subtitle1">میزان توقف: {}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">هزینه پارکینگ: {}</Typography>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Box my={2} gap={4} p={2} sx={styleBox}>
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
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ParkingManagment;
