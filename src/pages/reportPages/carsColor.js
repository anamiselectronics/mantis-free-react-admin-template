import React from 'react';
import { Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

function Carcolor() {
  const [checked, setChecked] = React.useState(Array(9).fill(false));

  const labels = ['سفید', 'سبز', 'زرد', 'آبی', 'قرمز', 'مشکی', 'نارنجی', 'نقره ای', 'سایر'];

  const handleChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  const handleParentChange = (event) => {
    setChecked(Array(9

      
    ).fill(event.target.checked));
  };

  const itemsPerColumn = Math.ceil(checked.length / 3);
  const columns = [0, 1, 2].map((col) => checked.slice(col * itemsPerColumn, (col + 1) * itemsPerColumn));

  return (
    <Box my={4} xs={12}>
      <Grid container spacing={2} justifyContent="space-around" alignItems="flex-start">
        <Grid item xs={12}>
          <FormControlLabel
            label="همه رنگ ها"
            control={
              <Checkbox
                checked={checked.every(Boolean)}
                indeterminate={checked.some(Boolean) && !checked.every(Boolean)}
                onChange={handleParentChange}
                size="small"
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
                    control={<Checkbox checked={isChecked} onChange={handleChange(labelIndex)} size="small" />}
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

export default Carcolor;
