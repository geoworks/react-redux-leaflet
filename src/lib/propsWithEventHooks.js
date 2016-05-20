import eventActionHooks from './eventActionHooks';

export default function propsWithEventHooks(
  { originalProps, dispatch, lmapId }
) {
  const propsToPass = { ...originalProps };
  Object.keys(eventActionHooks).forEach(eventName => {
    propsToPass[eventName] = originalEvent => {
      const actions =
        (eventActionHooks[eventName])(originalEvent, lmapId)
      ;
      actions.forEach(action => dispatch(action));
      if (originalProps.eventName) {
        (originalProps[eventName])(originalEvent);
      }
    };
  });
  return propsToPass;
}
