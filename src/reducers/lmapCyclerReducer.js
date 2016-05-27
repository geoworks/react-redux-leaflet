import {
  LMAPCYCLER_DESTROY_MAP,
  LMAPCYCLER_RESTORE_MAP,
} from '../actions/lmapCyclerActionTypes';

const defaultState = {
  showMap: true,
};

export default function lmapCyclerReducer(state = defaultState, action) {
  switch (action.type) {
    case LMAPCYCLER_DESTROY_MAP:
      return { showMap: false };

    case LMAPCYCLER_RESTORE_MAP:
      return { showMap: true };

    default:
      return state;
  }
}
