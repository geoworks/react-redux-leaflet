import React, { PropTypes } from 'react';

import StringValue from './valueComponents/StringValue';
import NumberValue from './valueComponents/NumberValue';
import BooleanValue from './valueComponents/BooleanValue';
import ArrayValue from './valueComponents/ArrayValue';
import ObjectValue from './valueComponents/ObjectValue';
import MapXyValue from './valueComponents/MapXyValue';
import MapX1Y1X2Y2Value from './valueComponents/MapX1Y1X2Y2Value';

const ValueController = (props) => {
  switch (props.type) {
    case 'string': return <StringValue { ...props } />;
    case 'number': return <NumberValue { ...props } />;
    case 'boolean': return <BooleanValue { ...props } />;
    case 'array': return <ArrayValue { ...props } />;
    case 'object': return <ObjectValue { ...props } />;
    case 'map_xy': return <MapXyValue { ...props } />;
    case 'map_x1y1x2y2': return <MapX1Y1X2Y2Value { ...props } />;
    default:
      throw new Error('Unknown value type');
  }
};

ValueController.propTypes = {
  propName: PropTypes.string.isRequired,
  propValue: PropTypes.any,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default ValueController;
