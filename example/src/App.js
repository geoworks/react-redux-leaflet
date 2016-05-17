import React from 'react';
import LmapLite from '../../src/LmapLite';
import { Map } from 'immutable';
import L from 'leaflet';

/* eslint-disable react/prefer-stateless-function */
const App = () => (
  <div style={{ width: 400, height: 400 }}>
    <LmapLite
      lmapId="myMap"
      defaultCenter={new Map({ x: 44, y: 56 })}
      defaultZoom={5}
      defaultLayers={
        [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
      }
    />
  </div>
);

export default App;
