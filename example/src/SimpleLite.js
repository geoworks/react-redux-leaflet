import React from 'react';
import { LmapLite } from '../../src';
import { Map } from 'immutable';
import L from 'leaflet';

const SimpleLite = () => (
  <div>
    <h4>Simple lite usage</h4>
    <div style={{ width: 300, height: 300 }}>
      <LmapLite
        lmapId="simpleLite"
        defaultCenter={new Map({ x: 44, y: 56 })}
        defaultZoom={5}
        defaultLayers={
          [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
        }
      />
    </div>
  </div>
);

export default SimpleLite;
