import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GithubActions } from 'store/ducks/github';

import './github.scss';

import orderBy from 'lodash/orderBy';

import api from 'shared/api/api';
import GithubRepository from './GithubRepository';
import { Input, FloatButton, OrderBy } from 'shared/template';

class Github extends Component {

    state = {
        username: '',
        listRepositories: [],
    }

    searchByUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    doSearch = async () => {
        const { username } = this.state;
        if (username.length > 1)
            this.props.getStarredRepositoriesRequest(username);
    }

    applyFilter = (activeFilter, repositories) => {
        console.log(activeFilter);
    }
    
    applyOrderBy = (activeOrderBy, repositories) => {
        console.log(activeOrderBy);
        let z = orderBy(repositories, [repo => repo[`${activeOrderBy}`]], ['asc']);
    }

    render() {
        const { repositories, activeFilter, activeOrderBy } = this.props;
        
        if(activeFilter !== '')
            this.applyFilter(activeFilter, repositories);

       if(activeOrderBy !== '')
            this.applyOrderBy(activeOrderBy, repositories);

        return (
            <div>
                <div >
                    <Input onTyping={() => this.searchByUsername} label="Repository" type="text" />
                    <FloatButton color="primary" label="Search" icon="search" click={this.doSearch} />
                </div>
                <div>
                {
                    repositories.length > 0 ? <OrderBy /> : ""
                }
                </div>
                <div className="container">
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
    activeFilter: state.github.activeFilter,
    activeOrderBy: state.github.activeOrderBy,
});

const mapDispatchToProps = dispatch => bindActionCreators(GithubActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Github);
