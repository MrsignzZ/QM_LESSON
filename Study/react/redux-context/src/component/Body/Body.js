import React, { Component } from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { connect } from "../../redux";

class Body extends Component {
  // new Body() this.  public
  static contextTypes = {
    store: PropTypes.object,
    subscribe: PropTypes.func,
    getStore: PropTypes.func
  };

  componentWillMount = () => {
    const { subscribe } = this.context;
    this._upState();
    subscribe(() => this._upState());
  };
  _upState() {
    const { getStore } = this.context;
    this.setState({
      ...getStore()
    });
  }

  render() {
    return (
      <div>
        <div className="body">{this.props.body}</div>
        <Button />
      </div>
    );
  }
}

export default connect(Body)
