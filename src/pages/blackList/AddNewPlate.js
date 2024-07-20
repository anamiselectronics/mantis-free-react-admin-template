import React, { useState } from 'react';
import { Button, TextField, Paper, Grid, Typography, IconButton, InputAdornment } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Plate from './Plate'; // Adjust the path as necessary

// Utility function to convert English numbers to Persian numbers
const toPersianNumber = (num) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, (d) => persianDigits[d]);
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const labelStyle = {
  fontSize: '1rem',
  background: 'none',
  unicodeBidi: 'bidi-override',
  dir: 'ltr',
  textAlign: 'left'
};

const requiredLabelStyle = {
  '& .MuiInputLabel-asterisk': {
    color: 'red',
    textAlign: 'left'
  }
};

const AddNewPlate = ({ handleClose, handleAddPlate }) => {
  const [formData, setFormData] = useState({
    source: '',
    plate: '',
    model: '',
    color: '',
    description: '',
    phone: ['']
  });

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    if (name.startsWith('phone')) {
      const updatedPhones = [...formData.phone];
      updatedPhones[index] = value;
      setFormData({
        ...formData,
        phone: updatedPhones
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handlePlateChange = (newPlate) => {
    setFormData({
      ...formData,
      plate: newPlate
    });
  };

  const addPhoneField = () => {
    if (formData.phone.length < 5) {
      setFormData({
        ...formData,
        phone: [...formData.phone, '']
      });
    } else {
      alert('شما بیشتر از 5 شماره تلفن مجاز نیستید تعریف کنید!');
      return;
    }
  };

  const removePhoneField = (index) => {
    const updatedPhones = formData.phone.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      phone: updatedPhones
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddPlate(formData);
    handleClose();
  };

  return (
    <Grid xs={12} sm={7}>
      <Paper elevation={0} sx={{ border: 'none', boxShadow: 'none' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textAlign: 'right',
            padding: '10px'
          }}
        >
          ثبت پلاک سیاه جدید
        </Typography>
        <form onSubmit={handleSubmit}>
          <Item sx={{ border: 'none', boxShadow: 'none', direction: 'rtl', overFlow: 'scroll' }}>
            <TextField
              label="مرجع دستوردهنده"
              name="source"
              placeholder="نام مرجع را وارد نمایید"
              value={formData.source}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                shrink: true,
                sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
              }}
            />
            <Plate
              value={formData.plate}
              onChange={handlePlateChange}
            />
            <TextField
              label="مدل"
              placeholder="مدل خودرو"
              name="model"
              value={formData.model}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
                sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
              }}
            />
            <TextField
              label="رنگ"
              placeholder="رنگ خودرو"
              name="color"
              value={formData.color}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
                sx: { textAlign: 'right', dir: 'rtl', ...labelStyle, ...requiredLabelStyle }
              }}
            />
            {formData.phone.map((phone, index) => (
              <div key={index} style={{ marginBottom: '10px', position: 'relative', display: 'flex', alignItems: 'center' }}>
                <TextField
                  label={`شماره تلفن ${index + 1}`}
                  placeholder="شماره تلفن"
                  name={`phone${index}`}
                  value={toPersianNumber(phone)}
                  onChange={(e) => handleChange(e, index)}
                  fullWidth
                  required
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                    sx: { textAlign: 'right', dir: 'rtl', ...labelStyle, ...requiredLabelStyle }
                  }}
                  InputProps={{
                    endAdornment: index > 0 && (
                      <InputAdornment position="end">
                        <IconButton color="error" onClick={() => removePhoneField(index)}>
                          <Delete />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </div>
            ))}
            <Button variant="contained" onClick={addPhoneField} fullWidth>
              افزودن شماره تلفن
            </Button>
            <TextField
              label="توضیحات"
              placeholder="توضیحات"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                sx: { textAlign: 'right', ...labelStyle }
              }}
            />
          </Item>
          <Grid item xs={12} sx={{ display: 'flex', gap: 22, margin: '15px 10px', justifyContent: 'end' }}>
            <Button type="submit" variant="contained" color="primary">
              ثبت
            </Button>
            <Button type="button" variant="contained" color="primary" onClick={handleClose}>
              بازگشت
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddNewPlate;
