中间？ UI <->$n Redux <br>
中间键 middleware 生态npm

UI dispatch INCREMENT_ASYNC <br>
何时？订阅发布模式<br>
中间处理一下 发布者 redux-thunk redux-saga 请求 setTimeout dispatch INCREMENT<br>
redux<br>

saga 是redux状态异步处理的中间键<br>
原生的react通过生命周期或者业务逻辑，来异步请求数据 耦合了redux 数据管理业务在UI之中时不可取的
- 异步是绝对不可能改变的（axios，定时器)
  1. promise + generator yield / async await
  2. 放到saga文件中，watch 每一个actionType，take给一个异步函数去执行，位于中间键中，仍然属于redux

  >createStore(reducers, applyMiddleware(sagaMiddleware))<br>
  >sagaMiddleware.run(rootSaga)<br>
  >takeEvery(ActionType, gen)<br>
- redux 状态最红仍然是同步处理的，
  put() 在saga内部dispatch同步action
- 异步流程很多 所以把它合为一处 此为 all()