import React, { PropTypes } from 'react';

const MapXyValue = ({
  propName, type, required, possibleValues, onValueChange,
}) => (
  <div>
    TODO: MapXyValue for {propName}
  </div>
);

MapXyValue.propTypes = {
  propName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default MapXyValue;
