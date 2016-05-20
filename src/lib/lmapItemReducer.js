import { Map } from 'immutable';
import { latLngToImXYmap } from './conversions';

import {
  LMAP_DOZOOM,
  LMAP_SETZOOM,
  LMAP_ZOOM_STARTED,
  LMAP_ZOOM_ENDED,
  LMAP_MOVE_STARTED,
  LMAP_MOVE_ENDED,
  LMAP_SET_CENTER,
} from './actionTypes';

const defaultState = new Map({
  center: new Map({ x: 44, y: 56 }),
  zoom: 5,
});

export default function lmapItemReducer(state = defaultState, action) {
  switch (action.type) {
    case LMAP_DOZOOM:
      return state.get('zoom') !== undefined ?
        state.update('zoom', zoom => zoom + action.zoomIncrement) :
        state;

    case LMAP_SETZOOM:
      return state.set('zoom', action.zoom);

    case LMAP_ZOOM_STARTED:
      return state.set('isZooming', true);

    case LMAP_ZOOM_ENDED:
      return state.set('isZooming', false);

    case LMAP_MOVE_STARTED:
      return state.set('isMoving', true);

    case LMAP_MOVE_ENDED:
      return state.set('isMoving', false);

    case LMAP_SET_CENTER:
      return state.set('center', latLngToImXYmap(action.center));

    default:
      return state;
  }
}
