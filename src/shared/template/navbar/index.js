import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { Loading } from 'shared/template';

const Navbar = props => (
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="title" color="inherit">
                {props.title}
            </Typography>
        </Toolbar>
        {
           props.loading ? <Loading /> : ""
        }
    </AppBar>
);

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Navbar;