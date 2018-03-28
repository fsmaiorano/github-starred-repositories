import React, { Component } from 'react';

import './github.scss';

import { Input, FloatButton } from 'shared/template';
import { debounce } from 'rxjs/operators';

class Github extends Component {

    state = {
        username: '',
    }

    searchByUsername = (event) => {
        if(event){
        console.log(event.target.value)
        }
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