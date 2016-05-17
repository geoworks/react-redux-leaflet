// http://leafletjs.com/reference-1.0.0.html#map-event
const eventList = {
  baselayerchange: 'onBaseLayerChange',
  overlayadd: 'onOverlayAdd',
  overlayremove: 'onOverlayRemove',

  layeradd: 'onLayerAdd',
  layerremove: 'onLayerRemove',

  zoomlevelschange: 'onZoomLevelsChange',
  resize: 'onResize',
  unload: 'onUnload',
  viewreset: 'onViewReset',
  load: 'onLoad',
  zoomstart: 'onZoomStart',
  movestart: 'onMoveStart',
  zoom: 'onZoom',
  move: 'onMove',
  zoomend: 'onZoomEnd',
  moveend: 'onMoveEnd',

  popupopen: 'onPopupOpen',
  popupclose: 'onPopupClose',
  autopanstart: 'onAutoPanStart',

  click: 'onClick',
  dblclick: 'onDblClick',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  mouseover: 'onMouseOver',
  mouseout: 'onMouseOut',
  mousemove: 'onMouseMove',
  contextmenu: 'onContextMenu',
  keypress: 'onKeyPress',
  preclick: 'onPreClick',

  zoomanim: 'onZoomAnim',

  locationerror: 'onLocationError',
  locationfound: 'onLocationFound',
};

export default eventList;
