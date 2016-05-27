import React, { PropTypes } from 'react';

const NumberValue = ({
  propName, type, required, possibleValues, onValueChange,
}) => (
  <div>
    TODO: NumberValue for {propName}
  </div>
);

NumberValue.propTypes = {
  propName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default NumberValue;
