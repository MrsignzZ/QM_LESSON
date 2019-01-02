import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk] // 中间键

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store