import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';
import counter from './reducers';

// 单独管理状态的地方
// 状态与UI 统一的，状态计算器 reducer
const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })} // 自动分派一个动作 让reducer重新运行
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
  );
render();
store.subscribe(render);

ReactDOM.render(<div>{store.getState()}</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
