export const createStore = (state, storeChange) => {
  // 订阅发布者
  const listeners = [];
  let store = state || {};
  const subscribe = listen => listeners.push(listen);
  const dispatch = action => {
    const newStore = storeChange(store, action);
    store = newStore;
    listeners.forEach(item => item());
  }
  function getStore() {
    return store
  }
  return { store, dispatch, subscribe, getStore };
};
