import lmapNss from '../lmapNss';
import {
  mapResized,
  zoomStarted,
  zoomEnded,
  setZoom,
  moveStarted,
  moveEnded,
  setCenter,
  popupOpened,
  popupClosed,
  mouseUp,
  mouseDown,
  mouseOver,
  mouseOut,
  mouseMoved,
  setBounds,
} from '../actionCreators';

/* TODO */ /* eslint-disable no-unused-vars */
const eventActionHooks = {
  onResize: (orgEvent, lmapId) => ([
    mapResized(lmapNss.lmaps[lmapId].leafletMap.getSize(), lmapId),
  ]),

  onZoomStart: (orgEvent, lmapId) => ([zoomStarted(lmapId)]),

  onMoveStart: (orgEvent, lmapId) => ([moveStarted(lmapId)]),

  onZoomEnd: (orgEvent, lmapId) => ([
    zoomEnded(lmapId),
    setZoom(lmapNss.lmaps[lmapId].leafletMap.getZoom(), lmapId),
    setBounds(lmapNss.lmaps[lmapId].leafletMap.getBounds(), lmapId),
  ]),

  onMoveEnd: (orgEvent, lmapId) => ([
    moveEnded(lmapId),
    setCenter(lmapNss.lmaps[lmapId].leafletMap.getCenter(), lmapId),
    setBounds(lmapNss.lmaps[lmapId].leafletMap.getBounds(), lmapId),
  ]),

  onPopupOpen: (orgEvent, lmapId) => ([
    popupOpened(lmapId),
  ]),

  onPopupClose: (orgEvent, lmapId) => ([
    popupClosed(lmapId),
  ]),

  onMouseDown: (orgEvent, lmapId) => ([
    mouseDown(lmapId),
  ]),

  onMouseUp: (orgEvent, lmapId) => ([
    mouseUp(lmapId),
  ]),

  onMouseOver: (orgEvent, lmapId) => ([
    mouseOver(lmapId),
  ]),

  onMouseOut: (orgEvent, lmapId) => ([
    mouseOut(lmapId),
  ]),

  onMouseMove: (orgEvent, lmapId) => ([
    mouseMoved(orgEvent.latlng, orgEvent.containerPoint, lmapId),
  ]),
};

export default eventActionHooks;
