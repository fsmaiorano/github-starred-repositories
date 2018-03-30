import React from 'react';
import PropTypes from 'prop-types';

import './icon-button.scss';

import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import SwapVertIcon from 'material-ui-icons/SwapVert';

const IconButtons = props => (
    <div className="container-sort">
        <Tooltip id="tooltip-icon" title="Sort Repositories" placement="left">
            <IconButton color="primary" onClick={props.click}>
                <SwapVertIcon />
            </IconButton>
        </Tooltip>
    </div>
)

IconButtons.propTypes = {
    click: PropTypes.func.isRequired,
};

export default IconButtons;