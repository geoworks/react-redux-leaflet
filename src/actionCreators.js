import {
  LMAP_REGISTER,
  LMAP_UNREGISTER,
  LMAP_RESIZED,
  LMAP_DOZOOM,
  LMAP_SETZOOM,
  LMAP_ZOOM_STARTED,
  LMAP_ZOOM_ENDED,
  LMAP_MOVE_STARTED,
  LMAP_MOVE_ENDED,
  LMAP_SET_CENTER,
  LMAP_POPUP_OPENED,
  LMAP_POPUP_CLOSED,
  LMAP_MOUSE_DOWN,
  LMAP_MOUSE_UP,
  LMAP_MOUSE_OVER,
  LMAP_MOUSE_OUT,
  LMAP_MOUSE_MOVED,
  LMAP_SET_BOUNDS,
  LMAP_SET_VIEW,
  LMAP_SET_MIN_ZOOM,
  LMAP_SET_MAX_ZOOM,
  LMAP_SET_MAX_BOUNDS,
} from './lib/actionTypes';
import lmapNss from './lmapNss';
import lmapItemReducer from './lib/lmapItemReducer';
import {
  latLngToImXYmap,
  pointToImXYmap,
  latlngBoundsToImXYmap,
  xyMapTolatlngBounds,
} from './lib/conversions';

const defaultMapState = lmapItemReducer(undefined, { type: null });

export const registerLmap =
  (initialMapState, lmapId) => ({
    type: LMAP_REGISTER,
    lmapId,
    initialMapState: initialMapState || defaultMapState,
  })
;

export const unregisterLmap = (lmapId) => ({
  type: LMAP_UNREGISTER,
  lmapId,
});

export const mapResized = (newSize, lmapId) => ({
  type: LMAP_RESIZED,
  lmapId,
  newSize: pointToImXYmap(newSize),
});

export const zoomStarted = (lmapId) => ({
  type: LMAP_ZOOM_STARTED,
  lmapId,
});

export const zoomEnded = (lmapId) => ({
  type: LMAP_ZOOM_ENDED,
  lmapId,
});

export const moveStarted = (lmapId) => ({
  type: LMAP_MOVE_STARTED,
  lmapId,
});

export const moveEnded = (lmapId) => ({
  type: LMAP_MOVE_ENDED,
  lmapId,
});

export const setCenter = (center, lmapId) => ({
  type: LMAP_SET_CENTER,
  lmapId,
  center: latLngToImXYmap(center),
});

export const doZoom = (zoomIncrement, lmapId) => ({
  type: LMAP_DOZOOM,
  lmapId,
  zoomIncrement,
});

export const setZoom = (zoom, lmapId) => ({
  type: LMAP_SETZOOM,
  lmapId,
  zoom,
});

export const popupOpened = (lmapId) => ({
  type: LMAP_POPUP_OPENED,
  lmapId,
});

export const popupClosed = (lmapId) => ({
  type: LMAP_POPUP_CLOSED,
  lmapId,
});

export const mouseDown = (lmapId) => ({
  type: LMAP_MOUSE_DOWN,
  lmapId,
});

export const mouseUp = (lmapId) => ({
  type: LMAP_MOUSE_UP,
  lmapId,
});

export const mouseOver = (lmapId) => ({
  type: LMAP_MOUSE_OVER,
  lmapId,
});

export const mouseOut = (lmapId) => ({
  type: LMAP_MOUSE_OUT,
  lmapId,
});

// As an exception this high freq mouse event fires passes
// L.LatLng and Point types, to save an extra conversion step
// at reducer side, which would otherwise create many new objects
// of Immutable.Map type.
export const mouseMoved = (latlng, point, lmapId) => ({
  type: LMAP_MOUSE_MOVED,
  lmapId,
  latlng,
  point,
});

export const setBounds = (bounds, lmapId) => ({
  type: LMAP_SET_BOUNDS,
  lmapId,
  bounds: latlngBoundsToImXYmap(bounds),
});

export const setView = (center, zoom, lmapId) => ({
  type: LMAP_SET_VIEW,
  lmapId,
  center: latLngToImXYmap(center),
  zoom,
});

export const setZoomAroundGeoPoint = (center, zoom, lmapId) => {
  // Modeled after leaflet implementation.
  const { leafletMap } = lmapNss.lmaps[lmapId];
  const scale = leafletMap.getZoomScale(zoom);
  const viewHalf = leafletMap.getSize().divideBy(2);
  const containerPoint = leafletMap.latLngToContainerPoint(center);
  const centerOffset = containerPoint
    .subtract(viewHalf)
    .multiplyBy(1 - 1 / scale)
  ;
  const newCenter = leafletMap.containerPointToLatLng(
    (viewHalf.add(centerOffset))
  );
  return {
    type: LMAP_SET_VIEW,
    lmapId,
    center: latLngToImXYmap(newCenter),
    zoom,
  };
};

export const setZoomAroundPixelPoint = (point, zoom, lmapId) => {
  // Modeled after leaflet implementation.
  const { leafletMap } = lmapNss.lmaps[lmapId];
  const scale = leafletMap.getZoomScale(zoom);
  const viewHalf = leafletMap.getSize().divideBy(2);
  const containerPoint = point;
  const centerOffset = containerPoint
    .subtract(viewHalf)
    .multiplyBy(1 - 1 / scale)
  ;
  const newCenter = leafletMap.containerPointToLatLng(
    (viewHalf.add(centerOffset))
  );
  return {
    type: LMAP_SET_VIEW,
    lmapId,
    center: latLngToImXYmap(newCenter),
    zoom,
  };
};

export const fitBounds = (bounds, lmapId) => {
  // Relies on Leaflet internal API. Maybe dangerous.
  const { leafletMap } = lmapNss.lmaps[lmapId];
  const latLngBounds = xyMapTolatlngBounds(bounds);
  /* eslint-disable no-underscore-dangle */
  const { center, zoom } =
    leafletMap._getBoundsCenterZoom(latLngBounds)
  ;
  return {
    type: LMAP_SET_VIEW,
    lmapId,
    center: latLngToImXYmap(center),
    zoom,
  };
};

export const setMinZoom = (minZoom, lmapId) => ({
  type: LMAP_SET_MIN_ZOOM,
  lmapId,
  minZoom,
});

export const setMaxZoom = (maxZoom, lmapId) => ({
  type: LMAP_SET_MAX_ZOOM,
  lmapId,
  maxZoom,
});

export const setMaxBounds = (maxBounds, lmapId) => ({
  type: LMAP_SET_MAX_BOUNDS,
  lmapId,
  maxBounds: latlngBoundsToImXYmap(maxBounds),
});
