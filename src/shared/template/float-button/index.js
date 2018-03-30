import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

const FloatButton = props => (
    <Tooltip id="tooltip-icon" title="Search Repository" placement="right">
        <Button variant="fab" mini color={props.color} aria-label={props.label} onClick={props.click}>
            <Icon>{props.icon}</Icon>
        </Button>
    </Tooltip>
);

FloatButton.propTypes = {
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
};

export default FloatButton;
