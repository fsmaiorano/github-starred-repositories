import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'store';

import App from './src/app.js';
import { Navbar } from './src/shared/template';


ReactDOM.render(
    <div>
        <Navbar title={'Github Starred Repositories'} />
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </div>
    , document.getElementById('root'));