import { Map } from 'immutable';

import {
  // Lmap list actions
  LMAP_REGISTER,
  LMAP_UNREGISTER,

  // Lmap item actions
  LMAP_ZOOM_STARTED,
  LMAP_ZOOM_ENDED,
  LMAP_DOZOOM,
  LMAP_SETZOOM,
  LMAP_MOVE_STARTED,
  LMAP_MOVE_ENDED,
  LMAP_SET_CENTER,
  LMAP_RESIZED,
  LMAP_POPUP_OPENED,
  LMAP_POPUP_CLOSED,
  LMAP_MOUSE_DOWN,
  LMAP_MOUSE_UP,
  LMAP_MOUSE_OVER,
  LMAP_MOUSE_OUT,
  LMAP_MOUSE_MOVED,
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
    case LMAP_ZOOM_STARTED:
    case LMAP_ZOOM_ENDED:
    case LMAP_MOVE_STARTED:
    case LMAP_MOVE_ENDED:
    case LMAP_SET_CENTER:
    case LMAP_RESIZED:
    case LMAP_POPUP_OPENED:
    case LMAP_POPUP_CLOSED:
    case LMAP_MOUSE_DOWN:
    case LMAP_MOUSE_UP:
    case LMAP_MOUSE_OVER:
    case LMAP_MOUSE_OUT:
    case LMAP_MOUSE_MOVED:
      return state.update(
        action.lmapId, lmap => lmapItemReducer(lmap, action)
      );

    default:
      return state;
  }
}
