import React, { Component } from "react";
import { Provider } from "./context";
class EnhanceProvider extends Component {
  constructor(props) {
    super(props)
    const { store } = this.props
    this.state = {
      state: store.getState(),
      dispatch: store.dispatch
    }
    store.subscribe(() => {
      this.setState({
        state: store.getState()
      })
    })
  }
  render() {
    const { store } = this.props
    const { state, dispatch } = this.state
    return (
      <Provider value={{state, dispatch}}>
        {this.props.children}
      </Provider>
    )
  }
}
export default EnhanceProvider