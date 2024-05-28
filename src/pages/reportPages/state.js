import React from 'react';
import { Box, Grid, Checkbox, FormControlLabel, useMediaQuery, useTheme } from '@mui/material';

function State() {
  const [checked, setChecked] = React.useState(Array(31).fill(false));

  const labels = [
    'آذربایجان شرقی', 'آذربایجان غربی', 'اردبیل', 'اصفهان', 'البرز', 'ایلام', 'بوشهر', 'تهران',
    'چهارمحال و بختیاری', 'خراسان جنوبی', 'خراسان رضوی', 'خراسان شمالی', 'خوزستان', 'زنجان', 'سمنان',
    'سیستان و بلوچستان', 'فارس', 'قزوین', 'قم', 'کردستان', 'کرمان', 'کرمانشاه', 'کهگیلویه و بویراحمد',
    'گلستان', 'گیلان', 'لرستان', 'مازندران', 'مرکزی', 'هرمزگان', 'همدان', 'یزد'
  ];

  const handleChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  const handleParentChange = (event) => {
    setChecked(Array(31).fill(event.target.checked));
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const columnsCount = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;
  const itemsPerColumn = Math.ceil(labels.length / columnsCount);
  const columns = Array.from({ length: columnsCount }, (_, col) => labels.slice(col * itemsPerColumn, (col + 1) * itemsPerColumn));

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
      px={2}
    >
      <Grid container spacing={2} justifyContent="space-around" alignItems="flex-start">
        <Grid item xs={12}>
          <FormControlLabel
            label="همه استان ها"
            control={
              <Checkbox
                size="small"
                checked={checked.every(Boolean)}
                indeterminate={checked.some(Boolean) && !checked.every(Boolean)}
                onChange={handleParentChange}
              />
            }
          />
        </Grid>
        {columns.map((column, colIndex) => (
          <Grid item xs={12} sm={6} md={4} key={colIndex}>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              {column.map((label, index) => {
                const labelIndex = colIndex * itemsPerColumn + index;
                return (
                  <FormControlLabel
                    key={labelIndex}
                    label={label}
                    control={
                      <Checkbox
                        checked={checked[labelIndex]}
                        onChange={handleChange(labelIndex)}
                        size="small"
                      />
                    }
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

export default State;
