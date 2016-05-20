import { Map } from 'immutable';

export const latLngToImXYmap = (latLng) =>
  new Map({ x: latLng.lat, y: latLng.lng })
;

export const pointToImXYmap = (point) =>
  new Map({ x: point.x, y: point.y })
;
