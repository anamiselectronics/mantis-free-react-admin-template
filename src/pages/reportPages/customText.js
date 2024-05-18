import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="00 # 000 (00)"
      definitions={{
        '#': /[a-z,ا-ی]/
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
      style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}
      autoFocus
      inputProps={{guide: true}}
      placeholder="6666666"
    
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
      style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    textmask: '',
    numberformat: '1320'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          autoFocus
          placeholder="6666666"
          inputProps= {{ guide: true }}
          style={{ direction: 'ltr', fontSize: '2rem' }}
        />
      </FormControl>
      <TextField
        label="react-number-format"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumericFormatCustom
        }}
        variant="standard"
        style={{ direction: 'ltr' }}
      />
    </Stack>
  );
}
