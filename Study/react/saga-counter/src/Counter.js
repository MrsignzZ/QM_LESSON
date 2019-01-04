import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ value, onIncrement, onDecrement,onIncrementAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 seconds</button>
    <button onClick={onIncrement}>INCREMENT</button>
    <button onClick={onDecrement}>DECREMENT</button>
    <hr/>
    <div>
      Click: {value} times
    </div>
  </div>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
export default Counter