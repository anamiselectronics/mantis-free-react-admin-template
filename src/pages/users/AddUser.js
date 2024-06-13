import React, { useState } from 'react';
import { Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem } from '@mui/material';

function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    favoriteColor: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <fieldset style={{ textAlign: 'right' , border: '2px solid #1677fe' }}>
      <legend style={{ textAlign: 'right' }}>ثبت</legend>
      <form onSubmit={handleSubmit}>
        <TextField
          label="نام"
          name="name"
          placeholder="نام خود را وارد نمایید"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            sx: { textAlign: 'right' }
          }}
        />
        <TextField
          label="نام خانوادگی"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            sx: { textAlign: 'right' }
          }}
        />
        <TextField
          label="رمز عبور"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            sx: { textAlign: 'right' }
          }}
        />
        <TextField
          label="ورود مجدد رمز عبور"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            sx: { textAlign: 'right' , dir:'rtl' }
          }}
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend" sx={{ textAlign: 'right' }}>
            وضعیت کاربر
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <FormControlLabel value="male" control={<Radio />} label="فعال" />
            <FormControlLabel value="female" control={<Radio />} label="غیرفعال" />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <FormLabel sx={{ textAlign: 'right' }}>سطح دسترسی</FormLabel>
          <Select
            label="Favorite Color"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
             labelPlacement="start"
            sx={{ textAlign: 'right' }}
          >
            <MenuItem value="red">مدیر</MenuItem>
            <MenuItem value="green">مشاهده کننده</MenuItem>
            <MenuItem value="blue">گزارش گیرنده</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="توضیحات"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            sx: { textAlign: 'right' }
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </fieldset>
  );
}

export default AddUser;
