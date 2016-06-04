import {
  LITEPROPS_SET_PROP,
  LITEPROPS_UNSET_PROP,
  LITEPROPS_HIGHLIGHT_EVENT,
  LITEPROPS_UNHIGHLIGHT_EVENT,
} from '../actions/litePropActionTypes';

import liteProps from '../liteProps';

const getDefaultValue = propName => {
  if (!liteProps[propName].possibleValues) {
    return liteProps[propName].defaultValue;
  }

  return liteProps[propName].possibleValues[liteProps[propName].defaultValue];
};

const defaultState = Object.assign(
  Object.keys(liteProps)
    .filter(propName => liteProps[propName].defaultValue !== undefined)
    .reduce(
      (prev, cur) =>
        Object.assign(prev, { [cur]: getDefaultValue(cur) }),
      {}
    ),
  Object.keys(liteProps)
    .filter(propName => liteProps[propName].type === 'function')
    .reduce(
      (prev, cur) =>
        Object.assign(prev, {
          [cur]: {
            isEvent: true,
            highlighted: false,
          },
        }),
      {}
    )
);

const skipKey = (obj, keyToSkip) => Object.keys(obj)
  .filter(key => key !== keyToSkip)
  .reduce((prev, cur) => Object.assign(prev, { [cur]: obj[cur] }), {})
;

export default function litePropsReducer(state = defaultState, action) {
  switch (action.type) {
    case LITEPROPS_SET_PROP:
      return Object.assign({}, state, {
        [action.name]: action.value,
      });

    case LITEPROPS_UNSET_PROP:
      return skipKey(state, action.name);

    case LITEPROPS_HIGHLIGHT_EVENT:
      return Object.assign({}, state, {
        [action.eventName]: Object.assign({}, state[action.eventName], {
          highlighted: true,
        }),
      });

    case LITEPROPS_UNHIGHLIGHT_EVENT:
      return Object.assign({}, state, {
        [action.eventName]: Object.assign({}, state[action.eventName], {
          highlighted: false,
        }),
      });

    default:
      return state;
  }
}
