import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import litePropsReducer from './reducers/litePropsReducer';
import lmapCyclerReducer from './reducers/lmapCyclerReducer';

const reducer = combineReducers({
  liteProps: litePropsReducer,
  lmapCycler: lmapCyclerReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
