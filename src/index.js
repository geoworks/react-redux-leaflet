import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import litePropsReducer from './reducers/litePropsReducer';

const reducer = combineReducers({ liteProps: litePropsReducer });
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
