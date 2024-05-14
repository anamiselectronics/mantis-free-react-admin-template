import React from 'react';
import MaskedInput from 'react-text-mask';
import { TextField } from '@mui/material';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(refInstance) => {
        inputRef(refInstance ? refInstance.inputElement : null);
      }}
      mask={[/\d/, /\d/, ' ', /[a-zA-Z]/, ' ', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
      onChange={(event) => {
        onChange({
          target: {
            name: props.name,
            value: event.target.value,
          },
        });
      }}
    />
  );
});

const CustomTextField = (props) => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: TextMaskCustom,
      }}
    />
  );
};

export default CustomTextField;
