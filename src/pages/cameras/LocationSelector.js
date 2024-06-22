import React, { useState } from 'react';
import { Box, Select, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Alert } from '@mui/material';

const formBoxStyle = {
  borderRadius: '10px',
  border: '1px solid #d3d3d3',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
  marginTop: '10px',
  backgroundColor: '#fff',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '120vh'
};

const legendStyle = {
  textAlign: 'right',
  color: '#fff',
  fontSize: '0.9rem',
  backgroundColor: '#1890ff',
  borderRadius: '5px',
  padding: '5px',
  marginRight: '5px'
};

const selectStyles = {
  marginTop: '25px',
  '& .MuiSelect-select': {
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderRadius: '0px'
  }
};

const LocationSelector = () => {
  const [locations, setLocations] = useState(['پردیس', 'داماهی', 'دانشگاه']);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [open, setOpen] = useState(false);
  const [newLocation, setNewLocation] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSelectChange = (event) => {
    if (event.target.value === 'addNew') {
      setOpen(true);
    } else {
      setSelectedLocation(event.target.value);
    }
  };

  const handleSave = () => {
    if (!newLocation.trim()) {
      setAlert(true);
      return;
    }
    setLocations([...locations, newLocation.trim()]);
    setSelectedLocation(newLocation.trim());
    setNewLocation('');
    setOpen(false);
    setAlert(false);
  };

  return (
    <fieldset style={formBoxStyle}>
      <legend style={legendStyle}>ثبت لوکیشن</legend>
      <Box sx={{ flex: 1 }}>
        <Select value={selectedLocation} onChange={handleSelectChange} displayEmpty fullWidth style={selectStyles}>
          <MenuItem value="" disabled>
            انتخاب لوکیشن
          </MenuItem>
          {locations.map((location, index) => (
            <MenuItem key={index} value={location} sx={{width:'75%'}}>
              {location}
            </MenuItem>
          ))}
          <MenuItem value="addNew">اضافه کردن لوکیشن جدید</MenuItem>
        </Select>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>اضافه کردن لوکیشن جدید</DialogTitle>
          <DialogContent>
            {alert && <Alert severity="error">آدرس خود را وارد کند</Alert>}
            <TextField
              autoFocus
              margin="dense"
              label="لطفا اسم لوکیشن را وارد کنید"
              type="text"
              fullWidth
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">
              انصراف
            </Button>
            <Button onClick={handleSave} color="primary">
              ذخیره
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
        <Button type="submit" variant="contained">
          ثبت
        </Button>
        <Button type="button" variant="contained" >
          بازگشت
        </Button>
      </Box>
    </fieldset>
  );
};

export default LocationSelector;

