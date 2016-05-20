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
  LMAP_SET_BOUNDS,
  LMAP_SET_VIEW,
  LMAP_SET_MIN_ZOOM,
  LMAP_SET_MAX_ZOOM,
  LMAP_SET_MAX_BOUNDS,
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
    case LMAP_DOZOOM: /* falls through */
    case LMAP_ZOOM_STARTED: /* falls through */
    case LMAP_ZOOM_ENDED: /* falls through */
    case LMAP_MOVE_STARTED: /* falls through */
    case LMAP_MOVE_ENDED: /* falls through */
    case LMAP_SET_CENTER: /* falls through */
    case LMAP_RESIZED: /* falls through */
    case LMAP_POPUP_OPENED: /* falls through */
    case LMAP_POPUP_CLOSED: /* falls through */
    case LMAP_MOUSE_DOWN: /* falls through */
    case LMAP_MOUSE_UP: /* falls through */
    case LMAP_MOUSE_OVER: /* falls through */
    case LMAP_MOUSE_OUT: /* falls through */
    case LMAP_MOUSE_MOVED: /* falls through */
    case LMAP_SET_BOUNDS: /* falls through */
    case LMAP_SET_VIEW: /* falls through */
    case LMAP_SET_MIN_ZOOM: /* falls through */
    case LMAP_SET_MAX_ZOOM: /* falls through */
    case LMAP_SET_MAX_BOUNDS:
      return state.update(
        action.lmapId, lmap => lmapItemReducer(lmap, action)
      );

    default:
      return state;
  }
}
