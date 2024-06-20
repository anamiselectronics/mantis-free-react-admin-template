import React, { useState } from 'react';
import { Tab, Tabs, createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

// Icons
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

// Nested components
import CameraSetting from './CameraSetting';
import TrafficJamSettings from './TrafficJamSettings';
import LocationSelector from './LocationSelector';

const formBoxStyle = {
  borderRadius: '10px',
  border: '2px solid #69B1FF',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
  marginTop: '10px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  height: '140vh', // Adjust the height as needed
};

const ScrollableBox = styled(Box)`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  flex: 1;
  max-width: 90vw;
`;

// Create a custom theme with font overrides
const theme = createTheme({
  typography: {
    fontFamily: 'Vazirmatn, Arial, sans-serif',
    fontSize: 13 // Adjust the font size here (default is 13px)
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#959595',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#096dd9',
    },
  },
});

const AddCamera = () => {
  const [openTabs, setOpenTabs] = useState(['1']);

  const handleTabClick = (tabValue) => {
    if (openTabs.includes(tabValue)) {
      setOpenTabs(openTabs.filter((value) => value !== tabValue));
    } else {
      setOpenTabs([...openTabs, tabValue]);
    }
  };

  return (
    <fieldset style={formBoxStyle}>
      <ThemeProvider theme={theme}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={openTabs.length === 0 ? false : openTabs[openTabs.length - 1]}
            aria-label="icon label tabs example"
            indicatorColor="primary" // Change indicator color to primary
          >
            <Tab
              icon={<CameraEnhanceOutlinedIcon sx={{ marginRight: 1, fontSize: 40 }} />}
              iconPosition="start"
              label="تنظیمات دوربین"
              value="1"
              onClick={() => handleTabClick('1')}
            />
            <Tab
              label="تنظیمات راهبند"
              value="2"
              icon={<ViewDayOutlinedIcon fontSize={'small'} sx={{ marginRight: 1 }} />}
              iconPosition="start"
              onClick={() => handleTabClick('2')}
            />
            <Tab
              label="ثبت لوکیشن"
              value="3"
              icon={<AddLocationOutlinedIcon fontSize={'small'} sx={{ marginRight: 1 }} />}
              iconPosition="start"
              onClick={() => handleTabClick('3')}
            />
          </Tabs>
        </Box>
        <ScrollableBox>
          {openTabs.includes('1') && (
            <Box key="1" sx={{ padding: 1, width: '100%' }}>
              <CameraSetting />
            </Box>
          )}
          {openTabs.includes('2') && (
            <Box key="2" sx={{ padding: 1, width: '100%' }}>
              <TrafficJamSettings />
            </Box>
          )}
          {openTabs.includes('3') && (
            <Box key="3" sx={{ padding: 1, width: '100%' }}>
              <LocationSelector />
            </Box>
          )}
        </ScrollableBox>
      </ThemeProvider>
    </fieldset>
  );
};

export default AddCamera;
