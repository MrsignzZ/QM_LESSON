import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

// 路由的配置-------------------------------------
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    exact: false,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    exact: false,
    main: () => <h2>Shoelaces</h2>
  }
];

function SidebarExample() {
  return (
    <Router>
      {/* SideBar区域 */}
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '10px',
            width: '40%',
            background: '#f5f5f5'
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>
        </div>
        {/* 内容区域 */}
        <div
          style={{
            flex: 1,
            padding: '10px'
          }}
        >
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<SidebarExample />, document.getElementById('root'));
