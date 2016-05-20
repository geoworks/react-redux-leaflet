import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';

import {
  latlngBoundsToImXYmap,
  pointToImXYmap,
} from './lib/conversions';
import lmapNss from './lmapNss';
import LmapLite from './LmapLite';
import optionList from './lib/optionList';
import eventList from './lib/eventList';
import { registerLmap, unregisterLmap } from './actionCreators';
import propsWithEventHooks from './lib/propsWithEventHooks';

function mergePropsAndState(props, state) {
  const stateProps = {};
  state.forEach((v, k) => {
    if (optionList[k] && optionList[k].controlledName) {
      stateProps[optionList[k].controlledName] = v;
    }
  });
  return Object.assign(stateProps, props);
}

class Lmap extends Component {
  constructor(props) {
    super(props);
    this.handleMapCreate = this.handleMapCreate.bind(this);
    this.handleMapDestroy = this.handleMapDestroy.bind(this);
  }

  handleMapCreate(lmap) {
    const leafletMap = lmapNss.lmaps[this.props.lmapId].leafletMap;
    const center = leafletMap.getCenter();
    const zoom = leafletMap.getZoom();
    const initialMapState = new Map({
      center: new Map({ x: center.lat, y: center.lng }),
      zoom,
      bounds: latlngBoundsToImXYmap(leafletMap.getBounds()),
      size: pointToImXYmap(leafletMap.getSize()),
      minZoom: leafletMap.getMinZoom(),
      maxZoom: leafletMap.getMaxZoom(),
      isMoving: false,
      isZooming: false,
    });
    this.props.dispatch(registerLmap(
      initialMapState,
      this.props.lmapId
    ));
    if (this.props.onMapCreate) {
      this.props.onMapCreate(lmap);
    }
  }

  handleMapDestroy(evtData) {
    this.props.dispatch(unregisterLmap(this.props.lmapId));
    if (this.props.onUnload) {
      this.props.onUnload(evtData);
    }
  }

  render() {
    const {
      lmapId, lmaps, enableControl = false,
      dispatch, ...otherProps,
    } = this.props;
    const lmapState = lmaps.get(lmapId);
    let propsToPass = lmaps.get(lmapId) ?
      mergePropsAndState(otherProps, lmapState) :
      otherProps
    ;
    propsToPass = propsWithEventHooks({
      originalProps: propsToPass,
      dispatch,
      lmapId,
    });
    const isAnimating = lmapState &&
      (lmapState.get('isMoving') || lmapState.get('isZooming'))
    ;
    return (
      <LmapLite
        { ...propsToPass }
        isAnimating={isAnimating}
        lmapId={lmapId}
        dispatch={dispatch}
        onMapCreate={this.handleMapCreate}
        onUnload={this.handleMapDestroy}
        disableControl={!enableControl}
      />
    );
  }
}

Lmap.propTypes = Object.assign(
  {
    lmaps: ImmutablePropTypes.map.isRequired,
    dispatch: PropTypes.func.isRequired,
    lmapId: PropTypes.string.isRequired,
    onMapCreate: PropTypes.func,
    enableControl: PropTypes.bool,
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

const lmapsRootSelector = state => state.get('lmaps');
const lmapsSelector = createSelector(
  lmapsRootSelector,
  lmaps => ({ lmaps })
);

export default (connect(
  lmapsSelector, null, null, { pure: true }
))(Lmap);
