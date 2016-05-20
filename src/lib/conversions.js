import { Map } from 'immutable';
import L from 'leaflet';

export const latLngToImXYmap = (latLng) => {
  if (latLng instanceof Map) { return latLng; }
  return new Map({ x: latLng.lat, y: latLng.lng });
};

export const xyMapToLatLng = (point) => {
  if (point instanceof L.LatLng) { return point; }
  return L.latLng(point.get('x'), point.get('y'));
};

export const pointToImXYmap = (point) => {
  if (point instanceof Map) { return point; }
  return new Map({ x: point.x, y: point.y });
};

export const xyMapToPoint = (point) => {
  if (point instanceof L.Point) { return point; }
  return L.point(point.get('x'), point.get('y'));
};

export const latlngBoundsToImXYmap = (latLngBounds) => {
  if (latLngBounds instanceof Map) { return latLngBounds; }
  const sw = latLngBounds.getSouthWest();
  const ne = latLngBounds.getNorthEast();
  return new Map({
    x1: sw.lat, y1: sw.lng,
    x2: ne.lat, y2: ne.lng,
  });
};

export const xyMapTolatlngBounds = (bounds) => {
  if (bounds instanceof L.LatLng) { return bounds; }
  return L.latLngBounds([
    [bounds.get('x1'), bounds.get('y1')],
    [bounds.get('x2'), bounds.get('y2')],
  ]);
};
