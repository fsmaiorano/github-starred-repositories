import React, { Component } from 'react';

import './app.scss';

import Github from './components/Github';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Github />
            </div>
        )
    }
};

export default App;

