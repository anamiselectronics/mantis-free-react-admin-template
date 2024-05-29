import { useState } from 'react';
// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

import Statistics from './Statistics';
import MainCard from 'components/MainCard';

// ==============================||Statitics ||============================== //

const ShowStatistics = () => {
  //   const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">نمودار تردد</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                ماهانه
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                هفتگی
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('day')}
                color={slot === 'day' ? 'primary' : 'secondary'}
                variant={slot === 'day' ? 'outlined' : 'text'}
              >
                روزانه
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <Statistics slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">در یک نگاه</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                تعداد تردد این هفته
              </Typography>
              <Typography variant="h3">7,650</Typography>
            </Stack>
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ShowStatistics;
