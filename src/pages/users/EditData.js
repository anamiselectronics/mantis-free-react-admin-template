// import React, { useState } from 'react';
// import { Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem } from '@mui/material';

// const formBoxStyle = {
//   borderRadius: '10px',
//   border: '3px solid #69B1FF',
//   boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
//   height: 'fit-content',
//   marginTop: '10px',
//   backgroundColor: '#fff'
// };

// const labelStyle = {
//   fontSize: '1rem',
//   background: 'none'
// };

// const requiredLabelStyle = {
//   // color: 'red',
//   '& .MuiInputLabel-asterisk': {
//     color: 'red'
//   }
// };

// const legendStyle = {
//   textAlign: 'right',
//   color: '#fff',
//   fontSize: '1.1rem',
//   backgroundColor: '#1890ff',
//   borderRadius: '5px',
//   padding: '5px',
//   marginRight: '5px'
// };
// function AddUser() {
//   const [formData, setFormData] = useState({
//     name: '',
//     gender: '',
//     favoriteColor: '',
//     description: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here, e.g., send data to server
//     console.log(formData);
//   };

//   return (
//     <fieldset style={formBoxStyle}>
//       <legend style={legendStyle}>ثبت کاربر جدید</legend>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="نام"
//           name="name"
//           placeholder="نام خود را وارد نمایید"
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           required
//           InputLabelProps={{
//             shrink: true,
//             sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
//           }}
//         />
//         <TextField
//           label=" نام خانوادگی "
//           placeholder="نام خانوادگی خود را وارد کنید"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//             sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
//           }}
//         />
//         <TextField
//           label="رمز عبور"
//           placeholder="رمز عبور"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//             sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
//           }}
//         />
//         <TextField
//           label="ورود مجدد رمز عبور"
//           placeholder="ورود مجدد رمز عبور"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//             sx: { textAlign: 'right', dir: 'rtl', ...labelStyle, ...requiredLabelStyle }
//           }}
//         />
//         <FormControl component="fieldset" margin="normal">
//           <FormLabel component="legend" sx={{ textAlign: 'right' }}>
//             وضعیت کاربر
//           </FormLabel>
//           <RadioGroup aria-label="gender" name="gender" value={formData.gender} onChange={handleChange}>
//             <FormControlLabel value="male" control={<Radio />} label="فعال" />
//             <FormControlLabel value="female" control={<Radio />} label="غیرفعال" />
//           </RadioGroup>
//         </FormControl>
//         <FormControl fullWidth margin="normal">
//           <FormLabel sx={{ textAlign: 'right' }}>سطح دسترسی</FormLabel>
//           <Select
//             label="Favorite Color"
//             name="favoriteColor"
//             value={formData.favoriteColor}
//             onChange={handleChange}
//             labelplacement="start"
//             sx={{ textAlign: 'right' }}
//           >
//             <MenuItem value="red">مدیر</MenuItem>
//             <MenuItem value="green">مشاهده کننده</MenuItem>
//             <MenuItem value="blue">گزارش گیرنده</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           label="توضیحات"
//           placeholder="توضیحات"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           multiline
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//             sx: { textAlign: 'right' }
//           }}
//         />
//         <Button type="submit" variant="contained" color="primary">
//           ثبت
//         </Button>
//       </form>
//     </fieldset>
//   );
// }

// export default AddUser;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';

const formBoxStyle = {
  borderRadius: '10px',
  border: '3px solid #69B1FF',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
  height: 'fit-content',
  marginTop: '10px',
  backgroundColor: '#fff'
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

const legendStyle = {
  textAlign: 'right',
  color: '#fff',
  fontSize: '1.1rem',
  backgroundColor: '#1890ff',
  borderRadius: '5px',
  padding: '5px',
  marginRight: '5px'
};

const EditData = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    gender: '',
    favoriteColor: '',
    description: ''
  });

  const navigate = useNavigate();

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
    <fieldset style={formBoxStyle}>
      <legend style={legendStyle}> ویرایش اطلاعات کاربر </legend>
      <form onSubmit={handleSubmit}>
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
          label="رمز عبور"
          placeholder="رمز عبور"
          name="password"
          type="password"
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
          label="ورود مجدد رمز عبور"
          placeholder="ورود مجدد رمز عبور"
          name="confirmPassword"
          type="password"
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
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend" sx={{ textAlign: 'right', ...labelStyle }}>
            وضعیت کاربر
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <FormControlLabel value="active" control={<Radio />} label="فعال" />
            <FormControlLabel value="inactive" control={<Radio />} label="غیرفعال" />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel shrink sx={{ textAlign: 'right', ...labelStyle, ...requiredLabelStyle }}>
            سطح دسترسی
          </InputLabel>
          {/* <FormLabel sx={{ textAlign: 'right', ...labelStyle }}>سطح دسترسی</FormLabel> */}
          <Select
            label="سطح دسترسی"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
            sx={{ textAlign: 'right' }}
          >
            <MenuItem value="admin">مدیر</MenuItem>
            <MenuItem value="viewer">مشاهده کننده</MenuItem>
            <MenuItem value="reporter">گزارش گیرنده</MenuItem>
          </Select>
        </FormControl>
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
}

export default EditData;
