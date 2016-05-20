import { Map } from 'immutable';

export const latLngToImXYmap = (latLng) =>
  new Map({ x: latLng.lat, y: latLng.lng })
;

export const pointToImXYmap = (point) =>
  new Map({ x: point.x, y: point.y })
;

export const latlngBoundsToImXYmap = (latLngBounds) => {
  const sw = latLngBounds.getSouthWest();
  const ne = latLngBounds.getNorthEast();
  return new Map({
    x1: sw.lat, y1: sw.lng,
    x2: ne.lat, y2: ne.lng,
  });
};
