// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Button, TextField, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, Divider } from '@mui/material';

// const formBoxStyle = {
//   borderRadius: '10px',
//   border: '1px solid #d3d3d3',
//   boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
//   marginTop: '10px',
//   backgroundColor: '#fff',
//   padding: '20px',
//   fontSize: '0.70rem',
//   height: '99%',
//   marginBottom: '0px'
// };

// const labelStyle = {
//   fontSize: '0.90rem',
//   background: 'none', 
  
// };

// const requiredLabelStyle = {
//   '& .MuiInputLabel-asterisk': {
//     color: 'red',
//     fontSize: '1.7rem'
//   }
// };

// const legendStyle = {
//   textAlign: 'right',
//   color: '#fff',
//   fontSize: '0.90rem',
//   backgroundColor: '#1890ff',
//   borderRadius: '5px',
//   padding: '5px',
//   marginRight: '5px'
// };

// const CameraSetting = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     string_url: '',
//     frame_rate: '',
//     change_y: '',
//     change_x: '',
//     ROI1: false,
//     ROI2: false,
//     ROI3: false,
//     VLC: false
//   });

//   const handleChange = (event) => {
//     const { name, value, checked } = event.target;
//     setFormData({
//       ...formData,
//       [name]: name === 'VLC' ? checked : value // Handle checkboxes and other inputs differently
//     });
//   };

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     // Handle form submission logic here
//   };

//   return (
//     <fieldset style={formBoxStyle}>
//       <legend style={legendStyle}>ثبت دوربین جدید</legend>
//       <form onSubmit={handleSubmit}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItem:'center'}}>
//           <TextField
//             label="نام دوربین"
//             name="name"
//             placeholder="نام دوربین را وارد نمایید"
//             value={formData.name}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             required
//             InputLabelProps={{
//               shrink: true,
//               sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
//             }}
//           />
//           <TextField
//             label="رشته اتصال"
//             placeholder="  رشته اتصال را وارد کنید"
//             name="string_url"
//             value={formData.string_url}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//               sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
//             }}
//           />
//           <TextField
//             label="نرخ فریم"
//             placeholder=" نرخ فریم را وارد کنید"
//             name="frame_rate"
//             value={formData.frame_rate}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//               sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
//             }}
//           />
//           <TextField
//             label="نسبت تغییر اندازه عرض تصویر"
//             placeholder="نسبت تغییر اندازه عرض تصویر"
//             name="change_y"
//             value={formData.change_y}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//               sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
//             }}
//           />
//           <TextField
//             label="نسبت تغییر اندازه طول تصویر"
//             placeholder="نسبت تغییر اندازه طول تصویر"
//             name="change_x"
//             value={formData.change_x}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//               sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
//             }}
//           />

//           <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', marginRight: '10px' }}>
//             <FormControl component="fieldset" margin="normal">
//               <FormLabel component="legend" sx={{ textAlign: 'right', ...labelStyle }}>
//                 فعال سازی نواحی مورد علاقه
//               </FormLabel>
//               <FormGroup>
//                 <FormControlLabel control={<Checkbox checked={formData.ROI1} onChange={handleChange} name="ROI1" />} label="1 (ROI)" />
//                 <FormControlLabel control={<Checkbox checked={formData.ROI2} onChange={handleChange} name="ROI2" />} label="2 (ROI)" />
//                 <FormControlLabel control={<Checkbox checked={formData.ROI3} onChange={handleChange} name="ROI3" />} label="3 (ROI)" />
//               </FormGroup>
//             </FormControl>
//             <Divider orientation="vertical" flexItem sx={{ border: '1px solid #d3d3d3' }} />
//             <FormControl component="fieldset" margin="normal">
//               <FormLabel component="legend" sx={{ textAlign: 'right', ...labelStyle }}>
//                 استفاده از VLC
//               </FormLabel>
//               <FormGroup>
//                 <FormControlLabel control={<Checkbox checked={formData.VLC} onChange={handleChange} name="VLC" />} label="استفاده از VLC" />
//               </FormGroup>
//             </FormControl>
//           </Box>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:12 }}>
//             <Button type="submit" variant="contained" color="primary">
//               ثبت
//             </Button>
//             <Button type="button" variant="contained" color="primary" onClick={() => navigate(-1)}>
//               بازگشت
//             </Button>
//           </Box>
        
//       </form>
//     </fieldset>
//   );
// };

// export default CameraSetting;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, Divider } from '@mui/material';

const formBoxStyle = {
  borderRadius: '10px',
  border: '1px solid #d3d3d3',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
  marginTop: '10px',
  backgroundColor: '#fff',
  padding: '20px',
  fontSize: '0.70rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
 height:'120vh'
};

const labelStyle = {
  fontSize: '0.90rem',
  background: 'none',
};

const requiredLabelStyle = {
  '& .MuiInputLabel-asterisk': {
    color: 'red',
    fontSize: '1.7rem'
  }
};

const legendStyle = {
  textAlign: 'right',
  color: '#fff',
  fontSize: '0.90rem',
  backgroundColor: '#1890ff',
  borderRadius: '5px',
  padding: '5px',
  marginRight: '5px'
};

const CameraSetting = () => {
  const [formData, setFormData] = useState({
    name: '',
    string_url: '',
    frame_rate: '',
    change_y: '',
    change_x: '',
    ROI1: false,
    ROI2: false,
    ROI3: false,
    VLC: false
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'VLC' ? checked : value // Handle checkboxes and other inputs differently
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <fieldset style={formBoxStyle}>
      <legend style={legendStyle}>ثبت دوربین جدید</legend>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Box sx={{ flex: 1 }}>
          <TextField
            label="نام دوربین"
            name="name"
            placeholder="نام دوربین را وارد نمایید"
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
            label="رشته اتصال"
            placeholder="  رشته اتصال را وارد کنید"
            name="string_url"
            value={formData.string_url}
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
            label="نرخ فریم"
            placeholder=" نرخ فریم را وارد کنید"
            name="frame_rate"
            value={formData.frame_rate}
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
            label="نسبت تغییر اندازه عرض تصویر"
            placeholder="نسبت تغییر اندازه عرض تصویر"
            name="change_y"
            value={formData.change_y}
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
            label="نسبت تغییر اندازه طول تصویر"
            placeholder="نسبت تغییر اندازه طول تصویر"
            name="change_x"
            value={formData.change_x}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
              sx: { textAlign: 'right', ...labelStyle, ...requiredLabelStyle }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', marginRight: '10px' }}>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend" sx={{ textAlign: 'right', ...labelStyle }}>
                فعال سازی نواحی مورد علاقه
              </FormLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={formData.ROI1} onChange={handleChange} name="ROI1" />} label="1 (ROI)" />
                <FormControlLabel control={<Checkbox checked={formData.ROI2} onChange={handleChange} name="ROI2" />} label="2 (ROI)" />
                <FormControlLabel control={<Checkbox checked={formData.ROI3} onChange={handleChange} name="ROI3" />} label="3 (ROI)" />
              </FormGroup>
            </FormControl>
            <Divider orientation="vertical" flexItem sx={{ border: '1px solid #d3d3d3' }} />
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend" sx={{ textAlign: 'right', ...labelStyle }}>
                استفاده از VLC
              </FormLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={formData.VLC} onChange={handleChange} name="VLC" />} label="استفاده از VLC" />
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
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

export default CameraSetting;

