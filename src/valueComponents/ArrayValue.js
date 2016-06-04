import React, { PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

function keyToValue(key, pv) {
  if (key === '_unset') {
    return undefined;
  }
  return pv[key];
}

function valueToKey(value, pv) {
  if (value === undefined) {
    return '_unset';
  }
  return Object.keys(pv).reduce((prev, cur) => {
    if (prev !== undefined) return prev;
    if (pv[cur] === value) { return cur; }
    return undefined;
  }, undefined);
}

const ArrayValue = ({
  propName,
  propValue,
  /* type,
  required, */
  possibleValues,
  onValueChange,
}) => (
  <RadioButtonGroup
    name="boolSelect"
    valueSelected={valueToKey(propValue, possibleValues)}
    onChange={
      (evt, rval) => onValueChange(propName, keyToValue(rval, possibleValues))
    }
  >
    <RadioButton key="_unset" value="_unset" label="unset" />
    {
      Object.keys(possibleValues).map(pvKey => (
        <RadioButton
          key={pvKey}
          value={pvKey}
          label={pvKey}
        />
      ))
    }
  </RadioButtonGroup>
);

ArrayValue.propTypes = {
  propName: PropTypes.string.isRequired,
  propValue: PropTypes.array,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default ArrayValue;
