import React, { Component } from 'react';

import './github.scss';

import { Input, FloatButton } from 'shared/template';

class Github extends Component {
    render() {
        return (
            <div className="container">
                <Input label="Repository" type="text" />
                <FloatButton color="primary" label="Search" icon="search" />
            </div>
        )
    }
}

export default Github;