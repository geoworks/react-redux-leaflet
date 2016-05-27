import React, { PropTypes } from 'react';
import { LmapLite } from 'react-redux-leaflet';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

const mapStateToProps = ({ liteProps, lmapCycler }) =>
  ({ liteProps, lmapCycler })
;

const LmapContainer = ({ liteProps, lmapCycler }) => (
  lmapCycler.showMap ?
    <LmapLite { ...liteProps } /> :
    <CircularProgress />
);

LmapContainer.propTypes = {
  liteProps: PropTypes.object.isRequired,
  lmapCycler: PropTypes.object.isRequired,
};

export default (connect(mapStateToProps))(LmapContainer);
