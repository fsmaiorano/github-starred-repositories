import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import SwapVertIcon from 'material-ui-icons/SwapVert';

import './icon-button.scss'; 

const IconButtons = props => (
    <div className="container-sort">
        <IconButton color="primary" onClick={props.click}>
            <SwapVertIcon />
        </IconButton>
    </div>
)

IconButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default IconButtons;