import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
class HelloUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'tylermcginnis'
    };
    // setTimeout(() => {
    //   this.setState({
    //     username: 'tylorswift'
    //   })
    // }, 2000);
  }
  render() {
    return (
      <div>
        Hello {this.state.username}
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {this.handleChange(e)}}//相当于this.handleChange.bind(this)this指针指向父集
        />
      </div>
    );
    // return (
    //   <div>Hello World!</div>
    // )
    // return React.createElement("div", null, React.createElement("p", null, "222"))
  }
  handleChange(e) {
    this.setState({
      username: e.target.value
    });
    console.log(e.target.value);
  }
}

ReactDOM.render(<HelloUser />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
