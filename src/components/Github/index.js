import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GithubActions } from 'store/ducks/github';

import './github.scss';

import doOrderBy from 'lodash/orderBy';

import api from 'shared/api/api';
import GithubRepository from './GithubRepository';
import { Input, FloatButton, OrderBy, IconButtons, Filter } from 'shared/template';

class Github extends Component {

    state = {
        sort: 'asc',
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

    applyFilter = (filter, repositories, listRepositories) => {
        const list = listRepositories.length > 0 ? listRepositories : repositories;
        const filteredList = repositories.filter(f => f.language === filter);
        this.setState({ listRepositories: filteredList, activeFilter: filter });
    }

    applyOrderBy = (orderBy, repositories, listRepositories) => {
        const { sort } = this.state;
        const list = listRepositories.length > 0 ? listRepositories : repositories;
        this.setState({ sort: sort === 'asc' ? 'desc' : 'asc' })
        const orderedList = orderBy !== "" ? doOrderBy(list, [repo => repo[`${orderBy}`.toLocaleLowerCase()]], [sort]) : doOrderBy(list, [repo => repo.id], [sort]);
        this.setState({ listRepositories: orderedList, activeOrderBy: orderBy });
    }

    doSort = () => {
        const { listRepositories, activeOrderBy } = this.state;
        const { repositories } = this.props;

        const showRepositories = listRepositories.length > 0 ? listRepositories : repositories;

        this.applyOrderBy(activeOrderBy, showRepositories);
    }

    render() {
        const { activeFilter, activeOrderBy, listRepositories } = this.state;
        const { repositories, filter, orderBy, languages } = this.props;

        if (activeFilter !== filter)
            this.applyFilter(filter, repositories, listRepositories);

        if (activeOrderBy !== orderBy)
            this.applyOrderBy(orderBy, repositories, listRepositories);

        const showRepositories = this.state.listRepositories.length > 0 ? this.state.listRepositories : repositories;

        return (
            <div>
                <div >
                    <Input onTyping={() => this.searchByUsername} label="Repository" type="text" />
                    <FloatButton color="primary" label="Search" icon="search" click={this.doSearch} />
                </div>
                <div>
                    {
                        showRepositories.length > 0 ? (
                            <div>
                                <OrderBy />
                                <Filter filters={languages} />
                                <IconButtons click={this.doSort} />
                            </div>) : ""
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
    filter: state.github.filter,
    orderBy: state.github.orderBy,
    languages: state.github.languages,
    repositories: state.github.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(GithubActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Github);
