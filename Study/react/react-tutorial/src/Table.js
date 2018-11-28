import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>WuMian</td>
            <td>student</td>
          </tr>
          <tr>
            <td>ChenYuHan</td>
            <td>dalao</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
