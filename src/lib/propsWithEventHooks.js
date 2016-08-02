import eventActionHooks from './eventActionHooks';

export default function propsWithEventHooks(
  { originalProps, dispatch, lmapId }
) {
  const propsToPass = { ...originalProps };
  const skipEvents = propsToPass.defaultDisableEventHooks || [];
  Object.keys(eventActionHooks)
    .filter(eventName => skipEvents.indexOf(eventName) === -1)
    .forEach(eventName => {
      propsToPass[eventName] = originalEvent => {
        const actions =
          (eventActionHooks[eventName])(originalEvent, lmapId)
        ;
        actions.forEach(action => dispatch(action));
        if (originalProps.eventName) {
          (originalProps[eventName])(originalEvent);
        }
      };
    })
  ;
  return propsToPass;
}
