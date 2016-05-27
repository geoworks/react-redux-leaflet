import React, { PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

function valueToRadio(val) {
  console.log('vtr>', val);
  return val === undefined ? 'unset' : String(val);
}
function radioToValue(rval) {
  console.log('rtv>', rval);
  return rval === 'unset' ? undefined : rval === 'true';
}

const BooleanValue = ({
  propName, propValue, /* type, required, possibleValues, */ onValueChange,
}) => (
  <div>
    <RadioButtonGroup
      name="boolSelect"
      valueSelected={valueToRadio(propValue)}
      onChange={
        (evt, rval) => onValueChange(propName, radioToValue(rval))
      }
    >
      <RadioButton label={<strong>true</strong>} value="true" />
      <RadioButton label={<strong>false</strong>} value="false" />
      <RadioButton label="unset" value="unset" />
    </RadioButtonGroup>
  </div>
);

BooleanValue.propTypes = {
  propName: PropTypes.string.isRequired,
  propValue: PropTypes.bool,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default BooleanValue;
