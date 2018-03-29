import React, { Component } from 'react';
import { connect } from 'react-redux';

import './app.scss';

import Github from './components/Github';
import { Navbar } from './shared/template';

class App extends Component {
    render() {
        const { isLoading } = this.props;
        return (
            <div>
                <Navbar title="Github Starred Repositories" loading={isLoading} />
                <div className="container">
                    <Github />
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    isLoading: state.github.isLoading,
});

export default connect(mapStateToProps)(App);

