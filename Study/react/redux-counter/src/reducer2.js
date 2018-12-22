const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    default:
      return state;
  }
};

const actions = [
  { type: 'INCREMENT', payload: 0 },
  { type: 'INCREMENT', payload: 1 },
  { type: 'INCREMENT', payload: 2 }
];

var total = actions.reduce(reducer, 0);
console.log(this.total);
