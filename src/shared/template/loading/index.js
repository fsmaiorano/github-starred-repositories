import React from 'react';
import PropTypes from 'prop-types';

import { LinearProgress } from 'material-ui/Progress';

const Loading = () => (
    <div className="loading">
        <LinearProgress />
    </div>
)

export default Loading;