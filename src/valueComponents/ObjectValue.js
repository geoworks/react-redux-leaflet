import React, { PropTypes } from 'react';

const ObjectValue = ({
  propName, type, required, possibleValues, onValueChange,
}) => (
  <div>
    TODO: ObjectValue for {propName}
  </div>
);

ObjectValue.propTypes = {
  propName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default ObjectValue;
