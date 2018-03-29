import React from 'react';

import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import Icon from 'material-ui/Icon';

import './badges.scss';

const Badges = props => (
    <div>
        <Badge className="" badgeContent={4} color="primary">
            <Icon>{props.icon}</Icon>
        </Badge>
    </div>
)

export default Badges;