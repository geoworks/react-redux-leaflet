import { Map } from 'immutable';

import {
  LMAP_DOZOOM,
  LMAP_SETZOOM,
} from './actionTypes';

const defaultState = new Map({
  center: new Map({ x: 44, y: 56 }),
  zoom: 5,
});

export default function lmapItemReducer(state = defaultState, action) {
  switch (action.type) {
    case LMAP_DOZOOM:
      return state.update('zoom', zoom => zoom + action.zoomIncrement);

    case LMAP_SETZOOM:
      return state.set('zoom', action.zoom);

    default:
      return state;
  }
}
