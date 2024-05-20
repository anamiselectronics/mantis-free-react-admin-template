import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';

//Child
import PosiibilitySection1 from './posibilitySection1';
import Cartag from './carTag';
import OldTransitTag from './oldTransitTag';
import NewTransitTag from './newTransitTag';
import MotorcycleTag from './motorcycleTag';

import { useTheme } from '@mui/material/styles';

const styleBox1 = (theme) => ({
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
  border: '2px solid',
  borderColor: theme.palette.primary[200],
  borderRadius: '10px',
  bgcolor: theme.palette.primary[200],
  boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
  '&:hover': {
    bgcolor: theme.palette.primary[200]
  }
});

const styleBox3 = (theme) => ({
  border: '2px solid #f7f7f8',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
  bgcolor: theme.palette.primary[200],
  '&:hover': {
    bgcolor: theme.palette.primary[200]
  }
});

function Possibilities() {
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
              display: 'grid',
              alignItems: 'center',
              gap: 2,
              p: 2,
              ...styleBox1(theme)
            }}
          >
            <PosiibilitySection1 />
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
              display: 'grid',
              alignItems: 'center',
              gap: 2,
              p: 2,
              ...styleBox2(theme)
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
                ...styleBox3(theme)
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Cartag />
                  <OldTransitTag />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <NewTransitTag />
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

export default Possibilities;
