import React, { PropTypes } from 'react';

const ArrayValue = ({
  propName, type, required, possibleValues, onValueChange,
}) => (
  <div>
    TODO: ArrayValue for {propName}
  </div>
);

ArrayValue.propTypes = {
  propName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default ArrayValue;
