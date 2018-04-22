import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import { addSup } from './actions';
import App from './App.js';
window.store = store;
window.addSup = addSup;

// let Screen = () => <div><App /></div>;

let ui =
    <Provider store={store}>
        <App />
    </Provider>;

ReactDOM.render( ui, document.querySelector('#root') );