import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GithubActions } from 'store/ducks/github';

import './github.scss';

import doOrderBy from 'lodash/orderBy';

import api from 'shared/api/api';
import GithubRepository from './GithubRepository';
import { Input, FloatButton, OrderBy } from 'shared/template';

class Github extends Component {

    state = {
        username: '',
        activeFilter: '',
        activeOrderBy: '',
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

    applyFilter = (filter, repositories) => {
        console.log(filter);
    }

    applyOrderBy = (orderBy, repositories) => {

        const orderedList = doOrderBy(repositories, [repo => repo[`${orderBy}`.toLocaleLowerCase()]], ['asc']);
        this.setState({ listRepositories: orderedList, activeOrderBy: orderBy });
    }

    render() {
        const { activeFilter, activeOrderBy } = this.state;
        const { repositories, filter, orderBy } = this.props;

        if (activeFilter !== filter)
            this.applyFilter(orderBy, repositories);

        if (activeOrderBy !== orderBy)
            this.applyOrderBy(orderBy, repositories);

        const showRepositories = this.state.listRepositories.length > 0 ? this.state.listRepositories : repositories;

        return (
            <div>
                <div >
                    <Input onTyping={() => this.searchByUsername} label="Repository" type="text" />
                    <FloatButton color="primary" label="Search" icon="search" click={this.doSearch} />
                </div>
                <div>
                    {
                        showRepositories.length > 0 ? <OrderBy /> : ""
                    }
                </div>
                <div className="container">
                    {
                        showRepositories.length > 0 && showRepositories.map(repo => (
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
    filter: state.github.filter,
    orderBy: state.github.orderBy,
});

const mapDispatchToProps = dispatch => bindActionCreators(GithubActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Github);
