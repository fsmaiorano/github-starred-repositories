import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import Icon from 'material-ui/Icon';

import './badges.scss';

import star from 'shared/assets/icons/star.svg';
import eye from 'shared/assets/icons/eye.svg';
import issueOpened from 'shared/assets/icons/issue-opened.svg';
import repoForked from 'shared/assets/icons/repo-forked.svg';

class Badges extends Component {

    getIcon = (iconName) => {
        switch(iconName){
            case 'star': return star;
            case 'eye': return eye;
            case 'issueOpened': return issueOpened;
            case 'repoForked': return repoForked;
        }
    }

    render(){
        const { icon, count } = this.props;
        return(
            <div>
            <Badge className="" badgeContent={count} color="primary">
                <img src={this.getIcon(icon)} />
            </Badge>
        </div>
        )
    }
}

export default Badges;