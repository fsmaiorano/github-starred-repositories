import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

const FloatButton = props => (
    <Button variant="fab" mini color={props.color} aria-label={props.label}>
          <Icon>{props.icon}</Icon>
    </Button>
);

FloatButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default FloatButton;
