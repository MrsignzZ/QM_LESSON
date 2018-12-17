import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// React.createElement() // render()

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: '你好',
      name: '没有账号'
    }
    setTimeout(() => {
      this.setState({
        str: 'hello'
      })
    }, 2000);
  }
  componentWillMount () {
    console.log('component will mount')
  }
  componentDidMount () {
    console.log('组件已经挂载');
    // UI ready 壳子，接着再取数据，不会阻塞界面
    fetch('https://api.github.com/users/MrsignzZ')
      .then(data => data.json())
      .then(data => {
        this.setState({
          name: data.name
        });
      });
  }
  componentWillUpdate () {
    console.log('组件即将更新')
  }
  componentDidUpdate () {
    console.log('组件更新了')
  }
  componentWillReceiveProps () {
    console.log('component will receive')
  }
  // nextProps 新接受的，但不是页面上已有的
  shouldComponentUpdate (nextProps) {
    console.log(nextProps)
    if (nextProps.num === this.props.num) {
      console.log(nextProps, this.props.num, '值没有改变，不需要更新')
      return false
    }
    return true
  }
  componentWillUnmount () {
    console.log('组件即将被卸载')
  }
  render () {
    return (
      <div>
        <div>{this.state.name}</div>
        <span>
          <h2>{parseInt(this.props.num)}</h2>
          <span>
            <h2>{this.state.str}</h2>
          </span>
        </span>
      </div>
    )
  }
}
class App extends React.Component {
  constructor (props) {
    super(props)
    setTimeout(() => {
      this.setState({
        num: 3
      })
    }, 5000);
    setTimeout(() => {
      this.setState({
        showLifeCycle: false
      })
    }, 10000)
  }
  state = {
    num: 2,
    showLifeCycle: true
  };
  render() {
    if (!this.state.showLifeCycle) {
      return <div>hahaha</div>
    }
    return <LifeCycle num={this.state.num} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
