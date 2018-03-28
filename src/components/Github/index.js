import React, { Component } from 'react';

import './github.scss';

import api from 'shared/api/api';

import { Input, FloatButton } from 'shared/template';

class Github extends Component {

    state = {
        username: '',
        isLoading: false,
    }

    searchByUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    doSearch = async () => {
        const { username } = this.state;
        this.setState({ isLoading: true });

        const response = await api.get(`/users/${username}/starred`);
    }

    render() {
        return (
            <div className="container">
                <Input onTyping={() => this.searchByUsername} label="Repository" type="text" />
                <FloatButton color="primary" label="Search" icon="search" onclick={this.doSearch} />
            </div>
        )
    }
}

export default Github;
