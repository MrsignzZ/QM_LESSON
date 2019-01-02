import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


var Store = {
  _handlers: [],
  _flag: false,
  subscribe: function (handler) {
    this._handlers.push(handler)
  },
  set: function (value) {
    this.set._flag = value
    this._handlers.forEach(handler => {
      handler(value)
    })
  },
  get: function () {
    return this._flag
  }
}
function Switcher({ value, onChange }) {
  return (
    <button onClick={e => onChange(!value)}>
      {value ? 'light on' : 'light off'}
    </button>
  )
}
class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      value: Store.get()
    }
    Store.subscribe((value) => {
      this.setState({value})
    })
  }
  render () {
    return (
      <div>
        <Switcher
          value={this.state.value}
          onChange={Store.set.bind(Store)}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers:
