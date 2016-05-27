import {
  LMAPCYCLER_DESTROY_MAP,
  LMAPCYCLER_RESTORE_MAP,
} from './lmapCyclerActionTypes';

const RELOAD_INTERVAL = 1 * 1000; // ms

export const destroyMap = () => ({
  type: LMAPCYCLER_DESTROY_MAP,
});

export const restoreMap = () => ({
  type: LMAPCYCLER_RESTORE_MAP,
});

export const reloadMap = () => (
  dispatch => {
    dispatch(destroyMap());
    setTimeout(() => {
      dispatch(restoreMap());
    }, RELOAD_INTERVAL);
  }
);
