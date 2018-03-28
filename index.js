import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './src/app.js';
import { Navbar } from './src/shared/template';

ReactDOM.render(
    <div>
        <Navbar title={'Github Starred Repositories'} />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
    , document.getElementById('root'));