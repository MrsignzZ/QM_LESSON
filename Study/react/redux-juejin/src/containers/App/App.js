import React, { Component } from 'react';
import './App.css';
import Index from '../../components/Index/Index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerAction } from '../../redux/action/users';
import Header from '../../components/Index/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header users={this.props.users}  registerActions={this.props.registerActions}/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasd
            </div>
            <div className="main">
              2adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="sidebar">
              3adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      users: state.users
    };
  },
  dispatch => {
    return {
      registerActions: bindActionCreators(registerAction, dispatch)
    };
  }
)(App);
