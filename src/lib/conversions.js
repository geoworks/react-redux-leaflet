import { Map } from 'immutable';

export const latLngToImXYmap = (latLng) =>
  new Map({ x: latLng.lat, y: latLng.lng })
;
