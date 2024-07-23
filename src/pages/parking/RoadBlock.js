import React, { useState } from 'react';
import { Box, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const RahbandControl = () => {
  const [selectedRahband, setSelectedRahband] = useState('');

  const handleSelectChange = (event) => {
    setSelectedRahband(event.target.value);
  };

  return (
    <Box
      sx={{
        height: '30%',
        pb: 2,
        pt: 2
      }}
    >
      <Typography variant="h5" sx={{ pb: 2, mr: 2 }}>
        کنترل راهبند
      </Typography>
      <FormControl sx={{ pb: 2, mr: 2, minWidth: 120 }}>
        <InputLabel id="rahband-select-label">انتخاب راهبند</InputLabel>
        <Select
          labelId="rahband-select-label"
          id="rahband-select"
          value={selectedRahband}
          onChange={handleSelectChange}
          sx={{ width: '200px' }} // Adjust the width as needed
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'rahband1'}>راهبند 1</MenuItem>
          <MenuItem value={'rahband2'}>راهبند 2</MenuItem>
          <MenuItem value={'rahband3'}>راهبند 3</MenuItem>
          {/* Add more MenuItem components as needed */}
        </Select>
      </FormControl>
      <Button variant="contained" color="error" sx={{ pr: 2, mr: 2 }} disabled={!selectedRahband}>
        بسته
      </Button>
      <Button variant="contained" color="error" sx={{ pr: 2, mr: 2 }} disabled={!selectedRahband}>
        باز
      </Button>
      <Button variant="contained" color="error" sx={{ pr: 2, mr: 2 }} disabled={!selectedRahband}>
        اتوماتیک
      </Button>
    </Box>
  );
};

export default RahbandControl;
