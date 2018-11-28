import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import './index.css';

class App extends Component {
  // jsx 最终还要是编译成js的 class
  render() {
    return (
      <div className="App container">
        <h1>Hello, React!</h1>
        <Table />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
