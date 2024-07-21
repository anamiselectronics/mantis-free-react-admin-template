import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import moment from 'moment-jalaali';


const ParkingCamera = ({ name}) => {
  const [jalaliDate, setJalaliDate] = useState(moment().format('jYYYY/jM/jD HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setJalaliDate(moment().format('jYYYY/jM/jD HH:mm:ss'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card sx={{ width: '100%' }}>
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
            {/* <Box
              component="img"
              alt="Personal Image"
              src={AvatarImage} // Replace with actual image URL
              sx={{ width: 60, height: 60, marginRight: 1, borderRadius: '100%' }}
            /> */}
            <Typography variant="subtitle1">زمان: {jalaliDate}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">نام : {name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">جهت: {name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">ماشین: {name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">پلاک: {name}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ParkingCamera;
