import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Checkbox, FormControlLabel, Select, MenuItem } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
const formBoxStyle = {
  borderRadius: '10px',
  border: '3px solid #69B1FF',
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

const TrafficJamSetting = () => {
  const numberOfCheckboxes = 4; // Define the number of checkboxes

  // Initialize checked and selectValues arrays dynamically
  const initialCheckedState = Array.from({ length: numberOfCheckboxes }, (_, index) => index === 0); // First checkbox is initially checked
  const initialSelectValues = Array.from({ length: numberOfCheckboxes }, () => 'option1'); // All select values initially set to 'option1'

  const [parentChecked, setParentChecked] = useState(false);
  const [checked, setChecked] = useState(initialCheckedState);
  const [selectValues, setSelectValues] = useState(initialSelectValues);

  const navigate = useNavigate();

  const handleParentChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(new Array(numberOfCheckboxes).fill(isChecked));
    setSelectValues(new Array(numberOfCheckboxes).fill(isChecked ? 'option1' : 'option2'));
    setParentChecked(isChecked);
  };

  const handleChildChange = (index) => (event) => {
    const newChecked = [...checked];
    const newSelectValues = [...selectValues];

    newChecked[index] = event.target.checked;
    newSelectValues[index] = event.target.checked ? 'option1' : 'option2';

    setChecked(newChecked);
    setSelectValues(newSelectValues);
    setParentChecked(newChecked.every((value) => value));
  };

  const children = Array.from({ length: numberOfCheckboxes }, (_, index) => (
    <FormControlLabel
      key={index}
      control={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={checked[index]} onChange={handleChildChange(index)} />
          <Typography>{`رله ${index + 1}`}</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id={`select-label-${index}`}>وضعیت</InputLabel>
            <Select
              labelId={`select-label-${index}`}
              id={`select-${index}`}
              value={selectValues[index]} // Use empty string as initial value
              onChange={(event) => {
                const newSelectValues = [...selectValues];
                newSelectValues[index] = event.target.value;
                setSelectValues(newSelectValues);
              }}
              label="وضعیت"
            >
              <MenuItem value="option1">مجاز</MenuItem>
              <MenuItem value="option2">غیرمجاز</MenuItem>
            </Select>
          </FormControl>
        </Box>
      }
      label=""
    />
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <fieldset style={formBoxStyle}>
      <legend style={legendStyle}>تنظیم کردن راهبند</legend>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
          <div>
            <FormControlLabel
              label="فعال سازی"
              control={
                <Checkbox
                  checked={parentChecked}
                  indeterminate={checked.some((value) => value) && !checked.every((value) => value)}
                  onChange={handleParentChange}
                />
              }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>{children}</Box>
          </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Button type="submit" variant="contained" color="primary">
            ثبت
          </Button>
          <Button type="button" variant="contained" color="primary" onClick={() => navigate(-1)}>
            بازگشت
          </Button>
        </Box>
      </form>
    </fieldset>
  );
};

export default TrafficJamSetting;
