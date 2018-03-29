import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GithubActions } from 'store/ducks/github';

import './github.scss';

import api from 'shared/api/api';
import GithubRepository from './GithubRepository';
import { Input, FloatButton } from 'shared/template';

class Github extends Component {

    state = {
        username: '',
    }

    searchByUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    doSearch = async () => {
        const { username } = this.state;
        this.props.getStarredRepositoriesRequest(username);
    }

    render() {
        const { repositories } = this.props;
        return (
            <div>
            <div className="container">
                <Input onTyping={() => this.searchByUsername} label="Repository" type="text" />
                <FloatButton color="primary" label="Search" icon="search" click={this.doSearch} />
            </div>
            <div>
                {
                    repositories.length > 0 && repositories.map(repo => (
                            <GithubRepository key={repo.id} repository={repo} />
                    ))
                }
            </div>
            </div>
        )
    }
}

 const mapStateToProps = state => ({
     repositories: state.github.repositories,
 });

const mapDispatchToProps = dispatch => bindActionCreators(GithubActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Github);
