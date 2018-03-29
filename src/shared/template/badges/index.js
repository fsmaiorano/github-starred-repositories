import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './badges.scss';

import star from 'shared/assets/icons/star.svg';
import eye from 'shared/assets/icons/eye.svg';
import issueOpened from 'shared/assets/icons/issue-opened.svg';
import repoForked from 'shared/assets/icons/repo-forked.svg';

import Icon from 'material-ui/Icon';
import Badge from 'material-ui/Badge';
import Tooltip from 'material-ui/Tooltip';

class Badges extends Component {

    getIcon = (iconName) => {
        switch(iconName){
            case 'star': return star;
            case 'eye': return eye;
            case 'issueOpened': return issueOpened;
            case 'repoForked': return repoForked;
        }
    }

    getTooltip = (iconName) => {
        switch(iconName){
            case 'star': return "Star";
            case 'eye': return "Watching";
            case 'issueOpened': return "Issues Opened";
            case 'repoForked': return "Fork";
        }
    }

    render(){
        const { icon, count } = this.props;
        return(
            <div>
            <Tooltip id="tooltip-icon" title={this.getTooltip(icon)}>
                <Badge className="" badgeContent={count} color="primary">
                    <img src={this.getIcon(icon)} className="badge-img" />
                </Badge>
            </Tooltip>
        </div>
        )
    }
}

export default Badges;