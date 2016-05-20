import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { Map } from 'immutable';

import eventList from './lib/eventList';
import optionList from './lib/optionList';
import lmapNss from './lmapNss';
import compare from './lib/compare';
import Changer from './lib/Changer';

function calcDefaultMapOptions(props) {
  const options = {};
  Object.keys(optionList).forEach(optName => {
    if (props[optionList[optName].controlledName]) {
      options[optName] = props[optionList[optName].controlledName];
      return;
    }
    if (props[optionList[optName].defaultName]) {
      options[optName] = props[optionList[optName].defaultName];
      return;
    }
  });
  if (options.center) {
    options.center = [options.center.get('x'), options.center.get('y')];
  }
  if (options.maxBounds) {
    options.maxBounds = [
      [options.maxBounds.get('xMin'), options.maxBounds.get('yMin')],
      [options.maxBounds.get('xMax'), options.maxBounds.get('yMax')],
    ];
  }
  return options;
}

function passMapEventsToEventProps(leafletMap, props) {
  Object.keys(eventList).forEach(eventName => {
    leafletMap.on(eventName, evtData => {
      if (props[eventList[eventName]]) {
        props[eventList[eventName]](evtData);
      }
    });
  });
}

export default class LmapLite extends Component {
  constructor(props) {
    super(props);
    this.handleZoomChange = this.handleZoomChange.bind(this);
    this.handleCenterChange = this.handleCenterChange.bind(this);
  }

  componentDidMount() {
    const mapNode = ReactDOM.findDOMNode(this);
    const defaultMapOptions = calcDefaultMapOptions(this.props);
    const leafletMap = L.map(mapNode, defaultMapOptions);
    const lmap = lmapNss.lmaps[this.props.lmapId] = {};
    lmap.leafletMap = leafletMap;
    lmap.changer = new Changer(leafletMap);
    passMapEventsToEventProps(leafletMap, this.props);
    leafletMap.on('zoomend', this.handleZoomChange);
    leafletMap.on('moveend', this.handleCenterChange);
    if (this.props.onMapCreate) {
      this.props.onMapCreate(lmapNss.lmaps[this.props.lmapId]);
    }
    lmapNss.notifier.emit('create', { lmapId: this.props.lmapId });
  }

  componentWillReceiveProps(nextProps) {
    let ops = compare(this.props, nextProps);
    if (this.props.isAnimating) {
      ops = ops.filter(op => op.type !== 'op');
    }
    lmapNss.lmaps[this.props.lmapId].changer.enqueue(ops);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    lmapNss.lmaps[this.props.lmapId].leafletMap.remove();
    lmapNss.notifier.emit('destroy', { lmapId: this.props.lmapId });
    delete lmapNss.lmaps[this.props.lmapId];
  }

  handleZoomChange() {
    if (this.props.disableControl) { return; }
    const lmap = lmapNss.lmaps[this.props.lmapId];
    if (this.props.zoom !== undefined &&
        this.props.zoom !== lmap.leafletMap.getZoom()) {
      lmap.changer.enqueue([{
        type: 'op',
        op: { targetZoom: this.props.zoom },
      }]);
    }
  }

  handleCenterChange() {
    if (this.props.disableControl) { return; }
    const lmap = lmapNss.lmaps[this.props.lmapId];
    const mapCenter = lmap.leafletMap.getCenter();
    if (this.props.center !== undefined &&
        !(this.props.center.equals(
          new Map({ x: mapCenter.lat, y: mapCenter.lon }))
        )) {
      lmap.changer.enqueue([{
        type: 'op',
        op: { targetCenter: this.props.center },
      }]);
    }
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} />
    );
  }
}

LmapLite.propTypes = Object.assign(
  {
    lmapId: PropTypes.string.isRequired,
    onMapCreate: PropTypes.func,
    disableControl: PropTypes.bool,
    isAnimating: PropTypes.bool,
  },
  Object.keys(eventList).reduce(
    (prev, cur) => Object.assign(prev, { [cur]: PropTypes.func }), {}
  ),
  Object.keys(optionList)
    .filter(optKey => optionList[optKey].defaultName)
    .reduce((prev, cur) =>
      Object.assign(prev, { [cur]: optionList[cur].propType }), {}
    ),
  Object.keys(optionList)
    .filter(optKey => optionList[optKey].controlledName)
    .reduce((prev, cur) =>
      Object.assign(prev, { [cur]: optionList[cur].propType }), {}
    )
);
