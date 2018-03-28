import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Navbar = props => (
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="title" color="inherit">
                {props.title}
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Navbar;