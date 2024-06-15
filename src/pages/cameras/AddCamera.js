import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

const formBoxStyle = {
  borderRadius: '10px',
  border: '2px solid #69B1FF',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
  height: 'fit-content',
  marginTop: '10px',
  backgroundColor: '#fff'
};

const legendStyle = {
  textAlign: 'right',
  color: '#fff',
  fontSize: '1.1rem',
  backgroundColor: '#1890ff',
  borderRadius: '5px',
  padding: '5px',
  marginRight: '5px'
};

const AddCamera = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <fieldset style={formBoxStyle}>
      <legend style={legendStyle}>ثبت دوربین جدید</legend>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        TabIndicatorProps={{ style: { backgroundColor: '#1890ff' } }} // Blue primary color for indicator
      >
        <Tab
          icon={<CameraEnhanceOutlinedIcon />}
          label="تنظیمات دوربین"
          sx={{
            color: value === 0 ? '#1890ff' : 'gray', // Blue for selected, gray for unselected
            '&.Mui-selected': {
              color: '#1890ff' // Blue for selected
            }
          }}
        />
        <Tab
          icon={<BlockOutlinedIcon />}
          label="تنظیمات راهبند"
          sx={{
            color: value === 1 ? '#1890ff' : 'gray', // Blue for selected, gray for unselected
            '&.Mui-selected': {
              color: '#1890ff' // Blue for selected
            }
          }}
        />
        <Tab
          icon={<AddLocationOutlinedIcon />}
          label="ثبت لوکیشن"
          sx={{
            color: value === 2 ? '#1890ff' : 'gray', // Blue for selected, gray for unselected
            '&.Mui-selected': {
              color: '#1890ff' // Blue for selected
            }
          }}
        />
      </Tabs>
    </fieldset>
  );
};

export default AddCamera;
