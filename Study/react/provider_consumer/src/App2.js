import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import enchanceComponent from './enchanceComponent.jsx';

var Content = (props) => <p>I am {props.name}</p>

Content.propTypes = {
  name: PropTypes.string
}

var EnhancedContent = enchanceComponent(Content)

class App extends Component {
  render() {
    return (
      <EnhancedContent name="Content component" />
    );
  }
}

export default App;
