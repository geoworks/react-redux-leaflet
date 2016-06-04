import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

// http://leafletjs.com/reference-1.0.0.html#map-option
const optionList = {
  // http://leafletjs.com/reference-1.0.0.html#map-prefercanvas
  preferCanvas: {
    defaultName: 'defaultPreferCanvas',
    propType: PropTypes.bool,
  },

  // Control options

  // http://leafletjs.com/reference-1.0.0.html#map-attributioncontrol
  attributionControl: {
    controlledName: 'attributionControl',
    defaultName: 'defaultAttributionControl',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-zoomcontrol
  zoomControl: {
    controlledName: 'zoomControl',
    defaultName: 'defaultZoomControl',
    propType: PropTypes.bool,
  },

  // Interaction Options

  // http://leafletjs.com/reference-1.0.0.html#map-closepopuponclick
  closePopupOnClick: {
    defaultName: 'defaultClosePopupOnClick',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-zoomsnap
  zoomSnap: {
    defaultName: 'defaultZoomSnap',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-zoomdelta
  zoomDelta: {
    defaultName: 'defaultZoomDelta',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-trackresize
  trackResize: {
    defaultName: 'defaultTrackResize',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-boxzoom
  boxZoom: {
    controlledName: 'boxZoom',
    defaultName: 'defaultBoxZoom',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-doubleclickzoom
  doubleClickZoom: {
    controlledName: 'doubleClickZoom',
    defaultName: 'defaultDoubleClickZoom',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-dragging
  dragging: {
    controlledName: 'dragging',
    defaultName: 'defaultDragging',
    propType: PropTypes.bool,
  },

  // Map State Options

  // http://leafletjs.com/reference-1.0.0.html#map-crs
  crs: {
    defaultName: 'defaultCrs',
    propType: PropTypes.object, // todo
  },

  // http://leafletjs.com/reference-1.0.0.html#map-center
  center: {
    controlledName: 'center',
    defaultName: 'defaultCenter',
    propType: ImmutablePropTypes.contains({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  },

  // http://leafletjs.com/reference-1.0.0.html#map-zoom
  zoom: {
    controlledName: 'zoom',
    defaultName: 'defaultZoom',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-minzoom
  minZoom: {
    controlledName: 'minZoom',
    defaultName: 'defaultMinZoom',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-maxzoom
  maxZoom: {
    controlledName: 'maxZoom',
    defaultName: 'defaultMaxZoom',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-layers
  layers: {
    controlledName: 'layers',
    defaultName: 'defaultLayers',
    propType: PropTypes.arrayOf(PropTypes.object), // todo
  },

  // http://leafletjs.com/reference-1.0.0.html#map-maxbounds
  maxBounds: {
    controlledName: 'maxBounds',
    defaultName: 'defaultMaxBounds',
    propType: ImmutablePropTypes.contains({
      xMin: PropTypes.number,
      yMin: PropTypes.number,
      xMax: PropTypes.number,
      yMax: PropTypes.number,
    }),
  },

  // http://leafletjs.com/reference-1.0.0.html#map-renderer
  renderer: {
    defaultName: 'defaultRenderer',
    propType: PropTypes.object, // todo
  },

  // Animation Options

  // http://leafletjs.com/reference-1.0.0.html#map-fadeanimation
  fadeAnimation: {
    defaultName: 'defaultFadeAnimation',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-markerzoomanimation
  markerZoomAnimation: {
    defaultName: 'defaultMarkerZoomAnimation',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-transform3dlimit
  transform3DLimit: {
    defaultName: 'defaultTransform3DLimit',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-zoomanimation
  zoomAnimation: {
    defaultName: 'defaultZoomAnimation',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-zoomanimationthreshold
  zoomAnimationThreshold: {
    defaultName: 'defaultZoomAnimationThreshold',
    propType: PropTypes.number,
  },

  // Panning Inertia Options

  // http://leafletjs.com/reference-1.0.0.html#map-inertia
  inertia: {
    defaultName: 'defaultInertia',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-inertiadeceleration
  inertiaDeceleration: {
    defaultName: 'defaultInertiaDeceleration',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-inertiamaxspeed
  inertiaMaxSpeed: {
    defaultName: 'defaultInertiaMaxSpeed',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-easelinearity
  easeLinearity: {
    defaultName: 'defaultEaseLinearity',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-worldcopyjump
  worldCopyJump: {
    defaultName: 'defaultWorldCopyJump',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-maxboundsviscosity
  maxBoundsViscosity: {
    defaultName: 'defaultMaxBoundsViscosity',
    propType: PropTypes.number,
  },

  // Keyboard Navigation Options

  // http://leafletjs.com/reference-1.0.0.html#map-keyboard
  keyboard: {
    controlledName: 'keyboard',
    defaultName: 'defaultKeyboard',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-keyboardpandelta
  keyboardPanDelta: {
    defaultName: 'defaultKeyboardPanDelta',
    propType: PropTypes.number,
  },

  // Mousewheel options

  // http://leafletjs.com/reference-1.0.0.html#map-scrollwheelzoom
  scrollWheelZoom: {
    controlledName: 'scrollWheelZoom',
    defaultName: 'defaultScrollWheelZoom',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-wheeldebouncetime
  wheelDebounceTime: {
    defaultName: 'defaultWheelDebounceTime',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-wheelpxperzoomlevel
  wheelPxPerZoomLevel: {
    defaultName: 'defaultWheelPxPerZoomLevel',
    propType: PropTypes.number,
  },

  // Touch interaction options

  // http://leafletjs.com/reference-1.0.0.html#map-tap
  tap: {
    controlledName: 'tap',
    defaultName: 'defaultTap',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-taptolerance
  tapTolerance: {
    defaultName: 'defaultTapTolerance',
    propType: PropTypes.number,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-touchzoom
  touchZoom: {
    controlledName: 'touchZoom',
    defaultName: 'defaultTouchZoom',
    propType: PropTypes.bool,
  },

  // http://leafletjs.com/reference-1.0.0.html#map-bounceatzoomlimits
  bounceAtZoomLimits: {
    defaultName: 'defaultBounceAtZoomLimits',
    propType: PropTypes.bool,
  },
};

export default optionList;
