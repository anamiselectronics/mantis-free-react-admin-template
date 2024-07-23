import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import moment from 'moment-jalaali';
import Plate from './Plate';

const ParkingCamera = ({ name }) => {
  const [jalaliDate, setJalaliDate] = useState(moment().format('jYYYY/jM/jD HH:mm:ss'));
  const [manualPlate] = useState('');
  const [formData, setFormData] = useState({
    source: '',
    plate: '',
    model: '',
    color: '',
    description: '',
    phone: ['']
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setJalaliDate(moment().format('jYYYY/jM/jD HH:mm:ss'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePlateChange = (newPlate) => {
    setFormData({
      ...formData,
      plate: newPlate
    });
  };

  const handleSubmit = () => {
    const info = {
      jalaliDate,
      name,
      manualPlate
    };
    console.log('Submitted info:', info);
    // You can add your form submission logic here
  };

  return (
    <Card sx={{ width: '105%' }}>
      <CardMedia>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            paddingTop: '90%', // 2:1 aspect ratio
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button variant="contained" color="primary" sx={{ position: 'absolute', top: '10%', left: '10%' }}>
            <PlayArrowIcon />
          </Button>
          <Button variant="contained" color="secondary" sx={{ position: 'absolute', top: '10%', left: '30%' }}>
            <StopIcon />
          </Button>
        </Box>
      </CardMedia>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <Typography variant="subtitle1">زمان: {jalaliDate}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">نام : </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">جهت: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">ماشین: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">پلاک: </Typography>
          </Grid>
          <Grid item xs={12}>
            <Plate onChange={handlePlateChange} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              ثبت
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ParkingCamera;
