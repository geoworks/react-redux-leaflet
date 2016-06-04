import {
  LITEPROPS_SET_PROP,
  LITEPROPS_UNSET_PROP,
  LITEPROPS_HIGHLIGHT_EVENT,
  LITEPROPS_UNHIGHLIGHT_EVENT,
} from '../actions/litePropActionTypes';

const EVENT_HIGHLITED_TIME = 1 * 1000; // ms

export const setProp = (name, value) => ({
  type: LITEPROPS_SET_PROP,
  name,
  value,
});

export const unsetProp = (name) => ({
  type: LITEPROPS_UNSET_PROP,
  name,
});

const eventHighlightTimeoutHandles = {};

export const flashEvent = (eventName) => (
  dispatch => {
    if (eventHighlightTimeoutHandles[eventName]) {
      clearTimeout(eventHighlightTimeoutHandles[eventName]);
    }
    dispatch({
      type: LITEPROPS_HIGHLIGHT_EVENT,
      eventName,
    });
    eventHighlightTimeoutHandles[eventName] = setTimeout(() => {
      eventHighlightTimeoutHandles[eventName] = undefined;
      dispatch({
        type: LITEPROPS_UNHIGHLIGHT_EVENT,
        eventName,
      });
    }, EVENT_HIGHLITED_TIME);
  }
);
