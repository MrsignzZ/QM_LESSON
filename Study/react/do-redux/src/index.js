// // 多(层次)组件共享状态
// const appState = {
//   head: {
//     text: '我是头部',
//     color: 'red'
//   },
//   body: {
//     text: '我是body',
//     color: 'green'
//   }
// }

// // 写 规则 何时写 如何写 dispatch 只是一个代号
// function dispatch(state, action) {
//   switch (action.type) {
//     case 'HEAD_COLOR':
//       state.head.color = action.color
//       break;
//     case 'BODY_TEXT':
//       state.body.text =  action.text
//       break;
//     default:
//       break
//   }
// }
// // 如果组件只使用自己的状态， 不需要redux
// // 组件会在head里面会用body， 在body里面会用head
// function renderHead(state) {
//   const head = document.getElementById('head')
//   head.innerText = state.head.text
//   head.style.color = state.head.color
//   // 隐患？ getState 读是无所谓的 修改状态的值要按规矩办
//   // action 对状态写，所有组件都遵守的规定 dispatch
//   // state.body.text = '我是经过head修改后的body'
//   dispatch(state, { type: 'BODY_TEXT', text: '我是head 经过调用dispatch修改后的body' })
// }

// function renderBody(state) {
//   const body = document.getElementById('body')
//   body.innerText = state.body.text
//   body.style.color = state.body.color
// }

// function renderApp(state) {
//   renderHead(state)
//   renderBody(state)
// }

// renderApp(appState)

import { state } from './redux/state.js';
import { storeChange } from './redux/storeChange.js';
import { createStore } from './redux/createStore.js';

const { store, dispatch } = createStore(state, storeChange);

function renderHead(state) {
  const head = document.getElementById('head')
  head.innerText = state.text
  head.style.color = state.color
}

function renderBody(state) {
  const body = document.getElementById('body')
  body.innerText = state.text
  body.style.color = state.color
}

function renderApp(store) {
  renderHead(store.head);
  renderBody(store.body);
}
renderApp(store);
dispatch({type: 'BODY_TEXT', text: '我是调用dispatch修改的body'})
console.log(store.body.text);
renderApp(store)
