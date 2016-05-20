import lmapNss from '../lmapNss';
import {
  mapResized,
  zoomStarted,
  zoomEnded,
  setZoom,
  moveStarted,
  moveEnded,
  setCenter,
} from '../actionCreators';

/* TODO */ /* eslint-disable no-unused-vars */
const eventActionHooks = {
  onResize: (orgEvent, lmapId) => ([
    mapResized(lmapNss.lmaps[lmapId].leafletMap.getSize(), lmapId),
  ]),

  onViewReset: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),

  onZoomStart: (orgEvent, lmapId) => ([zoomStarted(lmapId)]),

  onMoveStart: (orgEvent, lmapId) => ([moveStarted(lmapId)]),

  onZoomEnd: (orgEvent, lmapId) => ([
    zoomEnded(lmapId),
    setZoom(lmapNss.lmaps[lmapId].leafletMap.getZoom(), lmapId),
  ]),

  onMoveEnd: (orgEvent, lmapId) => ([
    moveEnded(lmapId),
    setCenter(lmapNss.lmaps[lmapId].leafletMap.getCenter(), lmapId),
  ]),

  onPopupOpen: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),

  onPopupClose: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),

  onMouseDown: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),

  onMouseUp: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),

  onMouseOver: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),

  onMouseOut: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),

  onMouseMove: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),

  onZoomAnim: (orgEvent, lmapId) => ([{
    type: 'LMAP_EMPTY_ACTION',
  }]),
};

export default eventActionHooks;
