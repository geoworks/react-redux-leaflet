import React, { PropTypes } from 'react';

const MapX1Y1X2Y2Value = ({
  propName, type, required, possibleValues, onValueChange,
}) => (
  <div>
    TODO: MapX1Y1X2Y2Value for {propName}
  </div>
);

MapX1Y1X2Y2Value.propTypes = {
  propName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default MapX1Y1X2Y2Value;
