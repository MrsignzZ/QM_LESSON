import { useState, useReducer, useLayoutEffect, useContext, useRef, useEffect } from "react";

import MyContext from '../../lib/my-context'

function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state -1
    default:
      return state
  }
}

function MyCountFunc() {
  // const [count, setCount] = useState(0)

  const [ count, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('MrsignzZ')

  const context = useContext(MyContext)
  const inputRef = useRef()

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatchCount( { type: 'add' } )
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])
  useEffect(() => {
    console.log('effect invoked');

    return () => {
      console.log('effect deteched');
      console.log(inputRef);
      
    };
  }, [count])

  useLayoutEffect(() => {
    console.log('layouteffect invoked');

    return () => {
      console.log('layouteffect deteched');
    };
  }, [count])

  // return <span>{count}</span>
  return (
    <div>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatchCount({ type: 'add' })}>{count}</button>
      <p>{context}</p>
    </div>
  )
}
export default MyCountFunc