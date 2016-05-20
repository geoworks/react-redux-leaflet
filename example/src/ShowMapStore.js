import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const ShowMapStore = ({ lmapId, lmaps }) => (
  <pre>
    {JSON.stringify(lmaps.get(lmapId), null, 2)}
  </pre>
);

ShowMapStore.propTypes = {
  lmapId: PropTypes.string.isRequired,
  lmaps: ImmutablePropTypes.map.isRequired,
};

const lmapsRootSelector = state => state.get('lmaps');
const lmapsSelector = createSelector(
  lmapsRootSelector,
  lmaps => ({ lmaps })
);

export default (connect(
  lmapsSelector, null, null, { pure: true }
))(ShowMapStore);
