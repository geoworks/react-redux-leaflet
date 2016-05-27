import {
  LITEPROPS_SET_PROP,
  LITEPROPS_UNSET_PROP,
} from '../actions/litePropActionTypes';

export const setProp = (name, value) => ({
  type: LITEPROPS_SET_PROP,
  name,
  value,
});

export const unsetProp = (name) => ({
  type: LITEPROPS_UNSET_PROP,
  name,
});
