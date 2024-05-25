import React from 'react';
import { Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

function State() {
  const [checked, setChecked] = React.useState(Array(31).fill(false));

  const labels = [
    'آذربایجان شرقی',
    'آذربایجان غربی',
    'اردبیل',
    'اصفهان',
    'البرز',
    'ایلام',
    'بوشهر',
    'تهران',
    'چهارمحال و بختیاری',
    'خراسان جنوبی',
    'خراسان رضوی',
    'خراسان شمالی',
    'خوزستان',
    'زنجان',
    'سمنان',
    'سیستان و بلوچستان',
    'فارس',
    'قزوین',
    'قم',
    'کردستان',
    'کرمان',
    'کرمانشاه',
    'کهگیلویه و بویراحمد',
    'گلستان',
    'گیلان',
    'لرستان',
    'مازندران',
    'مرکزی',
    'هرمزگان',
    'همدان',
    'یزد'
  ];

  const handleChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  const handleParentChange = (event) => {
    setChecked(Array(31).fill(event.target.checked));
  };

  const itemsPerColumn = Math.ceil(checked.length / 3);
  const columns = [0, 1, 2].map((col) => checked.slice(col * itemsPerColumn, (col + 1) * itemsPerColumn));

  return (
    <Box
      sx={{
        flexGrow: 1,
        border: '2px solid',
        borderColor: 'primary.200',
        borderRadius: '10px',
        bgcolor: 'primary.200',
        boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
        '&:hover': {
          bgcolor: 'primary.200'
        }
      }}
      my={4}
      xs={12}
    >
      <Grid container spacing={2} justifyContent="space-around" alignItems="flex-start">
        <Grid item xs={12}>
          <FormControlLabel
            label="همه استان ها"
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
                    variant="h5" color="secondary.600"
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

export default State;
