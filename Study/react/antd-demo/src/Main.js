import React, { Component } from 'react';
import Sidebar from './Sidebar'
export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <Button type="primary">按钮</Button> */}
        <Sidebar/>
      </div>
    )
  }
}
