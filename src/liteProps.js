import L from 'leaflet';
import { Map } from 'immutable';

const liteProps = {
  // LmapLite "Native" props

  lmapId: {
    descr: 'Lmap unique Id (string), a required property.',
    type: 'string',
    required: true,
    leafletName: false,
    leafletDocUrl: false,
    defaultValue: 'myLmap',
  },

  MapCreate: {
    descr: 'Event fired after map DOM element has been mounted and leaflet map has been created.',
    type: 'function',
    leafletName: false,
    leafletDocUrl: false,
  },

  disableControl: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: false,
    leafletDocUrl: false,
  },

  isAnimating: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: false,
    leafletDocUrl: false,
  },

  // Leaflet "inherited" props

  defaultPreferCanvas: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'preferCanvas',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-prefercanvas',
  },

  attributionControl: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'attributionControl',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-attributioncontrol',
  },

  defaultAttributionControl: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'attributionControl',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-attributioncontrol',
  },

  zoomControl: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'zoomControl',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomcontrol',
  },

  defaultZoomControl: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'zoomControl',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomcontrol',
  },

  defaultClosePopupOnClick: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'closePopupOnClick',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-closepopuponclick',
  },

  defaultZoomSnap: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'zoomSnap',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomsnap',
  },

  defaultZoomDelta: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'zoomDelta',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomdelta',
  },

  defaultTrackResize: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'trackResize',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-trackresize',
  },

  boxZoom: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'boxZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-boxzoom',
  },

  defaultBoxZoom: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'boxZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-boxzoom',
  },

  doubleClickZoom: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'doubleClickZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-doubleclickzoom',
  },

  defaultDoubleClickZoom: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'doubleClickZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-doubleclickzoom',
  },

  dragging: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'dragging',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-dragging',
  },

  defaultDragging: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'dragging',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-dragging',
  },

  defaultCrs: {
    descr: '-- Missing property description --',
    type: 'object',
    leafletName: 'crs',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-crs',
  },

  center: {
    descr: '-- Missing property description --',
    type: 'map_xy',
    leafletName: 'center',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-center',
  },

  defaultCenter: {
    descr: '-- Missing property description --',
    type: 'map_xy',
    leafletName: 'center',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-center',
    defaultValue: new Map({ x: 0, y: 0 }),
  },

  zoom: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'zoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoom',
  },

  defaultZoom: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'zoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoom',
    defaultValue: 2,
  },

  minZoom: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'minZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-minzoom',
  },

  defaultMinZoom: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'minZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-minzoom',
  },

  maxZoom: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'maxZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxzoom',
  },

  defaultMaxZoom: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'maxZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxzoom',
    defaultValue: 5,
  },

  layers: {
    descr: '-- Missing property description --',
    type: 'array',
    leafletName: 'layers',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-layers',
    possibleValues: {
      '[]': [],
      "[L.tileLayer('osmtiles/{z}/{x}/{y}.png']":
        [L.tileLayer('osmtiles/{z}/{x}/{y}.png')],
      "[L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png']":
        [L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')],
    },
  },

  defaultLayers: {
    descr: '-- Missing property description --',
    type: 'array',
    leafletName: 'layers',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-layers',
    possibleValues: {
      '[]': [],
      "[L.tileLayer('osmtiles/{z}/{x}/{y}.png']":
        [L.tileLayer('osmtiles/{z}/{x}/{y}.png')],
      "[L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png']":
        [L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')],
    },
    defaultValue: "[L.tileLayer('osmtiles/{z}/{x}/{y}.png']",
  },

  maxBounds: {
    descr: '-- Missing property description --',
    type: 'map_x1y1x2y2',
    leafletName: 'maxBounds',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxbounds',
  },

  defaultMaxBounds: {
    descr: '-- Missing property description --',
    type: 'map_x1y1x2y2',
    leafletName: 'maxBounds',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxbounds',
  },

  defaultRenderer: {
    descr: '-- Missing property description --',
    type: 'object',
    leafletName: 'renderer',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-renderer',
  },

  defaultFadeAnimation: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'fadeAnimation',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-fadeanimation',
  },

  defaultMarkerZoomAnimation: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'markerZoomAnimation',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-markerzoomanimation',
  },

  defaultTransform3DLimit: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'transform3DLimit',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-transform3dlimit',
  },

  defaultZoomAnimation: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'zoomAnimation',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomanimation',
  },

  defaultZoomAnimationThreshold: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'zoomAnimationThreshold',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomanimationthreshold',
  },

  defaultInertia: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'inertia',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-inertia',
  },

  defaultInertiaDeceleration: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'inertiaDeceleration',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-inertiadeceleration',
  },

  defaultInertiaMaxSpeed: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'inertiaMaxSpeed',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-inertiamaxspeed',
  },

  defaultEaseLinearity: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'easeLinearity',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-easelinearity',
  },

  defaultWorldCopyJump: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'worldCopyJump',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-worldcopyjump',
  },

  defaultMaxBoundsViscosity: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'maxBoundsViscosity',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxboundsviscosity',
  },

  keyboard: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'keyboard',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-keyboard',
  },

  defaultKeyboard: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'keyboard',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-keyboard',
  },

  defaultKeyboardPanDelta: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'keyboardPanDelta',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-keyboardpandelta',
  },

  scrollWheelZoom: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'scrollWheelZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-scrollwheelzoom',
  },

  defaultScrollWheelZoom: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'scrollWheelZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-scrollwheelzoom',
  },

  defaultWheelDebounceTime: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'wheelDebounceTime',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-wheeldebouncetime',
  },

  defaultWheelPxPerZoomLevel: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'wheelPxPerZoomLevel',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-wheelpxperzoomlevel',
  },

  tap: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'tap',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-tap',
  },

  defaultTap: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'tap',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-tap',
  },

  defaultTapTolerance: {
    descr: '-- Missing property description --',
    type: 'number',
    leafletName: 'tapTolerance',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-taptolerance',
  },

  touchZoom: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'touchZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-touchzoom',
  },

  defaultTouchZoom: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'touchZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-touchzoom',
  },

  defaultBounceAtZoomLimits: {
    descr: '-- Missing property description --',
    type: 'boolean',
    leafletName: 'bounceAtZoomLimits',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-bounceatzoomlimits',
  },

  onBaseLayerChange: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'baselayerchange',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-baselayerchange',
  },

  onOverlayAdd: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'overlayadd',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-overlayadd',
  },

  onOverlayRemove: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'overlayremove',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-overlayremove',
  },

  onLayerAdd: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'layeradd',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-layeradd',
  },

  onLayerRemove: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'layerremove',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-layerremove',
  },

  onZoomLevelsChange: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'zoomlevelschange',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomlevelschange',
  },

  onResize: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'resize',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-resize',
  },

  onUnload: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'unload',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-unload',
  },

  onViewReset: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'viewreset',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-viewreset',
  },

  onLoad: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'load',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-load',
  },

  onZoomStart: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'zoomstart',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomstart',
  },

  onMoveStart: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'movestart',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-movestart',
  },

  onZoom: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'zoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoom',
  },

  onMove: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'move',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-move',
  },

  onZoomEnd: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'zoomend',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomend',
  },

  onMoveEnd: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'moveend',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-moveend',
  },

  onPopupOpen: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'popupopen',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-popupopen',
  },

  onPopupClose: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'popupclose',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-popupclose',
  },

  onAutoPanStart: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'autopanstart',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-autopanstart',
  },

  onClick: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'click',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-click',
  },

  onDblClick: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'dblclick',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-dblclick',
  },

  onMouseDown: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'mousedown',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mousedown',
  },

  onMouseUp: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'mouseup',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mouseup',
  },

  onMouseOver: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'mouseover',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mouseover',
  },

  onMouseOut: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'mouseout',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mouseout',
  },

  onMouseMove: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'mousemove',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mousemove',
  },

  onContextMenu: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'contextmenu',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-contextmenu',
  },

  onKeyPress: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'keypress',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-keypress',
  },

  onPreClick: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'preclick',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-preclick',
  },

  onZoomAnim: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'zoomanim',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomanim',
  },

  onLocationError: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'locationerror',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-locationerror',
  },

  onLocationFound: {
    descr: '-- Missing property description --',
    type: 'function',
    leafletName: 'locationfound',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-locationfound',
  },
};

export default liteProps;
