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
