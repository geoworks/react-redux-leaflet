import React from 'react';
import { LmapLite } from 'react-redux-leaflet';
import L from 'leaflet';
import { Map } from 'immutable';

const LmapContainer = () => (
  <LmapLite
    lmapId="myMap"
    defaultCenter={new Map({ x: 0, y: 0 })}
    defaultZoom={2}
    defaultLayers={[
      L.tileLayer('osmtiles/{z}/{x}/{y}.png', {
        attribution: `
          &copy; <a href="http://osm.org/copyright">
          OpenStreetMap</a> contributors
        `,
      }),
    ]}
    defaultMinZoom={0}
    defaultMaxZoom={5}
  />
);

export default LmapContainer;
