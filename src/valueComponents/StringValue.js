import React, { PropTypes } from 'react';

const StringValue = ({
  propName, type, required, possibleValues, onValueChange,
}) => (
  <div>
    TODO: StringValue for {propName}
  </div>
);

StringValue.propTypes = {
  propName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default StringValue;
