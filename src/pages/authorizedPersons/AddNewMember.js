import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Paper, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// import AuthorizedPlates from './AuthorizedPlates';
import Testt from './Testt';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const formBoxStyle = {
  borderRadius: '10px',
  border: '3px solid #69B1FF',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
  height: 'fit-content',
  marginTop: '10px',
  backgroundColor: '#fff',
};

const labelStyle = {
  fontSize: '1rem',
  background: 'none'
};

const requiredLabelStyle = {
  '& .MuiInputLabel-asterisk': {
    color: 'red'
  }
};

const AddNewMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    codeMelli: '',
    phoneNumber: '',
    description: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      console.log(image);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

 
    // const [plateValue, setPlateValue] = useState('');
  
    // const handlePlateChange = (newValue) => {
    //   setPlateValue(newValue);
    //   // Handle other logic as needed
    // };

  return (
    <Grid xs={12} sm={7} style={formBoxStyle}>
      <Paper elevation={3}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: 'primary.main', // Use theme colors
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textAlign: 'right',
            padding: '10px'
          }}
        >
          ثبت عضو مجاز جدید
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} pr={2} pl={2}>
            <Grid item xs={12} sm={5}>
              <Item>
                <TextField
                  label="نام"
                  name="name"
                  placeholder="نام خود را وارد نمایید"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                  InputLabelProps={{
                    shrink: true,
                    sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
                  }}
                />
                <TextField
                  label="نام خانوادگی"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  name="lastName"
                  value={formData.lastName}
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
                  label="کد ملی"
                  placeholder="کد ملی "
                  name="codeMelli"
                  value={formData.password}
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
                  label="شماره همراه"
                  placeholder="شماره همراه"
                  name="phoneNumber"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                    sx: { textAlign: 'right', dir: 'rtl', ...labelStyle, ...requiredLabelStyle }
                  }}
                />
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

                <Grid item xs={12} sm={12}>
                  <Item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <legend>تصویر مالک</legend>
                      {imagePreview ? (
                        <Box
                          component="img"
                          src={imagePreview}
                          alt="Preview"
                          sx={{
                            width: '3cm',
                            height: '4cm',
                            marginRight: '10px',
                            objectFit: 'cover',
                            border: '1px solid #ccc',
                            ml: '10px'
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: '3cm',
                            height: '4cm',
                            backgroundColor: '#e0e0e0',
                            marginRight: '10px',
                            border: '1px solid #ccc',
                            ml: '10px'
                          }}
                        />
                      )}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Button variant="contained" component="label" size="small">
                          انتخاب تصویر
                          <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleImageDelete} size="small">
                          حذف تصویر
                        </Button>
                      </Box>
                    </Box>
                  </Item>
                </Grid>
                <Typography sx={{ mt: '10px' }}>تاریخ ثبت : 1403/5/2 </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Item>
                <legend>پلاک های مجاز</legend>
                {/* <AuthorizedPlates /> */}
                <Testt/>
              </Item>
            </Grid>

            <Grid item xs={12} mt={-7}>
              <Item>table of plate</Item>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', gap: '20px' }}>
            <Button type="submit" variant="contained" color="primary">
              ثبت
            </Button>
            <Button type="button" variant="contained" color="primary" onClick={() => navigate(-1)}>
              بازگشت
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddNewMember;
