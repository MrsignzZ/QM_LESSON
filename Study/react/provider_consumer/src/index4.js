import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import { Provider } from 'react-redux';



const reducers = combineReducers({
  films: (state = [], action) => {
    let { type, payload } = action;
    switch (type) {
      case "GET_FILM_DATA":
        return payload;
      default:
        return state;
    }
  }
})
// 让action不再只是一个同步的简单对象，还可以是一个异步的对象
const store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
