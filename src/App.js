require('leaflet/dist/leaflet.css');

import React from 'react';
import { LmapLite } from 'react-redux-leaflet';
import { Map } from 'immutable';
import L from 'leaflet';

const App = () => (
  <div style={{ height: 400 }}>
    <LmapLite
      defaultCenter={new Map({ x: 0, y: 0 })}
      defaultZoom={2}
      defaultLayers={[
        L.tileLayer('osmtiles/{z}/{x}/{y}.png', {
          attribution: `
            &copy; <a href="http://osm.org/copyright">
            OpenStreetMap</a> contributors',
          `,
        }),
      ]}
      defaultMinZoom={0}
      defaultMaxZoom={5}
    />
  </div>
);

export default App;
