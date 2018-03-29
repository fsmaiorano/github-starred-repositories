import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { Loading } from 'shared/template';

const Navbar = ({ title, loading }) => (
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="title" color="inherit">
                {title}
            </Typography>
        </Toolbar>
        {
           loading ? <Loading /> : ""
        }
    </AppBar>
);

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Navbar;