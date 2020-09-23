export default {
  level: 'log',
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: false,
  timestamp: true,
  stateTransformer: (state, action) => {
    if (!action.type) return state;
    const names = action.type.toLowerCase().split('_');
    const applicableKeys = Object.keys(state);
    const keys = applicableKeys.filter(reducer => names.includes(reducer.endsWith('s') ? reducer.slice(0, -1) : reducer));
    const results = {};
    keys.map((key) => {
      if (state[key]) results[key] = state[key];
    });
    if (!Object.keys(results).length) return state;
    return results;
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
