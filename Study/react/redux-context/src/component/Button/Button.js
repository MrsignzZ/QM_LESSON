import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "../../redux";
class Button extends Component {
  static contextTypes = {
    store: PropTypes.object,
    subscribe: PropTypes.func,
    getStore: PropTypes.func,
    dispatch: PropTypes.func
  };

  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount = () => {
    const { subscribe, dispatch } = this.context;
    this.setState({
      dispatch
    })
    this._upState();
    subscribe(() => this._upState());
  };
  _upState() {
    const { getStore } = this.context;
    this.setState({
      ...getStore()
    });
  }

  changeContext = (type) => {
    const { dispatch } = this.props
    dispatch({
      type: type,
      payload: `我是修改后的${type}`
    })
  }

  render() {
    return (
      <div className="button">
        <div className="btn" onClick={() => this.changeContext('HEAD')}>{this.props.headBtn}</div>
        <div className="btn" onClick={() => this.changeContext('BODY')}>{this.props.bodyBtn}</div>
      </div>
    );
  }
}

export default connect(Button)