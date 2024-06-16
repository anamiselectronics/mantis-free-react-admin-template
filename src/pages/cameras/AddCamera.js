import React from 'react';
import { Tab, createTheme, ThemeProvider } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

//Icons
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

//nested-component
import CameraSetting from './CameraSetting';
import TrafficJamSettings from './TrafficJamSettings';
import AddLocation from './AddLocation';

const formBoxStyle = {
  borderRadius: '10px',
  border: '2px solid #69B1FF',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
  height: 'fit-content',
  marginTop: '10px',
  backgroundColor: '#fff'
};

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#959595', // Custom font color
          fontFamily: 'Vazirmatn'
        }
      }
    }
  }
});

const AddCamera = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <fieldset style={formBoxStyle}>
      <TabContext value={value}>
        <ThemeProvider theme={theme}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="icon label tabs example">
              <Tab
                icon={<CameraEnhanceOutlinedIcon fontSize={'small'} sx={{ marginRight: 1 }} />}
                iconPosition="start"
                label="تنظیمات دوربین"
                value="1"
              />
              <Tab
                label="تنظیمات راهبند"
                value="2"
                icon={<ViewDayOutlinedIcon fontSize={'small'} sx={{ marginRight: 1 }} />}
                iconPosition="start"
              />
              <Tab
                label="ثبت لوکیشن"
                value="3"
                icon={<AddLocationOutlinedIcon fontSize={'small'} sx={{ marginRight: 1 }} />}
                iconPosition="start"
              />
            </TabList>
          </Box>
        </ThemeProvider>
        <TabPanel value="1">
          <CameraSetting />
        </TabPanel>
        <TabPanel value="2">
          <TrafficJamSettings />
        </TabPanel>
        <TabPanel value="3">
          <AddLocation />
        </TabPanel>
      </TabContext>
    </fieldset>
  );
};

export default AddCamera;
