import React from 'react';
import { Box, FormGroup, Typography, Divider, Grid, FormControlLabel, Checkbox, Switch } from '@mui/material';

const styleForm = {
  display: 'flex',
  justifyContent: 'space-around'
};

const styleBox = {
  height: '200px',
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '10px',
  border: '2px solid #f7f7f8',
  boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'
};

const style = {
  border: '2px solid secondary.lighter',
  width: '350px'
};

function PosiibilitySection1() {
  return (
    <Box sx={{ flexGrow: 1 }} xs={12}>
      <Grid xs={12} spacing={2} justifyContent="space-around" alignItems="center" disableEqualOverflow="true">
        <Grid item xs={12} sm={6} disableEqualOverflow="true">
          <FormGroup row spacing={5} style={styleForm}>
            <Box contanier my={2} gap={4} p={2} sx={styleBox}>
              <Typography variant="h5" color="secondary.600">
                نوع پلاک
              </Typography>
              <Divider sx={style} />
              <FormGroup row variant="h2" color="secondary.600" style={{ marginTop: '-20px' }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                  label={<Typography>ملی</Typography>}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                  label={<Typography>ترانزیت قدیمی</Typography>}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                  label={<Typography>ترانزیت جدید</Typography>}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                  label={<Typography>منطقه آزاد</Typography>}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                  label={<Typography>موتور</Typography>}
                />
              </FormGroup>
            </Box>
            <Box contanier my={2} alignItems="right" gap={4} p={2} sx={styleBox} disableEqualOverflow>
              <Typography>وضعیت پلاک</Typography>
              <Divider sx={style} />

              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}> 
                  <FormGroup variant="h2" color="secondary.600" style={{ marginTop: '-20px' }}>
                    <FormControlLabel control={<Switch defaultChecked size="small" />} label="مشخص" size="small" />
                    <FormControlLabel control={<Switch size="small" />} label="دقیق" />
                    <FormControlLabel control={<Switch size="small" />} label="موجود" size="small" />
                  </FormGroup>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormGroup variant="h2" color="secondary.600" style={{ marginTop: '-20px' }}>
                    <FormControlLabel control={<Switch size="small" />} label="پلاک تکراری" size="small" />
                    <FormControlLabel control={<Switch size="small" />} label="مخدوش" size="small" />
                    <FormControlLabel control={<Switch size="small" />} label="مشکوک" size="small" />
                    <FormControlLabel control={<Switch size="small" />} label="ناموجود" size="small" />
                  </FormGroup>
                </Grid>
              </Grid>
            </Box>
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PosiibilitySection1;
