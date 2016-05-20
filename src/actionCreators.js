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
} from './lib/actionTypes';

import lmapItemReducer from './lib/lmapItemReducer';

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
  newSize,
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
  center,
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

export const mouseMoved = (latlng, point, lmapId) => ({
  type: LMAP_MOUSE_MOVED,
  lmapId,
  latlng,
  point,
});
