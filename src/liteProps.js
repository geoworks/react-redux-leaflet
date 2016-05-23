import { Map } from 'immutable';

const liteProps = {
  defaultPreferCanvas: {
    type: Boolean,
    leafletName: 'preferCanvas',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-prefercanvas',
  },

  attributionControl: {
    type: Boolean,
    leafletName: 'attributionControl',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-attributioncontrol',
  },

  defaultAttributionControl: {
    type: Boolean,
    leafletName: 'attributionControl',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-attributioncontrol',
  },

  zoomControl: {
    type: Boolean,
    leafletName: 'zoomControl',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomcontrol',
  },

  defaultZoomControl: {
    type: Boolean,
    leafletName: 'zoomControl',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomcontrol',
  },

  defaultClosePopupOnClick: {
    type: Boolean,
    leafletName: 'closePopupOnClick',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-closepopuponclick',
  },

  defaultZoomSnap: {
    type: Number,
    leafletName: 'zoomSnap',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomsnap',
  },

  defaultZoomDelta: {
    type: Number,
    leafletName: 'zoomDelta',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomdelta',
  },

  defaultTrackResize: {
    type: Boolean,
    leafletName: 'trackResize',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-trackresize',
  },

  boxZoom: {
    type: Boolean,
    leafletName: 'boxZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-boxzoom',
  },

  defaultBoxZoom: {
    type: Boolean,
    leafletName: 'boxZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-boxzoom',
  },

  doubleClickZoom: {
    type: Boolean,
    leafletName: 'doubleClickZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-doubleclickzoom',
  },

  defaultDoubleClickZoom: {
    type: Boolean,
    leafletName: 'doubleClickZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-doubleclickzoom',
  },

  dragging: {
    type: Boolean,
    leafletName: 'dragging',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-dragging',
  },

  defaultDragging: {
    type: Boolean,
    leafletName: 'dragging',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-dragging',
  },

  defaultCrs: {
    type: Object,
    leafletName: 'crs',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-crs',
  },

  center: {
    type: Map,
    leafletName: 'center',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-center',
  },

  defaultCenter: {
    type: Map,
    leafletName: 'center',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-center',
  },

  zoom: {
    type: Number,
    leafletName: 'zoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoom',
  },

  defaultZoom: {
    type: Number,
    leafletName: 'zoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoom',
  },

  minZoom: {
    type: Number,
    leafletName: 'minZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-minzoom',
  },

  defaultMinZoom: {
    type: Number,
    leafletName: 'minZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-minzoom',
  },

  maxZoom: {
    type: Number,
    leafletName: 'maxZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxzoom',
  },

  defaultMaxZoom: {
    type: Number,
    leafletName: 'maxZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxzoom',
  },

  layers: {
    type: Array,
    leafletName: 'layers',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-layers',
  },

  defaultLayers: {
    type: Array,
    leafletName: 'layers',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-layers',
  },

  maxBounds: {
    type: Map,
    leafletName: 'maxBounds',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxbounds',
  },

  defaultMaxBounds: {
    type: Map,
    leafletName: 'maxBounds',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxbounds',
  },

  defaultRenderer: {
    type: Object,
    leafletName: 'renderer',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-renderer',
  },

  defaultFadeAnimation: {
    type: Boolean,
    leafletName: 'fadeAnimation',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-fadeanimation',
  },

  defaultMarkerZoomAnimation: {
    type: Boolean,
    leafletName: 'markerZoomAnimation',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-markerzoomanimation',
  },

  defaultTransform3DLimit: {
    type: Boolean,
    leafletName: 'transform3DLimit',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-transform3dlimit',
  },

  defaultZoomAnimation: {
    type: Boolean,
    leafletName: 'zoomAnimation',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomanimation',
  },

  defaultZoomAnimationThreshold: {
    type: Number,
    leafletName: 'zoomAnimationThreshold',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomanimationthreshold',
  },

  defaultInertia: {
    type: Boolean,
    leafletName: 'inertia',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-inertia',
  },

  defaultInertiaDeceleration: {
    type: Boolean,
    leafletName: 'inertiaDeceleration',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-inertiadeceleration',
  },

  defaultInertiaMaxSpeed: {
    type: Number,
    leafletName: 'inertiaMaxSpeed',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-inertiamaxspeed',
  },

  defaultEaseLinearity: {
    type: Number,
    leafletName: 'easeLinearity',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-easelinearity',
  },

  defaultWorldCopyJump: {
    type: Boolean,
    leafletName: 'worldCopyJump',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-worldcopyjump',
  },

  defaultMaxBoundsViscosity: {
    type: Number,
    leafletName: 'maxBoundsViscosity',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-maxboundsviscosity',
  },

  keyboard: {
    type: Boolean,
    leafletName: 'keyboard',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-keyboard',
  },

  defaultKeyboard: {
    type: Boolean,
    leafletName: 'keyboard',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-keyboard',
  },

  defaultKeyboardPanDelta: {
    type: Number,
    leafletName: 'keyboardPanDelta',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-keyboardpandelta',
  },

  scrollWheelZoom: {
    type: Number,
    leafletName: 'scrollWheelZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-scrollwheelzoom',
  },

  defaultScrollWheelZoom: {
    type: Number,
    leafletName: 'scrollWheelZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-scrollwheelzoom',
  },

  defaultWheelDebounceTime: {
    type: Number,
    leafletName: 'wheelDebounceTime',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-wheeldebouncetime',
  },

  defaultWheelPxPerZoomLevel: {
    type: Number,
    leafletName: 'wheelPxPerZoomLevel',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-wheelpxperzoomlevel',
  },

  tap: {
    type: Boolean,
    leafletName: 'tap',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-tap',
  },

  defaultTap: {
    type: Boolean,
    leafletName: 'tap',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-tap',
  },

  defaultTapTolerance: {
    type: Number,
    leafletName: 'tapTolerance',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-taptolerance',
  },

  touchZoom: {
    type: Boolean,
    leafletName: 'touchZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-touchzoom',
  },

  defaultTouchZoom: {
    type: Boolean,
    leafletName: 'touchZoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-touchzoom',
  },

  defaultBounceAtZoomLimits: {
    type: Boolean,
    leafletName: 'bounceAtZoomLimits',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-bounceatzoomlimits',
  },

  onBaseLayerChange: {
    type: Function,
    leafletName: 'baselayerchange',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-baselayerchange',
  },

  onOverlayAdd: {
    type: Function,
    leafletName: 'overlayadd',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-overlayadd',
  },

  onOverlayRemove: {
    type: Function,
    leafletName: 'overlayremove',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-overlayremove',
  },

  onLayerAdd: {
    type: Function,
    leafletName: 'layeradd',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-layeradd',
  },

  onLayerRemove: {
    type: Function,
    leafletName: 'layerremove',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-layerremove',
  },

  onZoomLevelsChange: {
    type: Function,
    leafletName: 'zoomlevelschange',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomlevelschange',
  },

  onResize: {
    type: Function,
    leafletName: 'resize',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-resize',
  },

  onUnload: {
    type: Function,
    leafletName: 'unload',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-unload',
  },

  onViewReset: {
    type: Function,
    leafletName: 'viewreset',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-viewreset',
  },

  onLoad: {
    type: Function,
    leafletName: 'load',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-load',
  },

  onZoomStart: {
    type: Function,
    leafletName: 'zoomstart',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomstart',
  },

  onMoveStart: {
    type: Function,
    leafletName: 'movestart',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-movestart',
  },

  onZoom: {
    type: Function,
    leafletName: 'zoom',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoom',
  },

  onMove: {
    type: Function,
    leafletName: 'move',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-move',
  },

  onZoomEnd: {
    type: Function,
    leafletName: 'zoomend',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomend',
  },

  onMoveEnd: {
    type: Function,
    leafletName: 'moveend',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-moveend',
  },

  onPopupOpen: {
    type: Function,
    leafletName: 'popupopen',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-popupopen',
  },

  onPopupClose: {
    type: Function,
    leafletName: 'popupclose',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-popupclose',
  },

  onAutoPanStart: {
    type: Function,
    leafletName: 'autopanstart',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-autopanstart',
  },

  onClick: {
    type: Function,
    leafletName: 'click',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-click',
  },

  onDblClick: {
    type: Function,
    leafletName: 'dblclick',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-dblclick',
  },

  onMouseDown: {
    type: Function,
    leafletName: 'mousedown',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mousedown',
  },

  onMouseUp: {
    type: Function,
    leafletName: 'mouseup',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mouseup',
  },

  onMouseOver: {
    type: Function,
    leafletName: 'mouseover',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mouseover',
  },

  onMouseOut: {
    type: Function,
    leafletName: 'mouseout',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mouseout',
  },

  onMouseMove: {
    type: Function,
    leafletName: 'mousemove',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-mousemove',
  },

  onContextMenu: {
    type: Function,
    leafletName: 'contextmenu',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-contextmenu',
  },

  onKeyPress: {
    type: Function,
    leafletName: 'keypress',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-keypress',
  },

  onPreClick: {
    type: Function,
    leafletName: 'preclick',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-preclick',
  },

  onZoomAnim: {
    type: Function,
    leafletName: 'zoomanim',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-zoomanim',
  },

  onLocationError: {
    type: Function,
    leafletName: 'locationerror',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-locationerror',
  },

  onLocationFound: {
    type: Function,
    leafletName: 'locationfound',
    leafletDocUrl: 'http://leafletjs.com/reference-1.0.0.html#map-locationfound',
  },
};

export default liteProps;
