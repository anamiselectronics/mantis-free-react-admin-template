import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';

//Child
import PlateSection1 from './plateSection1';
import Cartag from './carTag';
import OldTransitTag from './oldTransitTag';
import NewTransitTag from './newTransitTag';
import MotorcycleTag from './motorcycleTag';

import { useTheme } from '@mui/material/styles';
import FreeZonePlate from './freeZonePlate';

const styleBox1 = (theme) => ({
  display: 'grid',
  alignItems: 'center',
  border: '2px solid',
  borderColor: theme.palette.primary[200],
  borderRadius: '10px',
  bgcolor: theme.palette.primary[200],
  boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
  '&:hover': {
    bgcolor: theme.palette.primary[200]
  }
});

const styleBox2 = (theme) => ({
  border: '2px solid #f7f7f8',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
  bgcolor: theme.palette.primary[200],
  '&:hover': {
    bgcolor: theme.palette.primary[200]
  }
});

const gridStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

function Plate() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ flexGrow: 1 }} xs={12}>
      <Grid xs={12} spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            item
            xs={12}
            sm={6}
            sx={{
              minHeight: { xs: 'auto', sm: 250 },
              my: 4,
              gap: 2,
              p: 2,
              ...styleBox1(theme)
            }}
          >
            <PlateSection1 />
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            item
            xs={12}
            sm={6}
            sx={{
              minHeight: { xs: 'auto', sm: 'auto' },
              my: 4,
              gap: 2,
              p: 2,
              ...styleBox1(theme)
            }}
          >
            <Box
              sx={{
                minHeight: { xs: 'auto', sm: 'auto' },
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                p: 2,
                ...styleBox2(theme)
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} style={gridStyle}>
                  <Cartag />
                  <OldTransitTag />
                  <NewTransitTag />
                </Grid>
                <Grid item xs={12} sm={6} style={gridStyle}>
                  <FreeZonePlate />

                  <MotorcycleTag />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Plate;
