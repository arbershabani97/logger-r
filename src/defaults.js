export default {
  level: 'log',
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: false,
  timestamp: true,
  stateTransformer: (state, action) => {
    const names = action.type.toLowerCase().split("_");
    const applicableKeys = Object.keys(state);
    const key = applicableKeys.find(reducer => names.includes(reducer));
    return state[key];
  },
  actionTransformer: action => action,
  errorTransformer: error => error,
  colors: {
    title: () => 'inherit',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
  diff: false,
  diffPredicate: undefined,

  // Deprecated options
  transformer: undefined,
};
