import { Map } from 'immutable';

import {
  // Lmap list actions
  LMAP_REGISTER,
  LMAP_UNREGISTER,

  // Lmap item actions
  LMAP_DOZOOM,
  LMAP_SETZOOM,
} from './actionTypes';

import lmapItemReducer from './lmapItemReducer';

const defaultState = new Map();

export default function lmapMainReducer(state = defaultState, action) {
  switch (action.type) {
    case LMAP_REGISTER:
      return state.set(action.lmapId, action.initialMapState);

    case LMAP_UNREGISTER:
      return state.delete(action.lmapId);

    case LMAP_SETZOOM: /* falls through */
    case LMAP_DOZOOM:
      return state.update(action.lmapId, lmap => lmapItemReducer(lmap, action));

    default:
      return state;
  }
}
