import {
  LMAP_REGISTER,
  LMAP_UNREGISTER,
  LMAP_DOZOOM,
  LMAP_SETZOOM,
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
