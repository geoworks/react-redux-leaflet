import React from 'react';
import { Lmap, reducers as lmapReducers } from '../../src';
import { Map } from 'immutable';
import L from 'leaflet';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutablejs';

const simpleReduxStore = createStore(combineReducers(lmapReducers));

const SimpleRedux = () => (
  <Provider store={simpleReduxStore}>
    <div>
      <h4>Simple Redux usage</h4>
      <div style={{ width: 300, height: 300 }}>
        <Lmap
          lmapId="simpleRedux"
          defaultCenter={new Map({ x: 44, y: 56 })}
          defaultZoom={5}
          defaultLayers={
            [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
          }
        />
      </div>
    </div>
  </Provider>
);

export default SimpleRedux;
