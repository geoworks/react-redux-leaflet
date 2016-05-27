import {
  LITEPROPS_SET_PROP,
  LITEPROPS_UNSET_PROP,
} from '../actions/litePropActionTypes';

import liteProps from '../liteProps';

const defaultState = Object.keys(liteProps)
  .filter(propName => liteProps[propName].defaultValue !== undefined)
  .reduce(
    (prev, cur) =>
      Object.assign(prev, { [cur]: liteProps[cur].defaultValue }),
    {}
  )
;

const skipKey = (obj, keyToSkip) => Object.keys(obj)
  .filter(key => key !== keyToSkip)
  .reduce((prev, cur) => Object.assign(prev, { [cur]: obj[cur] }), {})
;

export default function litePropsReducer(state = defaultState, action) {
  switch (action.type) {
    case LITEPROPS_SET_PROP:
      return Object.assign({}, state, {
        [action.name]: [action.value],
      });

    case LITEPROPS_UNSET_PROP:
      return skipKey(state, action.name);

    default:
      return state;
  }
}
