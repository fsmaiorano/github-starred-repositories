import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const Input = props => (
    <TextField
    id="password-input"
    label={props.label}
    type={props.type}
    autoComplete="off"
    margin="normal"
    onChange={props.onTyping(event)}
  />
);

Input.propTypes = {
    classes: PropTypes.object.isRequired,
};
  

export default Input;