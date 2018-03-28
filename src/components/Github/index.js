import React, { Component } from 'react';

import './github.scss';

import api from 'shared/api/api';

import { Input, FloatButton } from 'shared/template';

class Github extends Component {

    state = {
        username: '',
    }

    componentDidMount() {
    }

    searchByUsername = async (event) => {
        console.log(event.target.value)
        const username = event.target.value;
        this.setState({ username });

        const response = await api.get(`/users/${username}`);
    }

    render() {
        return (
            <div className="container">
                <Input onTyping={() => this.searchByUsername} label="Repository" type="text" />
                <FloatButton color="primary" label="Search" icon="search" />
            </div>
        )
    }
}

export default Github;
