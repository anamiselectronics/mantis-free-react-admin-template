import React, { useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// Captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha
} from 'react-simple-captcha';

// Material-UI
import {
  Button,
  // Checkbox,
  // Divider,
  // FormControlLabel,
  TextField,
  FormHelperText,
  Grid,
  // Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack
  // Typography
} from '@mui/material';

// Third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// Project import
// import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';

// Assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const AuthLogin = () => {
  // const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(4, 'gray', 'white', 'numbers');
  }, []);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        captcha: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required'),
        captcha: Yup.string().required('Captcha is required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          if (validateCaptcha(values.captcha)) {
            // navigate("/dashboard", { replace: true });
            alert("Login successful");
            setStatus({ success: true });
          } else {
            alert("Please enter the correct captcha");
            setStatus({ success: false });
          }
          setSubmitting(false);
        } catch (err) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-login">ایمیل یا نام کاربری خود را وارد کنید</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.email}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-login">رمز عبور</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id="password-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Enter password"
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.password}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}

            <Grid item xs={12}>
              {/* Captcha */}
              <div>
                <LoadCanvasTemplate style={{ color: 'red', background: 'pink' }} />
                <TextField
                  p="2"
                  id="captcha"
                  name="captcha"
                  label="Captcha"
                  variant="outlined"
                  value={values.captcha}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.captcha && errors.captcha)}
                />
                {touched.captcha && errors.captcha && (
                  <FormHelperText error id="standard-weight-helper-text-captcha">
                    {errors.captcha}
                  </FormHelperText>
                )}
              </div>
              <hr />
              <AnimateButton>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default AuthLogin;
