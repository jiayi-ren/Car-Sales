import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { FeaturesReducer } from './reducers/featuresReducer';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(FeaturesReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
