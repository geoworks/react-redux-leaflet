import controllers from './controllers';
import { List } from 'immutable';

function controlBooleanValue(oldVal, newVal, controller) {
  if (newVal !== oldVal) {
    return controller(Boolean(oldVal), Boolean(newVal));
  }
  return [];
}

function controlSimpleValue(oldVal, newVal, controller) {
  if (newVal !== oldVal) {
    return controller(oldVal, newVal);
  }
  return [];
}

export default function compare(oldState, newState) {
  let ops = new List();

  [
    'attributionControl',
    'zoomControl',
    'boxZoom',
    'doubleClickZoom',
    'dragging',
    'keyboard',
    'scrollWheelZoom',
    'tap',
    'touchZoom',
  ].forEach(valueName => {
    ops = ops.push(...controlBooleanValue(
      oldState[valueName],
      newState[valueName],
      controllers[valueName]
    ));
  });

  [
    'center',
    'zoom',
    'minZoom',
    'maxZoom',
    'maxBounds',
    'layers', // todo: more sophisticated logic for layers probably required
  ].forEach(valueName => {
    ops = ops.push(...controlSimpleValue(
      oldState[valueName],
      newState[valueName],
      controllers[valueName]
    ));
  });

  return ops;
}
