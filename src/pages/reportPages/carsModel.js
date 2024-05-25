import React from 'react';
import { Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

function CarsModel() {
  const [checked, setChecked] = React.useState(Array(25).fill(false));

  const labels = [
    'اتوبوس',
    'ال 90',
    'برلیانس',
    'پارس',
    'پراید وانت',
    'پراید',
    'پژو 206',
    'پژو 207',
    'پژو 405',
    'پیکان وانت',
    'پیکان',
    'تیبا',
    'دنا',
    'رانا',
    'ریو',
    'زانتیا',
    'ساندرو',
    'ساینا',
    'سمند',
    'کامیون',
    'کوییک',
    'مزدا وانت',
    'مینی بوس',
    'نیسان',
    'ون',
    'سایر'
  ];

  const handleChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  const handleParentChange = (event) => {
    setChecked(Array(25).fill(event.target.checked));
  };

  const itemsPerColumn = Math.ceil(checked.length / 3);
  const columns = [0, 1, 2].map((col) => checked.slice(col * itemsPerColumn, (col + 1) * itemsPerColumn));

  return (
    <Box my={4} xs={12}>
      <Grid container spacing={2} justifyContent="space-around" alignItems="flex-start">
        <Grid item xs={12}>
          <FormControlLabel
            label="مدل خودرو"
            control={
              <Checkbox
                checked={checked.every(Boolean)}
                indeterminate={checked.some(Boolean) && !checked.every(Boolean)}
                onChange={handleParentChange}
              />
            }
          />
        </Grid>
        {columns.map((column, colIndex) => (
          <Grid item xs={12} sm={4} key={colIndex}>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              {column.map((isChecked, index) => {
                const labelIndex = colIndex * itemsPerColumn + index;
                return (
                  <FormControlLabel
                    key={labelIndex}
                    label={labels[labelIndex]}
                    control={<Checkbox checked={isChecked} onChange={handleChange(labelIndex)} />}
                    variant="h5"
                    color="secondary.600"
                  />
                );
              })}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CarsModel;
