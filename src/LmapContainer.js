import React, { PropTypes } from 'react';
import { LmapLite } from 'react-redux-leaflet';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { flashEvent } from './actions/litePropActions';

const mapStateToProps = ({ liteProps, lmapCycler }) =>
  ({ liteProps, lmapCycler })
;

const LmapContainer = ({ dispatch, liteProps, lmapCycler }) => {
  const patchedLiteProps = Object.assign(
    {},
    liteProps,
    Object.keys(liteProps)
     .filter(propName => liteProps[propName].isEvent)
     .reduce(
       (prev, cur) => Object.assign(prev, {
         [cur]: () => { dispatch(flashEvent(cur)); },
       }),
       {}
     )
  );

  return (
    lmapCycler.showMap ?
      <LmapLite { ...patchedLiteProps } /> :
      <CircularProgress />
  );
};

LmapContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  liteProps: PropTypes.object.isRequired,
  lmapCycler: PropTypes.object.isRequired,
};

export default (connect(mapStateToProps))(LmapContainer);
