import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ImmutablePropTypes from 'react-immutable-proptypes';
import optionList from './lib/optionList';
import eventList from './lib/eventList';

import LmapLite from './LmapLite';

function mergePropsAndState(props, state) {
  const stateProps = {};
  state.forEach((v, k) => {
    if (optionList[k] && optionList[k].controlledName) {
      stateProps[optionList[k].controlledName] = v;
    }
  });
  return Object.assign(stateProps, props);
}

const Lmap = ({ lmapId, lmaps, enableControl = false, ...otherProps }) => (
  <LmapLite
    lmapId={lmapId}
    disableControl={!enableControl}
    {
      ...(lmaps[lmapId] ?
            mergePropsAndState(otherProps, lmaps[lmapId]) :
            otherProps)
    }
  />
);

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
