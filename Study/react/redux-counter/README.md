- 代码结构<br>
  store
    - 状态仓库 状态多 难管理
    - 共享状态 getState setState
- 组件通信<br>
  api

同一状态树 Store 唯一<br>
1. store.getState() 读操作
2. store.dispatch({ type: '类型' }) 委派一个动作 相应的reducer得以计算 返回新的状态 MVVM更新UI