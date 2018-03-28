import React, { Component } from 'react';

import './github.scss';

import Input from 'shared/template/input';

class Github extends Component {
    render() {
        return (
            <div className="container">
                <h1>Github</h1>
                <Input label="Repository" type="text" />
            </div>
        )
    }
}

export default Github;