require('./index.html');
require('leaflet/dist/leaflet.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';

import App from './App';

import lmapMainReducer from './lmap/lmapMainReducer';

const reducer = combineReducers({
  lmaps: lmapMainReducer,
});
const store = createStore(reducer);

import * as actionCreators from './lmap/actionCreators';
window.ac = actionCreators;
window.d = store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
