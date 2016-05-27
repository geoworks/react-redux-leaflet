import React, { PropTypes } from 'react';
import { LmapLite } from 'react-redux-leaflet';
import L from 'leaflet';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

const mapStateToProps = ({ liteProps, lmapCycler }) =>
  ({ liteProps, lmapCycler })
;

const LmapContainer = ({ liteProps, lmapCycler }) => (
  lmapCycler.showMap ?
    <LmapLite
      { ...liteProps }
      lmapId="myMap"
      defaultCenter={new Map({ x: 0, y: 0 })}
      defaultZoom={2}
      defaultLayers={[
        L.tileLayer('osmtiles/{z}/{x}/{y}.png', {
          attribution: `
            &copy; <a href="http://osm.org/copyright">
            OpenStreetMap</a> contributors
          `,
        }),
      ]}
      defaultMinZoom={0}
      defaultMaxZoom={5}
    /> : <CircularProgress />
);

LmapContainer.propTypes = {
  liteProps: PropTypes.object.isRequired,
  lmapCycler: PropTypes.object.isRequired,
};

export default (connect(mapStateToProps))(LmapContainer);
